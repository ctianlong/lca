$(function(){
	// 获取材料类别代码表，同步ajax，设置超时时间，以防卡死
	var cdMachineCategory=[
		{id:1,text:"土、石方工程机械"},
		{id:2,text:"路面工程机械"},
		{id:3,text:"混凝土及灰浆机械"},
		{id:4,text:"水平运输机械"},
		{id:5,text:"起重及垂直运输机械"},
		{id:6,text:"打桩、钻孔机械"},
		{id:7,text:"泵类机械"},
		{id:8,text:"金属、木、石料加工机械"},
		{id:9,text:"动力机械"},
		{id:10,text:"工程船舶"},
		{id:11,text:"其他机械"}
	]
//	$.ajax({
//		url:ctxPath+"/api/cd/machine-category",
//        type:"get",
//        cache:false,
//        async:false,
//        timeout:3000,
//        success:function (data) {
//        	cdMachineCategory=data;
//        }
//	});
    var machineManage = {
		    currentItem : null,
		    getQueryCondition : function(data) {
				var param = {};
		        //组装排序参数
		        if (data.order&&data.order.length&&data.order[0]) {
		            switch (data.order[0].column) {
		            case 0:
		                param.orderColumn = "code";
		                break;
					case 1:
		                param.orderColumn = "name";
		                break;
					case 2:
						param.orderColumn = "type_cd";
						break;
					case 3:
						param.orderColumn = "host_model";
						break;
					case 4:
						param.orderColumn = "constant_fee";
						break;
					case 5:
						param.orderColumn = "labor";
						break;
					case 6:
						param.orderColumn = "gasoline";
						break;
					case 7:
						param.orderColumn = "diesel";
						break;
					case 8:
						param.orderColumn = "heavy_oil";
						break;
					case 9:
						param.orderColumn = "coal";
						break;
					case 10:
						param.orderColumn = "electricity";
						break;
					case 11:
						param.orderColumn = "water";
						break;
					case 12:
						param.orderColumn = "firewood";
						break;
					case 13:
						param.orderColumn = "tax";
						break;
					case 14:
						param.orderColumn = "base_price";
						break;
					case 15:
						param.orderColumn = "remarks";
						break;
					case 16:
						param.orderColumn = "energy_consume";
						break;
					case 17:
						param.orderColumn = "emission_co2";
						break;
					case 18:
						param.orderColumn = "emission_ch4";
						break;
					case 19:
						param.orderColumn = "emission_n2o";
						break;
					case 20:
						param.orderColumn = "emission_co";
						break;
					case 21:
						param.orderColumn = "emission_so2";
						break;
					case 22:
						param.orderColumn = "emission_nox";
						break;
					case 23:
						param.orderColumn = "emission_pb";
						break;
					case 24:
						param.orderColumn = "emission_zn";
						break;
					case 25:
						param.orderColumn = "data_source";
						break;
					case 26:
						param.orderColumn = "collect_time";
						break;
		            default:
		                break;
		            }
		            param.orderDir = data.order[0].dir;
		        }
		        //组装查询参数
	            param.name = $("#nameQuery").val();
	            param.typeCd = $("#typeCdQuery").val();
		        //组装分页参数
				param.draw = data.draw;
		        param.page = data.start/data.length+1;
		        param.rows = data.length;
		        return param;
		    },
		    addItemInit : function() {
				$("#myModalLabel").text("新增");
				validator.resetForm();
		        $("#form-machine")[0].reset();
		        $("#id").val('');
				$("#typeCd").val(cdMachineCategory[0].id).trigger("change");
		 		$("#modal-default").modal("show");
		    },
		    editItemInit : function(item) {
		        if (!item) {
		            return;
		        }
				$("#myModalLabel").text("修改");
				validator.resetForm();
		        $("#form-machine")[0].reset();
		        $("#id").val(item.id);
				$("#name").val(item.name);
				$("#typeCd").val(item.typeCd).trigger("change");
				$("#code").val(item.code);
				$("#hostModel").val(item.hostModel);
				$("#constantFee").val(item.constantFee);
				$("#labor").val(item.labor);
				$("#gasoline").val(item.gasoline);
				$("#diesel").val(item.diesel);
				$("#heavyOil").val(item.heavyOil);
				$("#coal").val(item.coal);
				$("#electricity").val(item.electricity);
				$("#water").val(item.water);
				$("#firewood").val(item.firewood);
				$("#tax").val(item.tax);
				$("#basePrice").val(item.basePrice);
				$("#remarks").val(item.remarks);
				$("#energyConsume").val(item.energyConsume != null ? item.energyConsume.toExponential() : null);
				$("#emissionCo2").val(item.emissionCo2 != null ? item.emissionCo2.toExponential() : null);
				$("#emissionCh4").val(item.emissionCh4 != null ? item.emissionCh4.toExponential() : null);
				$("#emissionN2o").val(item.emissionN2o != null ? item.emissionN2o.toExponential() : null);
				$("#emissionCo").val(item.emissionCo != null ? item.emissionCo.toExponential() : null);
				$("#emissionSo2").val(item.emissionSo2 != null ? item.emissionSo2.toExponential() : null);
				$("#emissionNox").val(item.emissionNox != null ? item.emissionNox.toExponential() : null);
				$("#emissionPb").val(item.emissionPb != null ? item.emissionPb.toExponential() : null);
				$("#emissionZn").val(item.emissionZn != null ? item.emissionZn.toExponential() : null);
				$("#dataSource").val(item.dataSource);
				$("#collectTime").val(item.collectTime);
		 		$("#modal-default").modal("show");
		    },
		    addItemSubmit : function() {
				var data=$("#form-machine").serializeJSON();
	            $.ajax({
	                url:ctxPath+"/api/db/inventory/machine",
	                type:"post",
	                contentType:"application/json;charset=utf-8",
	                data: JSON.stringify(data),
	                success:function (data, textStatus, jqXHR) {
	                	$("#modal-default").modal("hide");
	                	var d = dialog({
                            content:'<div class="king-notice-box king-notice-success"><p class="king-notice-text">新增成功</p></div>'
                        });
                        d.show();
                        setTimeout(function() {
                            d.close().remove();
                            _table.draw(false);
                        }, 1500);
	                },
	                error:function (XMLHttpRequest, textStatus, errorThrown) {
	                	var status=XMLHttpRequest.status;
                    	var msg="新增失败";
                    	if(status==400){
                    		msg="您的输入格式有误";
                    	}
                    	var d = dialog({
                             content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+msg+'</p></div>',
                             zIndex:2048
                         });
                         d.show();
                         setTimeout(function() {
                             d.close().remove();
                         }, 1500);
	                }
	            });
		    },
		    editItemSubmit : function() {
				var data=$("#form-machine").serializeJSON();
	            $.ajax({
	                url:ctxPath+"/api/db/inventory/machine/"+data.id,
	                type:"put",
	                contentType:"application/json;charset=utf-8",
	                data: JSON.stringify(data),
	                success:function (data, textStatus, jqXHR) {
	                	$("#modal-default").modal("hide");
	                	var d = dialog({
	                        content:'<div class="king-notice-box king-notice-success"><p class="king-notice-text">修改成功</p></div>'
	                    });
	                    d.show();
	                    setTimeout(function() {
	                        d.close().remove();
	                        _table.draw(false);
	                    }, 1500);
	                },
	                error:function (XMLHttpRequest, textStatus, errorThrown) {
	                	var status=XMLHttpRequest.status;
	                	var msg="修改失败";
	                	if(status==400){
	                		msg="您的输入格式有误";
	                	}else if(status==403) {
							msg="只能修改您提交的记录";
						}
	                	var d = dialog({
	                         content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+msg+'</p></div>',
	                         zIndex:2048
	                     });
	                     d.show();
	                     setTimeout(function() {
	                         d.close().remove();
	                     }, 1500);
	                }
	            });
		    },
		    deleteItem : function(selectedItems) {
		        var message;
		        if (selectedItems&&selectedItems.length) {
		            if (selectedItems.length == 1) {
		                message = "确认删除 '"+selectedItems[0].name+"' 吗?";
		            }else{
		                message = "确认删除选中的"+selectedItems.length+"条记录吗?";
		            }
					dialog({
				        title: '确认',
				        content: message,
				        zIndex: 2048,
				        okValue: '确定',
				        ok: function() {
				        	NProgress.start();
				            $.ajax({
				            	url:ctxPath+"/api/db/inventory/machine/"+selectedItems[0].id,
			                    type:"delete",
			                    success:function (data, textStatus, jqXHR) {
			                    	NProgress.done();
			                    	 var d = dialog({
			                             content:'<div class="king-notice-box king-notice-success"><p class="king-notice-text">删除成功</p></div>'
			                         });
			                         d.show();
			                         setTimeout(function() {
			                             d.close().remove();
			                             _table.draw(false);
			                         }, 1500);
			                    },
			                    error:function (XMLHttpRequest, textStatus, errorThrown) {
			                    	NProgress.done();
			                    	var status=XMLHttpRequest.status;
			                    	var msg="删除失败";
			                    	if(status==403){
			                    		msg="只能删除您提交的记录";
			                    	}else if(status==404){
			                    		msg="该记录不存在或已经被删除";
			                    	}
			                    	var d = dialog({
			                             content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+msg+'</p></div>'
			                         });
			                         d.show();
			                         setTimeout(function() {
			                             d.close().remove();
			                             if(status==404){
			                            	 _table.draw(false);
			                             }
			                         }, 1500);
			                    }
			                });
				        },
				        cancelValue: '取消',
				        cancel: function() {}
				    }).showModal();
		        }else{
		            //还没有复选功能
		        }
		    }
    	};

	var $wrapper = $("#div-table-container");
	var $table = $("#table-machine");
	var _table = $table.dataTable($.extend(true,{},CONSTANT.DATA_TABLES.DEFAULT_OPTION, {
        ajax : function(data, callback, settings) {//ajax配置为function,手动调用异步查询
            //手动控制遮罩
            $wrapper.spinModal("small");
            NProgress.start();
            //封装请求参数
            var param = machineManage.getQueryCondition(data);
            $.ajax({
                    type: "get",
                    url: ctxPath+"/api/db/inventory/machine",
                    cache : false,  //禁用缓存
                    data: param,    //传入已封装的参数
                    dataType: "json",
                    success: function(result, textStatus, jqXHR) {
                        var returnData = {};
                        returnData.draw = jqXHR.getResponseHeader("x-app-draw");//返回draw计数器,由后台返回
                        returnData.recordsTotal = result.total;
                        returnData.recordsFiltered = result.total;//后台只统计过滤后的总数
                        returnData.data = result.list;
                        //关闭遮罩
                        $wrapper.spinModal(false);
                        NProgress.done();
                        //调用DataTables提供的callback方法，代表数据已封装完成并传回DataTables进行渲染
                        //此时的数据需确保正确无误，异常判断应在执行此回调前自行处理完毕
                        callback(returnData);
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                    	var d = dialog({
                            content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">查询失败</p></div>'
                        });
                        d.show();
                        setTimeout(function() {
                            d.close().remove();
                        }, 1500);
                        $wrapper.spinModal(false);
                        NProgress.done();
                    }
                });
        },
        columns: [
            //CONSTANT.DATA_TABLES.COLUMN.CHECKBOX,
        	{
        		data: "code",
        		className : "ellipsis",
        		render: CONSTANT.DATA_TABLES.RENDER.ELLIPSIS,
        		width: "50px"
        	},
            {
                data: "name",
                className : "ellipsis",
                render: CONSTANT.DATA_TABLES.RENDER.ELLIPSIS,
                width: "200px"
            },
            {
                data: "typeCd",
                className : "ellipsis",
                render: function(data, type, row, meta) {
                	var text=handleCd(cdMachineCategory,data);
                	return '<span title="' + text + '">' + text + '</span>';
				},
                width: "150px"
            },
            {
                data : "hostModel",
                className : "ellipsis",
                render: CONSTANT.DATA_TABLES.RENDER.ELLIPSIS,
                width: "100px"
            },
            {
            	data : "constantFee",
            	className : "ellipsis", //文字过长时用省略号显示，CSS实现
                render : CONSTANT.DATA_TABLES.RENDER.ELLIPSIS, //会显示省略号的列，需要用title属性实现划过时显示全部文本的效果
                width : "80px"
            },
            {
            	data: "labor",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.ELLIPSIS,
                width : "100px"
            },
            {
            	data: "gasoline",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.ELLIPSIS,
            	width : "100px"
            },
            {
            	data: "diesel",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.ELLIPSIS,
            	width : "100px"
            },
            {
            	data: "heavyOil",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.ELLIPSIS,
            	width : "100px"
            },
            {
            	data: "coal",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.ELLIPSIS,
            	width : "100px"
            },
            {
            	data: "electricity",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.ELLIPSIS,
            	width : "100px"
            },
            {
            	data: "water",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.ELLIPSIS,
            	width : "100px"
            },
            {
            	data: "firewood",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.ELLIPSIS,
            	width : "100px"
            },
            {
            	data: "tax",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.ELLIPSIS,
            	width : "100px"
            },
            {
            	data: "basePrice",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.ELLIPSIS,
            	width : "100px"
            },
            {
            	data: "remarks",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.ELLIPSIS,
            	width : "100px"
            },
            {
            	data: "energyConsume",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.SCIENTIFIC_NOTATION,
            	width: "100px"
            },
            {
            	data: "emissionCo2",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.SCIENTIFIC_NOTATION,
            	width: "100px"
            },
            {
            	data: "emissionCh4",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.SCIENTIFIC_NOTATION,
            	width: "100px"
            },
            {
            	data: "emissionN2o",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.SCIENTIFIC_NOTATION,
            	width: "100px"
            },
            {
            	data: "emissionCo",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.SCIENTIFIC_NOTATION,
            	width: "100px"
            },
            {
            	data: "emissionSo2",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.SCIENTIFIC_NOTATION,
            	width: "100px"
            },
            {
            	data: "emissionNox",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.SCIENTIFIC_NOTATION,
            	width: "100px"
            },
            {
            	data: "emissionPb",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.SCIENTIFIC_NOTATION,
            	width: "100px"
            },
            {
            	data: "emissionZn",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.SCIENTIFIC_NOTATION,
            	width: "100px"
            },
            {
            	data: "dataSource",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.ELLIPSIS,
            	width: "100px"
            },
            {
            	data: "collectTime",
            	className : "ellipsis",
            	render : CONSTANT.DATA_TABLES.RENDER.ELLIPSIS,
            	width: "100px"
            },
            {
                className : "td-operation",
                data: null,
                defaultContent:"",
                orderable : false,
                width : "160px"
            }
        ],
        "createdRow": function (row, data, index ) {
            //行渲染回调,在这里可以对该行dom元素进行任何操作
            //给当前行加样式
//            if (data.role) {
//                $(row).addClass("info");
//            }
            //给当前行某列加样式
            //$('td', row).eq(5).addClass(data.superuser?"text-primary":"");
            //不使用render，改用jquery文档操作呈现单元格
        	if(data.createUserId==loginUserId || isSuperuser==true){
        		var $btnEdit = $('<a class="king-btn king-info king-radius king-btn-mini btn-edit"><i class="fa fa-edit btn-icon"></i> 修改</a>');
        		var $btnDel = $('<a class="king-btn king-danger king-radius king-btn-mini btn-del"><i class="fa fa-close btn-icon"></i> 删除</a>');
        		$('td', row).eq(27).append($btnEdit).append($btnDel);
        	}
        },
        "drawCallback": function( settings ) {
            //渲染完毕后的回调
            //清空全选状态
            //$(":checkbox[name='cb-check-all']",$wrapper).prop('checked', false);
            //默认选中第一行
            //$("tbody tr",$table).eq(0).click();
        }
    })).api();
	
	// 下拉菜单初始化，select2
	$("#typeCdQuery").select2({
		data:cdMachineCategory,
		placeholder:"全部",
		allowClear:true,
		minimumResultsForSearch:-1,
		language:"zh-CN"
	});
	
	$("#typeCd").select2({
		data:cdMachineCategory,
		minimumResultsForSearch:-1,
		language:"zh-CN"
	});
	
	// 添加按钮
	$("#btn-add").click(function(){
		machineManage.currentItem = null;
		machineManage.addItemInit();
    });
	
	// 具体字段查询
    $("#form-machine-query").submit(function(){
    	_table.order([]);
        _table.draw();
        return false;
    });	
 
    // 刷新按钮
    $("#btn-reset-refresh").click(function(){
    	$("#form-machine-query")[0].reset();
    	$("#typeCdQuery").val(null).trigger("change");
    	_table.order([]);
    	_table.draw();
    });
 
	// 批量删除
//    $("#btn-del").click(function(){
//        var arrItemId = [];
//        $("tbody :checkbox:checked",$table).each(function(i) {
//            var item = _table.row($(this).closest('tr')).data();
//            arrItemId.push(item);
//        });
//        userManage.deleteItem(arrItemId);
//    });
 
    //行点击事件
    $("tbody",$table).on("click","tr",function(event) {
        $(this).addClass("info").siblings().removeClass("info");
        //获取该行对应的数据
//        var item = _table.row($(this).closest('tr')).data();
//        userManage.currentItem = item;
    });
 
    $table.on("change",":checkbox",function() {
//        if ($(this).is("[name='cb-check-all']")) {
//            //全选
//            $(":checkbox",$table).prop("checked",$(this).prop("checked"));
//        }else{
//            //一般复选
//            var checkbox = $("tbody :checkbox",$table);
//            $(":checkbox[name='cb-check-all']",$table).prop('checked', checkbox.length == checkbox.filter(':checked').length);
//        }
    }).on("click",".td-checkbox",function(event) {
        //点击单元格即点击复选框
//        !$(event.target).is(":checkbox") && $(":checkbox",this).trigger("click");
    }).on("click",".btn-edit",function() {
        //点击编辑按钮
        var item = _table.row($(this).closest('tr')).data();
        machineManage.currentItem = item;
        machineManage.editItemInit(item);
    }).on("click",".btn-del",function() {
        //点击删除按钮
        var item = _table.row($(this).closest('tr')).data();
        machineManage.deleteItem([item]);
    });
    
    // 材料表单校验规则
    var validator = $("#form-machine").validate({
        errorClass: 'text-danger',
    	rules:{
    		name:{
    			required:true,
    			notFirstLastSpace:true
    		},
    		constantFee:{
    			number:true,
    			min:0
    		},
    		labor:{
    			digits:true,
    			min:0
    		},
    		gasoline:{
    			number:true,
    			min:0
    		},
    		diesel:{
    			number:true,
    			min:0
    		},
    		heavyOil:{
    			number:true,
    			min:0
    		},
    		coal:{
    			number:true,
    			min:0
    		},
    		electricity:{
    			number:true,
    			min:0
    		},
    		water:{
    			number:true,
    			min:0
    		},
    		firewood:{
    			number:true,
    			min:0
    		},
    		tax:{
    			number:true,
    			min:0
    		},
    		basePrice:{
    			number:true,
    			min:0
    		},
    		energyConsume:{
    			scientificNotation:true
    		},
    		emissionCo2:{
    			scientificNotation:true
    		},
    		emissionCh4:{
    			scientificNotation:true
    		},
    		emissionN2o:{
    			scientificNotation:true
    		},
    		emissionCo:{
    			scientificNotation:true
    		},
    		emissionSo2:{
    			scientificNotation:true
    		},
    		emissionNox:{
    			scientificNotation:true
    		},
    		emissionPb:{
    			scientificNotation:true
    		},
    		emissionZn:{
    			scientificNotation:true
    		},
    		collectTime:{
    			collectTimeYear:true
    		}
    	},
    	submitHandler:function(form){
    		if($("#id").val()){
    			machineManage.editItemSubmit();
    		}else{
    			machineManage.addItemSubmit();
    		}
    	},
    	onkeyup:false
    });
 
});

