package tk.mybatis.springboot.service.query;

public class FuelQuery extends CommonQuery {

	private String fuelType;

	public String getFuelType() {
		return fuelType;
	}

	public void setFuelType(String fuelType) {
		this.fuelType = fuelType;
	}

	@Override
	public String toString() {
		return super.toString() + "FuelQuery [fuelType=" + fuelType + "]";
	}

}
