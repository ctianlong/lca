package tk.mybatis.springboot.mapper;

import tk.mybatis.springboot.model.Machine;
import tk.mybatis.springboot.util.MyMapper;

public interface MachineMapper extends MyMapper<Machine> {

	Integer getCreateUserIdById(Integer id);
}