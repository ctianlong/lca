CREATE DATABASE lca;

USE lca;

CREATE TABLE account_user (
    id int(11) unsigned PRIMARY KEY AUTO_INCREMENT COMMENT '主键',
    password varchar(128) NOT NULL COMMENT '密码',
    username varchar(128) NOT NULL COMMENT '用户名',
    chname varchar(128) NOT NULL COMMENT '姓名',
    phone varchar(64) COMMENT '联系方式',
    company varchar(128) COMMENT '工作单位',
    address varchar(128) COMMENT '通讯地址',
    is_superuser tinyint(1) unsigned NOT NULL COMMENT '是否管理员',
    gmt_create datetime NOT NULL COMMENT '创建时间',
    gmt_modified datetime NOT NULL COMMENT '修改时间'
);

CREATE TABLE `material` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `material_name` varchar(50) NOT NULL COMMENT '材料名称',
  `material_category_cd` int(11) DEFAULT NULL COMMENT '材料类别代码',
  `unit` varchar(10) DEFAULT NULL COMMENT '单位',
  `cost` varchar(20) DEFAULT NULL COMMENT '成本',
  `cost_source` varchar(50) DEFAULT NULL COMMENT '成本来源',
  `energy_consume` double DEFAULT NULL COMMENT '能耗(MJ)',
  `emission_co2` double DEFAULT NULL COMMENT 'CO2排放(kg)',
  `emission_ch4` double DEFAULT NULL COMMENT 'CH4排放(kg)',
  `emission_n2o` double DEFAULT NULL COMMENT 'N2O排放(kg)',
  `emission_co` double DEFAULT NULL COMMENT 'CO排放(kg)',
  `emission_so2` double DEFAULT NULL COMMENT 'SO2排放(kg)',
  `emission_nox` double DEFAULT NULL COMMENT 'NOX排放(kg)',
  `emission_pb` double DEFAULT NULL COMMENT 'Pb排放(kg)',
  `emission_zn` double DEFAULT NULL COMMENT 'Zn排放(kg)',
  `data_source` varchar(100) DEFAULT NULL COMMENT '数据来源',
  `collect_time` varchar(15) DEFAULT NULL COMMENT '数据收集时间',
  `create_user_id` int(11) unsigned DEFAULT NULL COMMENT '创建该记录用户ID',
  PRIMARY KEY (`id`)
);

CREATE TABLE `cd_material_category` (
  `material_category_cd` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '材料类别代码',
  `name` varchar(30) NOT NULL COMMENT '材料类别名称',
  PRIMARY KEY (`material_category_cd`)
);

CREATE TABLE `transport` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `vehicle_type` varchar(50) NOT NULL COMMENT '车辆种类',
  `unit` varchar(10) DEFAULT NULL COMMENT '单位',
  `cost` varchar(20) DEFAULT NULL COMMENT '成本',
  `cost_source` varchar(50) DEFAULT NULL COMMENT '成本来源',
  `energy_consume` double DEFAULT NULL COMMENT '能耗(MJ)',
  `emission_co2` double DEFAULT NULL COMMENT 'CO2排放(kg)',
  `emission_ch4` double DEFAULT NULL COMMENT 'CH4排放(kg)',
  `emission_n2o` double DEFAULT NULL COMMENT 'N2O排放(kg)',
  `emission_co` double DEFAULT NULL COMMENT 'CO排放(kg)',
  `emission_so2` double DEFAULT NULL COMMENT 'SO2排放(kg)',
  `emission_nox` double DEFAULT NULL COMMENT 'NOX排放(kg)',
  `emission_pb` double DEFAULT NULL COMMENT 'Pb排放(kg)',
  `emission_zn` double DEFAULT NULL COMMENT 'Zn排放(kg)',
  `data_source` varchar(100) DEFAULT NULL COMMENT '数据来源',
  `collect_time` varchar(15) DEFAULT NULL COMMENT '数据收集时间',
  `create_user_id` int(11) unsigned DEFAULT NULL COMMENT '创建该记录用户ID',
  PRIMARY KEY (`id`)
);