$(function(){
    	// 用户登录表单校验规则
    	$("#form-login").validate({
    		errorClass: 'text-danger',
            errorPlacement: function(error, element) {
                error.appendTo(element.parent().prev());  
            },
            rules:{
                username:{
                    required:true,
                    usernameRegex:true
                },
                password:{
                    required: true
                }
            },
            messages:{
                username:{
                    required:"请输入用户名"
                },
                password:{
                    required:"请输入密码"
                }
            },
            onkeyup:false
    	});
    	
    	// 用户注册表单校验规则
   	    $("#form-register").validate({
   	        errorClass: 'text-danger',
		   	errorPlacement: function(error, element) {
		   		error.appendTo(element.parent().prev());  
		   	},
   	        rules:{
   	            username:{
   	                required:true,
   	                usernameRegex:true,
   	                remote:ctxPath+"/api/common/user/check/username"
   	            },
   	            chname:{
   	            	required:true,
   	            	notFirstLastSpace:true
   	            },
   	            password:{
   	            	required: true,
   	            	rangelength: [6,18]
   	            },
   	            password_confirm:{
   	            	required: true,
   	            	rangelength: [6,18],
                    equalTo: "#password"
   	            }
   	        },
   	        messages:{
   	            username:{
   	            	required:"请输入用户名",
   	                remote:"该用户名已存在"
   	            },
   	            chname:{
   	            	required:"请输入真实姓名"
   	            },
   	            password:{
   	            	required:"请输入新密码",
   	            	rangelength:$.validator.format("密码长度为{0}-{1}个字符")
   	            },
	   	        password_confirm:{
	   	        	required:"请确认新密码",
	   	        	rangelength:$.validator.format("密码长度为{0}-{1}个字符"),
	   	        	equalTo: "两次密码输入不一致"
	            }
   	        },
   	        submitHandler:function(form){
   	        	var data=$("#form-register").serializeJSON();
   	        	delete data.password_confirm;
                $.ajax({
                    url:ctxPath+"/api/common/user/registerAndLogin",
                    type:"post",
                    contentType:"application/json;charset=utf-8",
                    data: JSON.stringify(data),
                    success:function (data, textStatus, jqXHR) {
                    	var redirectUrl=data.redirectUrl;
                        var d = dialog({
                        	content:'<div class="king-notice3 king-notice-success"><span class="king-notice-img"></span><div class="king-notice-text"><p class="f24">注册成功</p><p class="f12"><span class="king-notice3-color">3秒</span>后跳转至应用页面</p></div></div>',
                        	width:260
                        });
                        d.show();
                        setTimeout(function() {
                            d.close().remove();
                            $(location).prop('href',redirectUrl);
                        }, 3000);
                    },
                    error:function (XMLHttpRequest, textStatus, errorThrown) {
                        var status=XMLHttpRequest.status;
                        var msg="注册用户失败";
                        if(status==400){
                            msg="您的输入格式有误";
                        }else if(status==422){
                            msg="该用户名已存在";
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