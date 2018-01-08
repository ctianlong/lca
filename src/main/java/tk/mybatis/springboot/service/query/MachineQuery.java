package tk.mybatis.springboot.service.query;

public class MachineQuery extends CommonQuery {

	private String name;
	private Integer typeCd;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getTypeCd() {
		return typeCd;
	}

	public void setTypeCd(Integer typeCd) {
		this.typeCd = typeCd;
	}

	@Override
	public String toString() {
		return super.toString() + "MachineQuery [name=" + name + ", typeCd=" + typeCd + "]";
	}

}
