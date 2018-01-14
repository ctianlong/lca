$(function(){
    var fuelManage = {
		    currentItem : null,
		    getQueryCondition : function(data) {
				var param = {};
		        //组装排序参数
		        if (data.order&&data.order.length&&data.order[0]) {
		            switch (data.order[0].column) {
		            case 0:
		                param.orderColumn = "fuel_type";
		                break;
					case 1:
						param.orderColumn = "unit";
						break;
					case 2:
						param.orderColumn = "cost";
						break;
					case 3:
						param.orderColumn = "currency_type";
						break;
					case 4:
						param.orderColumn = "cost_source";
						break;
					case 5:
						param.orderColumn = "energy_consume";
						break;
					case 6:
						param.orderColumn = "emission_co2";
						break;
					case 7:
						param.orderColumn = "emission_ch4";
						break;
					case 8:
						param.orderColumn = "emission_n2o";
						break;
					case 9:
						param.orderColumn = "emission_co";
						break;
					case 10:
						param.orderColumn = "emission_so2";
						break;
					case 11:
						param.orderColumn = "emission_nox";
						break;
					case 12:
						param.orderColumn = "emission_pb";
						break;
					case 13:
						param.orderColumn = "emission_zn";
						break;
					case 14:
						param.orderColumn = "data_source";
						break;
					case 15:
						param.orderColumn = "collect_time";
						break;
		            default:
		                break;
		            }
		            param.orderDir = data.order[0].dir;
		        }
		        //组装查询参数
	            param.fuelType = $("#fuelTypeQuery").val();
		        //组装分页参数
				param.draw = data.draw;
		        param.page = data.start/data.length+1;
		        param.rows = data.length;
		        return param;
		    },
		    addItemInit : function() {
				$("#myModalLabel").text(iMsg.add);
				validator.resetForm();
		        $("#form-fuel")[0].reset();
		        $("#id").val('');
		 		$("#modal-default").modal("show");
		    },
		    editItemInit : function(item) {
		        if (!item) {
		            return;
		        }
				$("#myModalLabel").text(iMsg.edit);
				validator.resetForm();
		        $("#form-fuel")[0].reset();
		        $("#id").val(item.id);
				$("#fuelType").val(item.fuelType);
				$("#unit").val(item.unit);
				$("#cost").val(item.cost);
				$("#currencyType").val(item.currencyType);
				$("#costSource").val(item.costSource);
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
				var data=$("#form-fuel").serializeJSON();
	            $.ajax({
	                url:ctxPath+"/api/db/inventory/fuel",
	                type:"post",
	                contentType:"application/json;charset=utf-8",
	                data: JSON.stringify(data),
	                success:function (data, textStatus, jqXHR) {
	                	$("#modal-default").modal("hide");
	                	var d = dialog({
                            content:'<div class="king-notice-box king-notice-success"><p class="king-notice-text">'+iMsg.addSuccess+'</p></div>'
                        });
                        d.show();
                        setTimeout(function() {
                            d.close().remove();
                            _table.draw(false);
                        }, 1500);
	                },
	                error:function (XMLHttpRequest, textStatus, errorThrown) {
	                	var status=XMLHttpRequest.status;
                    	var msg=iMsg.addFail;
                    	if(status==400){
                    		msg=iMsg.formatSizeErr;
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
				var data=$("#form-fuel").serializeJSON();
	            $.ajax({
	                url:ctxPath+"/api/db/inventory/fuel/"+data.id,
	                type:"put",
	                contentType:"application/json;charset=utf-8",
	                data: JSON.stringify(data),
	                success:function (data, textStatus, jqXHR) {
	                	$("#modal-default").modal("hide");
	                	var d = dialog({
	                        content:'<div class="king-notice-box king-notice-success"><p class="king-notice-text">'+iMsg.editSuccess+'</p></div>'
	                    });
	                    d.show();
	                    setTimeout(function() {
	                        d.close().remove();
	                        _table.draw(false);
	                    }, 1500);
	                },
	                error:function (XMLHttpRequest, textStatus, errorThrown) {
	                	var status=XMLHttpRequest.status;
	                	var msg=iMsg.editFail;
	                	if(status==400){
	                		msg=iMsg.formatSizeErr;
	                	}else if(status==403) {
							msg=iMsg.onlyPermitOwnEdit;
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
		                message = iMsg.removeOne.fillArgs(selectedItems[0].fuelType);
		            }else{
		                message = iMsg.removeMultiple.fillArgs(selectedItems.length);
		            }
					dialog({
				        title: iMsg.confirm,
				        content: message,
				        zIndex: 2048,
				        okValue: iMsg.ok,
				        ok: function() {
				        	NProgress.start();
				            $.ajax({
				            	url:ctxPath+"/api/db/inventory/fuel/"+selectedItems[0].id,
			                    type:"delete",
			                    success:function (data, textStatus, jqXHR) {
			                    	NProgress.done();
			                    	 var d = dialog({
			                             content:'<div class="king-notice-box king-notice-success"><p class="king-notice-text">'+iMsg.removeSuccess+'</p></div>'
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
			                    	var msg=iMsg.removeFail;
			                    	if(status==403){
			                    		msg=iMsg.onlyPermitOwnDelete;
			                    	}else if(status==404){
			                    		msg=iMsg.userNotExist;
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
				        cancelValue: iMsg.cancel,
				        cancel: function() {}
				    }).showModal();
		        }else{
		            //还没有复选功能
		        }
		    }
    	};

	var $wrapper = $("#div-table-container");
	var $table = $("#table-fuel");
	var _table = $table.dataTable($.extend(true,{},CONSTANT.DATA_TABLES.DEFAULT_OPTION, {
        ajax : function(data, callback, settings) {//ajax配置为function,手动调用异步查询
            //手动控制遮罩
            $wrapper.spinModal("small");
            NProgress.start();
            //封装请求参数
            var param = fuelManage.getQueryCondition(data);
            $.ajax({
                    type: "get",
                    url: ctxPath+"/api/db/inventory/fuel",
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
                            content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+iMsg.queryFail+'</p></div>'
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
                data: "fuelType",
                className : "ellipsis",
                render: CONSTANT.DATA_TABLES.RENDER.ELLIPSIS,
                width: "150px"
            },
            {
                data : "unit",
                className : "ellipsis",
                render: CONSTANT.DATA_TABLES.RENDER.ELLIPSIS,
                width: "50px"
            },
            {
            	data : "cost",
            	className : "ellipsis", //文字过长时用省略号显示，CSS实现
                render : CONSTANT.DATA_TABLES.RENDER.ELLIPSIS, //会显示省略号的列，需要用title属性实现划过时显示全部文本的效果
                width : "80px"
            },
            {
            	data : "currencyType",
            	className : "ellipsis", //文字过长时用省略号显示，CSS实现
            	render : CONSTANT.DATA_TABLES.RENDER.ELLIPSIS, //会显示省略号的列，需要用title属性实现划过时显示全部文本的效果
            	width : "70px"
            },
            {
            	data: "costSource",
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
        		var $btnEdit = $('<a class="king-btn king-info king-radius king-btn-mini btn-edit"><i class="fa fa-edit btn-icon"></i> '+iMsg.edit+'</a>');
        		var $btnDel = $('<a class="king-btn king-danger king-radius king-btn-mini btn-del"><i class="fa fa-close btn-icon"></i> '+iMsg.remove+'</a>');
        		$('td', row).eq(16).append($btnEdit).append($btnDel);
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
	// 添加按钮
	$("#btn-add").click(function(){
		fuelManage.currentItem = null;
		fuelManage.addItemInit();
    });
	// 具体字段查询
    $("#form-fuel-query").submit(function(){
    	_table.order([]);
        _table.draw();
        return false;
    });	
    // 刷新按钮
    $("#btn-reset-refresh").click(function(){
    	$("#form-fuel-query")[0].reset();
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
        fuelManage.currentItem = item;
        fuelManage.editItemInit(item);
    }).on("click",".btn-del",function() {
        //点击删除按钮
        var item = _table.row($(this).closest('tr')).data();
        fuelManage.deleteItem([item]);
    });
    // 材料表单校验规则
    var validator = $("#form-fuel").validate({
        errorClass: 'text-danger',
    	rules:{
    		fuelType:{
    			required:true,
    			notFirstLastSpace:true
    		},
    		cost:{
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
    			fuelManage.editItemSubmit();
    		}else{
    			fuelManage.addItemSubmit();
    		}
    	},
    	onkeyup:false
    });
});

