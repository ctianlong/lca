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