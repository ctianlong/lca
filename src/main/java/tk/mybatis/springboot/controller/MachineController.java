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
import tk.mybatis.springboot.mapper.MachineMapper;
import tk.mybatis.springboot.model.Machine;
import tk.mybatis.springboot.service.query.MachineQuery;

@Controller
public class MachineController {

	private final Logger logger = LoggerFactory.getLogger(MachineController.class);
	private final MachineMapper machineMapper;

	public MachineController(MachineMapper machineMapper) {
		this.machineMapper = machineMapper;
	}

	@GetMapping("/api/db/inventory/machine")
	@ResponseBody
	public ResponseEntity<PageInfo<Machine>> list(MachineQuery query) {
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
		Example example = new Example(Machine.class);
		Example.Criteria criteria = example.createCriteria();
		if (StringUtils.isNotBlank(query.getName())) {
			criteria.andLike("name", "%" + query.getName().trim() + "%");
		}
		if (query.getTypeCd() != null) {
			criteria.andEqualTo("typeCd", query.getTypeCd());
		}
		List<Machine> machines = machineMapper.selectByExample(example);
		PageInfo<Machine> result = new PageInfo<>(machines);
		if (query.getDraw() != null) {
			return ResponseEntity.ok().header("x-app-draw", query.getDraw().toString()).body(result);
		} else {
			return ResponseEntity.ok().body(result);
		}
	}

}
