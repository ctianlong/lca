package tk.mybatis.springboot.controller;

import java.util.List;

import javax.validation.Valid;

import org.apache.commons.lang3.StringUtils;
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
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import tk.mybatis.mapper.entity.Example;
import tk.mybatis.springboot.mapper.FuelMapper;
import tk.mybatis.springboot.model.Fuel;
import tk.mybatis.springboot.security.RoleConstants;
import tk.mybatis.springboot.security.SecurityUtils;
import tk.mybatis.springboot.service.query.FuelQuery;

@Controller
public class FuelController {

	private final Logger logger = LoggerFactory.getLogger(FuelController.class);
	private final FuelMapper fuelMapper;

	public FuelController(FuelMapper fuelMapper) {
		this.fuelMapper = fuelMapper;
	}

	@GetMapping("/api/db/inventory/fuel")
	@ResponseBody
	public ResponseEntity<PageInfo<Fuel>> list(FuelQuery query) {
		if (query.getPage() != null && query.getRows() != null) {
			PageHelper.startPage(query.getPage(), query.getRows());
		}
		if (StringUtils.isNotBlank(query.getOrderColumn())) {
			if (StringUtils.isNoneBlank(query.getOrderDir())) {
				PageHelper.orderBy(query.getOrderColumn() + " " + query.getOrderDir());
			} else {
				PageHelper.orderBy(query.getOrderColumn());
			}
		}
		Example example = new Example(Fuel.class);
		Example.Criteria criteria = example.createCriteria();
		if (StringUtils.isNotBlank(query.getFuelType())) {
			criteria.andLike("fuelType", "%" + query.getFuelType().trim() + "%");
		}
		List<Fuel> fuels = fuelMapper.selectByExample(example);
		PageInfo<Fuel> result = new PageInfo<>(fuels);
		if (query.getDraw() != null) {
			return ResponseEntity.ok().header("x-app-draw", query.getDraw().toString()).body(result);
		} else {
			return ResponseEntity.ok().body(result);
		}
	}

	@PostMapping("/api/db/inventory/fuel")
	@ResponseBody
	public ResponseEntity<Fuel> saveOne(@RequestBody @Valid Fuel fuel) {
		fuel.setCreateUserId(SecurityUtils.getCurrentId());
		try {
			if (fuelMapper.insertSelective(fuel) != 1) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}

	@PutMapping("/api/db/inventory/fuel/{id:^\\d+$}")
	@ResponseBody
	public ResponseEntity<Fuel> updateOneFully(@PathVariable Integer id, @RequestBody @Valid Fuel fuel) {
		Integer createUserId = fuelMapper.getCreateUserIdById(id);
		if (!SecurityUtils.isCurrentUserInRole(RoleConstants.ADMIN)
				&& !SecurityUtils.getCurrentId().equals(createUserId)) {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
		}
		fuel.setId(id);
		fuel.setCreateUserId(createUserId);
		try {
			if (fuelMapper.updateByPrimaryKey(fuel) != 1) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}

	@DeleteMapping("/api/db/inventory/fuel/{id:^\\d+$}")
	@ResponseBody
	public ResponseEntity<Void> deleteOne(@PathVariable Integer id) {
		Integer createUserId = fuelMapper.getCreateUserIdById(id);
		if (!SecurityUtils.isCurrentUserInRole(RoleConstants.ADMIN)
				&& !SecurityUtils.getCurrentId().equals(createUserId)) {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
		}
		try {
			if (fuelMapper.deleteByPrimaryKey(id) != 1) {
				return ResponseEntity.notFound().build();
			}
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		return ResponseEntity.noContent().build();
	}

}
