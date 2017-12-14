$(function(){
	var cfc={
		bh:{
			t320:{
				lqhnt:{
					zl:{qy:60.36,cy:291.33,zy:12829.70,d:7929.60}
				},
				lqmtz:{qy:61.61,cy:339.69,zy:15031.81,d:9290.65}
			},
			t240:{
				lqhnt:{
					zl:{qy:68.69,cy:461.51,zy:12638.21,d:7875.35}
				},
				lqmtz:{qy:89.50,cy:540.45,zy:14864.26,d:9262.48}
			}
		},
		tp:{
			t320:{
				lqhnt:{
					zl:{cy:608.10}
				},
				lqmtz:{cy:929.43}
			},
			t240:{
				lqhnt:{
					zl:{cy:591.09}
				},
				lqmtz:{cy:934.70}
			}
		}
	};
	var cdRoadType=[
		{id:1,text:"沥青路面"},
		{id:2,text:"混凝土路面"},
		{id:3,text:"铺砖路面"}
	];
	var cdAsphaltType=[
		{id:1,text:"普通沥青"},
		{id:2,text:"改性沥青"},
		{id:3,text:"高粘度沥青"}
	];
	var cdAsphaltSurfaceMaterial=[
		{id:1,text:"开级配沥青磨耗层(OGFC)",density:2.1},
		{id:2,text:"沥青玛蹄脂面层(SMA)",density:2.45},
		{id:3,text:"密级配沥青混合料(AC)",density:2.35}
		//{id:4,text:"其它",density:0}
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
	var cdCementAdmixture=[
		{id:1,text:"速凝剂"},
		{id:2,text:"加气剂"},
		{id:3,text:"增塑剂"},
		{id:4,text:"强力增塑剂"},
		{id:5,text:"缓凝剂"},
		{id:6,text:"减水剂"}
	];
	var cdGwp=[
		{id:1,title:"2007 IPCC AR4",year:"20年GWP",co2:1,ch4:72,n2o:289,ccl2f2:11000,chclf2:5160,cf4:5210,c2f6:8630,sf6:16300,nf3:12300},
		{id:2,title:"2007 IPCC AR4",year:"50年GWP",co2:1,ch4:25,n2o:298,ccl2f2:10900,chclf2:1810,cf4:7390,c2f6:12200,sf6:22800,nf3:17200},
		{id:3,title:"2007 IPCC AR4",year:"100年GWP",co2:1,ch4:7.6,n2o:153,ccl2f2:5200,chclf2:549,cf4:11200,c2f6:18200,sf6:32600,nf3:20700},
		{id:4,title:"2013 IPCC AR5",year:"20年GWP",co2:1,ch4:84,n2o:264,ccl2f2:10800,chclf2:5280,cf4:4880,c2f6:8210,sf6:17500,nf3:12800},
		{id:5,title:"2013 IPCC AR5",year:"100年GWP",co2:1,ch4:28,n2o:265,ccl2f2:10200,chclf2:1760,cf4:6630,c2f6:11100,sf6:23500,nf3:16100}
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
	// 混凝土上、下面层
	var $concreteTopLayerMaterial=$("#concreteTopLayerMaterial").select2({
		data:cdConcreteSurfaceMaterial,
		minimumResultsForSearch:-1,
		language:iMsg.select2LangCode
	});
	var $topCementAdmixture=$("#topCementAdmixture").select2({
		data:cdCementAdmixture,
		language:iMsg.select2LangCode,
		placeholder:"可多选",
		multiple: true
	});
	var $concreteBelowLayerMaterial=$("#concreteBelowLayerMaterial").select2({
		data:cdConcreteSurfaceMaterial,
		minimumResultsForSearch:-1,
		language:iMsg.select2LangCode
	});
	var $belowCementAdmixture=$("#belowCementAdmixture").select2({
		data:cdCementAdmixture,
		language:iMsg.select2LangCode,
		placeholder:"可多选",
		multiple: true
	});
	$concreteTopLayerMaterial.on("select2:select",function(e){
		switch (e.params.data.id) {
		case "1":
			$("#topReinforcementRateDiv").hide();
			break;
		case "2":
			$("#topReinforcementRateDiv").show();
			break;
		default:
			break;
		}
	});
	$topCementAdmixture.on("select2:select",function(e){
		switch (e.params.data.id) {
		case "1":
			$("#snjDiv").show();
			break;
		case "2":
			$("#jqjDiv").show();
			break;
		case "3":
			$("#zsjDiv").show();
			break;
		case "4":
			$("#qlzsjDiv").show();
			break;
		case "5":
			$("#hnjDiv").show();
			break;
		case "6":
			$("#jsjDiv").show();
			break;
		default:
			break;
		}
	});
	$topCementAdmixture.on("select2:unselect",function(e){
		switch (e.params.data.id) {
		case "1":
			$("#snjDiv").hide();
			break;
		case "2":
			$("#jqjDiv").hide();
			break;
		case "3":
			$("#zsjDiv").hide();
			break;
		case "4":
			$("#qlzsjDiv").hide();
			break;
		case "5":
			$("#hnjDiv").hide();
			break;
		case "6":
			$("#jsjDiv").hide();
			break;
		default:
			break;
		}
	});
	$concreteBelowLayerMaterial.on("select2:select",function(e){
		switch (e.params.data.id) {
		case "1":
			$("#belowReinforcementRateDiv").hide();
			break;
		case "2":
			$("#belowReinforcementRateDiv").show();
			break;
		default:
			break;
		}
	});
	$belowCementAdmixture.on("select2:select",function(e){
		switch (e.params.data.id) {
		case "1":
			$("#snjDiv2").show();
			break;
		case "2":
			$("#jqjDiv2").show();
			break;
		case "3":
			$("#zsjDiv2").show();
			break;
		case "4":
			$("#qlzsjDiv2").show();
			break;
		case "5":
			$("#hnjDiv2").show();
			break;
		case "6":
			$("#jsjDiv2").show();
			break;
		default:
			break;
		}
	});
	$belowCementAdmixture.on("select2:unselect",function(e){
		switch (e.params.data.id) {
		case "1":
			$("#snjDiv2").hide();
			break;
		case "2":
			$("#jqjDiv2").hide();
			break;
		case "3":
			$("#zsjDiv2").hide();
			break;
		case "4":
			$("#qlzsjDiv2").hide();
			break;
		case "5":
			$("#hnjDiv2").hide();
			break;
		case "6":
			$("#jsjDiv2").hide();
			break;
		default:
			break;
		}
	});
	// 拌和设备类型
	var cdMixEquipmentType=[
		{id:1,text:"320t/h 以内",lqhnt:{zl:{qy:60.36,cy:291.33,zy:12829.70,d:7929.60}},lqmtz:{qy:61.61,cy:339.69,zy:15031.81,d:9290.65}},
		{id:2,text:"240t/h 以内",lqhnt:{zl:{qy:68.69,cy:461.51,zy:12638.21,d:7875.35}},lqmtz:{qy:89.50,cy:540.45,zy:14864.26,d:9262.48}}
	];
	var $mixEqupType=$("#mixEqupType").select2({
		data:cdMixEquipmentType,
		minimumResultsForSearch:-1,
		language:iMsg.select2LangCode
	});
	// 摊铺设备类型
	function formatPavingEqup(repo) {
	  if (repo.loading) {
		  return repo.text;
	  }
	  var markup="<div class='row'><div class='col-sm-12'><strong>"+repo.name+"</strong></div></div>"+
	  	"<div class='row'><div class='col-sm-12'>来源："+(repo.dataSource||'（空）')+"</div></div>"+
	  	"<div class='row'><div class='col-sm-12'>柴油用量（kg)："+(repo.diesel||'（空）')+"</div></div>";
	  return markup;
	}
	function formatPavingEqupSelection(repo) {
		if(repo.name){
			return repo.name+' （来源：'+(repo.dataSource||'（空）')+'）';
		}
		return repo.text;
	}
	var $pavingEqupType=$("#pavingEqupType").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/machine",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					typeCd:2,
					name:"摊铺"
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
		placeholder:'不选即为默认值：320t/h 以内',
		allowClear:true,
		minimumResultsForSearch:-1, //如要搜索可去掉该选项
		language:iMsg.select2LangCode,
		escapeMarkup: function (markup) { return markup; },
		templateResult: formatPavingEqup,
		templateSelection: formatPavingEqupSelection
	});
	// 燃料具体类型
	function formatFuel(repo) {
	  if (repo.loading) {
		  return repo.text;
	  }
	  var markup="<div class='row'><div class='col-sm-6'><strong>"+repo.fuelType+"</strong></div>"+
	  	"<div class='col-sm-6'>来源："+(repo.dataSource||'（空）')+"</div></div>"+
	  	"<div class='row'><div class='col-sm-6'>价格："+(repo.cost||'（空）')+"</div>"+
	  	"<div class='col-sm-6'>净热值："+(repo.energyConsume!=null?repo.energyConsume.toExponential(1):'（空）')+"</div></div>"+
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
	function formatFuelSelection(repo) {
		if(repo.fuelType){
			return repo.fuelType+' （来源：'+(repo.dataSource||'（空）')+'）';
		}
		return repo.text;
	}
	$("#gasoline").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/fuel",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					fuelType:"汽油"
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
		placeholder:'请选择一种具体燃料',
		allowClear:true,
		minimumResultsForSearch:-1, //如要搜索可去掉该选项
		language:iMsg.select2LangCode,
		escapeMarkup: function (markup) { return markup; },
		templateResult: formatFuel,
		templateSelection: formatFuelSelection
	});
	$("#diesel").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/fuel",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					fuelType:"柴油"
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
		placeholder:'请选择一种具体燃料',
		allowClear:true,
		minimumResultsForSearch:-1, //如要搜索可去掉该选项
		language:iMsg.select2LangCode,
		escapeMarkup: function (markup) { return markup; },
		templateResult: formatFuel,
		templateSelection: formatFuelSelection
	});
	$("#heavyOil").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/fuel",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					fuelType:"重油"
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
		placeholder:'请选择一种具体燃料',
		allowClear:true,
		minimumResultsForSearch:-1, //如要搜索可去掉该选项
		language:iMsg.select2LangCode,
		escapeMarkup: function (markup) { return markup; },
		templateResult: formatFuel,
		templateSelection: formatFuelSelection
	});
	$("#electricity").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/fuel",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					fuelType:"电"
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
		placeholder:'请选择一种具体燃料',
		allowClear:true,
		minimumResultsForSearch:-1, //如要搜索可去掉该选项
		language:iMsg.select2LangCode,
		escapeMarkup: function (markup) { return markup; },
		templateResult: formatFuel,
		templateSelection: formatFuelSelection
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
	$("#rebar").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/materials",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					materialCategoryCd:3
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
	$("#snjType").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/materials",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					materialCategoryCd:9,
					materialName:"速凝"
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
	$("#jqjType").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/materials",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					materialCategoryCd:9,
					materialName:"加气"
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
	$("#zsjType").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/materials",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					materialCategoryCd:9,
					materialName:"增塑"
				};
			},
			processResults:function(data,params){
				params.page=params.page||1;
				var list=data.list;
				for (var i = 0; i < list.length; i++) {
					if(list[i].materialName.indexOf("强力增塑")!=-1){
						list.splice(i,1);
					}
				}
				return {
					results:list,
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
	$("#qlzsjType").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/materials",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					materialCategoryCd:9,
					materialName:"强力增塑"
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
	$("#hnjType").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/materials",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					materialCategoryCd:9,
					materialName:"缓凝"
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
	$("#jsjType").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/materials",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					materialCategoryCd:9,
					materialName:"减水"
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
	
	// 运输条件车辆型号选择
	function formatTransport(repo) {
	  if (repo.loading) {
		  return repo.text;
	  }
	  var markup="<div class='row'><div class='col-sm-6'><strong>"+repo.vehicleType+"</strong></div>"+
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
	function formatTransportSelection(repo) {
		if(repo.vehicleType){
			return repo.vehicleType+' （来源：'+(repo.dataSource||'（空）')+'）';
		}
		return repo.text;
	}
	$("#aggregateVehicleModel").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/transport",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					vehicleType:params.term
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
		placeholder:'请选择一种车辆，可根据名称搜索',
		allowClear:true,
		language:"zh-CN",
		escapeMarkup: function (markup) { return markup; },
		templateResult: formatTransport,
		templateSelection: formatTransportSelection
	});
	$("#asphaltVehicleModel").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/transport",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					vehicleType:params.term
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
		placeholder:'请选择一种车辆，可根据名称搜索',
		allowClear:true,
		language:"zh-CN",
		escapeMarkup: function (markup) { return markup; },
		templateResult: formatTransport,
		templateSelection: formatTransportSelection
	});
	$("#cementVehicleModel").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/transport",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					vehicleType:params.term
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
		placeholder:'请选择一种车辆，可根据名称搜索',
		allowClear:true,
		language:"zh-CN",
		escapeMarkup: function (markup) { return markup; },
		templateResult: formatTransport,
		templateSelection: formatTransportSelection
	});
	$("#mixtureVehicleModel").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/transport",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					vehicleType:params.term
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
		placeholder:'请选择一种车辆，可根据名称搜索',
		allowClear:true,
		language:"zh-CN",
		escapeMarkup: function (markup) { return markup; },
		templateResult: formatTransport,
		templateSelection: formatTransportSelection
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
	// 温室效应GWP选择
	function formatGwp(repo) {
	  if (repo.loading) {
		  return repo.text;
	  }
	  var markup="<div class='row'><div class='col-sm-9'><strong>"+repo.title+" / "+repo.year+"</strong></div>"+
	  	"<div class='col-sm-3'>CO<sub>2</sub>："+(repo.co2||'')+"</div></div>"+
	  	"<div class='row'><div class='col-sm-3'>CH<sub>4</sub>："+(repo.ch4||'')+"</div>"+
	  	"<div class='col-sm-3'>N<sub>2</sub>O："+(repo.n2o||'')+"</div>"+
	  	"<div class='col-sm-3'>CCl<sub>2</sub>F<sub>2</sub>："+(repo.ccl2f2||'')+"</div>"+
	  	"<div class='col-sm-3'>CHClF<sub>2</sub>："+(repo.chclf2||'')+"</div></div>"+
	  	"<div class='row'><div class='col-sm-3'>CF<sub>4</sub>："+(repo.cf4||'')+"</div>"+
	  	"<div class='col-sm-3'>C<sub>2</sub>F<sub>6</sub>："+(repo.c2f6||'')+"</div>"+
	  	"<div class='col-sm-3'>SF<sub>6</sub>："+(repo.sf6||'')+"</div>"+
	  	"<div class='col-sm-3'>NF<sub>3</sub>："+(repo.nf3||'')+"</div></div>";
	  return markup;
	}
	function formatGwpSelection(repo) {
		if(repo.title){
			return repo.title+" / "+repo.year;
		}
		return repo.text;
	}
	var $gwpSelect=$("#gwpSelect").select2({
		data:cdGwp,
		minimumResultsForSearch:-1, //如要搜索可去掉该选项
		language:iMsg.select2LangCode,
		escapeMarkup: function (markup) { return markup; },
		templateResult: formatGwp,
		templateSelection: formatGwpSelection
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
	var transportList=[];
	var mixPaveList=[];
	var conserveData={};
	var greenHouseData={};
	var tempData={};
	var materialRange,transConsRange,use1Range,use2Range,use3Range,conserveRange,recycleRange;
	var energyRange,carbonRang,sourRange,eutrophicationRange,ozoneRange;
	// 运输与施工特殊处理，因为一个范围中有两个表单，需要两个都完成才能使transConsRange=2
	var transFlag,consFlag;
	
	function initClean() {
		materialList=[];
		transportList=[];
		mixPaveList=[];
		conserveData={};
		greenHouseData={};
		tempData={};
		transFlag=false;
		consFlag=false;
	}
	
	var validatorFormInput = $("#form-input").validate({
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
    		},
    		concreteTopLayerThickness:{
    			required:true,
    			number:true,
    			min:0
    		},
    		topReinforcementRate:{
    			required:true,
    			number:true,
    			min:0
    		},
    		topMixProportionX:{
    			required:true,
    			number:true,
    			min:0
    		},
    		topMixProportionY:{
    			required:true,
    			number:true,
    			min:0
    		},
    		topMixProportionZ:{
    			required:true,
    			number:true,
    			min:0
    		},
    		snj:{
    			required:true,
    			number:true,
    			min:0
    		},
    		jqj:{
    			required:true,
    			number:true,
    			min:0
    		},
    		zsj:{
    			required:true,
    			number:true,
    			min:0
    		},
    		qlzsj:{
    			required:true,
    			number:true,
    			min:0
    		},
    		hnj:{
    			required:true,
    			number:true,
    			min:0
    		},
    		jsj:{
    			required:true,
    			number:true,
    			min:0
    		},
    		concreteBelowLayerThickness:{
    			required:true,
    			number:true,
    			min:0
    		},
    		belowReinforcementRate:{
    			required:true,
    			number:true,
    			min:0
    		},
    		belowMixProportionX:{
    			required:true,
    			number:true,
    			min:0
    		},
    		belowMixProportionY:{
    			required:true,
    			number:true,
    			min:0
    		},
    		belowMixProportionZ:{
    			required:true,
    			number:true,
    			min:0
    		},
    		snj2:{
    			required:true,
    			number:true,
    			min:0
    		},
    		jqj2:{
    			required:true,
    			number:true,
    			min:0
    		},
    		zsj2:{
    			required:true,
    			number:true,
    			min:0
    		},
    		qlzsj2:{
    			required:true,
    			number:true,
    			min:0
    		},
    		hnj2:{
    			required:true,
    			number:true,
    			min:0
    		},
    		jsj2:{
    			required:true,
    			number:true,
    			min:0
    		},
    		brickLength:{
    			required:true,
    			number:true,
    			min:0
    		},
    		brickWidth:{
    			required:true,
    			number:true,
    			min:0
    		},
    		brickHeight:{
    			required:true,
    			number:true,
    			min:0
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
    		materialRange=$("#materialRange").is(":checked")?1:0;
    		transConsRange=$("#transConsRange").is(":checked")?1:0;
    		use1Range=$("#use1Range").is(":checked")?1:0;
    		use2Range=$("#use2Range").is(":checked")?1:0;
    		use3Range=$("#use3Range").is(":checked")?1:0;
    		conserveRange=$("#conserveRange").is(":checked")?1:0;
    		recycleRange=$("#recycleRange").is(":checked")?1:0;
    		energyRange=$("#energyRange").is(":checked")?1:0;
    		carbonRange=$("#carbonRange").is(":checked")?1:0;
    		sourRange=$("#sourRange").is(":checked")?1:0;
    		eutrophicationRange=$("#eutrophicationRange").is(":checked")?1:0;
    		ozoneRange=$("#ozoneRange").is(":checked")?1:0;
    		if(!(materialRange||transConsRange||use1Range||use2Range||use3Range||conserveRange||recycleRange)){
    			var d = dialog({
                    content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请至少选择一个阶段范围'+'</p></div>'
                });
                d.show();
                setTimeout(function() {
                    d.close().remove();
                }, 1500);
                return false;
    		}
    		if(!(energyRange||carbonRange||sourRange||eutrophicationRange||ozoneRange)){
    			var d = dialog({
                    content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请至少选择一个评价范围'+'</p></div>'
                });
                d.show();
                setTimeout(function() {
                    d.close().remove();
                }, 1500);
                return false;
    		}
    		initClean();
    		var area=$("#roadLength").val()*$("#roadWidth").val();
    		tempData.area=area;
    		var gravel=0,ordinaryAsphalt=0,modifiedAsphalt=0,highViscosityAsphalt=0,cement=0,lime=0,rebar=0,snj=0,jqj=0,zsj=0,qlzsj=0,hnj=0,jsj=0,brick=0;
    		// 拌和摊铺相关
    		var lqhnthd=0,lqmtzhd=0;tphd=0;
    		
    		var baseWeight=area*$("#baseLayerThickness").val()*$baseLayerMaterial.select2("data")[0].density;
			var bottomBaseWeight=area*$("#bottomBaseLayerThickness").val()*$bottomBaseLayerMaterial.select2("data")[0].density;
			var cushionWeight=area*$("#cushionLayerThickness").val()*$cushionLayerMaterial.select2("data")[0].density;
    		if($roadType.val()==1){
    			var topVolume=area*$("#asphaltTopLayerThickness").val();
    			tempData.topVolume=topVolume;
    			var topWeight=topVolume*$asphaltTopLayerMaterial.select2("data")[0].density;
    			var middleWeight=area*$("#asphaltMiddleLayerThickness").val()*$asphaltMiddleLayerMaterial.select2("data")[0].density;
    			var belowWeight=area*$("#asphaltBelowLayerThickness").val()*$asphaltBelowLayerMaterial.select2("data")[0].density;
    			// 上、中、下面层拌和摊铺相关
    			switch ($asphaltTopLayerMaterial.select2("data")[0].id) {
				case "2":
					lqmtzhd+=parseFloat($("#asphaltTopLayerThickness").val());
					break;
				default:
					lqhnthd+=parseFloat($("#asphaltTopLayerThickness").val());
					break;
				}
    			switch ($asphaltMiddleLayerMaterial.select2("data")[0].id) {
    			case "2":
    				lqmtzhd+=parseFloat($("#asphaltMiddleLayerThickness").val());
    				break;
    			default:
    				lqhnthd+=parseFloat($("#asphaltMiddleLayerThickness").val());
    			break;
    			}
    			switch ($asphaltBelowLayerMaterial.select2("data")[0].id) {
    			case "2":
    				lqmtzhd+=parseFloat($("#asphaltBelowLayerThickness").val());
    				break;
    			default:
    				lqhnthd+=parseFloat($("#asphaltBelowLayerThickness").val());
    			break;
    			}
    			tphd+=parseFloat($("#asphaltTopLayerThickness").val())+parseFloat($("#asphaltMiddleLayerThickness").val())+parseFloat($("#asphaltBelowLayerThickness").val());
    			
    			// 上、中、下面层碎石、沥青
    			gravel+=topWeight/(1+$("#asphaltTopLayerWhetstoneRatio").val()/100)+middleWeight/(1+$("#asphaltMiddleLayerWhetstoneRatio").val()/100)+belowWeight/(1+$("#asphaltBelowLayerWhetstoneRatio").val()/100);
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
    		}else if($roadType.val()==2){
    			// 拌和摊铺相关
    			tphd+=parseFloat($("#concreteTopLayerThickness").val())+parseFloat($("#concreteBelowLayerThickness").val());
    			
    			var topVolume=area*$("#concreteTopLayerThickness").val();
    			tempData.topVolume=topVolume;
    			var belowVolume=area*$("#concreteBelowLayerThickness").val();
    			var topLayerMaterial=$concreteTopLayerMaterial.select2("data")[0];
    			var belowLayerMaterial=$concreteBelowLayerMaterial.select2("data")[0];
    			var topWeight=topVolume*topLayerMaterial.density;
    			var belowWeight=belowVolume*belowLayerMaterial.density;
    			// 上下面层碎石、水泥、钢筋、水泥外加剂
    			var x=parseFloat($("#topMixProportionX").val());
    			var y=parseFloat($("#topMixProportionY").val());
    			var z=parseFloat($("#topMixProportionZ").val());
    			var x2=parseFloat($("#belowMixProportionX").val());
    			var y2=parseFloat($("#belowMixProportionY").val());
    			var z2=parseFloat($("#belowMixProportionZ").val());
    			gravel+=topWeight*(y+z)/(1+x+y+z)+belowWeight*(y2+z2)/(1+x2+y2+z2);
    			cement+=topWeight/(1+x+y+z)+belowWeight/(1+x2+y2+z2);
    			if(topLayerMaterial.id=="2"){
    				rebar+=topVolume*$("#topReinforcementRate").val()*7.85;
    			}
    			if(belowLayerMaterial.id=="2"){
    				rebar+=belowVolume*$("#belowReinforcementRate").val()*7.85;
    			}
    			var topAdmixtureList=$topCementAdmixture.select2("data");
    			var belowAdmixtureList=$belowCementAdmixture.select2("data");
				for (var i = 0; i < topAdmixtureList.length; i++) {
					switch (topAdmixtureList[i].id) {
					case "1":
						snj+=topWeight*$("#snj").val();
						break;
					case "2":
						jqj+=topWeight*$("#jqj").val();
						break;
					case "3":
						zsj+=topWeight*$("#zsj").val();
						break;
					case "4":
						qlzsj+=topWeight*$("#qlzsj").val();
						break;
					case "5":
						hnj+=topWeight*$("#hnj").val();
						break;
					case "6":
						jsj+=topWeight*$("#jsj").val();
						break;
					default:
						break;
					}
				}
				for (var i = 0; i < belowAdmixtureList.length; i++) {
					switch (belowAdmixtureList[i].id) {
					case "1":
						snj+=belowWeight*$("#snj2").val();
						break;
					case "2":
						jqj+=belowWeight*$("#jqj2").val();
						break;
					case "3":
						zsj+=belowWeight*$("#zsj2").val();
						break;
					case "4":
						qlzsj+=belowWeight*$("#qlzsj2").val();
						break;
					case "5":
						hnj+=belowWeight*$("#hnj2").val();
						break;
					case "6":
						jsj+=belowWeight*$("#jsj2").val();
						break;
					default:
						break;
					}
				}
    		}else if($roadType.val()==3){
    			brick+=area/($("#brickLength").val()*$("#brickWidth").val()); // 铺砖块数
    		}
    		// 基、底基、垫层碎石、沥青、水泥、石灰
			switch ($baseLayerMaterial.select2("data")[0].id) {
			case "1":case "2":
				// 拌和摊铺相关
				lqhnthd+=parseFloat($("#baseLayerThickness").val());
				
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
				// 拌和摊铺相关
				lqhnthd+=parseFloat($("#bottomBaseLayerThickness").val());
				
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
				// 拌和摊铺相关
				lqhnthd+=parseFloat($("#cushionLayerThickness").val());
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
			// 计算原材料获取
			if(materialRange){
				$("#materialInventory").show();
				$("#gravelSelect").hide();
				$("#ordinaryAsphaltSelect").hide();
				$("#modifiedAsphaltSelect").hide();
				$("#highViscosityAsphaltSelect").hide();
				$("#cementSelect").hide();
				$("#limeSelect").hide();
				$("#rebarSelect").hide();
				$("#snjSelect").hide();
				$("#jqjSelect").hide();
				$("#zsjSelect").hide();
				$("#qlzsjSelect").hide();
				$("#hnjSelect").hide();
				$("#jsjSelect").hide();
				if(gravel>0){
					materialList.push({materialMark:"gravel",materialName:"碎石集料",amount:gravel.toFixed(3)});
					$("#gravelSelect").show();
				}
				if(ordinaryAsphalt>0){
					materialList.push({materialMark:"ordinaryAsphalt",materialName:"普通沥青",amount:ordinaryAsphalt.toFixed(3)});
					$("#ordinaryAsphaltSelect").show();
				}
				if(modifiedAsphalt>0){
					materialList.push({materialMark:"modifiedAsphalt",materialName:"改性沥青",amount:modifiedAsphalt.toFixed(3)});
					$("#modifiedAsphaltSelect").show();
				}
				if(highViscosityAsphalt>0){
					materialList.push({materialMark:"highViscosityAsphalt",materialName:"高粘度沥青",amount:highViscosityAsphalt.toFixed(3)});
					$("#highViscosityAsphaltSelect").show();
				}
				if(cement>0){
					materialList.push({materialMark:"cement",materialName:"水泥",amount:cement.toFixed(3)});
					$("#cementSelect").show();
				}
				if(lime>0){
					materialList.push({materialMark:"lime",materialName:"石灰",amount:lime.toFixed(3)});
					$("#limeSelect").show();
				}
				if(rebar>0){
					materialList.push({materialMark:"rebar",materialName:"钢筋",amount:rebar.toFixed(3)});
					$("#rebarSelect").show();
				}
				if(snj>0){
					materialList.push({materialMark:"snjType",materialName:"速凝剂",amount:snj.toFixed(3)});
					$("#snjSelect").show();
				}
				if(jqj>0){
					materialList.push({materialMark:"jqjType",materialName:"加气剂",amount:jqj.toFixed(3)});
					$("#jqjSelect").show();
				}
				if(zsj>0){
					materialList.push({materialMark:"zsjType",materialName:"增塑剂",amount:zsj.toFixed(3)});
					$("#zsjSelect").show();
				}
				if(qlzsj>0){
					materialList.push({materialMark:"qlzsjType",materialName:"强力增塑剂",amount:qlzsj.toFixed(3)});
					$("#qlzsjSelect").show();
				}
				if(hnj>0){
					materialList.push({materialMark:"hnjType",materialName:"缓凝剂",amount:hnj.toFixed(3)});
					$("#hnjSelect").show();
				}
				if(jsj>0){
					materialList.push({materialMark:"jsjType",materialName:"减水剂",amount:jsj.toFixed(3)});
					$("#jsjSelect").show();
				}
				if(brick>0){
					materialList.push({materialMark:"brick",materialName:"混凝土砖",amount:Math.ceil(brick)}); // 铺砖
				}
				var _html='';
	            var tpl=$('#tpl-materialInventoryTable').html();
	            for (var i=0,len=materialList.length; i < len; i++){
	                var item = materialList[i];
	                _html += renderTpl(tpl, item);
	            }
	            $('#materialInventoryTable tbody').html(_html);
			}else{
				$("#materialInventory").hide();
			}
            
			if(transConsRange){
				$("#transportInventory").show();
				// 计算运输过程
	            var allAsphalt=ordinaryAsphalt+modifiedAsphalt+highViscosityAsphalt;
	            var mixtureAmount=gravel+allAsphalt+cement;
	            $("#aggregateVehicleSelect").hide();
	            $("#asphaltVehicleSelect").hide();
	            $("#cementVehicleSelect").hide();
	            $("#mixtureVehicleSelect").hide();
	            if(gravel>0){
	            	transportList.push({materialMark:"aggregate",materialName:"集料",amount:gravel.toFixed(3)});
	            	$("#aggregateVehicleSelect").show();
	            }
	            if(allAsphalt>0){
	            	transportList.push({materialMark:"asphalt",materialName:"沥青",amount:allAsphalt.toFixed(3)});
	            	$("#asphaltVehicleSelect").show();
	            }
	            if(cement>0){
	            	transportList.push({materialMark:"cement",materialName:"水泥",amount:cement.toFixed(3)});
	            	$("#cementVehicleSelect").show();
	            }
	            if(mixtureAmount>0){
	            	transportList.push({materialMark:"mixture",materialName:"混合料",amount:mixtureAmount.toFixed(3)});
	            	$("#mixtureVehicleSelect").show();
	            }
	            _html='';
	            var tpl=$('#tpl-transportInventoryTable').html();
	            for (var i=0,len=transportList.length; i < len; i++){
	                var item = transportList[i];
	                _html += renderTpl(tpl, item);
	            }
	            $('#transportInventoryTable tbody').html(_html);
            
	            // 计算拌和与摊铺
	            tphd+=parseFloat($("#baseLayerThickness").val())+parseFloat($("#bottomBaseLayerThickness").val())+parseFloat($("#cushionLayerThickness").val());
	            tempData.lqhnttj=area*lqhnthd/1000;
	            tempData.lqmtztj=area*lqmtzhd/1000;
	            tempData.tptj=area*tphd/1000;
	            var tmpList=[];
	            tmpList.push({fuelName:"汽油"});
	            tmpList.push({fuelName:"柴油"});
	            tmpList.push({fuelName:"重油"});
	            tmpList.push({fuelName:"电"});
	            var _html='';
	            var tpl=$('#tpl-mixPaveInventoryTable').html();
	            for (var i=0,len=tmpList.length; i < len; i++){
	                var item = tmpList[i];
	                _html += renderTpl(tpl, item);
	            }
	            $('#mixPaveInventoryTable tbody').html(_html);
			}else{
				$("#transportInventory").hide();
			}
			
			if(use1Range){
				// 计算使用1
				$("#use1Inventory").show();
			}else{
				$("#use1Inventory").hide();
			}
			if(use2Range){
				// 计算使用2
				$("#use2Inventory").show();
			}else{
				$("#use2Inventory").hide();
			}
			if(use3Range){
				// 计算使用3
				$("#use3Inventory").show();
			}else{
				$("#use3Inventory").hide();
			}
			
			if(conserveRange){
				// 计算养护
				$("#conserveInventory").show();
				$("#conserveAsphalt").text("沥青");
			}else{
				$("#conserveInventory").hide();
			}
			if(recycleRange){
				// 计算回收
				$("#recycleInventory").show();
			}else{
				$("#recycleInventory").hide();
			}
            
    		tool.stepGo(1,2);
    		$("#step-input").hide();
    		$("#step-inventory").show();
    		$(window).scrollTop(0);
    	},
    	onkeyup:false
	});
	
	$("#inventoryMaterialForm").submit(function(){
		if(materialList.length>0){
			for (var i = 0; i < materialList.length; i++) {
				var item=materialList[i];
				if(item.materialMark=="brick") continue;
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
				    		item.cost=(res.cost*amount).toFixed(3);
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
		materialRange=2;
		return false;
	});
	
	var validatorInventoryTransportForm = $("#inventoryTransportForm").validate({
		errorClass: 'text-danger',
    	rules:{
    		aggregateDistance:{
    			required:true,
    			number:true,
    			min:0
    		},
    		asphaltDistance:{
    			required:true,
    			number:true,
    			min:0
    		},
    		cementDistance:{
    			required:true,
    			number:true,
    			min:0
    		},
    		mixtureDistance:{
    			required:true,
    			number:true,
    			min:0
    		}
    	},
    	submitHandler:function(form){
    		if(transportList.length>0){
	    		for (var i = 0; i < transportList.length; i++) {
					var item=transportList[i];
					var res=$("#"+item.materialMark+"VehicleModel").select2("data")[0];
					var distance=$("#"+item.materialMark+"Distance").val();
					if(res==undefined){
						var d = dialog({
	                        content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请您选择相应车辆型号'+'</p></div>'
	                    });
	                    d.show();
	                    setTimeout(function() {
	                        d.close().remove();
	                    }, 1500);
	                    return false;
					}else{
						item.vehicleModel=res.vehicleType;
						item.distance=distance;
						var amount=item.amount;
						if(res.cost!=null){
							item.cost=(res.cost*amount*distance).toFixed(3);
						}
						if(res.energyConsume!=null){
							item.energyConsume=(res.energyConsume*amount*distance).toExponential(2);
						}
						if(res.emissionCo2!=null){
							item.emissionCo2=(res.emissionCo2*amount*distance).toExponential(2);
						}
						if(res.emissionCh4!=null){
							item.emissionCh4=(res.emissionCh4*amount*distance).toExponential(2);
						}
						if(res.emissionN2o!=null){
							item.emissionN2o=(res.emissionN2o*amount*distance).toExponential(2);
						}
						if(res.emissionCo!=null){
							item.emissionCo=(res.emissionCo*amount*distance).toExponential(2);
						}
						if(res.emissionSo2!=null){
							item.emissionSo2=(res.emissionSo2*amount*distance).toExponential(2);
						}
						if(res.emissionNox!=null){
							item.emissionNox=(res.emissionNox*amount*distance).toExponential(2);
						}
						if(res.emissionPb!=null){
							item.emissionPb=(res.emissionPb*amount*distance).toExponential(2);
						}
						if(res.emissionZn!=null){
							item.emissionZn=(res.emissionZn*amount*distance).toExponential(2);
						}
					}
				}
				var _html='';
	            var tpl=$('#tpl-transportInventoryTable').html();
	            for (var i=0,len=transportList.length; i < len; i++){
	                var item = transportList[i];
	                _html += renderTpl(tpl, item);
	            }
	            $('#transportInventoryTable tbody').html(_html);
    		}
    		transFlag=true;
    		if(consFlag){
    			transConsRange=2;
    		}
    	},
    	onkeyup:false
	});
	
	var validatorInventoryMixPaveForm = $("#inventoryMixPaveForm").validate({
		errorClass: 'text-danger',
		rules:{},
		submitHandler:function(form){
			var gasoline=0,diesel=0,heavyOil=0,electricity=0;
			var mixType=$mixEqupType.select2("data")[0];
			var lqhnttj=tempData.lqhnttj,lqmtztj=tempData.lqmtztj,tptj=tempData.tptj;
			if(lqhnttj>0){
				var tmp=mixType.lqhnt.zl;
				gasoline+=lqhnttj*tmp.qy;
				diesel+=lqhnttj*tmp.cy;
				heavyOil+=lqhnttj*tmp.zy;
				electricity+=lqhnttj*tmp.d;
			}
			if(lqmtztj>0){
				var tmp=mixType.lqmtz;
				gasoline+=lqmtztj*tmp.qy;
				diesel+=lqmtztj*tmp.cy;
				heavyOil+=lqmtztj*tmp.zy;
				electricity+=lqmtztj*tmp.d;
			}
			if(tptj>0){
				var pavingType=$pavingEqupType.select2("data")[0];
				if(pavingType==undefined){
					diesel+=tptj*(cfc.tp.t320.lqhnt.zl.cy);
				}else{
					if(pavingType.diesel!=null){
						diesel+=tptj*pavingType.diesel;
					}
				}
			}
			mixPaveList.push({fuelMark:"gasoline",fuelName:"汽油",amount:gasoline.toFixed(3)});
            mixPaveList.push({fuelMark:"diesel",fuelName:"柴油",amount:diesel.toFixed(3)});
            mixPaveList.push({fuelMark:"heavyOil",fuelName:"重油",amount:heavyOil.toFixed(3)});
            mixPaveList.push({fuelMark:"electricity",fuelName:"电",amount:electricity.toFixed(3)});
			for (var i = 0; i < mixPaveList.length; i++) {
				var item=mixPaveList[i];
				var res=$("#"+item.fuelMark).select2("data")[0];
				if(res==undefined){
					var d = dialog({
						content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请您选择相应燃料类型'+'</p></div>'
					});
					d.show();
					setTimeout(function() {
						d.close().remove();
					}, 1500);
					return false;
				}else{
					var amount=item.amount;
					if(res.cost!=null){
						item.cost=(res.cost*amount).toFixed(3);
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
			var tpl=$('#tpl-mixPaveInventoryTable').html();
			for (var i=0,len=mixPaveList.length; i < len; i++){
				var item = mixPaveList[i];
				_html += renderTpl(tpl, item);
			}
			$('#mixPaveInventoryTable tbody').html(_html);
			consFlag=true;
    		if(transFlag){
    			transConsRange=2;
    		}
		},
		onkeyup:false
	});
	
	$("#conserveItem8").select2({
		data:cdAsphaltType,
		minimumResultsForSearch:-1,
		language:iMsg.select2LangCode
	});
	var validatorInventoryConserveForm = $("#inventoryConserveForm").validate({
		errorClass: 'text-danger',
		rules:{
			conserveBase1:{
				required:true,
				number:true,
				min:0
			},
			conserveBase2:{
				required:true,
				number:true,
				min:0,
				max:100
			},
			conserveBase3:{
				required:true,
				number:true,
				min:0,
				max:100
			},
			conserveBase4:{
				required:true,
				number:true,
				min:0
			},
			conserveBase5:{
				required:true,
				number:true,
				min:0
			},
			conserveBase6:{
				required:true,
				number:true,
				min:0
			},
			conserveBase7:{
				required:true,
				number:true,
				min:0
			},
			conserveBase8:{
				required:true,
				number:true,
				min:0
			},
			conserveBase9:{
				required:true,
				number:true,
				min:0,
				max:100
			},
			conserveBase10:{
				required:true,
				number:true,
				min:0
			},
			conserveItem1:{
				required:true
			},
			conserveItem2:{
				required:true,
				number:true,
				min:0
			},
			conserveItem3:{
				required:true,
				fraction:true
			},
			conserveItem4:{
				required:true,
				number:true,
				min:0
			},
			conserveItem5:{
				required:true,
				number:true,
				min:0
			},
			conserveItem6:{
				required:true,
				number:true,
				min:0,
				max:100
			},
			conserveItem7:{
				required:true,
				number:true,
				min:0
			},
			conserveItem9:{
				required:true,
				number:true,
				min:0,
				max:100
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
			var b1=$("#conserveBase1").val();
			var b2=$("#conserveBase2").val()/100.0;
			var b3=$("#conserveBase3").val()/100.0;
			var b4=$("#conserveBase4").val();
			var b5=$("#conserveBase5").val();
			var b6=$("#conserveBase6").val();
			var b7=$("#conserveBase7").val();
			var b8=$("#conserveBase8").val();
			var b9=$("#conserveBase9").val()/100.0;
			var b10=$("#conserveBase10").val();
			var i1=$("#conserveItem1").val();
			var i2=$("#conserveItem2").val();
			var i3Nums=$("#conserveItem3").val().split("/");
			var i3=i3Nums[0]/i3Nums[1];
			var i4=$("#conserveItem4").val();
			var i5=$("#conserveItem5").val();
			var i6=$("#conserveItem6").val()/100.0;
			var i7=$("#conserveItem7").val();
			var i8=$("#conserveItem8").select2("data")[0].text;
			var i9=$("#conserveItem9").val()/100.0;
			conserveData.conserveVolume=tempData.area*i6*i7/100;
			conserveData.conserveWeight=tempData.topVolume*2.35;
			conserveData.conserveGravel=conserveData.conserveWeight/(1+i9);
			conserveData.conserveAsphalt=conserveData.conserveWeight*i9/(1+i9);
			conserveData.conserveTimeCost=(((i4/b7)-(i4/b6))+(b8/b10)*b9)*b1*Math.pow(1+b2,i2)*i5*b4/Math.pow(1+b3,i2);
			conserveData.conserveCarOpsCost=b1*Math.pow(1+b2,i2)*i5*i4*b5/Math.pow(1+b3,i2);
			conserveData.conserveSafeCost=b1*Math.pow(1+b2,i2)*i5*i4/160900000*0.45*(0.9*2275229+57.2*15151)*6.6/Math.pow(1+b3,i2);
			var tpl=$('#tpl-conserveInventoryTable').html();
			var _html = renderTpl(tpl, conserveData);
			$('#conserveInventoryTable tbody').html(_html);
			$("#conserveAsphalt").text(i8);
			conserveRange=2;
		},
		onkeyup:false
	});
	$("#inventory-prevStep").click(function(){
		tool.stepBack(2,1);
		$("#step-inventory").hide();
		$("#step-input").show();
	});
	$("#inventory-nextStep").click(function(){
		if(materialRange==1){
			var d = dialog({
				content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请您完成原材料获取清单'+'</p></div>'
			});
			d.show();
			setTimeout(function() {
				d.close().remove();
			}, 1500);
			return false;
		}
		if(transConsRange==1){
			var d = dialog({
				content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请您完成运输与施工清单'+'</p></div>'
			});
			d.show();
			setTimeout(function() {
				d.close().remove();
			}, 1500);
			return false;
		}
		if(conserveRange==1){
			var d = dialog({
				content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请您完成养护清单'+'</p></div>'
			});
			d.show();
			setTimeout(function() {
				d.close().remove();
			}, 1500);
			return false;
		}
		$("#gwpValue").empty();
		tool.stepGo(2,3);
		$("#step-inventory").hide();
		$("#step-influence").show();
		$(window).scrollTop(0);
	});
	// 影响评价
	// 温室效应
	$("#gwpForm").submit(function(){
		var g=$gwpSelect.select2("data")[0];
		if(g==undefined){
			var d = dialog({
				content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请您选择 GWP'+'</p></div>'
			});
			d.show();
			setTimeout(function() {
				d.close().remove();
			}, 1500);
			return false;
		}else{
			var co2=0,ch4=0,n2o=0;
			for (var i = 0; i < materialList.length; i++) {
				var item = materialList[i];
				if(item.emissionCo2!=undefined){
					co2+=parseFloat(item.emissionCo2);
				}
				if(item.emissionCh4!=undefined){
					ch4+=parseFloat(item.emissionCh4);
				}
				if(item.emissionN2o!=undefined){
					n2o+=parseFloat(item.emissionN2o);
				}
			}
			for (var i = 0; i < transportList.length; i++) {
				var item = transportList[i];
				if(item.emissionCo2!=undefined){
					co2+=parseFloat(item.emissionCo2);
				}
				if(item.emissionCh4!=undefined){
					ch4+=parseFloat(item.emissionCh4);
				}
				if(item.emissionN2o!=undefined){
					n2o+=parseFloat(item.emissionN2o);
				}
			}
			for (var i = 0; i < mixPaveList.length; i++) {
				var item = mixPaveList[i];
				if(item.emissionCo2!=undefined){
					co2+=parseFloat(item.emissionCo2);
				}
				if(item.emissionCh4!=undefined){
					ch4+=parseFloat(item.emissionCh4);
				}
				if(item.emissionN2o!=undefined){
					n2o+=parseFloat(item.emissionN2o);
				}
			}
			greenHouseData.gwpValue=co2*g.co2+ch4*g.ch4+n2o*g.n2o;
			$("#gwpValue").text(greenHouseData.gwpValue);
		}
		return false;
	});
	
	$("#influence-prevStep").click(function(){
		tool.stepBack(3,2);
		$("#step-influence").hide();
		$("#step-inventory").show();
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