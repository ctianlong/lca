package tk.mybatis.springboot.model;

import javax.persistence.*;

public class Machine {
    /**
     * 主键
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * 代号
     */
    private String code;

    /**
     * 机械名称
     */
    private String name;

    /**
     * 机械类别代码
     */
    @Column(name = "type_cd")
    private Integer typeCd;

    /**
     * 主机型号
     */
    @Column(name = "host_model")
    private String hostModel;

    /**
     * 不变费用
     */
    @Column(name = "constant_fee")
    private Double constantFee;

    /**
     * 人工（工日）49.2/工日
     */
    private Integer labor;

    /**
     * 汽油5.2
     */
    private Double gasoline;

    /**
     * 柴油4.9
     */
    private Double diesel;

    /**
     * 重油2.8
     */
    @Column(name = "heavy_oil")
    private Double heavyOil;

    /**
     * 煤0.265
     */
    private Double coal;

    /**
     * 电0.55
     */
    private Double electricity;

    /**
     * 水0.50
     */
    private Double water;

    /**
     * 木柴0.49
     */
    private Double firewood;

    /**
     * 养路费及车船使用税(元)
     */
    private Double tax;

    /**
     * 定额基价
     */
    @Column(name = "base_price")
    private Double basePrice;

    /**
     * 备注
     */
    private String remarks;

    /**
     * 能耗(MJ)
     */
    @Column(name = "energy_consume")
    private Double energyConsume;

    /**
     * CO2排放(kg)
     */
    @Column(name = "emission_co2")
    private Double emissionCo2;

    /**
     * CH4排放(kg)
     */
    @Column(name = "emission_ch4")
    private Double emissionCh4;

    /**
     * N2O排放(kg)
     */
    @Column(name = "emission_n2o")
    private Double emissionN2o;

    /**
     * CO排放(kg)
     */
    @Column(name = "emission_co")
    private Double emissionCo;

    /**
     * SO2排放(kg)
     */
    @Column(name = "emission_so2")
    private Double emissionSo2;

    /**
     * NOX排放(kg)
     */
    @Column(name = "emission_nox")
    private Double emissionNox;

    /**
     * Pb排放(kg)
     */
    @Column(name = "emission_pb")
    private Double emissionPb;

    /**
     * Zn排放(kg)
     */
    @Column(name = "emission_zn")
    private Double emissionZn;

    /**
     * 数据来源
     */
    @Column(name = "data_source")
    private String dataSource;

    /**
     * 数据收集时间
     */
    @Column(name = "collect_time")
    private String collectTime;

    /**
     * 创建该记录用户ID
     */
    @Column(name = "create_user_id")
    private Integer createUserId;

    /**
     * 获取主键
     *
     * @return id - 主键
     */
    public Integer getId() {
        return id;
    }

    /**
     * 设置主键
     *
     * @param id 主键
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 获取代号
     *
     * @return code - 代号
     */
    public String getCode() {
        return code;
    }

    /**
     * 设置代号
     *
     * @param code 代号
     */
    public void setCode(String code) {
        this.code = code;
    }

    /**
     * 获取机械名称
     *
     * @return name - 机械名称
     */
    public String getName() {
        return name;
    }

    /**
     * 设置机械名称
     *
     * @param name 机械名称
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取机械类别代码
     *
     * @return type_cd - 机械类别代码
     */
    public Integer getTypeCd() {
        return typeCd;
    }

    /**
     * 设置机械类别代码
     *
     * @param typeCd 机械类别代码
     */
    public void setTypeCd(Integer typeCd) {
        this.typeCd = typeCd;
    }

    /**
     * 获取主机型号
     *
     * @return host_model - 主机型号
     */
    public String getHostModel() {
        return hostModel;
    }

    /**
     * 设置主机型号
     *
     * @param hostModel 主机型号
     */
    public void setHostModel(String hostModel) {
        this.hostModel = hostModel;
    }

    /**
     * 获取不变费用
     *
     * @return constant_fee - 不变费用
     */
    public Double getConstantFee() {
        return constantFee;
    }

