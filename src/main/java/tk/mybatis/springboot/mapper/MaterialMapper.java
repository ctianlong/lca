package tk.mybatis.springboot.mapper;

import java.util.List;

import tk.mybatis.springboot.model.Material;
import tk.mybatis.springboot.service.cd.CdObject;
import tk.mybatis.springboot.util.MyMapper;

public interface MaterialMapper extends MyMapper<Material> {
	
	List<CdObject> getMaterialCategoryCd();

	Integer getCreateUserIdById(Integer id);
}