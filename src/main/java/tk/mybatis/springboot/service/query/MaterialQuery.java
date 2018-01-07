package tk.mybatis.springboot.service.query;

public class MaterialQuery extends CommonQuery {

	private String materialName;

	private Integer materialCategoryCd;

	public String getMaterialName() {
		return materialName;
	}

	public void setMaterialName(String materialName) {
		this.materialName = materialName;
	}

	public Integer getMaterialCategoryCd() {
		return materialCategoryCd;
	}

	public void setMaterialCategoryCd(Integer materialCategoryCd) {
		this.materialCategoryCd = materialCategoryCd;
	}

	@Override
	public String toString() {
		return super.toString() + "MaterialQuery [materialName=" + materialName + ", materialCategoryCd=" + materialCategoryCd + "]";
	}

}
