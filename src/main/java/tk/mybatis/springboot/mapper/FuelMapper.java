package tk.mybatis.springboot.mapper;

import tk.mybatis.springboot.model.Fuel;
import tk.mybatis.springboot.util.MyMapper;

public interface FuelMapper extends MyMapper<Fuel> {

	Integer getCreateUserIdById(Integer id);
}