package tk.mybatis.springboot.controller;

import java.util.List;

import javax.validation.Valid;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import tk.mybatis.mapper.entity.Example;
import tk.mybatis.springboot.mapper.MaterialMapper;
import tk.mybatis.springboot.model.Material;
import tk.mybatis.springboot.security.RoleConstants;
import tk.mybatis.springboot.security.SecurityUtils;
import tk.mybatis.springboot.service.cd.CdObject;
import tk.mybatis.springboot.service.query.MaterialQuery;

@Controller
public class MaterialController {

	private final Logger logger = LoggerFactory.getLogger(MaterialController.class);
	
	private final MaterialMapper materialMapper;
	
	public MaterialController(MaterialMapper materialMapper) {
		this.materialMapper = materialMapper;
	}
	
	@GetMapping("/api/db/inventory/materials")
	@ResponseBody
	public ResponseEntity<PageInfo<Material>> list(MaterialQuery query) {
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
		Example example = new Example(Material.class);
        Example.Criteria criteria = example.createCriteria();
        if (StringUtils.isNotBlank(query.getMaterialName())) {
            criteria.andLike("materialName", "%" + query.getMaterialName().trim() + "%");
        }
        if (query.getMaterialCategoryCd() != null) {
            criteria.andEqualTo("materialCategoryCd", query.getMaterialCategoryCd());
        }
        List<Material> materials = materialMapper.selectByExample(example);
		PageInfo<Material> result = new PageInfo<>(materials);
		return ResponseEntity.ok().header("x-app-draw", query.getDraw().toString()).body(result);
	}
	
	@PostMapping("/api/db/inventory/materials")
	@ResponseBody
	public ResponseEntity<Material> saveOne(@RequestBody @Valid Material material) {
		material.setCreateUserId(SecurityUtils.getCurrentId());
		if (materialMapper.insertSelective(material) != 1) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@PutMapping("db/inventory/materials/{id:^\\d+$}")
	@ResponseBody
	public ResponseEntity<Material> updateOneFully(@PathVariable Integer id, @RequestBody @Valid Material material) {
		Integer createUserId = materialMapper.getCreateUserIdById(id);
		if (!SecurityUtils.isCurrentUserInRole(RoleConstants.ADMIN) && !SecurityUtils.getCurrentId().equals(createUserId)) {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
		}
		
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@GetMapping("/api/cd/material-category")
	@ResponseBody
	public ResponseEntity<List<CdObject>> getMaterialCategoryCd() {
		List<CdObject> list = materialMapper.getMaterialCategoryCd();
		return ResponseEntity.ok(list);
	}
	
}
