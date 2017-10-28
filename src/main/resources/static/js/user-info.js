$(function(){
	var userInfoManager={
		getUserInfo:function(){
			$.ajax({
		        url:ctxPath+"/api/user",
		        type:"get",
		        success:function (data, textStatus, jqXHR) {
		        	userInfoManager.showUserInfo(data);
		        },
		        error:function (XMLHttpRequest, textStatus, errorThrown) {
		        	var status=XMLHttpRequest.status;
		        	var msg="个人信息获取失败";
		        	if(status==401){
		        		msg="您已退出登录，请重新登录";
		        	}
		        	var d = dialog({
		                 content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+msg+'</p></div>'
		             });
		             d.show();
		             setTimeout(function() {
		                 d.close().remove();
		             }, 1500);
		        }
		    });
		},
		showUserInfo:function(data){
			if(data){
				$("#username1").text(data.username||"");
				$("#chname1").text(data.chname||"");
				$("#phone1").text(data.phone||"");
				$("#company1").text(data.company||"");
				$("#address1").text(data.address||"");
			}else {
				$("#username1").empty();
				$("#chname1").empty();
				$("#phone1").empty();
				$("#company1").empty();
				$("#address1").empty();
			}
		},
		editUserInfoInit:function(){
			validator.resetForm();
	        $("#form-userInfo")[0].reset();
	        $("#username").val($("#username1").text());
	        $("#chname").val($("#chname1").text());
	        $("#phone").val($("#phone1").text());
	        $("#company").val($("#company1").text());
	        $("#address").val($("#address1").text());
	 		$("#modal-default").modal("show");
		},
		editUserInfoSubmit:function(){
			var param=$("#form-userInfo").serializeJSON();
            $.ajax({
                url:ctxPath+"/api/user",
                type:"put",
                contentType:"application/json;charset=utf-8",
                data: JSON.stringify(param),
                success:function (data, textStatus, jqXHR) {
                	$("#modal-default").modal("hide");
                	var d = dialog({
                        content:'<div class="king-notice-box king-notice-success"><p class="king-notice-text">修改用户成功</p></div>'
                    });
                    d.show();
                    setTimeout(function() {
                        d.close().remove();
                        userInfoManager.showUserInfo(param);
                    }, 1500);
                },
                error:function (XMLHttpRequest, textStatus, errorThrown) {
                	var status=XMLHttpRequest.status;
                	var msg="修改用户失败";
                	if(status==400){
                		msg="您的输入格式有误";
                	}else if(status==422){
                		msg="该用户名已存在";
                	}else if(status=401){
                		msg="您已退出登录，请重新登录";
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
		}
	}
	
	userInfoManager.getUserInfo();
	
	$("#btn-edit-userinfo").click(function(){
		userInfoManager.editUserInfoInit();
	});
	
	//用户表单校验规则
    var validator = $("#form-userInfo").validate({
        errorClass: 'text-danger',
    	rules:{
    		username:{
    			required:true,
    			usernameRegex:true,
    			remote:{
    				url:ctxPath+"/api/common/user/check/username",
    				data:{
    					username:function(){
    						return $("#username").val();
    					},
    					oldUsername:function(){
    						return $("#username1").text();
    					}
    				}
    			}
    		},
    		chname:{
    			required:true,
    			notFirstLastSpace:true
    		}
    	},
    	messages:{
    		username:{
    			remote:"该用户名已存在"
    		}
    	},
    	submitHandler:function(form){
    		userInfoManager.editUserInfoSubmit();
    	},
    	onkeyup:false
    });
    
    // 用户修改密码校验规则
    $("#form-password").validate({
	    errorClass: 'text-danger',
        rules:{
            oldPassword:{
            	required: true,
            	rangelength: [6,18]
            },
            newPassword:{
            	required: true,
            	rangelength: [6,18]
            },
            newPassword_confirm:{
            	required: true,
            	rangelength: [6,18],
            	equalTo: "#newPassword"
            }
        },
        messages:{
        	oldPassword:{
        		required:"请输入旧密码",
        		rangelength:$.validator.format("密码长度为{0}-{1}个字符")
        	},
            newPassword:{
            	required:"请输入新密码",
            	rangelength:$.validator.format("密码长度为{0}-{1}个字符")
            },
	        newPassword_confirm:{
	        	required:"请确认新密码",
	        	rangelength:$.validator.format("密码长度为{0}-{1}个字符"),
	        	equalTo: "两次密码输入不一致"
	        }
        },
        submitHandler:function(form){
        	var data=$("#form-password").serializeJSON();
        	delete data.newPassword_confirm;
	        $.ajax({
	            url:ctxPath+"/api/user/password",
	            type:"put",
	            contentType:"application/json;charset=utf-8",
	            data: JSON.stringify(data),
	            success:function (data, textStatus, jqXHR) {
	                var d = dialog({
	                	content:'<div class="king-notice-box king-notice-success"><p class="king-notice-text">修改密码成功</p></div>'
	                });
	                d.show();
	                setTimeout(function() {
	                    d.close().remove();
	                    $("#form-password")[0].reset();
	                }, 1500);
	            },
	            error:function (XMLHttpRequest, textStatus, errorThrown) {
	                var status=XMLHttpRequest.status;
	                var msg="修改密码失败";
	                if(status==403){
	                	msg="旧密码验证错误";
	                }else if(status==400){
	                	msg="您的输入格式有误";
	                }else if(status==401){
	                	msg="您已退出登录，请重新登录";
	                }
	                var d = dialog({
	                     content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+msg+'</p></div>'
	                 });
	                 d.show();
	                 setTimeout(function() {
	                     d.close().remove();
	                 }, 1500);
	            }
	        });
        },
        onkeyup:false
    });
	
	
});