    /**
     * 设置不变费用
     *
     * @param constantFee 不变费用
     */
    public void setConstantFee(Double constantFee) {
        this.constantFee = constantFee;
    }

    /**
     * 获取人工（工日）49.2/工日
     *
     * @return labor - 人工（工日）49.2/工日
     */
    public Integer getLabor() {
        return labor;
    }

    /**
     * 设置人工（工日）49.2/工日
     *
     * @param labor 人工（工日）49.2/工日
     */
    public void setLabor(Integer labor) {
        this.labor = labor;
    }

    /**
     * 获取汽油5.2
     *
     * @return gasoline - 汽油5.2
     */
    public Double getGasoline() {
        return gasoline;
    }

    /**
     * 设置汽油5.2
     *
     * @param gasoline 汽油5.2
     */
    public void setGasoline(Double gasoline) {
        this.gasoline = gasoline;
    }

    /**
     * 获取柴油4.9
     *
     * @return diesel - 柴油4.9
     */
    public Double getDiesel() {
        return diesel;
    }

    /**
     * 设置柴油4.9
     *
     * @param diesel 柴油4.9
     */
    public void setDiesel(Double diesel) {
        this.diesel = diesel;
    }

    /**
     * 获取重油2.8
     *
     * @return heavy_oil - 重油2.8
     */
    public Double getHeavyOil() {
        return heavyOil;
    }

    /**
     * 设置重油2.8
     *
     * @param heavyOil 重油2.8
     */
    public void setHeavyOil(Double heavyOil) {
        this.heavyOil = heavyOil;
    }

    /**
     * 获取煤0.265
     *
     * @return coal - 煤0.265
     */
    public Double getCoal() {
        return coal;
    }

    /**
     * 设置煤0.265
     *
     * @param coal 煤0.265
     */
    public void setCoal(Double coal) {
        this.coal = coal;
    }

    /**
     * 获取电0.55
     *
     * @return electricity - 电0.55
     */
    public Double getElectricity() {
        return electricity;
    }

    /**
     * 设置电0.55
     *
     * @param electricity 电0.55
     */
    public void setElectricity(Double electricity) {
        this.electricity = electricity;
    }

    /**
     * 获取水0.50
     *
     * @return water - 水0.50
     */
    public Double getWater() {
        return water;
    }

    /**
     * 设置水0.50
     *
     * @param water 水0.50
     */
    public void setWater(Double water) {
        this.water = water;
    }

    /**
     * 获取木柴0.49
     *
     * @return firewood - 木柴0.49
     */
    public Double getFirewood() {
        return firewood;
    }

    /**
     * 设置木柴0.49
     *
     * @param firewood 木柴0.49
     */
    public void setFirewood(Double firewood) {
        this.firewood = firewood;
    }

    /**
     * 获取养路费及车船使用税(元)
     *
     * @return tax - 养路费及车船使用税(元)
     */
    public Double getTax() {
        return tax;
    }

    /**
     * 设置养路费及车船使用税(元)
     *
     * @param tax 养路费及车船使用税(元)
     */
    public void setTax(Double tax) {
        this.tax = tax;
    }

    /**
     * 获取定额基价
     *
     * @return base_price - 定额基价
     */
    public Double getBasePrice() {
        return basePrice;
    }

    /**
     * 设置定额基价
     *
     * @param basePrice 定额基价
     */
    public void setBasePrice(Double basePrice) {
        this.basePrice = basePrice;
    }

    /**
     * 获取备注
     *
     * @return remarks - 备注
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 设置备注
     *
     * @param remarks 备注
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    /**
     * 获取能耗(MJ)
     *
     * @return energy_consume - 能耗(MJ)
     */
    public Double getEnergyConsume() {
        return energyConsume;
    }

    /**
     * 设置能耗(MJ)
     *
     * @param energyConsume 能耗(MJ)
     */
    public void setEnergyConsume(Double energyConsume) {
        this.energyConsume = energyConsume;
    }

    /**
     * 获取CO2排放(kg)
     *
     * @return emission_co2 - CO2排放(kg)
     */
    public Double getEmissionCo2() {
        return emissionCo2;
    }

