$(function(){
	var cdRoadType=[
		{id:1,text:"沥青路面"},
		{id:2,text:"混凝土路面"},
		{id:3,text:"铺砖路面"},
		{id:4,text:"其它"}
	];
	var cdAsphaltType=[
		{id:1,text:"普通沥青"},
		{id:2,text:"改性沥青"},
		{id:3,text:"高粘度沥青"}
	];
	var cdAsphaltSurfaceMaterial=[
		{id:1,text:"开级配沥青磨耗层(OGFC)",density:2.1},
		{id:2,text:"沥青玛蹄脂面层(SMA)",density:2.45},
		{id:3,text:"密级配沥青混合料(AC)",density:2.35},
		{id:4,text:"其它"}
	];
	
	
	
	$("#roadType").select2({
		data:cdRoadType,
		minimumResultsForSearch:-1,
		language:"zh-CN"
	});
	$("#topLayerAsphaltType").select2({
		data:cdAsphaltType,
		minimumResultsForSearch:-1,
		language:"zh-CN"
	});
	$("#asphaltTopLayerMaterial").select2({
		data:cdAsphaltSurfaceMaterial,
		minimumResultsForSearch:-1,
		language:"zh-CN"
	});
	$("#middleLayerAsphaltType").select2({
		data:cdAsphaltType,
		minimumResultsForSearch:-1,
		language:"zh-CN"
	});
	$("#asphaltMiddleLayerMaterial").select2({
		data:cdAsphaltSurfaceMaterial,
		minimumResultsForSearch:-1,
		language:"zh-CN"
	});
	$("#belowLayerAsphaltType").select2({
		data:cdAsphaltType,
		minimumResultsForSearch:-1,
		language:"zh-CN"
	});
	$("#asphaltBelowLayerMaterial").select2({
		data:cdAsphaltSurfaceMaterial,
		minimumResultsForSearch:-1,
		language:"zh-CN"
	});
	$("#asphaltBaseLayerMaterial").select2({
		data:,
		minimumResultsForSearch:-1,
		language:"zh-CN"
	});
	
	
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