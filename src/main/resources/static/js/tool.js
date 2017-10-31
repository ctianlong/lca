$(function(){
	var tool={
		stepGo:function(now,next){
			$("#step"+now).removeClass("current").addClass("done");
			$("#step"+next).addClass("current");
		},
		stepBack:function(now,priv){
			$("#step"+now).removeClass("current");
			$("#step"+next).removeClass("done").addClass("current");
		}
	}
	$("#step-inventory").hide();
	$("#form-input").submit(function(){
		tool.stepGo(1,2);
		$("#step-input").slideUp("slow");
		$("#step-inventory").slideDown("slow");
		return false;
	});
});