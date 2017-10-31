package tk.mybatis.springboot.controller;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import tk.mybatis.mapper.entity.Example;
import tk.mybatis.springboot.mapper.MaterialMapper;
import tk.mybatis.springboot.model.Material;
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
            criteria.andLike("materialName", "%" + query.getMaterialName() + "%");
        }
        if (query.getMaterialCategoryCd() != null) {
            criteria.andEqualTo("materialCategoryCd", query.getMaterialCategoryCd());
        }
        List<Material> materials = materialMapper.selectByExample(example);
		PageInfo<Material> result = new PageInfo<>(materials);
		return ResponseEntity.ok().header("x-app-draw", query.getDraw().toString()).body(result);
	}
	
}
