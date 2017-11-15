$(function(){
	$("#step-inventory").hide();
	
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
		{id:4,text:"其它",density:0}
	];
	var cdLayerMaterial=[
		{id:1,text:"密级配沥青稳定碎石",density:2.3},
		{id:2,text:"开级配沥青稳定碎石",density:2.1},
		{id:3,text:"密级配水泥、石灰稳定碎石",density:2.3},
		{id:4,text:"开级配水泥、石灰稳定碎石",density:2.1},
		{id:5,text:"水泥、石灰稳定土",density:1.8},
		{id:6,text:"级配碎石",density:2.1}
	];
	var cdConcreteSurfaceMaterial=[
		{id:1,text:"苏混凝土路面",density:2.4},
		{id:2,text:"配筋式混凝土路面",density:2.4}
	];
	
	var $roadType=$("#roadType").select2({
		data:cdRoadType,
		minimumResultsForSearch:-1,
		language:iMsg.select2LangCode
	});
	var $topLayerAsphaltType=$("#topLayerAsphaltType").select2({
		data:cdAsphaltType,
		minimumResultsForSearch:-1,
		language:iMsg.select2LangCode
	});
	var $asphaltTopLayerMaterial=$("#asphaltTopLayerMaterial").select2({
		data:cdAsphaltSurfaceMaterial,
		minimumResultsForSearch:-1,
		language:iMsg.select2LangCode
	});
	var $middleLayerAsphaltType=$("#middleLayerAsphaltType").select2({
		data:cdAsphaltType,
		minimumResultsForSearch:-1,
		language:iMsg.select2LangCode
	});
	var $asphaltMiddleLayerMaterial=$("#asphaltMiddleLayerMaterial").select2({
		data:cdAsphaltSurfaceMaterial,
		minimumResultsForSearch:-1,
		language:iMsg.select2LangCode
	});
	var $belowLayerAsphaltType=$("#belowLayerAsphaltType").select2({
		data:cdAsphaltType,
		minimumResultsForSearch:-1,
		language:iMsg.select2LangCode
	});
	var $asphaltBelowLayerMaterial=$("#asphaltBelowLayerMaterial").select2({
		data:cdAsphaltSurfaceMaterial,
		minimumResultsForSearch:-1,
		language:iMsg.select2LangCode
	});
	// 基层
	var $baseLayerMaterial=$("#baseLayerMaterial").select2({
		data:cdLayerMaterial,
		minimumResultsForSearch:-1,
		language:"zh-CN"
	});
	var $baseLayerAsphaltType=$("#baseLayerAsphaltType").select2({
		data:cdAsphaltType,
		minimumResultsForSearch:-1,
		language:iMsg.select2LangCode
	});
	// 底基层
	var $bottomBaseLayerMaterial=$("#bottomBaseLayerMaterial").select2({
		data:cdLayerMaterial,
		minimumResultsForSearch:-1,
		language:iMsg.select2LangCode
	});
	var $bottomBaseLayerAsphaltType=$("#bottomBaseLayerAsphaltType").select2({
		data:cdAsphaltType,
		minimumResultsForSearch:-1,
		language:iMsg.select2LangCode
	});
	// 垫层
	var $cushionLayerMaterial=$("#cushionLayerMaterial").select2({
		data:cdLayerMaterial,
		minimumResultsForSearch:-1,
		language:iMsg.select2LangCode
	});
	var $cushionLayerAsphaltType=$("#cushionLayerAsphaltType").select2({
		data:cdAsphaltType,
		minimumResultsForSearch:-1,
		language:iMsg.select2LangCode
	});
	// 显示各种原材料列表
	function formatRepo(repo) {
	  if (repo.loading) {
		  return repo.text;
	  }
	  var markup="<div class='row'><div class='col-sm-6'><strong>"+repo.materialName+"</strong></div>"+
	  	"<div class='col-sm-6'>来源："+(repo.dataSource||'（空）')+"</div></div>"+
	  	"<div class='row'><div class='col-sm-6'>成本："+(repo.cost||'（空）')+"</div>"+
	  	"<div class='col-sm-6'>能耗："+(repo.energyConsume!=null?repo.energyConsume.toExponential(1):'（空）')+"</div></div>"+
	  	"<div class='row'><div class='col-sm-3'>CO<sub>2</sub>："+(repo.emissionCo2!=null?repo.emissionCo2.toExponential(1):'（空）')+"</div>"+
	  	"<div class='col-sm-3'>CH<sub>4</sub>："+(repo.emissionCh4!=null?repo.emissionCh4.toExponential(1):'（空）')+"</div>"+
	  	"<div class='col-sm-3'>N<sub>2</sub>O："+(repo.emissionN2o!=null?repo.emissionN2o.toExponential(1):'（空）')+"</div>"+
	  	"<div class='col-sm-3'>CO："+(repo.emissionCo!=null?repo.emissionCo.toExponential(1):'（空）')+"</div></div>"+
	  	"<div class='row'><div class='col-sm-3'>SO<sub>2</sub>："+(repo.emissionSo2!=null?repo.emissionSo2.toExponential(1):'（空）')+"</div>"+
	  	"<div class='col-sm-3'>NO<sub>x</sub>："+(repo.emissionNox!=null?repo.emissionNox.toExponential(1):'（空）')+"</div>"+
	  	"<div class='col-sm-3'>Pb："+(repo.emissionPb!=null?repo.emissionPb.toExponential(1):'（空）')+"</div>"+
	  	"<div class='col-sm-3'>Zn："+(repo.emissionZn!=null?repo.emissionZn.toExponential(1):'（空）')+"</div></div>";
	  return markup;
	}
	function formatRepoSelection(repo) {
		if(repo.materialName){
			return repo.materialName+' （来源：'+(repo.dataSource||'（空）')+'）';
		}
		return repo.text;
	}
	$("#gravel").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/materials",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					materialCategoryCd:1
				};
			},
			processResults:function(data,params){
				params.page=params.page||1;
				return {
					results:data.list,
					pagination:{
						more:data.hasNextPage
					}
				};
			},
			cache:true
		},
		placeholder:'请选择一种材料',
		allowClear:true,
		minimumResultsForSearch:-1,
		language:"zh-CN",
		escapeMarkup: function (markup) { return markup; },
		templateResult: formatRepo,
		templateSelection: formatRepoSelection
	});
	$("#ordinaryAsphalt").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/materials",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					materialCategoryCd:2
				};
			},
			processResults:function(data,params){
				params.page=params.page||1;
				return {
					results:data.list,
					pagination:{
						more:data.hasNextPage
					}
				};
			},
			cache:true
		},
		placeholder:'请选择一种材料',
		allowClear:true,
		minimumResultsForSearch:-1,
		language:"zh-CN",
		escapeMarkup: function (markup) { return markup; },
		templateResult: formatRepo,
		templateSelection: formatRepoSelection
	});
	$("#modifiedAsphalt").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/materials",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					materialCategoryCd:2
				};
			},
			processResults:function(data,params){
				params.page=params.page||1;
				return {
					results:data.list,
					pagination:{
						more:data.hasNextPage
					}
				};
			},
			cache:true
		},
		placeholder:'请选择一种材料',
		allowClear:true,
		minimumResultsForSearch:-1,
		language:"zh-CN",
		escapeMarkup: function (markup) { return markup; },
		templateResult: formatRepo,
		templateSelection: formatRepoSelection
	});
	$("#highViscosityAsphalt").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/materials",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					materialCategoryCd:2
				};
			},
			processResults:function(data,params){
				params.page=params.page||1;
				return {
					results:data.list,
					pagination:{
						more:data.hasNextPage
					}
				};
			},
			cache:true
		},
		placeholder:'请选择一种材料',
		allowClear:true,
		minimumResultsForSearch:-1,
		language:"zh-CN",
		escapeMarkup: function (markup) { return markup; },
		templateResult: formatRepo,
		templateSelection: formatRepoSelection
	});
	$("#cement").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/materials",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					materialCategoryCd:8
				};
			},
			processResults:function(data,params){
				params.page=params.page||1;
				return {
					results:data.list,
					pagination:{
						more:data.hasNextPage
					}
				};
			},
			cache:true
		},
		placeholder:'请选择一种材料',
		allowClear:true,
		minimumResultsForSearch:-1,
		language:"zh-CN",
		escapeMarkup: function (markup) { return markup; },
		templateResult: formatRepo,
		templateSelection: formatRepoSelection
	});
	$("#lime").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/materials",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					materialCategoryCd:5
				};
			},
			processResults:function(data,params){
				params.page=params.page||1;
				return {
					results:data.list,
					pagination:{
						more:data.hasNextPage
					}
				};
			},
			cache:true
		},
		placeholder:'请选择一种材料',
		allowClear:true,
		minimumResultsForSearch:-1,
		language:"zh-CN",
		escapeMarkup: function (markup) { return markup; },
		templateResult: formatRepo,
		templateSelection: formatRepoSelection
	});
	
	$baseLayerMaterial.on("select2:select",function(e){
		switch (e.params.data.id) {
		case "1":case "2":
			$("#baseLayerMaterial-CementLime").hide();
			$("#baseLayerMaterial-asphalt").show();
			break;
		case "3":case "4":case "5":
			$("#baseLayerMaterial-asphalt").hide();
			$("#baseLayerMaterial-CementLime").show();
			break;
		case "6":
			$("#baseLayerMaterial-asphalt").hide();
			$("#baseLayerMaterial-CementLime").hide();
			break;
		default:
			break;
		}
	});
	$bottomBaseLayerMaterial.on("select2:select",function(e){
		switch (e.params.data.id) {
		case "1":case "2":
			$("#bottomBaseLayerMaterial-CementLime").hide();
			$("#bottomBaseLayerMaterial-asphalt").show();
			break;
		case "3":case "4":case "5":
			$("#bottomBaseLayerMaterial-asphalt").hide();
			$("#bottomBaseLayerMaterial-CementLime").show();
			break;
		case "6":
			$("#bottomBaseLayerMaterial-asphalt").hide();
			$("#bottomBaseLayerMaterial-CementLime").hide();
			break;
		default:
			break;
		}
	});
	$cushionLayerMaterial.on("select2:select",function(e){
		switch (e.params.data.id) {
		case "1":case "2":
			$("#cushionLayerMaterial-CementLime").hide();
			$("#cushionLayerMaterial-asphalt").show();
			break;
		case "3":case "4":case "5":
			$("#cushionLayerMaterial-asphalt").hide();
			$("#cushionLayerMaterial-CementLime").show();
			break;
		case "6":
			$("#cushionLayerMaterial-asphalt").hide();
			$("#cushionLayerMaterial-CementLime").hide();
			break;
		default:
			break;
		}
	});
	
	$roadType.on("select2:select",function(e){
		switch (e.params.data.id) {
		case "1":
			$("#concreteSurface").hide();
			$("#shopBrickSurface").hide();
			$("#asphaltSurface").show();
			break;
		case "2":
			$("#asphaltSurface").hide();
			$("#shopBrickSurface").hide();
			$("#concreteSurface").show();
			break;
		case "3":
			$("#asphaltSurface").hide();
			$("#concreteSurface").hide();
			$("#shopBrickSurface").show();
			break;
		default:
			break;
		}
	});
	
	var tool={
		stepGo:function(now,next){
			$("#step"+now).removeClass("current").addClass("done");
			$("#step"+next).addClass("current");
		},
		stepBack:function(now,priv){
			$("#step"+now).removeClass("current");
			$("#step"+priv).removeClass("done").addClass("current");
		}
	}
	
	var materialList=[];
	
	var validator = $("#form-input").validate({
		errorClass: 'text-danger',
    	rules:{
    		roadLength:{
    			required:true,
    			number:true,
    			min:0
    		},
    		roadWidth:{
    			required:true,
    			number:true,
    			min:0
    		},
    		asphaltTopLayerThickness:{
    			required:true,
    			number:true,
    			min:0
    		},
    		asphaltTopLayerWhetstoneRatio:{
    			required:true,
    			number:true,
    			range:[0,100]
    		},
    		asphaltMiddleLayerThickness:{
    			required:true,
    			number:true,
    			min:0
    		},
    		asphaltMiddleLayerWhetstoneRatio:{
    			required:true,
    			number:true,
    			range:[0,100]
    		},
    		asphaltBelowLayerThickness:{
    			required:true,
    			number:true,
    			min:0
    		},
    		asphaltBelowLayerWhetstoneRatio:{
    			required:true,
    			number:true,
    			range:[0,100]
    		},
    		baseLayerThickness:{
    			required:true,
    			number:true,
    			min:0
    		},
    		baseLayerWhetstoneRatio:{
    			required:true,
    			number:true,
    			range:[0,100]
    		},
    		baseLayerCement:{
    			required:true,
    			number:true,
    			range:[0,100]
    		},
    		baseLayerLime:{
    			required:true,
    			number:true,
    			range:[0,100]
    		},
    		bottomBaseLayerThickness:{
    			required:true,
    			number:true,
    			min:0
    		},
    		bottomBaseLayerWhetstoneRatio:{
    			required:true,
    			number:true,
    			range:[0,100]
    		},
    		bottomBaseLayerCement:{
    			required:true,
    			number:true,
    			range:[0,100]
    		},
    		bottomBaseLayerLime:{
    			required:true,
    			number:true,
    			range:[0,100]
    		},
    		cushionLayerThickness:{
    			required:true,
    			number:true,
    			min:0
    		},
    		cushionLayerWhetstoneRatio:{
    			required:true,
    			number:true,
    			range:[0,100]
    		},
    		cushionLayerCement:{
    			required:true,
    			number:true,
    			range:[0,100]
    		},
    		cushionLayerLime:{
    			required:true,
    			number:true,
    			range:[0,100]
    		}
    	},
    	errorPlacement: function(error, element) {
    		if (element.parent().hasClass("input-group")) {
    			error.appendTo(element.parent().parent());
    		} else {
    			error.appendTo(element.parent());
    		}
		},
    	submitHandler:function(form){
    		var area=$("#roadLength").val()*$("#roadWidth").val();
    		if($roadType.val()==1){
    			var topWeight=area*$("#asphaltTopLayerThickness").val()*$asphaltTopLayerMaterial.select2("data")[0].density;
    			var middleWeight=area*$("#asphaltMiddleLayerThickness").val()*$asphaltMiddleLayerMaterial.select2("data")[0].density;
    			var belowWeight=area*$("#asphaltBelowLayerThickness").val()*$asphaltBelowLayerMaterial.select2("data")[0].density;
    			var baseWeight=area*$("#baseLayerThickness").val()*$baseLayerMaterial.select2("data")[0].density;
    			var bottomBaseWeight=area*$("#bottomBaseLayerThickness").val()*$bottomBaseLayerMaterial.select2("data")[0].density;
    			var cushionWeight=area*$("#cushionLayerThickness").val()*$cushionLayerMaterial.select2("data")[0].density;
    			// 上、中、下面层碎石
    			var gravel=topWeight/(1+$("#asphaltTopLayerWhetstoneRatio").val()/100)+middleWeight/(1+$("#asphaltMiddleLayerWhetstoneRatio").val()/100)+belowWeight/(1+$("#asphaltBelowLayerWhetstoneRatio").val()/100);
    			var ordinaryAsphalt=0;
    			var modifiedAsphalt=0;
    			var highViscosityAsphalt=0;
    			var cement=0;
    			var lime=0;
    			// 基、底基、垫层碎石和沥青
    			switch ($baseLayerMaterial.select2("data")[0].id) {
    			case "1":case "2":
    				gravel+=baseWeight/(1+$("#baseLayerWhetstoneRatio").val()/100);
    				switch ($baseLayerAsphaltType.select2("data")[0].id) {
    				case "1":
    					ordinaryAsphalt+=baseWeight*$("#baseLayerWhetstoneRatio").val()/(100+parseFloat($("#baseLayerWhetstoneRatio").val()));
    					break;
    				case "2":
    					modifiedAsphalt+=baseWeight*$("#baseLayerWhetstoneRatio").val()/(100+parseFloat($("#baseLayerWhetstoneRatio").val()));
    					break;
    				case "3":
    					highViscosityAsphalt+=baseWeight*$("#baseLayerWhetstoneRatio").val()/(100+parseFloat($("#baseLayerWhetstoneRatio").val()));
    					break;
    				default:
    					break;
    				}
    				break;
    			case "3":case "4":
    				gravel+=baseWeight/(1+$("#baseLayerCement").val()/100+$("#baseLayerLime").val()/100);
    				cement+=baseWeight*$("#baseLayerCement").val()/100/(1+$("#baseLayerCement").val()/100+$("#baseLayerLime").val()/100);
    				lime+=baseWeight*$("#baseLayerLime").val()/100/(1+$("#baseLayerCement").val()/100+$("#baseLayerLime").val()/100);
    				break;
    			case "5":
    				cement+=baseWeight*$("#baseLayerCement").val()/100/(1+$("#baseLayerCement").val()/100+$("#baseLayerLime").val()/100);
    				lime+=baseWeight*$("#baseLayerLime").val()/100/(1+$("#baseLayerCement").val()/100+$("#baseLayerLime").val()/100);
    				break;
    			case "6":
    				gravel+=baseWeight;
    				break;
    			default:
    				break;
    			}
    			switch ($bottomBaseLayerMaterial.select2("data")[0].id) {
    			case "1":case "2":
    				gravel+=bottomBaseWeight/(1+$("#bottomBaseLayerWhetstoneRatio").val()/100);
    				switch ($bottomBaseLayerAsphaltType.select2("data")[0].id) {
    				case "1":
    					ordinaryAsphalt+=bottomBaseWeight*$("#bottomBaseLayerWhetstoneRatio").val()/(100+parseFloat($("#bottomBaseLayerWhetstoneRatio").val()));
    					break;
    				case "2":
    					modifiedAsphalt+=bottomBaseWeight*$("#bottomBaseLayerWhetstoneRatio").val()/(100+parseFloat($("#bottomBaseLayerWhetstoneRatio").val()));
    					break;
    				case "3":
    					highViscosityAsphalt+=bottomBaseWeight*$("#bottomBaseLayerWhetstoneRatio").val()/(100+parseFloat($("#bottomBaseLayerWhetstoneRatio").val()));
    					break;
    				default:
    					break;
    				}
    				break;
    			case "3":case "4":
    				gravel+=bottomBaseWeight/(1+$("#bottomBaseLayerCement").val()/100+$("#bottomBaseLayerLime").val()/100);
    				cement+=bottomBaseWeight*$("#bottomBaseLayerCement").val()/100/(1+$("#bottomBaseLayerCement").val()/100+$("#bottomBaseLayerLime").val()/100);
    				lime+=bottomBaseWeight*$("#bottomBaseLayerLime").val()/100/(1+$("#bottomBaseLayerCement").val()/100+$("#bottomBaseLayerLime").val()/100);
    				break;
    			case "5":
    				cement+=bottomBaseWeight*$("#bottomBaseLayerCement").val()/100/(1+$("#bottomBaseLayerCement").val()/100+$("#bottomBaseLayerLime").val()/100);
    				lime+=bottomBaseWeight*$("#bottomBaseLayerLime").val()/100/(1+$("#bottomBaseLayerCement").val()/100+$("#bottomBaseLayerLime").val()/100);
    				break;
    			case "6":
    				gravel+=bottomBaseWeight;
    				break;
    			default:
    				break;
    			}
    			switch ($cushionLayerMaterial.select2("data")[0].id) {
    			case "1":case "2":
    				gravel+=cushionWeight/(1+$("#cushionLayerWhetstoneRatio").val()/100);
    				switch ($cushionLayerAsphaltType.select2("data")[0].id) {
    				case "1":
    					ordinaryAsphalt+=cushionWeight*$("#cushionLayerWhetstoneRatio").val()/(100+parseFloat($("#cushionLayerWhetstoneRatio").val()));
    					break;
    				case "2":
    					modifiedAsphalt+=cushionWeight*$("#cushionLayerWhetstoneRatio").val()/(100+parseFloat($("#cushionLayerWhetstoneRatio").val()));
    					break;
    				case "3":
    					highViscosityAsphalt+=cushionWeight*$("#cushionLayerWhetstoneRatio").val()/(100+parseFloat($("#cushionLayerWhetstoneRatio").val()));
    					break;
    				default:
    					break;
    				}
    				break;
    			case "3":case "4":
    				gravel+=cushionWeight/(1+$("#cushionLayerCement").val()/100+$("#cushionLayerLime").val()/100);
    				cement+=cushionWeight*$("#cushionLayerCement").val()/100/(1+$("#cushionLayerCement").val()/100+$("#cushionLayerLime").val()/100);
    				lime+=cushionWeight*$("#cushionLayerLime").val()/100/(1+$("#cushionLayerCement").val()/100+$("#cushionLayerLime").val()/100);
    				break;
    			case "5":
    				cement+=cushionWeight*$("#cushionLayerCement").val()/100/(1+$("#cushionLayerCement").val()/100+$("#cushionLayerLime").val()/100);
    				lime+=cushionWeight*$("#cushionLayerLime").val()/100/(1+$("#cushionLayerCement").val()/100+$("#cushionLayerLime").val()/100);
    				break;
    			case "6":
    				gravel+=cushionWeight;
    				break;
    			default:
    				break;
    			}
    			// 上、中、下面层沥青
    			switch ($topLayerAsphaltType.select2("data")[0].id) {
    			case "1":
    				ordinaryAsphalt+=topWeight*$("#asphaltTopLayerWhetstoneRatio").val()/(100+parseFloat($("#asphaltTopLayerWhetstoneRatio").val()));
    				break;
    			case "2":
    				modifiedAsphalt+=topWeight*$("#asphaltTopLayerWhetstoneRatio").val()/(100+parseFloat($("#asphaltTopLayerWhetstoneRatio").val()));
    				break;
    			case "3":
    				highViscosityAsphalt+=topWeight*$("#asphaltTopLayerWhetstoneRatio").val()/(100+parseFloat($("#asphaltTopLayerWhetstoneRatio").val()));
    				break;
    			default:
    				break;
    			}
    			switch ($middleLayerAsphaltType.select2("data")[0].id) {
    			case "1":
    				ordinaryAsphalt+=middleWeight*$("#asphaltMiddleLayerWhetstoneRatio").val()/(100+parseFloat($("#asphaltMiddleLayerWhetstoneRatio").val()));
    				break;
    			case "2":
    				modifiedAsphalt+=middleWeight*$("#asphaltMiddleLayerWhetstoneRatio").val()/(100+parseFloat($("#asphaltMiddleLayerWhetstoneRatio").val()));
    				break;
    			case "3":
    				highViscosityAsphalt+=middleWeight*$("#asphaltMiddleLayerWhetstoneRatio").val()/(100+parseFloat($("#asphaltMiddleLayerWhetstoneRatio").val()));
    				break;
    			default:
    				break;
    			}
    			switch ($belowLayerAsphaltType.select2("data")[0].id) {
    			case "1":
    				ordinaryAsphalt+=belowWeight*$("#asphaltBelowLayerWhetstoneRatio").val()/(100+parseFloat($("#asphaltBelowLayerWhetstoneRatio").val()));
    				break;
    			case "2":
    				modifiedAsphalt+=belowWeight*$("#asphaltBelowLayerWhetstoneRatio").val()/(100+parseFloat($("#asphaltBelowLayerWhetstoneRatio").val()));
    				break;
    			case "3":
    				highViscosityAsphalt+=belowWeight*$("#asphaltBelowLayerWhetstoneRatio").val()/(100+parseFloat($("#asphaltBelowLayerWhetstoneRatio").val()));
    				break;
    			default:
    				break;
    			}
    			materialList=[];
    			$("#gravelSelect").hide();
    			$("#ordinaryAsphaltSelect").hide();
    			$("#modifiedAsphaltSelect").hide();
    			$("#highViscosityAsphaltSelect").hide();
    			$("#cementSelect").hide();
    			$("#limeSelect").hide();
    			if(gravel>0){
    				var item={materialMark:"gravel",materialName:"碎石集料",amount:gravel.toFixed(3)};
    				materialList.push(item);
    				$("#gravelSelect").show();
    			}
    			if(ordinaryAsphalt>0){
    				var item={materialMark:"ordinaryAsphalt",materialName:"普通沥青",amount:ordinaryAsphalt.toFixed(3)};
    				materialList.push(item);
    				$("#ordinaryAsphaltSelect").show();
    			}
    			if(modifiedAsphalt>0){
    				var item={materialMark:"modifiedAsphalt",materialName:"改性沥青",amount:modifiedAsphalt.toFixed(3)};
    				materialList.push(item);
    				$("#modifiedAsphaltSelect").show();
    			}
    			if(highViscosityAsphalt>0){
    				var item={materialMark:"highViscosityAsphalt",materialName:"高粘度沥青",amount:highViscosityAsphalt.toFixed(3)};
    				materialList.push(item);
    				$("#highViscosityAsphaltSelect").show();
    			}
    			if(cement>0){
    				var item={materialMark:"cement",materialName:"水泥",amount:cement.toFixed(3)};
    				materialList.push(item);
    				$("#cementSelect").show();
    			}
    			if(lime>0){
    				var item={materialMark:"lime",materialName:"石灰",amount:lime.toFixed(3)};
    				materialList.push(item);
    				$("#limeSelect").show();
    			}
    			var _html='';
                var tpl=$('#tpl-materialInventoryTable').html();
                for (var i=0,len=materialList.length; i < len; i++){
                    var item = materialList[i];
                    _html += renderTpl(tpl, item);
                }
                $('#materialInventoryTable tbody').html(_html);
    			
    			
    		}
    		
    		tool.stepGo(1,2);
    		$("#step-input").hide();
    		$("#step-inventory").show();
    	},
    	onkeyup:false
	});
	
	$("#inventoryMaterialForm").submit(function(){
		if(materialList.length>0){
			for (var i = 0; i < materialList.length; i++) {
				var item=materialList[i];
				var res=$("#"+item.materialMark).select2("data")[0];
				if(res==undefined){
					var d = dialog({
                        content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请您选择相应材料'+'</p></div>'
                    });
                    d.show();
                    setTimeout(function() {
                        d.close().remove();
                    }, 1500);
                    return false;
				}else{
					var amount=item.amount;
					if(res.cost!=null){
						if(res.cost.indexOf("~")!=-1){
					    	var nums=res.cost.split("~");
					    	item.cost=(nums[0]*amount).toFixed(3)+"~"+(nums[1]*amount).toFixed(3);
				    	}else{
				    		item.cost=res.cost*amount;
				    	}
					}
					if(res.energyConsume!=null){
						item.energyConsume=(res.energyConsume*amount).toExponential(2);
					}
					if(res.emissionCo2!=null){
						item.emissionCo2=(res.emissionCo2*amount).toExponential(2);
					}
					if(res.emissionCh4!=null){
						item.emissionCh4=(res.emissionCh4*amount).toExponential(2);
					}
					if(res.emissionN2o!=null){
						item.emissionN2o=(res.emissionN2o*amount).toExponential(2);
					}
					if(res.emissionCo!=null){
						item.emissionCo=(res.emissionCo*amount).toExponential(2);
					}
					if(res.emissionSo2!=null){
						item.emissionSo2=(res.emissionSo2*amount).toExponential(2);
					}
					if(res.emissionNox!=null){
						item.emissionNox=(res.emissionNox*amount).toExponential(2);
					}
					if(res.emissionPb!=null){
						item.emissionPb=(res.emissionPb*amount).toExponential(2);
					}
					if(res.emissionZn!=null){
						item.emissionZn=(res.emissionZn*amount).toExponential(2);
					}
				}
			}
			var _html='';
            var tpl=$('#tpl-materialInventoryTable').html();
            for (var i=0,len=materialList.length; i < len; i++){
                var item = materialList[i];
                _html += renderTpl(tpl, item);
            }
            $('#materialInventoryTable tbody').html(_html);
			
			
		}
		return false;
	});
	
	$("#inventory-lastStep").click(function(){
		tool.stepBack(2,1);
		$("#step-inventory").hide();
		$("#step-input").show();
	});
});

function renderTpl(str, cfg) {
    var re = /(#(.+?)#)/g;
    return str.replace(re, function() {
//        var val = cfg[arguments[2]]+'';
//        if(val=='undefined'||val=='null') {
//            val = '';
//        }
//        return val;
    	return cfg[arguments[2]]||'';
    });
}