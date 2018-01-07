package tk.mybatis.springboot.mapper;

import tk.mybatis.springboot.model.Transport;
import tk.mybatis.springboot.util.MyMapper;

public interface TransportMapper extends MyMapper<Transport> {

	Integer getCreateUserIdById(Integer id);
}