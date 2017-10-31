package tk.mybatis.springboot.service.query;

public class MaterialQuery {

	// to do
	// 是否添加默认值
	private Integer page = 1;

	private Integer rows = 10;

	private String orderColumn;

	private String orderDir;

	// 配合 datatables 添加
	private Integer draw;

	private String materialName;

	private Integer materialCategoryCd;

	public Integer getPage() {
		return page;
	}

	public void setPage(Integer page) {
		this.page = page;
	}

	public Integer getRows() {
		return rows;
	}

	public void setRows(Integer rows) {
		this.rows = rows;
	}

	public String getOrderColumn() {
		return orderColumn;
	}

	public void setOrderColumn(String orderColumn) {
		this.orderColumn = orderColumn;
	}

	public String getOrderDir() {
		return orderDir;
	}

	public void setOrderDir(String orderDir) {
		this.orderDir = orderDir;
	}

	public Integer getDraw() {
		return draw;
	}

	public void setDraw(Integer draw) {
		this.draw = draw;
	}

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
		return "MaterialQuery [page=" + page + ", rows=" + rows + ", orderColumn=" + orderColumn + ", orderDir="
				+ orderDir + ", draw=" + draw + ", materialName=" + materialName + ", materialCategoryCd="
				+ materialCategoryCd + "]";
	}

}
