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
import tk.mybatis.springboot.mapper.FuelMapper;
import tk.mybatis.springboot.model.Fuel;
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

}
