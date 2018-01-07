package tk.mybatis.springboot.model;

import java.io.Serializable;

import javax.persistence.*;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import tk.mybatis.springboot.conf.Constants;

public class Material implements Serializable {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
     * 主键
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * 材料名称
     */
    @Column(name = "material_name")
    @NotNull
    @Pattern(regexp = Constants.NO_FIRST_LAST_SPACE_REGEX)
    private String materialName;

    /**
     * 材料类别代码
     */
    @Column(name = "material_category_cd")
    @NotNull
    private Integer materialCategoryCd;

    /**
     * 单位
     */
    @Pattern(regexp = Constants.NO_FIRST_LAST_SPACE_OR_EMPTY_REGEX)
    private String unit;

    /**
     * 成本
     */
    @Pattern(regexp = Constants.NON_NEGATIVE_NUMBER_RANGE_OR_EMPTY_REGEX)
    private String cost;

    /**
     * 成本来源
     */
    @Column(name = "cost_source")
    private String costSource;

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
    @Pattern(regexp = Constants.COLLECT_TIME_OR_EMPTY_REGEX)
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
     * 获取材料名称
     *
     * @return material_name - 材料名称
     */
    public String getMaterialName() {
        return materialName;
    }

    /**
     * 设置材料名称
     *
     * @param materialName 材料名称
     */
    public void setMaterialName(String materialName) {
        this.materialName = materialName;
    }

    /**
     * 获取材料类别代码
     *
     * @return material_category_cd - 材料类别代码
     */
    public Integer getMaterialCategoryCd() {
        return materialCategoryCd;
    }

    /**
     * 设置材料类别代码
     *
     * @param materialCategoryCd 材料类别代码
     */
    public void setMaterialCategoryCd(Integer materialCategoryCd) {
        this.materialCategoryCd = materialCategoryCd;
    }

    /**
     * 获取单位
     *
     * @return unit - 单位
     */
    public String getUnit() {
        return unit;
    }

    /**
     * 设置单位
     *
     * @param unit 单位
     */
    public void setUnit(String unit) {
        this.unit = unit;
    }

    /**
     * 获取成本
     *
     * @return cost - 成本
     */
    public String getCost() {
        return cost;
    }

    /**
     * 设置成本
     *
     * @param cost 成本
     */
    public void setCost(String cost) {
        this.cost = cost;
    }

    /**
     * 获取成本来源
     *
     * @return cost_source - 成本来源
     */
    public String getCostSource() {
        return costSource;
    }

    /**
     * 设置成本来源
     *
     * @param costSource 成本来源
     */
    public void setCostSource(String costSource) {
        this.costSource = costSource;
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