    /**
     * 设置CO2排放(kg)
     *
     * @param emissionCo2 CO2排放(kg)
     */
    public void setEmissionCo2(Double emissionCo2) {
        this.emissionCo2 = emissionCo2;
    }

    /**
     * 获取CH4排放(kg)
     *
     * @return emission_ch4 - CH4排放(kg)
     */
    public Double getEmissionCh4() {
        return emissionCh4;
    }

    /**
     * 设置CH4排放(kg)
     *
     * @param emissionCh4 CH4排放(kg)
     */
    public void setEmissionCh4(Double emissionCh4) {
        this.emissionCh4 = emissionCh4;
    }

    /**
     * 获取N2O排放(kg)
     *
     * @return emission_n2o - N2O排放(kg)
     */
    public Double getEmissionN2o() {
        return emissionN2o;
    }

    /**
     * 设置N2O排放(kg)
     *
     * @param emissionN2o N2O排放(kg)
     */
    public void setEmissionN2o(Double emissionN2o) {
        this.emissionN2o = emissionN2o;
    }

    /**
     * 获取CO排放(kg)
     *
     * @return emission_co - CO排放(kg)
     */
    public Double getEmissionCo() {
        return emissionCo;
    }

    /**
     * 设置CO排放(kg)
     *
     * @param emissionCo CO排放(kg)
     */
    public void setEmissionCo(Double emissionCo) {
        this.emissionCo = emissionCo;
    }

    /**
     * 获取SO2排放(kg)
     *
     * @return emission_so2 - SO2排放(kg)
     */
    public Double getEmissionSo2() {
        return emissionSo2;
    }

    /**
     * 设置SO2排放(kg)
     *
     * @param emissionSo2 SO2排放(kg)
     */
    public void setEmissionSo2(Double emissionSo2) {
        this.emissionSo2 = emissionSo2;
    }

    /**
     * 获取NOX排放(kg)
     *
     * @return emission_nox - NOX排放(kg)
     */
    public Double getEmissionNox() {
        return emissionNox;
    }

    /**
     * 设置NOX排放(kg)
     *
     * @param emissionNox NOX排放(kg)
     */
    public void setEmissionNox(Double emissionNox) {
        this.emissionNox = emissionNox;
    }

    /**
     * 获取Pb排放(kg)
     *
     * @return emission_pb - Pb排放(kg)
     */
    public Double getEmissionPb() {
        return emissionPb;
    }

    /**
     * 设置Pb排放(kg)
     *
     * @param emissionPb Pb排放(kg)
     */
    public void setEmissionPb(Double emissionPb) {
        this.emissionPb = emissionPb;
    }

    /**
     * 获取Zn排放(kg)
     *
     * @return emission_zn - Zn排放(kg)
     */
    public Double getEmissionZn() {
        return emissionZn;
    }

    /**
     * 设置Zn排放(kg)
     *
     * @param emissionZn Zn排放(kg)
     */
    public void setEmissionZn(Double emissionZn) {
        this.emissionZn = emissionZn;
    }

    /**
     * 获取数据来源
     *
     * @return data_source - 数据来源
     */
    public String getDataSource() {
        return dataSource;
    }

    /**
     * 设置数据来源
     *
     * @param dataSource 数据来源
     */
    public void setDataSource(String dataSource) {
        this.dataSource = dataSource;
    }

    /**
     * 获取数据收集时间
     *
     * @return collect_time - 数据收集时间
     */
    public String getCollectTime() {
        return collectTime;
    }

    /**
     * 设置数据收集时间
     *
     * @param collectTime 数据收集时间
     */
    public void setCollectTime(String collectTime) {
        this.collectTime = collectTime;
    }

    /**
     * 获取创建该记录用户ID
     *
     * @return create_user_id - 创建该记录用户ID
     */
    public Integer getCreateUserId() {
        return createUserId;
    }

    /**
     * 设置创建该记录用户ID
     *
     * @param createUserId 创建该记录用户ID
     */
    public void setCreateUserId(Integer createUserId) {
        this.createUserId = createUserId;
    }
}