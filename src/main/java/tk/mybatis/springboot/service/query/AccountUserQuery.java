package tk.mybatis.springboot.service.query;

public class AccountUserQuery {

	// to do
	// 是否添加默认值
	private Integer page = 1;

	private Integer rows = 10;

	private String orderColumn;

	private String orderDir;

	// 配合 datatables 添加
	private Integer draw;

	private String username;

	private String chname;

	private Boolean superuser;

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

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getChname() {
		return chname;
	}

	public void setChname(String chname) {
		this.chname = chname;
	}

	public Boolean getSuperuser() {
		return superuser;
	}

	public void setSuperuser(Boolean superuser) {
		this.superuser = superuser;
	}

	@Override
	public String toString() {
		return "AccountUserQuery [page=" + page + ", rows=" + rows + ", username=" + username + ", chname=" + chname
				+ ", superuser=" + superuser + "]";
	}

}
