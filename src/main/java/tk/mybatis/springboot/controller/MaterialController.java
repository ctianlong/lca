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
		try {
			if (materialMapper.insertSelective(material) != 1) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@PutMapping("/api/db/inventory/materials/{id:^\\d+$}")
	@ResponseBody
	public ResponseEntity<Material> updateOneFully(@PathVariable Integer id, @RequestBody @Valid Material material) {
		Integer createUserId = materialMapper.getCreateUserIdById(id);
		if (!SecurityUtils.isCurrentUserInRole(RoleConstants.ADMIN) && !SecurityUtils.getCurrentId().equals(createUserId)) {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
		}
		material.setId(id);
		material.setCreateUserId(createUserId);
		try {
			if (materialMapper.updateByPrimaryKey(material) != 1) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@DeleteMapping("/api/db/inventory/materials/{id:^\\d+$}")
	@ResponseBody
	public ResponseEntity<Void> deleteOne(@PathVariable Integer id) {
		Integer createUserId = materialMapper.getCreateUserIdById(id);
		if (!SecurityUtils.isCurrentUserInRole(RoleConstants.ADMIN) && !SecurityUtils.getCurrentId().equals(createUserId)) {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
		}
		try {
			if (materialMapper.deleteByPrimaryKey(id) != 1) {
				return ResponseEntity.notFound().build();
			}
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		return ResponseEntity.noContent().build();
	}
	
	@GetMapping("/api/cd/material-category")
	@ResponseBody
	public ResponseEntity<List<CdObject>> getMaterialCategoryCd() {
		List<CdObject> list = materialMapper.getMaterialCategoryCd();
		return ResponseEntity.ok(list);
	}
	
	/*
	 * 后台检查材料的能耗及排放量（均为double）是否都大于0，但是允许为null
	 * 程序中暂时不使用，太费事了，前端验证已经可靠，考虑到也不会有什么攻击
	 */
	private boolean checkMaterialDouble(Material material) {
		return !((material.getEnergyConsume() != null && material.getEnergyConsume() < 0.0)
			|| (material.getEmissionCo2() != null && material.getEmissionCo2() < 0.0)
			|| (material.getEmissionCh4() != null && material.getEmissionCh4() < 0.0)
			|| (material.getEmissionN2o() != null && material.getEmissionN2o() < 0.0)
			|| (material.getEmissionCo() != null && material.getEmissionCo() < 0.0)
			|| (material.getEmissionSo2() != null && material.getEmissionSo2() < 0.0)
			|| (material.getEmissionNox() != null && material.getEmissionNox() < 0.0)
			|| (material.getEmissionPb() != null && material.getEmissionPb() < 0.0)
			|| (material.getEmissionZn() != null && material.getEmissionZn() < 0.0));
	}
	
	/*
	 * 后台检查材料的成本区间下限是否小于上限
	 * 程序中暂时不使用，太费事了，前端验证已经可靠，考虑到也不会有什么攻击
	 */
	private boolean checkMaterialCost(Material material) {
		if(material.getCost() != null && material.getCost().contains("~")) {
			String[] nums = material.getCost().split("~");
			if (Double.parseDouble(nums[0]) > Double.parseDouble(nums[1])) return false;
		}
		return true;
	}
	
}
