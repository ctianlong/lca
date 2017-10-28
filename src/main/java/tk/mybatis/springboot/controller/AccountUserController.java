package tk.mybatis.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;

import tk.mybatis.springboot.model.AccountUser;
import tk.mybatis.springboot.security.SecurityUtils;
import tk.mybatis.springboot.service.AccountUserService;
import tk.mybatis.springboot.service.query.AccountUserQuery;

@Controller
public class AccountUserController {
	
	private final Logger logger = LoggerFactory.getLogger(AccountUserController.class);

	private final AccountUserService userService;
	
	public AccountUserController(AccountUserService userService) {
		this.userService = userService;
	}

	@GetMapping("/api/users")
	@ResponseBody
	public ResponseEntity<PageInfo<AccountUser>> list(AccountUserQuery query) {
		List<AccountUser> users = userService.listPageWithBaseInfo(query);
		PageInfo<AccountUser> result = new PageInfo<>(users);
		return ResponseEntity.ok().header("x-app-draw", query.getDraw().toString()).body(result);
	}
	
	@PostMapping("/api/users")
	@ResponseBody
	public ResponseEntity<AccountUser> saveOne(@RequestBody @Valid AccountUser user) {
		if (user.getId() != null || user.getSuperuser() == null) {
			return ResponseEntity.badRequest().build();
		}
		if (!userService.checkUsername(user.getUsername())) {
			return ResponseEntity.unprocessableEntity().build();
		}
		AccountUser userAdd = null;
		try {
			userAdd = userService.saveOne(user);
			if (userAdd == null) {
				logger.info("添加用户失败，内部错误，用户名：{}", user.getUsername());
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			};
		} catch (Exception e) {
			logger.info("添加用户失败，内部错误，用户名：{}", user.getUsername());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		logger.info("添加用户成功，用户名：{}", user.getUsername());
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@PutMapping("/api/users/{id:^\\d+$}")
	@ResponseBody
	public ResponseEntity<AccountUser> updateOnePartly(@PathVariable Integer id, @RequestBody @Valid AccountUser user) {
		if (id.equals(SecurityUtils.getCurrentId()) && user.getSuperuser() != null && !user.getSuperuser()) {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
		}
		if (!userService.checkUsername(id, user.getUsername())) {
			return ResponseEntity.unprocessableEntity().build();
		}
		user.setId(id);
		AccountUser userUpdate = null;
		try {
			userUpdate = userService.updateOnePartly(user);
			if (userUpdate == null) {
				logger.info("修改用户失败，内部错误，用户ID：{}", id);
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			};
		} catch (Exception e) {
			logger.info("修改用户失败，内部错误，用户ID：{}", id);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		logger.info("修改用户成功，用户ID：{}", id);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@DeleteMapping("/api/users/{id:^\\d+$}")
	@ResponseBody
	public ResponseEntity<Void> deleteOne(@PathVariable Integer id) {
		if (id.equals(SecurityUtils.getCurrentId())) {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
		}
		try {
			if (!userService.deleteOneById(id)) {
				logger.info("删除用户失败，用户不存在，ID：{}", id);
				return ResponseEntity.notFound().build();
			}
		} catch (Exception e) {
			logger.info("删除用户失败，ID：{}", id);
			return ResponseEntity.badRequest().build();
		}
		logger.info("删除用户成功，ID：{}", id);
		return ResponseEntity.noContent().build();
	}
	
	@GetMapping("/api/common/user/check/username")
	@ResponseBody
	public ResponseEntity<Boolean> checkDuplication(@RequestParam(required = false) String oldUsername, String username) {
		return userService.checkUsername(oldUsername, username) ? ResponseEntity.ok(true) : ResponseEntity.ok(false);
	}
	
	
	@PostMapping("/api/common/user/registerAndLogin")
	@ResponseBody
	public ResponseEntity<Map<String, Object>> registerAndLogin(@RequestBody @Valid AccountUser user) {
		if (!userService.checkPasswordLength(user.getPassword())) {
			return ResponseEntity.badRequest().build();
		}
		if (!userService.checkUsername(user.getUsername())) {
			return ResponseEntity.unprocessableEntity().build();
		}
		AccountUser userRegister = null;
		String rawPassword = user.getPassword();
		try {
			userRegister = userService.registerOne(user);
			if (userRegister == null) {
				logger.info("注册用户失败，内部错误，用户名：{}", user.getUsername());
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			};
		} catch (Exception e) {
			logger.info("注册用户失败，内部错误，用户名：{}", user.getUsername());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		logger.info("注册用户成功，用户名：{}", user.getUsername());
		logger.info("注册后重定向，用户名：{}", user.getUsername());
		Map<String, Object> result = new HashMap<>();
		String redirectUrl = SecurityUtils.login(user.getUsername(), rawPassword);
		result.put("redirectUrl", redirectUrl);
		return ResponseEntity.status(HttpStatus.CREATED).body(result);
	}
	
	@GetMapping("/api/user")
	@ResponseBody
	public ResponseEntity<AccountUser> getCurrentUserInfo() {
		if (!SecurityUtils.isAuthenticated()) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
		AccountUser user = null;
		try {
			user = userService.getOneWithUserInfoById(SecurityUtils.getCurrentId());
			if (user == null) {
				return ResponseEntity.notFound().build();
			}
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		return ResponseEntity.ok(user);
	}
	
	@PutMapping("/api/user")
	@ResponseBody
	public ResponseEntity<AccountUser> updateCurrentUserInfo(@RequestBody @Valid AccountUser user) {
		if (!SecurityUtils.isAuthenticated()) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
		Integer id = SecurityUtils.getCurrentId();
		if (!userService.checkUsername(id, user.getUsername())) {
			return ResponseEntity.unprocessableEntity().build();
		}
		user.setId(id);
		AccountUser userUpdate = null;
		try {
			userUpdate = userService.updateOnePartly(user);
			if (userUpdate == null) {
				logger.info("修改用户失败，内部错误，用户ID：{}", id);
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			};
		} catch (Exception e) {
			logger.info("修改用户失败，内部错误，用户ID：{}", id);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		logger.info("修改用户成功，用户ID：{}", id);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@PutMapping("/api/user/password")
	@ResponseBody
	public ResponseEntity<Void> updateCurrentUserPassword(@RequestBody Map<String, Object> map) {
		if (!SecurityUtils.isAuthenticated()) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
		String oldPassword = (String) map.get("oldPassword");
		String newPassword = (String) map.get("newPassword");
		if (!userService.checkPasswordLength(oldPassword) || !userService.checkPasswordLength(newPassword)) {
			return ResponseEntity.badRequest().build();
		}
		Integer id = SecurityUtils.getCurrentId();
		try {
			if (!userService.validateUserPassword(id, oldPassword)) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
			}
			if (!userService.updateUserPassword(id, newPassword)) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	

}
