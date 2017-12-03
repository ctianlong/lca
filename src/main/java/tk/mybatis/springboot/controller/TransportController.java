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
import tk.mybatis.springboot.mapper.TransportMapper;
import tk.mybatis.springboot.model.Transport;
import tk.mybatis.springboot.service.query.TransportQuery;

@Controller
public class TransportController {
	
	private final Logger logger = LoggerFactory.getLogger(TransportController.class);
	
	private final TransportMapper transportMapper;
	
	public TransportController(TransportMapper transportMapper) {
		this.transportMapper = transportMapper;
	}
	
	@GetMapping("/api/db/inventory/transport")
	@ResponseBody
	public ResponseEntity<PageInfo<Transport>> list(TransportQuery query) {
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
		Example example = new Example(Transport.class);
        Example.Criteria criteria = example.createCriteria();
        if (StringUtils.isNotBlank(query.getVehicleType())) {
            criteria.andLike("vehicleType", "%" + query.getVehicleType().trim() + "%");
        }
        List<Transport> transports = transportMapper.selectByExample(example);
		PageInfo<Transport> result = new PageInfo<>(transports);
		if (query.getDraw() != null) {
			return ResponseEntity.ok().header("x-app-draw", query.getDraw().toString()).body(result);
		} else {
			return ResponseEntity.ok().body(result);
		}
	}

}
