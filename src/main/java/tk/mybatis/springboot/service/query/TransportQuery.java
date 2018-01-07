package tk.mybatis.springboot.service.query;

public class TransportQuery extends CommonQuery {

	private String vehicleType;

	public String getVehicleType() {
		return vehicleType;
	}

	public void setVehicleType(String vehicleType) {
		this.vehicleType = vehicleType;
	}

	@Override
	public String toString() {
		return super.toString() + "TransportQuery [vehicleType=" + vehicleType + "]";
	}

}
