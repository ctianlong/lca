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
            submitHandler:function(form){
        	    NProgress.start();
                $.ajax({
                    url:ctxPath+"/api/common/user/login",
                    type:"post",
                    data: $("#form-login").serialize(),
                    success:function (data, textStatus, jqXHR) {
                    	NProgress.done();
                        $(location).prop("href",ctxPath+"/");
                    },
                    error:function (XMLHttpRequest, textStatus, errorThrown) {
                    	NProgress.done();
                        var status=XMLHttpRequest.status;
                        var msg="登录失败";
                        if(status==401){
                            msg="您输入的账号或密码有误";
                        }
                        $("#loginMsg").text(msg);
                    }
                });
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
   	        	NProgress.start();
                $.ajax({
                    url:ctxPath+"/api/common/user/registerAndLogin",
                    type:"post",
                    contentType:"application/json;charset=utf-8",
                    data: JSON.stringify(data),
                    success:function (data, textStatus, jqXHR) {
                    	NProgress.done();
                        $(location).prop("href",ctxPath+"/user?register");
                    },
                    error:function (XMLHttpRequest, textStatus, errorThrown) {
                    	NProgress.done();
                        var status=XMLHttpRequest.status;
                        var msg="注册用户失败";
                        if(status==400){
                            msg="您的输入格式有误";
                        }else if(status==422){
                            msg="该用户名已存在";
                        }else if(status==401){
                        	msg="注册成功，自动登录失败，请手动登录";
                        }
                        $("#registerMsg").text(msg);
                    }
                });
   	        },
   	        onkeyup:false
   	    });
});