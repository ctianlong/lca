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
		{id:1,dataSource:"2007 IPCC AR4",year:"20年GWP",co2:1,ch4:72,n2o:289,ccl2f2:11000,chclf2:5160,cf4:5210,c2f6:8630,sf6:16300,nf3:12300},
		{id:2,dataSource:"2007 IPCC AR4",year:"50年GWP",co2:1,ch4:25,n2o:298,ccl2f2:10900,chclf2:1810,cf4:7390,c2f6:12200,sf6:22800,nf3:17200},
		{id:3,dataSource:"2007 IPCC AR4",year:"100年GWP",co2:1,ch4:7.6,n2o:153,ccl2f2:5200,chclf2:549,cf4:11200,c2f6:18200,sf6:32600,nf3:20700},
		{id:4,dataSource:"2013 IPCC AR5",year:"20年GWP",co2:1,ch4:84,n2o:264,ccl2f2:10800,chclf2:5280,cf4:4880,c2f6:8210,sf6:17500,nf3:12800},
		{id:5,dataSource:"2013 IPCC AR5",year:"100年GWP",co2:1,ch4:28,n2o:265,ccl2f2:10200,chclf2:1760,cf4:6630,c2f6:11100,sf6:23500,nf3:16100}
	];
	var cdSo2Equiv=[
		{id:1,dataSource:"TRACI",so2:1,nox:0.7,nh3:1.88,hcl:0.88,hf:1.6,h2s:1.88,hno3:0.51,no2:0.51,no:1.07,h3po4:0.98,so3:0.8,h2so4:0.65}
	];
	var cdNEquiv=[
		{id:1,dataSource:"TRACI",nh3kq:0.119,nh3s:0.779,tn:0.986,bodcod:0.05,xsykq:0.036,xsys:0.237,hno3kq:0.0345,hno3s:0.227,noxds:0.779,noxhs:0.291,noxkq:0.0443,lsykq:0.366,lsys:2.38,lskq:0.355,lss:2.31,lkq:1.12,ls:7.29}
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
	  var markup="<div class='row'><div class='col-sm-9'><strong>"+repo.dataSource+" / "+repo.year+"</strong></div>"+
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
		if(repo.dataSource){
			return repo.dataSource+" / "+repo.year;
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
	// 酸化
	function formatSour(repo) {
	  if (repo.loading) {
		  return repo.text;
	  }
	  return repo.dataSource;
	}
	function formatSourSelection(repo) {
		if(repo.dataSource){
			return repo.dataSource;
		}
		return repo.text;
	}
	var $sourSelect=$("#sourSelect").select2({
		data:cdSo2Equiv,
		minimumResultsForSearch:-1, //如要搜索可去掉该选项
		language:iMsg.select2LangCode,
		escapeMarkup: function (markup) { return markup; },
		templateResult: formatSour,
		templateSelection: formatSourSelection
	});
	// 富营养化
	function formatEutrophication(repo) {
		if (repo.loading) {
			return repo.text;
		}
		return repo.dataSource;
	}
	function formatEutrophicationSelection(repo) {
		if(repo.dataSource){
			return repo.dataSource;
		}
		return repo.text;
	}
	var $eutrophicationSelect=$("#eutrophicationSelect").select2({
		data:cdNEquiv,
		minimumResultsForSearch:-1, //如要搜索可去掉该选项
		language:iMsg.select2LangCode,
		escapeMarkup: function (markup) { return markup; },
		templateResult: formatEutrophication,
		templateSelection: formatEutrophicationSelection
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
	var materialData={};
	var transConsData={};
	var use1Data={};
	var use2Data={};
	var use3Data={};
	var conserveData={};
	var recycleData={};
	var influenceData={};
	var chartData={};
	var basicData={};
	var materialRange,transConsRange,use1Range,use2Range,use3Range,conserveRange,recycleRange;
	var energyRange,carbonRang,sourRange,eutrophicationRange,ozoneRange;
	// 运输与施工特殊处理，因为一个范围中有两个表单，需要两个都完成才能使transConsRange=2
	var transFlag,consFlag;
	// 养护处理，需要先完成养护原材料清单才行
	var conserveMaterialFlag;
	function initClean() {
		materialData={};
		transConsData={};
		use1Data={};
		use2Data={};
		use3Data={};
		conserveData={};
		recycleData={};
		influenceData={};
		chartData={};
		basicData={};
		transFlag=false;
		consFlag=false;
		conserveMaterialFlag=false;
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
    		//ozoneRange=$("#ozoneRange").is(":checked")?1:0;
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
    		var rLength=$("#roadLength").val()*1000;
    		var rWidth=parseFloat($("#roadWidth").val());
    		var area=rLength*rWidth;
    		basicData.rLength=rLength;
    		basicData.rWidth=rWidth;
    		basicData.area=area;
    		basicData.roadType=$roadType.select2("data")[0].text;
    		var gravel=0,ordinaryAsphalt=0,modifiedAsphalt=0,highViscosityAsphalt=0,cement=0,lime=0,rebar=0,snj=0,jqj=0,zsj=0,qlzsj=0,hnj=0,jsj=0,brick=0;
    		// 拌和摊铺相关
    		var lqhnthd=0,lqmtzhd=0;tphd=0;
    		
    		var baseWeight=area*$("#baseLayerThickness").val()*$baseLayerMaterial.select2("data")[0].density;
			var bottomBaseWeight=area*$("#bottomBaseLayerThickness").val()*$bottomBaseLayerMaterial.select2("data")[0].density;
			var cushionWeight=area*$("#cushionLayerThickness").val()*$cushionLayerMaterial.select2("data")[0].density;
    		if($roadType.val()==1){
    			var topVolume=area*$("#asphaltTopLayerThickness").val();
    			basicData.topVolume=topVolume;
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
    			basicData.topVolume=topVolume;
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
    		tphd+=parseFloat($("#baseLayerThickness").val())+parseFloat($("#bottomBaseLayerThickness").val())+parseFloat($("#cushionLayerThickness").val());
    		basicData.totalThickness=tphd;
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
				materialData.materialList=[];
				if(gravel>0){
					materialData.materialList.push({materialMark:"gravel",materialName:"碎石集料",amount:gravel.toFixed(3)});
					$("#gravelSelect").show();
				}
				if(ordinaryAsphalt>0){
					materialData.materialList.push({materialMark:"ordinaryAsphalt",materialName:"普通沥青",amount:ordinaryAsphalt.toFixed(3)});
					$("#ordinaryAsphaltSelect").show();
				}
				if(modifiedAsphalt>0){
					materialData.materialList.push({materialMark:"modifiedAsphalt",materialName:"改性沥青",amount:modifiedAsphalt.toFixed(3)});
					$("#modifiedAsphaltSelect").show();
				}
				if(highViscosityAsphalt>0){
					materialData.materialList.push({materialMark:"highViscosityAsphalt",materialName:"高粘度沥青",amount:highViscosityAsphalt.toFixed(3)});
					$("#highViscosityAsphaltSelect").show();
				}
				if(cement>0){
					materialData.materialList.push({materialMark:"cement",materialName:"水泥",amount:cement.toFixed(3)});
					$("#cementSelect").show();
				}
				if(lime>0){
					materialData.materialList.push({materialMark:"lime",materialName:"石灰",amount:lime.toFixed(3)});
					$("#limeSelect").show();
				}
				if(rebar>0){
					materialData.materialList.push({materialMark:"rebar",materialName:"钢筋",amount:rebar.toFixed(3)});
					$("#rebarSelect").show();
				}
				if(snj>0){
					materialData.materialList.push({materialMark:"snjType",materialName:"速凝剂",amount:snj.toFixed(3)});
					$("#snjSelect").show();
				}
				if(jqj>0){
					materialData.materialList.push({materialMark:"jqjType",materialName:"加气剂",amount:jqj.toFixed(3)});
					$("#jqjSelect").show();
				}
				if(zsj>0){
					materialData.materialList.push({materialMark:"zsjType",materialName:"增塑剂",amount:zsj.toFixed(3)});
					$("#zsjSelect").show();
				}
				if(qlzsj>0){
					materialData.materialList.push({materialMark:"qlzsjType",materialName:"强力增塑剂",amount:qlzsj.toFixed(3)});
					$("#qlzsjSelect").show();
				}
				if(hnj>0){
					materialData.materialList.push({materialMark:"hnjType",materialName:"缓凝剂",amount:hnj.toFixed(3)});
					$("#hnjSelect").show();
				}
				if(jsj>0){
					materialData.materialList.push({materialMark:"jsjType",materialName:"减水剂",amount:jsj.toFixed(3)});
					$("#jsjSelect").show();
				}
				if(brick>0){
					materialData.materialList.push({materialMark:"brick",materialName:"混凝土砖",amount:Math.ceil(brick)}); // 铺砖
				}
				var _html='';
	            var tpl=$('#tpl-materialInventoryTable').html();
	            for (var i=0,len=materialData.materialList.length; i < len; i++){
	                var item = materialData.materialList[i];
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
	            transConsData.transportList=[];
	            if(gravel>0){
	            	transConsData.transportList.push({materialMark:"aggregate",materialName:"集料",amount:gravel.toFixed(3)});
	            	$("#aggregateVehicleSelect").show();
	            }
	            if(allAsphalt>0){
	            	transConsData.transportList.push({materialMark:"asphalt",materialName:"沥青",amount:allAsphalt.toFixed(3)});
	            	$("#asphaltVehicleSelect").show();
	            }
	            if(cement>0){
	            	transConsData.transportList.push({materialMark:"cement",materialName:"水泥",amount:cement.toFixed(3)});
	            	$("#cementVehicleSelect").show();
	            }
	            if(mixtureAmount>0){
	            	transConsData.transportList.push({materialMark:"mixture",materialName:"混合料",amount:mixtureAmount.toFixed(3)});
	            	$("#mixtureVehicleSelect").show();
	            }
	            _html='';
	            var tpl=$('#tpl-transportInventoryTable').html();
	            for (var i=0,len=transConsData.transportList.length; i < len; i++){
	                var item = transConsData.transportList[i];
	                _html += renderTpl(tpl, item);
	            }
	            $('#transportInventoryTable tbody').html(_html);
            
	            // 计算拌和与摊铺
	            basicData.lqhnttj=area*lqhnthd/1000;
	            basicData.lqmtztj=area*lqmtzhd/1000;
	            basicData.tptj=area*tphd/1000;
	            var tmpList=[];
	            tmpList.push({fuelName:"汽油(kg)"});
	            tmpList.push({fuelName:"柴油(kg)"});
	            tmpList.push({fuelName:"重油(kg)"});
	            tmpList.push({fuelName:"电(kWh)"});
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
				// 计算使用反射率
				$("#use1Inventory").show();
				$("#electricityReduce").empty();
				$("#nonPavementReflectance").val(0.1);
				$("#reflectCoefficient").val(2.5);
			}else{
				$("#use1Inventory").hide();
			}
			if(use2Range){
				// 计算使用透水率
				$("#use2Inventory").show();
				var tmpList=[];
	            tmpList.push({fuelName:"汽油(kg)"});
	            tmpList.push({fuelName:"柴油(kg)"});
	            tmpList.push({fuelName:"电(kWh)"});
	            var _html='';
	            var tpl=$('#tpl-use2InventoryTable').html();
	            for (var i=0,len=tmpList.length; i < len; i++){
	                var item = tmpList[i];
	                _html += renderTpl(tpl, item);
	            }
	            $('#use2InventoryTable tbody').html(_html);
	            $('#use2InventoryTable2 tbody').empty();
				if($roadType.val()==1 && $asphaltTopLayerMaterial.val()==1 && $asphaltMiddleLayerMaterial.val()==1 && $asphaltBelowLayerMaterial.val()==1){
					$("#roadTypeUse2").text("透水路面");
					$("#use2Item11").val(0.4);
					$("#use2Item12").val(4);
					$("#use2Item13").val(2);
				}else{
					$("#roadTypeUse2").text("不透水路面");
					$("#use2Item11").val(0.2);
					$("#use2Item12").val(2);
					$("#use2Item13").val(1);
				}
				$("#use2Item2").val(60);
				$("#use2Item3").val(5000);
				$("#use2Item4").val(10);
				$("#use2Item5").val(0.0824);
				$("#use2Item6").val(0.204);
				$("#use2Item8").val(50);
				$("#use2Item14").val(20);
				$("#use2Item16").val(0.3);
				$("#use2Item17").val(30);
				$("#use2Item18").val(0.05);
				$("#use2Item21").val(0.1);
				$("#use2Item22").val(1);
			}else{
				$("#use2Inventory").hide();
			}
			if(use3Range){
				// 计算使用滚动阻力
				$("#use3Inventory").show();
				$("#heavyAxleloadTimes").val(3);
				$("#smallAxleloadTimes").val(0.01);
				if(use2Range){
					$("#use2ItemInUse3").hide();
				}else{
					$("#use2ItemInUse3").show();
					$("#use2Item3InUse3").val(5000);
					$("#use2Item4InUse3").val(10);
					$("#use2Item5InUse3").val(0.0824);
					$("#use2Item6InUse3").val(0.204);
				}
				var tmpList=[];
	            tmpList.push({fuelName:"汽油"});
	            tmpList.push({fuelName:"柴油"});
	            var _html='';
	            var tpl=$('#tpl-use3InventoryTable').html();
	            for (var i=0,len=tmpList.length; i < len; i++){
	                var item = tmpList[i];
	                _html += renderTpl(tpl, item);
	            }
	            $('#use3InventoryTable tbody').html(_html);
			}else{
				$("#use3Inventory").hide();
			}
			if(conserveRange){
				// 计算养护
				$("#conserveInventory").show();
				conserveData.itemList=[];
				conserveData.itemId=1;
				$("#conserveBase2").val(5);
				$("#conserveBase3").val(8);
				$("#conserveBase4").val(100);
				$("#conserveBase5").val(1);
				$("#conserveUncertainty").val(30);
				$("#inventoryConserveMaterialForm").hide();
				$('#conserveInventoryMaterialTable tbody').empty();
				$("#conserveInventoryItemTable tbody").empty();
				$("#conserveInventoryEconomicTable tbody").empty();
			}else{
				$("#conserveInventory").hide();
			}
			if(recycleRange){
				// 计算回收
				$("#recycleInventory").show();
				$("#recycleInventoryTable tbody").empty();
				// 存混合料用量
				recycleData.mixtureAmount=gravel+ordinaryAsphalt+modifiedAsphalt+highViscosityAsphalt+cement;
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
		materialData.resList=[];
		if(materialData.materialList.length>0){
			for (var i = 0; i < materialData.materialList.length; i++) {
				var item=materialData.materialList[i];
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
					materialData.resList.push(res);
					var amount=item.amount*1000;
					if(res.cost){
						if(res.cost.indexOf("~")!=-1){
					    	var nums=res.cost.split("~");
					    	item.cost=(nums[0]*amount).toFixed(3)+"~"+(nums[1]*amount).toFixed(3);
				    	}else{
				    		item.cost=(res.cost*amount).toFixed(3);
				    	}
					}else{
						item.cost=undefined;
					}
					if(res.energyConsume!=null){
						item.energyConsume=(res.energyConsume*amount).toExponential(2);
					}else{
						item.energyConsume=undefined;
					}
					if(res.emissionCo2!=null){
						item.emissionCo2=(res.emissionCo2*amount).toExponential(2);
					}else{
						item.emissionCo2=undefined;
					}
					if(res.emissionCh4!=null){
						item.emissionCh4=(res.emissionCh4*amount).toExponential(2);
					}else{
						item.emissionCh4=undefined;
					}
					if(res.emissionN2o!=null){
						item.emissionN2o=(res.emissionN2o*amount).toExponential(2);
					}else{
						item.emissionN2o=undefined;
					}
					if(res.emissionCo!=null){
						item.emissionCo=(res.emissionCo*amount).toExponential(2);
					}else{
						item.emissionCo=undefined;
					}
					if(res.emissionSo2!=null){
						item.emissionSo2=(res.emissionSo2*amount).toExponential(2);
					}else{
						item.emissionSo2=undefined;
					}
					if(res.emissionNox!=null){
						item.emissionNox=(res.emissionNox*amount).toExponential(2);
					}else{
						item.emissionNox=undefined;
					}
					if(res.emissionPb!=null){
						item.emissionPb=(res.emissionPb*amount).toExponential(2);
					}else{
						item.emissionPb=undefined;
					}
					if(res.emissionZn!=null){
						item.emissionZn=(res.emissionZn*amount).toExponential(2);
					}else{
						item.emissionZn=undefined;
					}
				}
			}
			var _html='';
            var tpl=$('#tpl-materialInventoryTable').html();
            for (var i=0,len=materialData.materialList.length; i < len; i++){
                var item = materialData.materialList[i];
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
    	errorPlacement: function(error, element) {
    		if (element.parent().hasClass("input-group")) {
    			error.appendTo(element.parent().parent());
    		} else {
    			error.appendTo(element.parent());
    		}
		},
    	submitHandler:function(form){
    		transConsData.transResList=[];
    		if(transConsData.transportList.length>0){
	    		for (var i = 0; i < transConsData.transportList.length; i++) {
					var item=transConsData.transportList[i];
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
						transConsData.transResList.push(res);
						item.vehicleModel=res.vehicleType;
						item.distance=distance;
						var amount=item.amount;
						if(res.cost){
							item.cost=(res.cost*amount*distance).toFixed(3);
						}else{
							item.cost=undefined;
						}
						if(res.energyConsume!=null){
							item.energyConsume=(res.energyConsume*amount*distance).toExponential(2);
						}else{
							item.energyConsume=undefined;
						}
						if(res.emissionCo2!=null){
							item.emissionCo2=(res.emissionCo2*amount*distance).toExponential(2);
						}else{
							item.emissionCo2=undefined;
						}
						if(res.emissionCh4!=null){
							item.emissionCh4=(res.emissionCh4*amount*distance).toExponential(2);
						}else{
							item.emissionCh4=undefined;
						}
						if(res.emissionN2o!=null){
							item.emissionN2o=(res.emissionN2o*amount*distance).toExponential(2);
						}else{
							item.emissionN2o=undefined;
						}
						if(res.emissionCo!=null){
							item.emissionCo=(res.emissionCo*amount*distance).toExponential(2);
						}else{
							item.emissionCo=undefined;
						}
						if(res.emissionSo2!=null){
							item.emissionSo2=(res.emissionSo2*amount*distance).toExponential(2);
						}else{
							item.emissionSo2=undefined;
						}
						if(res.emissionNox!=null){
							item.emissionNox=(res.emissionNox*amount*distance).toExponential(2);
						}else{
							item.emissionNox=undefined;
						}
						if(res.emissionPb!=null){
							item.emissionPb=(res.emissionPb*amount*distance).toExponential(2);
						}else{
							item.emissionPb=undefined;
						}
						if(res.emissionZn!=null){
							item.emissionZn=(res.emissionZn*amount*distance).toExponential(2);
						}else{
							item.emissionZn=undefined;
						}
					}
				}
				var _html='';
	            var tpl=$('#tpl-transportInventoryTable').html();
	            for (var i=0,len=transConsData.transportList.length; i < len; i++){
	                var item = transConsData.transportList[i];
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
			transConsData.consResList=[];
			var gasoline=0,diesel=0,heavyOil=0,electricity=0;
			var mixType=$mixEqupType.select2("data")[0];
			transConsData.consResList.push({dataSource:'JTGT B06-03-2007 公路工程机械台班费用定额',createUserId:0});
			var lqhnttj=basicData.lqhnttj,lqmtztj=basicData.lqmtztj,tptj=basicData.tptj;
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
					transConsData.consResList.push({dataSource:'JTGT B06-03-2007 公路工程机械台班费用定额',createUserId:0});
				}else{
					if(pavingType.diesel!=null){
						diesel+=tptj*pavingType.diesel;
					}
					transConsData.consResList.push(pavingType);
				}
			}
			transConsData.mixPaveList=[];
			transConsData.mixPaveList.push({fuelMark:"gasoline",fuelName:"汽油(kg)",amount:gasoline.toFixed(3)});
			transConsData.mixPaveList.push({fuelMark:"diesel",fuelName:"柴油(kg)",amount:diesel.toFixed(3)});
			transConsData.mixPaveList.push({fuelMark:"heavyOil",fuelName:"重油(kg)",amount:heavyOil.toFixed(3)});
			transConsData.mixPaveList.push({fuelMark:"electricity",fuelName:"电(kWh)",amount:electricity.toFixed(3)});
			for (var i = 0; i < transConsData.mixPaveList.length; i++) {
				var item=transConsData.mixPaveList[i];
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
					transConsData.consResList.push(res);
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
			for (var i=0,len=transConsData.mixPaveList.length; i < len; i++){
				var item = transConsData.mixPaveList[i];
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
	// 使用透水率
	$("#gasolineUse2").select2({
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
	$("#dieselUse2").select2({
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
	$("#electricityUse2").select2({
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
	var validatorInventoryUse2Form = $("#inventoryUse2Form").validate({
		errorClass: 'text-danger',
		rules:{
			use2Item1:{
				required:true,
				number:true,
				min:1
			},
			use2Item2:{
				required:true,
				number:true,
				min:0
			},
			use2Item3:{
				required:true,
				number:true,
				min:0
			},
			use2Item4:{
				required:true,
				number:true,
				min:0,
				max:100
			},
			use2Item5:{
				required:true,
				number:true,
				min:0
			},
			use2Item6:{
				required:true,
				number:true,
				min:0
			},
			use2Item7:{
				required:true,
				number:true,
				min:0,
				max:100
			},
			use2Item8:{
				required:true,
				number:true,
				min:0,
				max:100
			},
			use2Item9:{
				required:true,
				number:true,
				min:0,
				max:100
			},
			use2Item10:{
				required:true,
				number:true,
				min:0
			},
			use2Item11:{
				required:true,
				number:true,
				min:0
			},
			use2Item12:{
				required:true,
				digits:true,
				min:0
			},
			use2Item13:{
				required:true,
				digits:true,
				min:0
			},
			use2Item14:{
				required:true,
				number:true,
				min:0
			},
			use2Item15:{
				required:true,
				number:true,
				min:0
			},
			use2Item16:{
				required:true,
				number:true,
				min:0,
				max:1
			},
			use2Item17:{
				required:true,
				number:true,
				min:0
			},
			use2Item18:{
				required:true,
				number:true,
				min:0
			},
			use2Item19:{
				required:true,
				number:true
			},
			use2Item20:{
				required:true,
				number:true,
				min:0,
				max:100
			},
			use2Item21:{
				required:true,
				number:true,
				min:0
			},
			use2Item22:{
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
			var i1=$("#use2Item1").val();
			var i2=$("#use2Item2").val();
			var i3=$("#use2Item3").val();
			var i4=$("#use2Item4").val()/100.0;
			var i5=$("#use2Item5").val();
			var i6=$("#use2Item6").val();
			var i7=$("#use2Item7").val()/100.0;
			var i8=$("#use2Item8").val()/100.0;
			var i9=$("#use2Item9").val()/100.0;
			var i10=$("#use2Item10").val();
			var i11=$("#use2Item11").val();
			var i12=$("#use2Item12").val();
			var i13=$("#use2Item13").val();
			var i14=$("#use2Item14").val();
			var i15=$("#use2Item15").val();
			var i16=$("#use2Item16").val();
			var i17=$("#use2Item17").val();
			var i18=$("#use2Item18").val();
			var i19=$("#use2Item19").val();
			var i20=$("#use2Item20").val();
			var i21=$("#use2Item21").val();
			var i22=$("#use2Item22").val();
			use2Data.use3Para={};
			use2Data.use3Para.i1=i1;
			use2Data.use3Para.i3=i3;
			use2Data.use3Para.i4=i4;
			use2Data.use3Para.i5=i5;
			use2Data.use3Para.i6=i6;
			use2Data.use3Para.i7=i7;
			if(i11/0.5>1){
				use2Data.bypassRatio=1;
			}else{
				use2Data.bypassRatio=i11/0.5;
			}
			use2Data.totalTraffic=i3*(Math.pow(1+i7,i1)-1)/i7*365;
			var gasoline=i13*i12/365*use2Data.totalTraffic*(1-i4)*(use2Data.bypassRatio*i14*i5+(1-use2Data.bypassRatio)*i15*i8*i5);
			var diesel=i13*i12/365*use2Data.totalTraffic*i4*(use2Data.bypassRatio*i14*i6+(1-use2Data.bypassRatio)*i15*i8*i6);
			var x=i10*(1-i16)*basicData.area/1000;
			var et0;
			if(i19<21){
				if(i20>50){
					et0=3.175;
				}else{
					et0=4.445;
				}
			}else if(i19>32){
				if(i20>50){
					et0=6.35;
				}else{
					et0=9.525;
				}
			}else {
				if(i20>50){
					et0=4.445;
				}else{
					et0=5.715;
				}
			}
			var y=(et0*0.8-i10*0.6)*3*basicData.area/1000;
			var electricity=i1*i17*i18*(x>y?y:x);
			use2Data.fuelList=[];
			use2Data.fuelList.push({fuelMark:"gasolineUse2",fuelName:"汽油(kg)",amount:gasoline.toFixed(3)});
			use2Data.fuelList.push({fuelMark:"dieselUse2",fuelName:"柴油(kg)",amount:diesel.toFixed(3)});
			use2Data.fuelList.push({fuelMark:"electricityUse2",fuelName:"电(kWh)",amount:electricity.toFixed(3)});
			use2Data.resList=[];
			for (var i = 0; i < use2Data.fuelList.length; i++) {
				var item=use2Data.fuelList[i];
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
					use2Data.resList.push(res);
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
			var tpl=$('#tpl-use2InventoryTable').html();
			for (var i=0,len=use2Data.fuelList.length; i < len; i++){
				var item = use2Data.fuelList[i];
				_html += renderTpl(tpl, item);
			}
			$('#use2InventoryTable tbody').html(_html);
			tpl=$('#tpl-use2InventoryTable2').html();
			_html = renderTpl(tpl, use2Data);
			$('#use2InventoryTable2 tbody').html(_html);
			use2Range=2;
		},
		onkeyup:false
	});
	// 使用反射率
	var validatorInventoryUse1Form = $("#inventoryUse1Form").validate({
		errorClass: 'text-danger',
		rules:{
			pavementReflectance:{
				required:true,
				number:true,
				min:0
			},
			nonPavementReflectance:{
				required:true,
				number:true,
				min:0
			},
			reflectCoefficient:{
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
			var x=$("#pavementReflectance").val();
			var y=$("#nonPavementReflectance").val();
			var z=$("#reflectCoefficient").val();
			use1Data.electricityReduce=(x-y)*100*z*basicData.area;
			$("#electricityReduce").text(use1Data.electricityReduce+"kWh");
			use1Range=2;
		},
		onkeyup:false
	});
	// 使用滚动阻力
	$("#gasolineUse3").select2({
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
	$("#dieselUse3").select2({
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
	var validatorInventoryUse3Form = $("#inventoryUse3Form").validate({
		errorClass: 'text-danger',
		rules:{
			initialIRI:{
				required:true,
				number:true,
				min:0
			},
			heavyAxleloadTimes:{
				required:true,
				number:true,
				min:0
			},
			smallAxleloadTimes:{
				required:true,
				number:true,
				min:0
			},
			use2Item1InUse3:{
				required:true,
				number:true,
				min:1
			},
			use2Item3InUse3:{
				required:true,
				number:true,
				min:0
			},
			use2Item4InUse3:{
				required:true,
				number:true,
				min:0,
				max:100
			},
			use2Item5InUse3:{
				required:true,
				number:true,
				min:0
			},
			use2Item6InUse3:{
				required:true,
				number:true,
				min:0
			},
			use2Item7InUse3:{
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
			var i1,i3,i4,i5,i6,i7;
			if(use2Range==1){
				var d = dialog({
					content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请您完成使用（透水率）清单'+'</p></div>'
				});
				d.show();
				setTimeout(function() {
					d.close().remove();
				}, 1500);
				return false;
			}else if(use2Range==2){
				i1=use2Data.use3Para.i1;
				i3=use2Data.use3Para.i3;
				i4=use2Data.use3Para.i4;
				i5=use2Data.use3Para.i5;
				i6=use2Data.use3Para.i6;
				i7=use2Data.use3Para.i7;
			}else{
				i1=$("#use2Item1InUse3").val();
				i3=$("#use2Item3InUse3").val();
				i4=$("#use2Item4InUse3").val()/100;
				i5=$("#use2Item5InUse3").val();
				i6=$("#use2Item6InUse3").val();
				i7=$("#use2Item7InUse3").val()/100;
			}
			var x=$("#initialIRI").val();
			var y=$("#heavyAxleloadTimes").val();
			var z=$("#smallAxleloadTimes").val();
			var gasoline=0,diesel=0;
			if(conserveRange==2){
				for (var i = 1; i <= i1; i++) {
					var cItems=conserveData.itemList;
					var iri=Math.pow(-0.174+0.0000966*Math.sqrt((i3*i4*y+i3*(1-i4)*z)*365*(Math.pow(1+i7,i)-1)/i7)+1.15*Math.sqrt(x),2);
					for (var ii = 0; ii < cItems.length; ii++) {
						if(cItems[ii].i2==i){
							irt=iri-(-0.6839+0.6197*iri);
							break;
						}
					}
					gasoline+=(iri-1)*0.0313*(i5*basicData.rLength/1000*i3*Math.pow(1+i7,i));
					diesel+=(iri-1)*0.00739*(i6*basicData.rLength/1000*i3*Math.pow(1+i7,i));
				}
			}else{
				for (var i = 1; i <= i1; i++) {
					var iri=Math.pow(-0.174+0.0000966*Math.sqrt((i3*i4*y+i3*(1-i4)*z)*365*(Math.pow(1+i7,i)-1)/i7)+1.15*Math.sqrt(x),2);
					gasoline+=(iri-1)*0.0313*(i5*basicData.rLength/1000*i3*Math.pow(1+i7,i));
					diesel+=(iri-1)*0.00739*(i6*basicData.rLength/1000*i3*Math.pow(1+i7,i));
				}
			}
			use3Data.fuelList=[];
			use3Data.fuelList.push({fuelMark:"gasolineUse3",fuelName:"汽油",amount:gasoline.toFixed(3)});
			use3Data.fuelList.push({fuelMark:"dieselUse3",fuelName:"柴油",amount:diesel.toFixed(3)});
			use3Data.resList=[];
			for (var i = 0; i < use3Data.fuelList.length; i++) {
				var item=use3Data.fuelList[i];
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
					use3Data.resList.push(res);
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
			var tpl=$('#tpl-use3InventoryTable').html();
			for (var i=0,len=use3Data.fuelList.length; i < len; i++){
				var item = use3Data.fuelList[i];
				_html += renderTpl(tpl, item);
			}
			$('#use3InventoryTable tbody').html(_html);
			use3Range=2;
		},
		onkeyup:false
	});
	// 养护
	$("#conserveItem7").select2({
		data:cdAsphaltType,
		minimumResultsForSearch:-1,
		language:iMsg.select2LangCode
	});
	var validatorConserveItemInputForm = $("#conserveItemInputForm").validate({
		errorClass: 'text-danger',
		rules:{
			conserveItem1:{
				required:true
			},
			conserveItem2:{
				required:true,
				number:true,
				min:1
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
				min:0,
				max:100
			},
			conserveItem6:{
				required:true,
				number:true,
				min:0
			},
			conserveItem8:{
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
			var itemId=$("#itemId").val();
			if(itemId){
				var x;
				for (var i = 0; i < conserveData.itemList.length; i++) {
					if(conserveData.itemList[i].id==itemId){
						x=conserveData.itemList[i];
						break;
					}
				}
				if(x){
					x.i1=$("#conserveItem1").val();
	    			x.i2=$("#conserveItem2").val();
	    			x.i2Text="道路运营"+x.i2+"年后";
	    			x.i3=$("#conserveItem3").val();
	    			x.i4=$("#conserveItem4").val();
	    			x.i5=$("#conserveItem5").val();
	    			x.i6=$("#conserveItem6").val();
	    			var t=$("#conserveItem7").select2("data")[0];
	    			x.i7=t.id;
	    			x.i7Text=t.text;
	    			x.i8=$("#conserveItem8").val();
	    			var tds=$("#edit"+itemId).parent().parent().children("td");
	    			tds.eq(0).text(x.i1);
	    			tds.eq(1).text(x.i2Text);
	    			tds.eq(2).text(x.i3);
	    			tds.eq(3).text(x.i4);
	    			tds.eq(4).text(x.i5);
	    			tds.eq(5).text(x.i6);
	    			tds.eq(6).text(x.i7Text);
	    			tds.eq(7).text(x.i8);
	    			$("#modal-default").modal("hide");
	    			conserveMaterialFlag=false;
	    			conserveRange=1;
	    			conserveData.materialList=[];
	    			$("#inventoryConserveMaterialForm").hide();
	    			$('#conserveInventoryMaterialTable tbody').empty();
	    			$('#conserveInventoryEconomicTable tbody').empty();
				}
    		}else{
    			var x={};
    			var id=conserveData.itemId;
    			x.id=id;
    			x.i1=$("#conserveItem1").val();
    			x.i2=$("#conserveItem2").val();
    			x.i2Text="道路运营"+x.i2+"年后";
    			x.i3=$("#conserveItem3").val();
    			x.i4=$("#conserveItem4").val();
    			x.i5=$("#conserveItem5").val();
    			x.i6=$("#conserveItem6").val();
    			var t=$("#conserveItem7").select2("data")[0];
    			x.i7=t.id;
    			x.i7Text=t.text;
    			x.i8=$("#conserveItem8").val();
    			conserveData.itemList.push(x);
    			var tpl=$('#tpl-conserveInventoryItemTable').html();
    			var _html = renderTpl(tpl, x);
    			$('#conserveInventoryItemTable tbody').append($(_html));
    			$("#delete"+id).click(function(){
    				for (var i = 0; i < conserveData.itemList.length; i++) {
						if(conserveData.itemList[i].id==id){
							conserveData.itemList.splice(i,1);
							break;
						}
					}
    				var $tr = $(this).parent().parent();
    				$tr.remove();
    				conserveMaterialFlag=false;
    				conserveRange=1;
	    			conserveData.materialList=[];
        			$("#inventoryConserveMaterialForm").hide();
        			$('#conserveInventoryMaterialTable tbody').empty();
        			$('#conserveInventoryEconomicTable tbody').empty();
    			});
    			$("#edit"+id).click(function(){
    				var data;
    				for (var i = 0; i < conserveData.itemList.length; i++) {
						if(conserveData.itemList[i].id==id){
							data=conserveData.itemList[i];
							break;
						}
					}
    				if(data){
    					$("#myModalLabel").text("编辑");
    					validatorConserveItemInputForm.resetForm();
    			        $("#conserveItemInputForm")[0].reset();
    			        $("#itemId").val(data.id);
    					$("#conserveItem1").val(data.i1);
    					$("#conserveItem2").val(data.i2);
    					$("#conserveItem3").val(data.i3);
    					$("#conserveItem4").val(data.i4);
    					$("#conserveItem5").val(data.i5);
    					$("#conserveItem6").val(data.i6);
    					$("#conserveItem7").val(data.i7).trigger("change");
    					$("#conserveItem8").val(data.i8);
    					$("#modal-default").modal("show");
    				}
    			});
    			conserveData.itemId=conserveData.itemId+1;
    			$("#modal-default").modal("hide");
    			conserveMaterialFlag=false;
    			conserveRange=1;
    			conserveData.materialList=[];
    			$("#inventoryConserveMaterialForm").hide();
    			$('#conserveInventoryMaterialTable tbody').empty();
    			$('#conserveInventoryEconomicTable tbody').empty();
    		}
		},
		onkeyup:false
	});
	$("#addConserveItem").click(function(){
		$("#myModalLabel").text("添加");
		validatorConserveItemInputForm.resetForm();
        $("#conserveItemInputForm")[0].reset();
        $("#itemId").val('');
		$("#conserveItem1").val("薄层罩面");
		$("#conserveItem2").val(5);
		$("#conserveItem3").val("1/2");
		$("#conserveItem4").val(50);
		$("#conserveItem5").val(20);
		$("#conserveItem6").val(2);
		$("#conserveItem7").val(cdAsphaltType[0].id).trigger("change");
 		$("#modal-default").modal("show");
	});
	$("#gravelConserve").select2({
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
	$("#ordinaryAsphaltConserve").select2({
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
	$("#modifiedAsphaltConserve").select2({
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
	$("#highViscosityAsphaltConserve").select2({
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
	var validatorInventoryConserveItemForm = $("#inventoryConserveItemForm").validate({
		errorClass: 'text-danger',
		rules:{
			conserveUncertainty:{
				required:true,
				number:true,
				min:5,
				max:30
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
			if(conserveData.itemList.length==0){
				var d = dialog({
					content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请您至少添加一个养护条目'+'</p></div>'
				});
				d.show();
				setTimeout(function() {
					d.close().remove();
				}, 1500);
				return false;
			}
			var un=$("#conserveUncertainty").val();
			conserveData.conserveUncertainty=un;
			un=un/100;
			// 概率相关计算，根据不确定性得到materialListUp和materialList
			var gravel=0,ordinaryAsphalt=0,modifiedAsphalt=0,highViscosityAsphalt=0;
			var gravelUp=0,ordinaryAsphaltUp=0,modifiedAsphaltUp=0,highViscosityAsphaltUp=0;
			var gravelDown=0,ordinaryAsphaltDown=0,modifiedAsphaltDown=0,highViscosityAsphaltDown=0;
			for (var i = 0; i < conserveData.itemList.length; i++) {
				var item = conserveData.itemList[i];
				var w=basicData.area*item.i5/100*item.i6/100*2.35;
				var wUp=w*(1+un)*(1+un);
				var wDown=w*(1-un)*(1-un);
				var i8=item.i8/100;
				gravel+=w/(1+i8);
				gravelUp+=wUp/(1+i8);
				gravelDown+=wDown/(1+i8);
				switch (item.i7) {
				case "1":
					ordinaryAsphalt+=w*i8/(1+i8);
					ordinaryAsphaltUp+=wUp*i8/(1+i8);
					ordinaryAsphaltDown+=wDown*i8/(1+i8);
					break;
				case "2":
					modifiedAsphalt+=w*i8/(1+i8);
					modifiedAsphaltUp+=wUp*i8/(1+i8);
					modifiedAsphaltDown+=wDown*i8/(1+i8);
					break;
				case "3":
					highViscosityAsphalt+=w*i8/(1+i8);
					highViscosityAsphaltUp+=wUp*i8/(1+i8);
					highViscosityAsphaltDown+=wDown*i8/(1+i8);
					break;
				default:
					break;
				}
			}
			$("#gravelSelectConserve").hide();
			$("#ordinaryAsphaltSelectConserve").hide();
			$("#modifiedAsphaltSelectConserve").hide();
			$("#highViscosityAsphaltSelectConserve").hide();
			conserveData.materialList=[];
			conserveData.materialListUp=[];
			conserveData.materialListDown=[];
			if(gravel>0){
				conserveData.materialList.push({materialMark:"gravelConserve",materialName:"碎石",amount:gravel.toFixed(3)});
				conserveData.materialListUp.push({amount:gravelUp.toFixed(3)});
				conserveData.materialListDown.push({amount:gravelDown.toFixed(3)});
				$("#gravelSelectConserve").show();
			}
			if(ordinaryAsphalt>0){
				conserveData.materialList.push({materialMark:"ordinaryAsphaltConserve",materialName:"普通沥青",amount:ordinaryAsphalt.toFixed(3)});
				conserveData.materialListUp.push({amount:ordinaryAsphaltUp.toFixed(3)});
				conserveData.materialListDown.push({amount:ordinaryAsphaltDown.toFixed(3)});
				$("#ordinaryAsphaltSelectConserve").show();
			}
			if(modifiedAsphalt>0){
				conserveData.materialList.push({materialMark:"modifiedAsphaltConserve",materialName:"改性沥青",amount:modifiedAsphalt.toFixed(3)});
				conserveData.materialListUp.push({amount:modifiedAsphaltUp.toFixed(3)});
				conserveData.materialListDown.push({amount:modifiedAsphaltDown.toFixed(3)});
				$("#modifiedAsphaltSelectConserve").show();
			}
			if(highViscosityAsphalt>0){
				conserveData.materialList.push({materialMark:"highViscosityAsphaltConserve",materialName:"高粘度沥青",amount:highViscosityAsphalt.toFixed(3)});
				conserveData.materialListUp.push({amount:highViscosityAsphaltUp.toFixed(3)});
				conserveData.materialListDown.push({amount:highViscosityAsphaltDown.toFixed(3)});
				$("#highViscosityAsphaltSelectConserve").show();
			}
			$("#inventoryConserveMaterialForm").show();
			conserveMaterialFlag=false;
			conserveRange=1;
			$('#conserveInventoryEconomicTable tbody').empty();
			var _html='';
            var tpl=$('#tpl-conserveInventoryMaterialTable').html();
            for (var i=0,len=conserveData.materialList.length; i < len; i++){
                var item = conserveData.materialList[i];
                _html += renderTpl(tpl, item);
            }
            $('#conserveInventoryMaterialTable tbody').html(_html);
		},
		onkeyup:false
	});
	$("#inventoryConserveMaterialForm").submit(function(){
		conserveData.resList=[];
		if(conserveData.materialList.length>0){
			for (var i = 0; i < conserveData.materialList.length; i++) {
				var item=conserveData.materialList[i];
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
				}
				conserveData.resList.push(res);
				var amount=item.amount*1000;
				if(res.cost){
					if(res.cost.indexOf("~")!=-1){
				    	var nums=res.cost.split("~");
				    	item.cost=(nums[0]*amount).toFixed(3)+"~"+(nums[1]*amount).toFixed(3);
			    	}else{
			    		item.cost=(res.cost*amount).toFixed(3);
			    	}
				}else{
					item.cost=undefined;
				}
				if(res.energyConsume!=null){
					item.energyConsume=(res.energyConsume*amount).toExponential(2);
				}else{
					item.energyConsume=undefined;
				}
				if(res.emissionCo2!=null){
					item.emissionCo2=(res.emissionCo2*amount).toExponential(2);
				}else{
					item.emissionCo2=undefined;
				}
				if(res.emissionCh4!=null){
					item.emissionCh4=(res.emissionCh4*amount).toExponential(2);
				}else{
					item.emissionCh4=undefined;
				}
				if(res.emissionN2o!=null){
					item.emissionN2o=(res.emissionN2o*amount).toExponential(2);
				}else{
					item.emissionN2o=undefined;
				}
				if(res.emissionCo!=null){
					item.emissionCo=(res.emissionCo*amount).toExponential(2);
				}else{
					item.emissionCo=undefined;
				}
				if(res.emissionSo2!=null){
					item.emissionSo2=(res.emissionSo2*amount).toExponential(2);
				}else{
					item.emissionSo2=undefined;
				}
				if(res.emissionNox!=null){
					item.emissionNox=(res.emissionNox*amount).toExponential(2);
				}else{
					item.emissionNox=undefined;
				}
				if(res.emissionPb!=null){
					item.emissionPb=(res.emissionPb*amount).toExponential(2);
				}else{
					item.emissionPb=undefined;
				}
				if(res.emissionZn!=null){
					item.emissionZn=(res.emissionZn*amount).toExponential(2);
				}else{
					item.emissionZn=undefined;
				}
				// 概率性相关计算
				item=conserveData.materialListUp[i];
				amount=item.amount*1000;
				if(res.cost){
					if(res.cost.indexOf("~")!=-1){
				    	var nums=res.cost.split("~");
				    	item.cost=(nums[0]*amount).toFixed(3)+"~"+(nums[1]*amount).toFixed(3);
			    	}else{
			    		item.cost=(res.cost*amount).toFixed(3);
			    	}
				}else{
					item.cost=undefined;
				}
				if(res.energyConsume!=null){
					item.energyConsume=(res.energyConsume*amount).toExponential(2);
				}else{
					item.energyConsume=undefined;
				}
				if(res.emissionCo2!=null){
					item.emissionCo2=(res.emissionCo2*amount).toExponential(2);
				}else{
					item.emissionCo2=undefined;
				}
				if(res.emissionCh4!=null){
					item.emissionCh4=(res.emissionCh4*amount).toExponential(2);
				}else{
					item.emissionCh4=undefined;
				}
				if(res.emissionN2o!=null){
					item.emissionN2o=(res.emissionN2o*amount).toExponential(2);
				}else{
					item.emissionN2o=undefined;
				}
				if(res.emissionCo!=null){
					item.emissionCo=(res.emissionCo*amount).toExponential(2);
				}else{
					item.emissionCo=undefined;
				}
				if(res.emissionSo2!=null){
					item.emissionSo2=(res.emissionSo2*amount).toExponential(2);
				}else{
					item.emissionSo2=undefined;
				}
				if(res.emissionNox!=null){
					item.emissionNox=(res.emissionNox*amount).toExponential(2);
				}else{
					item.emissionNox=undefined;
				}
				if(res.emissionPb!=null){
					item.emissionPb=(res.emissionPb*amount).toExponential(2);
				}else{
					item.emissionPb=undefined;
				}
				if(res.emissionZn!=null){
					item.emissionZn=(res.emissionZn*amount).toExponential(2);
				}else{
					item.emissionZn=undefined;
				}
				item=conserveData.materialListDown[i];
				amount=item.amount*1000;
				if(res.cost){
					if(res.cost.indexOf("~")!=-1){
				    	var nums=res.cost.split("~");
				    	item.cost=(nums[0]*amount).toFixed(3)+"~"+(nums[1]*amount).toFixed(3);
			    	}else{
			    		item.cost=(res.cost*amount).toFixed(3);
			    	}
				}else{
					item.cost=undefined;
				}
				if(res.energyConsume!=null){
					item.energyConsume=(res.energyConsume*amount).toExponential(2);
				}else{
					item.energyConsume=undefined;
				}
				if(res.emissionCo2!=null){
					item.emissionCo2=(res.emissionCo2*amount).toExponential(2);
				}else{
					item.emissionCo2=undefined;
				}
				if(res.emissionCh4!=null){
					item.emissionCh4=(res.emissionCh4*amount).toExponential(2);
				}else{
					item.emissionCh4=undefined;
				}
				if(res.emissionN2o!=null){
					item.emissionN2o=(res.emissionN2o*amount).toExponential(2);
				}else{
					item.emissionN2o=undefined;
				}
				if(res.emissionCo!=null){
					item.emissionCo=(res.emissionCo*amount).toExponential(2);
				}else{
					item.emissionCo=undefined;
				}
				if(res.emissionSo2!=null){
					item.emissionSo2=(res.emissionSo2*amount).toExponential(2);
				}else{
					item.emissionSo2=undefined;
				}
				if(res.emissionNox!=null){
					item.emissionNox=(res.emissionNox*amount).toExponential(2);
				}else{
					item.emissionNox=undefined;
				}
				if(res.emissionPb!=null){
					item.emissionPb=(res.emissionPb*amount).toExponential(2);
				}else{
					item.emissionPb=undefined;
				}
				if(res.emissionZn!=null){
					item.emissionZn=(res.emissionZn*amount).toExponential(2);
				}else{
					item.emissionZn=undefined;
				}
			}
			var _html='';
            var tpl=$('#tpl-conserveInventoryMaterialTable').html();
            for (var i=0,len=conserveData.materialList.length; i < len; i++){
                var item = conserveData.materialList[i];
                _html += renderTpl(tpl, item);
            }
            $('#conserveInventoryMaterialTable tbody').html(_html);
		}
		conserveMaterialFlag=true;
		return false;
	});
	var validatorInventoryConserveBaseForm = $("#inventoryConserveBaseForm").validate({
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
			if(!conserveMaterialFlag){
				var d = dialog({
                    content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请先完成养护（原材料）清单'+'</p></div>'
                });
                d.show();
                setTimeout(function() {
                    d.close().remove();
                }, 1500);
                return false;
			}
			conserveData.costs={};
			conserveData.costsUp={};
			conserveData.costsDown={};
			var b1=$("#conserveBase1").val();
			var b2=$("#conserveBase2").val()/100;
			var b3=$("#conserveBase3").val()/100;
			var b4=$("#conserveBase4").val();
			var b5=$("#conserveBase5").val();
			var b6=$("#conserveBase6").val();
			var b7=$("#conserveBase7").val();
			var b8=$("#conserveBase8").val();
			var b9=$("#conserveBase9").val()/100;
			var b10=$("#conserveBase10").val();
			var timeCost=0,carOpsCost=0,safeCost=0;
			for (var i = 0; i < conserveData.itemList.length; i++) {
				var item = conserveData.itemList[i];
				var i2=item.i2;
				var i3Nums=item.i3.split("/");
				var i3=i3Nums[0]/i3Nums[1];
				var i4=item.i4;
				timeCost+=(((i3/b7)-(i3/b6))+(b8/b10)*b9)*b1*Math.pow(1+b2,i2)*i4*b4/Math.pow(1+b3,i2);
				carOpsCost+=b1*Math.pow(1+b2,i2)*i4*i3*b5/Math.pow(1+b3,i2);
				safeCost+=b1*Math.pow(1+b2,i2)*i4*i3/160900000*0.45*(0.9*2275229+57.2*15151)*6.6/Math.pow(1+b3,i2);
			}
			conserveData.costs.timeCost=timeCost;
			conserveData.costs.carOpsCost=carOpsCost;
			conserveData.costs.safeCost=safeCost;
			var costsView={timeCost:timeCost.toFixed(2),carOpsCost:carOpsCost.toFixed(2),safeCost:safeCost.toFixed(2)};
			// 概率性相关计算，上升波动
			var un=conserveData.conserveUncertainty/100;
			timeCost=0;carOpsCost=0;safeCost=0;
			for (var i = 0; i < conserveData.itemList.length; i++) {
				var item = conserveData.itemList[i];
				var i2=item.i2*(1+un);
				var i3Nums=item.i3.split("/");
				var i3=i3Nums[0]/i3Nums[1];
				var i4=item.i4*(1+un);
				timeCost+=(((i3/b7)-(i3/b6))+(b8/b10)*b9)*b1*Math.pow(1+b2,i2)*i4*b4/Math.pow(1+b3,i2);
				carOpsCost+=b1*Math.pow(1+b2,i2)*i4*i3*b5/Math.pow(1+b3,i2);
				safeCost+=b1*Math.pow(1+b2,i2)*i4*i3/160900000*0.45*(0.9*2275229+57.2*15151)*6.6/Math.pow(1+b3,i2);
			}
			conserveData.costsUp.timeCost=timeCost;
			conserveData.costsUp.carOpsCost=carOpsCost;
			conserveData.costsUp.safeCost=safeCost;
			// 下降波动
			timeCost=0;carOpsCost=0;safeCost=0;
			for (var i = 0; i < conserveData.itemList.length; i++) {
				var item = conserveData.itemList[i];
				var i2=item.i2*(1-un);
				var i3Nums=item.i3.split("/");
				var i3=i3Nums[0]/i3Nums[1];
				var i4=item.i4*(1-un);
				timeCost+=(((i3/b7)-(i3/b6))+(b8/b10)*b9)*b1*Math.pow(1+b2,i2)*i4*b4/Math.pow(1+b3,i2);
				carOpsCost+=b1*Math.pow(1+b2,i2)*i4*i3*b5/Math.pow(1+b3,i2);
				safeCost+=b1*Math.pow(1+b2,i2)*i4*i3/160900000*0.45*(0.9*2275229+57.2*15151)*6.6/Math.pow(1+b3,i2);
			}
			conserveData.costsDown.timeCost=timeCost;
			conserveData.costsDown.carOpsCost=carOpsCost;
			conserveData.costsDown.safeCost=safeCost;
			var tpl=$('#tpl-conserveInventoryEconomicTable').html();
			var _html = renderTpl(tpl, costsView);
			$('#conserveInventoryEconomicTable tbody').html(_html);
			conserveRange=2;
		},
		onkeyup:false
	});
	// 回收
	$("#fuelTypeRecycle").select2({
		ajax:{
			url:ctxPath+"/api/db/inventory/fuel",
			dataType:'json',
			delay:200,
			data:function(params){
				return {
					page:params.page,
					fuelType:"油"
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
	$("#recycleVehicleModel").select2({
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
	var validatorInventoryRecycleForm = $("#inventoryRecycleForm").validate({
		errorClass: 'text-danger',
		rules:{
			brokenEfficiencyRecycle:{
				required:true,
				number:true,
				min:0
			},
			brokenFuelConsumption:{
				required:true,
				number:true,
				min:0
			},
			recycleDistance:{
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
			recycleData.result={};
			var cost=0,energyConsume=0,emissionCo2=0,emissionCh4=0,emissionN2o=0;
			var emissionCo=0,emissionSo2=0,emissionNox=0,emissionPb=0,emissionZn=0;
			var res=$("#fuelTypeRecycle").select2("data")[0];
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
				var x=$("#brokenEfficiencyRecycle").val();
				var y=$("#brokenFuelConsumption").val();
				var amount=basicData.totalThickness*basicData.area/x*y;
				if(res.cost!=null){
					cost=res.cost*amount;
				}
				if(res.energyConsume!=null){
					energyConsume=res.energyConsume*amount;
				}
				if(res.emissionCo2!=null){
					emissionCo2=res.emissionCo2*amount;
				}
				if(res.emissionCh4!=null){
					emissionCh4=res.emissionCh4*amount;
				}
				if(res.emissionN2o!=null){
					emissionN2o=res.emissionN2o*amount;
				}
				if(res.emissionCo!=null){
					emissionCo=res.emissionCo*amount;
				}
				if(res.emissionSo2!=null){
					emissionSo2=res.emissionSo2*amount;
				}
				if(res.emissionNox!=null){
					emissionNox=res.emissionNox*amount;
				}
				if(res.emissionPb!=null){
					emissionPb=res.emissionPb*amount;
				}
				if(res.emissionZn!=null){
					emissionZn=res.emissionZn*amount;
				}
			}
			res=$("#recycleVehicleModel").select2("data")[0];
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
				var amount=recycleData.mixtureAmount;
				var distance=$("#recycleDistance").val();
				if(res.cost){
					cost+=res.cost*amount*distance;
				}
				if(res.energyConsume!=null){
					energyConsume+=res.energyConsume*amount*distance;
				}
				if(res.emissionCo2!=null){
					emissionCo2+=res.emissionCo2*amount*distance;
				}
				if(res.emissionCh4!=null){
					emissionCh4+=res.emissionCh4*amount*distance;
				}
				if(res.emissionN2o!=null){
					emissionN2o+=res.emissionN2o*amount*distance;
				}
				if(res.emissionCo!=null){
					emissionCo+=res.emissionCo*amount*distance;
				}
				if(res.emissionSo2!=null){
					emissionSo2+=res.emissionSo2*amount*distance;
				}
				if(res.emissionNox!=null){
					emissionNox+=res.emissionNox*amount*distance;
				}
				if(res.emissionPb!=null){
					emissionPb+=res.emissionPb*amount*distance;
				}
				if(res.emissionZn!=null){
					emissionZn+=res.emissionZn*amount*distance;
				}
			}
			if(cost>0){
				recycleData.result.cost=cost.toFixed(3);
			}
			if(energyConsume>0){
				recycleData.result.energyConsume=energyConsume.toExponential(2);
			}
			if(emissionCo2>0){
				recycleData.result.emissionCo2=emissionCo2.toExponential(2);
			}
			if(emissionCh4>0){
				recycleData.result.emissionCh4=emissionCh4.toExponential(2);
			}
			if(emissionN2o>0){
				recycleData.result.emissionN2o=emissionN2o.toExponential(2);
			}
			if(emissionCo>0){
				recycleData.result.emissionCo=emissionCo.toExponential(2);
			}
			if(emissionSo2>0){
				recycleData.result.emissionSo2=emissionSo2.toExponential(2);
			}
			if(emissionNox>0){
				recycleData.result.emissionNox=emissionNox.toExponential(2);
			}
			if(emissionPb>0){
				recycleData.result.emissionPb=emissionPb.toExponential(2);
			}
			if(emissionZn>0){
				recycleData.result.emissionZn=emissionZn.toExponential(2);
			}
			var tpl=$('#tpl-recycleInventoryTable').html();
			var _html = renderTpl(tpl, recycleData.result);
			$('#recycleInventoryTable tbody').html(_html);
			recycleRange=2;
		},
		onkeyup:false
	});
	$("#inventory-prevStep").click(function(){
		tool.stepBack(2,1);
		$("#step-inventory").hide();
		$("#step-input").show();
		$(window).scrollTop(0);
	});
	$("#inventory-nextStep").click(function(){
		// 初始化，影响评价重新计算
		if(energyRange==2){
			energyRange=1;
		}
		if(carbonRange==2){
			carbonRange=1;
		}
		if(sourRange==2){
			sourRange=1;
		}
		if(eutrophicationRange==2){
			eutrophicationRange=1;
		}
		influenceData={};
		influenceData.envEconomicCostFlag=false;
		influenceData.cost=0;
		influenceData.energyConsume=0;
		influenceData.emissionCo2=0;
		influenceData.emissionCh4=0;
		influenceData.emissionN2o=0;
		influenceData.emissionCo=0;
		influenceData.emissionSo2=0;
		influenceData.emissionNox=0;
		influenceData.emissionPb=0;
		influenceData.emissionZn=0;
		// 判断选择的清单阶段是否都已完成，计算每个清单阶段各自的汇总，所有阶段的汇总
		if(materialRange==1){
			var d = dialog({
				content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请您完成原材料获取清单'+'</p></div>'
			});
			d.show();
			setTimeout(function() {
				d.close().remove();
			}, 1500);
			return false;
		}else if(materialRange==2){
			var cost=0,energyConsume=0,emissionCo2=0,emissionCh4=0,emissionN2o=0;
			var emissionCo=0,emissionSo2=0,emissionNox=0,emissionPb=0,emissionZn=0;
			for (var i = 0; i < materialData.materialList.length; i++) {
				var item = materialData.materialList[i];
				if(item.cost!=undefined){
					if(item.cost.indexOf("~")!=-1){
						var nums=item.cost.split("~");
						cost+=(parseFloat(nums[0])+parseFloat(nums[1]))/2;
					}else{
						cost+=parseFloat(item.cost);
					}
				}
				if(item.energyConsume!=undefined){
					energyConsume+=parseFloat(item.energyConsume);
				}
				if(item.emissionCo2!=undefined){
					emissionCo2+=parseFloat(item.emissionCo2);
				}
				if(item.emissionCh4!=undefined){
					emissionCh4+=parseFloat(item.emissionCh4);
				}
				if(item.emissionN2o!=undefined){
					emissionN2o+=parseFloat(item.emissionN2o);
				}
				if(item.emissionCo!=undefined){
					emissionCo+=parseFloat(item.emissionCo);
				}
				if(item.emissionSo2!=undefined){
					emissionSo2+=parseFloat(item.emissionSo2);
				}
				if(item.emissionNox!=undefined){
					emissionNox+=parseFloat(item.emissionNox);
				}
				if(item.emissionPb!=undefined){
					emissionPb+=parseFloat(item.emissionPb);
				}
				if(item.emissionZn!=undefined){
					emissionZn+=parseFloat(item.emissionZn);
				}
			}
			materialData.result={};
			materialData.result.cost=cost;
			materialData.result.energyConsume=energyConsume;
			materialData.result.emissionCo2=emissionCo2;
			materialData.result.emissionCh4=emissionCh4;
			materialData.result.emissionN2o=emissionN2o;
			materialData.result.emissionCo=emissionCo;
			materialData.result.emissionSo2=emissionSo2;
			materialData.result.emissionNox=emissionNox;
			materialData.result.emissionPb=emissionPb;
			materialData.result.emissionZn=emissionZn;
			influenceData.cost+=cost;
			influenceData.energyConsume+=energyConsume;
			influenceData.emissionCo2+=emissionCo2;
			influenceData.emissionCh4+=emissionCh4;
			influenceData.emissionN2o+=emissionN2o;
			influenceData.emissionCo+=emissionCo;
			influenceData.emissionSo2+=emissionSo2;
			influenceData.emissionNox+=emissionNox;
			influenceData.emissionPb+=emissionPb;
			influenceData.emissionZn+=emissionZn;
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
		}else if(transConsRange==2){
			var cost=0,energyConsume=0,emissionCo2=0,emissionCh4=0,emissionN2o=0;
			var emissionCo=0,emissionSo2=0,emissionNox=0,emissionPb=0,emissionZn=0;
			for (var i = 0; i < transConsData.transportList.length; i++) {
				var item = transConsData.transportList[i];
				if(item.cost!=undefined){
					cost+=parseFloat(item.cost);
				}
				if(item.energyConsume!=undefined){
					energyConsume+=parseFloat(item.energyConsume);
				}
				if(item.emissionCo2!=undefined){
					emissionCo2+=parseFloat(item.emissionCo2);
				}
				if(item.emissionCh4!=undefined){
					emissionCh4+=parseFloat(item.emissionCh4);
				}
				if(item.emissionN2o!=undefined){
					emissionN2o+=parseFloat(item.emissionN2o);
				}
				if(item.emissionCo!=undefined){
					emissionCo+=parseFloat(item.emissionCo);
				}
				if(item.emissionSo2!=undefined){
					emissionSo2+=parseFloat(item.emissionSo2);
				}
				if(item.emissionNox!=undefined){
					emissionNox+=parseFloat(item.emissionNox);
				}
				if(item.emissionPb!=undefined){
					emissionPb+=parseFloat(item.emissionPb);
				}
				if(item.emissionZn!=undefined){
					emissionZn+=parseFloat(item.emissionZn);
				}
			}
			for (var i = 0; i < transConsData.mixPaveList.length; i++) {
				var item = transConsData.mixPaveList[i];
				if(item.cost!=undefined){
					cost+=parseFloat(item.cost);
				}
				if(item.energyConsume!=undefined){
					energyConsume+=parseFloat(item.energyConsume);
				}
				if(item.emissionCo2!=undefined){
					emissionCo2+=parseFloat(item.emissionCo2);
				}
				if(item.emissionCh4!=undefined){
					emissionCh4+=parseFloat(item.emissionCh4);
				}
				if(item.emissionN2o!=undefined){
					emissionN2o+=parseFloat(item.emissionN2o);
				}
				if(item.emissionCo!=undefined){
					emissionCo+=parseFloat(item.emissionCo);
				}
				if(item.emissionSo2!=undefined){
					emissionSo2+=parseFloat(item.emissionSo2);
				}
				if(item.emissionNox!=undefined){
					emissionNox+=parseFloat(item.emissionNox);
				}
				if(item.emissionPb!=undefined){
					emissionPb+=parseFloat(item.emissionPb);
				}
				if(item.emissionZn!=undefined){
					emissionZn+=parseFloat(item.emissionZn);
				}
			}
			transConsData.result={};
			transConsData.result.cost=cost;
			transConsData.result.energyConsume=energyConsume;
			transConsData.result.emissionCo2=emissionCo2;
			transConsData.result.emissionCh4=emissionCh4;
			transConsData.result.emissionN2o=emissionN2o;
			transConsData.result.emissionCo=emissionCo;
			transConsData.result.emissionSo2=emissionSo2;
			transConsData.result.emissionNox=emissionNox;
			transConsData.result.emissionPb=emissionPb;
			transConsData.result.emissionZn=emissionZn;
			influenceData.cost+=cost;
			influenceData.energyConsume+=energyConsume;
			influenceData.emissionCo2+=emissionCo2;
			influenceData.emissionCh4+=emissionCh4;
			influenceData.emissionN2o+=emissionN2o;
			influenceData.emissionCo+=emissionCo;
			influenceData.emissionSo2+=emissionSo2;
			influenceData.emissionNox+=emissionNox;
			influenceData.emissionPb+=emissionPb;
			influenceData.emissionZn+=emissionZn;
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
		if(use1Range==1){
			var d = dialog({
				content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请您完成使用（反射率）清单'+'</p></div>'
			});
			d.show();
			setTimeout(function() {
				d.close().remove();
			}, 1500);
			return false;
		}else if(use1Range==2){
			// 只有电耗减少
			influenceData.energyConsume-=use1Data.electricityReduce*3.6;
		}
		if(use2Range==1){
			var d = dialog({
				content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请您完成使用（透水率）清单'+'</p></div>'
			});
			d.show();
			setTimeout(function() {
				d.close().remove();
			}, 1500);
			return false;
		} else if(use2Range==2){
			var cost=0,energyConsume=0,emissionCo2=0,emissionCh4=0,emissionN2o=0;
			var emissionCo=0,emissionSo2=0,emissionNox=0,emissionPb=0,emissionZn=0;
			for (var i = 0; i < use2Data.fuelList.length; i++) {
				var item = use2Data.fuelList[i];
				if(item.cost!=undefined){
					cost+=parseFloat(item.cost);
				}
				if(item.energyConsume!=undefined){
					energyConsume+=parseFloat(item.energyConsume);
				}
				if(item.emissionCo2!=undefined){
					emissionCo2+=parseFloat(item.emissionCo2);
				}
				if(item.emissionCh4!=undefined){
					emissionCh4+=parseFloat(item.emissionCh4);
				}
				if(item.emissionN2o!=undefined){
					emissionN2o+=parseFloat(item.emissionN2o);
				}
				if(item.emissionCo!=undefined){
					emissionCo+=parseFloat(item.emissionCo);
				}
				if(item.emissionSo2!=undefined){
					emissionSo2+=parseFloat(item.emissionSo2);
				}
				if(item.emissionNox!=undefined){
					emissionNox+=parseFloat(item.emissionNox);
				}
				if(item.emissionPb!=undefined){
					emissionPb+=parseFloat(item.emissionPb);
				}
				if(item.emissionZn!=undefined){
					emissionZn+=parseFloat(item.emissionZn);
				}
			}
			use2Data.result={};
			use2Data.result.cost=cost;
			use2Data.result.energyConsume=energyConsume;
			use2Data.result.emissionCo2=emissionCo2;
			use2Data.result.emissionCh4=emissionCh4;
			use2Data.result.emissionN2o=emissionN2o;
			use2Data.result.emissionCo=emissionCo;
			use2Data.result.emissionSo2=emissionSo2;
			use2Data.result.emissionNox=emissionNox;
			use2Data.result.emissionPb=emissionPb;
			use2Data.result.emissionZn=emissionZn;
			influenceData.cost+=cost;
			influenceData.energyConsume+=energyConsume;
			influenceData.emissionCo2+=emissionCo2;
			influenceData.emissionCh4+=emissionCh4;
			influenceData.emissionN2o+=emissionN2o;
			influenceData.emissionCo+=emissionCo;
			influenceData.emissionSo2+=emissionSo2;
			influenceData.emissionNox+=emissionNox;
			influenceData.emissionPb+=emissionPb;
			influenceData.emissionZn+=emissionZn;
		}
		if(use3Range==1){
			var d = dialog({
				content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请您完成使用（滚动阻力）清单'+'</p></div>'
			});
			d.show();
			setTimeout(function() {
				d.close().remove();
			}, 1500);
			return false;
		}else if(use3Range==2){
			var cost=0,energyConsume=0,emissionCo2=0,emissionCh4=0,emissionN2o=0;
			var emissionCo=0,emissionSo2=0,emissionNox=0,emissionPb=0,emissionZn=0;
			for (var i = 0; i < use3Data.fuelList.length; i++) {
				var item = use3Data.fuelList[i];
				if(item.cost!=undefined){
					cost+=parseFloat(item.cost);
				}
				if(item.energyConsume!=undefined){
					energyConsume+=parseFloat(item.energyConsume);
				}
				if(item.emissionCo2!=undefined){
					emissionCo2+=parseFloat(item.emissionCo2);
				}
				if(item.emissionCh4!=undefined){
					emissionCh4+=parseFloat(item.emissionCh4);
				}
				if(item.emissionN2o!=undefined){
					emissionN2o+=parseFloat(item.emissionN2o);
				}
				if(item.emissionCo!=undefined){
					emissionCo+=parseFloat(item.emissionCo);
				}
				if(item.emissionSo2!=undefined){
					emissionSo2+=parseFloat(item.emissionSo2);
				}
				if(item.emissionNox!=undefined){
					emissionNox+=parseFloat(item.emissionNox);
				}
				if(item.emissionPb!=undefined){
					emissionPb+=parseFloat(item.emissionPb);
				}
				if(item.emissionZn!=undefined){
					emissionZn+=parseFloat(item.emissionZn);
				}
			}
			use3Data.result={};
			use3Data.result.cost=cost;
			use3Data.result.energyConsume=energyConsume;
			use3Data.result.emissionCo2=emissionCo2;
			use3Data.result.emissionCh4=emissionCh4;
			use3Data.result.emissionN2o=emissionN2o;
			use3Data.result.emissionCo=emissionCo;
			use3Data.result.emissionSo2=emissionSo2;
			use3Data.result.emissionNox=emissionNox;
			use3Data.result.emissionPb=emissionPb;
			use3Data.result.emissionZn=emissionZn;
			influenceData.cost+=cost;
			influenceData.energyConsume+=energyConsume;
			influenceData.emissionCo2+=emissionCo2;
			influenceData.emissionCh4+=emissionCh4;
			influenceData.emissionN2o+=emissionN2o;
			influenceData.emissionCo+=emissionCo;
			influenceData.emissionSo2+=emissionSo2;
			influenceData.emissionNox+=emissionNox;
			influenceData.emissionPb+=emissionPb;
			influenceData.emissionZn+=emissionZn;
		}
		if(recycleRange==1){
			var d = dialog({
				content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请您完成回收清单'+'</p></div>'
			});
			d.show();
			setTimeout(function() {
				d.close().remove();
			}, 1500);
			return false;
		}else if(recycleRange==2){
			if(recycleData.result.cost!=undefined){
				recycleData.result.cost=parseFloat(recycleData.result.cost);
			}else{
				recycleData.result.cost=0;
			}
			if(recycleData.result.energyConsume!=undefined){
				recycleData.result.energyConsume=parseFloat(recycleData.result.energyConsume);
			}else{
				recycleData.result.energyConsume=0;
			}
			if(recycleData.result.emissionCo2!=undefined){
				recycleData.result.emissionCo2=parseFloat(recycleData.result.emissionCo2);
			}else{
				recycleData.result.emissionCo2=0;
			}
			if(recycleData.result.emissionCh4!=undefined){
				recycleData.result.emissionCh4=parseFloat(recycleData.result.emissionCh4);
			}else{
				recycleData.result.emissionCh4=0;
			}
			if(recycleData.result.emissionN2o!=undefined){
				recycleData.result.emissionN2o=parseFloat(recycleData.result.emissionN2o);
			}else{
				recycleData.result.emissionN2o=0;
			}
			if(recycleData.result.emissionCo!=undefined){
				recycleData.result.emissionCo=parseFloat(recycleData.result.emissionCo);
			}else{
				recycleData.result.emissionCo=0;
			}
			if(recycleData.result.emissionSo2!=undefined){
				recycleData.result.emissionSo2=parseFloat(recycleData.result.emissionSo2);
			}else{
				recycleData.result.emissionSo2=0;
			}
			if(recycleData.result.emissionNox!=undefined){
				recycleData.result.emissionNox=parseFloat(recycleData.result.emissionNox);
			}else{
				recycleData.result.emissionNox=0;
			}
			if(recycleData.result.emissionPb!=undefined){
				recycleData.result.emissionPb=parseFloat(recycleData.result.emissionPb);
			}else{
				recycleData.result.emissionPb=0;
			}
			if(recycleData.result.emissionZn!=undefined){
				recycleData.result.emissionZn=parseFloat(recycleData.result.emissionZn);
			}else{
				recycleData.result.emissionZn=0;
			}
			influenceData.cost+=recycleData.result.cost;
			influenceData.energyConsume+=recycleData.result.energyConsume;
			influenceData.emissionCo2+=recycleData.result.emissionCo2;
			influenceData.emissionCh4+=recycleData.result.emissionCh4;
			influenceData.emissionN2o+=recycleData.result.emissionN2o;
			influenceData.emissionCo+=recycleData.result.emissionCo;
			influenceData.emissionSo2+=recycleData.result.emissionSo2;
			influenceData.emissionNox+=recycleData.result.emissionNox;
			influenceData.emissionPb+=recycleData.result.emissionPb;
			influenceData.emissionZn+=recycleData.result.emissionZn;
		}
		// 因为养护有不确定性数据，故放到最后计算
		if(conserveRange==2){
			// 概率性相关计算，先计算上浮
			var cost=0,energyConsume=0,emissionCo2=0,emissionCh4=0,emissionN2o=0;
			var emissionCo=0,emissionSo2=0,emissionNox=0,emissionPb=0,emissionZn=0;
			for (var i = 0; i < conserveData.materialListUp.length; i++) {
				var item = conserveData.materialListUp[i];
				if(item.cost!=undefined){
					if(item.cost.indexOf("~")!=-1){
						var nums=item.cost.split("~");
						cost+=(parseFloat(nums[0])+parseFloat(nums[1]))/2;
					}else{
						cost+=parseFloat(item.cost);
					}
				}
				if(item.energyConsume!=undefined){
					energyConsume+=parseFloat(item.energyConsume);
				}
				if(item.emissionCo2!=undefined){
					emissionCo2+=parseFloat(item.emissionCo2);
				}
				if(item.emissionCh4!=undefined){
					emissionCh4+=parseFloat(item.emissionCh4);
				}
				if(item.emissionN2o!=undefined){
					emissionN2o+=parseFloat(item.emissionN2o);
				}
				if(item.emissionCo!=undefined){
					emissionCo+=parseFloat(item.emissionCo);
				}
				if(item.emissionSo2!=undefined){
					emissionSo2+=parseFloat(item.emissionSo2);
				}
				if(item.emissionNox!=undefined){
					emissionNox+=parseFloat(item.emissionNox);
				}
				if(item.emissionPb!=undefined){
					emissionPb+=parseFloat(item.emissionPb);
				}
				if(item.emissionZn!=undefined){
					emissionZn+=parseFloat(item.emissionZn);
				}
			}
//			conserveData.resultUp={};
//			conserveData.resultUp.cost=conserveData.costsUp.timeCost+conserveData.costsUp.carOpsCost+conserveData.costsUp.safeCost+cost;
//			conserveData.resultUp.energyConsume=energyConsume;
//			conserveData.resultUp.emissionCo2=emissionCo2;
//			conserveData.resultUp.emissionCh4=emissionCh4;
//			conserveData.resultUp.emissionN2o=emissionN2o;
//			conserveData.resultUp.emissionCo=emissionCo;
//			conserveData.resultUp.emissionSo2=emissionSo2;
//			conserveData.resultUp.emissionNox=emissionNox;
//			conserveData.resultUp.emissionPb=emissionPb;
//			conserveData.resultUp.emissionZn=emissionZn;
//			influenceData.costUp=influenceData.cost+conserveData.resultUp.cost;
			influenceData.costUp=influenceData.cost+conserveData.costsUp.timeCost+conserveData.costsUp.carOpsCost+conserveData.costsUp.safeCost+cost;
			influenceData.energyConsumeUp=influenceData.energyConsume+energyConsume;
			influenceData.emissionCo2Up=influenceData.emissionCo2+emissionCo2;
			influenceData.emissionCh4Up=influenceData.emissionCh4+emissionCh4;
			influenceData.emissionN2oUp=influenceData.emissionN2o+emissionN2o;
			influenceData.emissionCoUp=influenceData.emissionCo+emissionCo;
			influenceData.emissionSo2Up=influenceData.emissionSo2+emissionSo2;
			influenceData.emissionNoxUp=influenceData.emissionNox+emissionNox;
			influenceData.emissionPbUp=influenceData.emissionPb+emissionPb;
			influenceData.emissionZnUp=influenceData.emissionZn+emissionZn;
			// 概率性相关计算，后计算下降
			cost=0;energyConsume=0;emissionCo2=0;emissionCh4=0;emissionN2o=0;
			emissionCo=0;emissionSo2=0;emissionNox=0;emissionPb=0;emissionZn=0;
			for (var i = 0; i < conserveData.materialListDown.length; i++) {
				var item = conserveData.materialListDown[i];
				if(item.cost!=undefined){
					if(item.cost.indexOf("~")!=-1){
						var nums=item.cost.split("~");
						cost+=(parseFloat(nums[0])+parseFloat(nums[1]))/2;
					}else{
						cost+=parseFloat(item.cost);
					}
				}
				if(item.energyConsume!=undefined){
					energyConsume+=parseFloat(item.energyConsume);
				}
				if(item.emissionCo2!=undefined){
					emissionCo2+=parseFloat(item.emissionCo2);
				}
				if(item.emissionCh4!=undefined){
					emissionCh4+=parseFloat(item.emissionCh4);
				}
				if(item.emissionN2o!=undefined){
					emissionN2o+=parseFloat(item.emissionN2o);
				}
				if(item.emissionCo!=undefined){
					emissionCo+=parseFloat(item.emissionCo);
				}
				if(item.emissionSo2!=undefined){
					emissionSo2+=parseFloat(item.emissionSo2);
				}
				if(item.emissionNox!=undefined){
					emissionNox+=parseFloat(item.emissionNox);
				}
				if(item.emissionPb!=undefined){
					emissionPb+=parseFloat(item.emissionPb);
				}
				if(item.emissionZn!=undefined){
					emissionZn+=parseFloat(item.emissionZn);
				}
			}
			influenceData.costDown=influenceData.cost+conserveData.costsDown.timeCost+conserveData.costsDown.carOpsCost+conserveData.costsDown.safeCost+cost;
			influenceData.energyConsumeDown=influenceData.energyConsume+energyConsume;
			influenceData.emissionCo2Down=influenceData.emissionCo2+emissionCo2;
			influenceData.emissionCh4Down=influenceData.emissionCh4+emissionCh4;
			influenceData.emissionN2oDown=influenceData.emissionN2o+emissionN2o;
			influenceData.emissionCoDown=influenceData.emissionCo+emissionCo;
			influenceData.emissionSo2Down=influenceData.emissionSo2+emissionSo2;
			influenceData.emissionNoxDown=influenceData.emissionNox+emissionNox;
			influenceData.emissionPbDown=influenceData.emissionPb+emissionPb;
			influenceData.emissionZnDown=influenceData.emissionZn+emissionZn;
			// 准确值的计算
			cost=0;energyConsume=0;emissionCo2=0;emissionCh4=0;emissionN2o=0;
			emissionCo=0;emissionSo2=0;emissionNox=0;emissionPb=0;emissionZn=0;
			for (var i = 0; i < conserveData.materialList.length; i++) {
				var item = conserveData.materialList[i];
				if(item.cost!=undefined){
					if(item.cost.indexOf("~")!=-1){
						var nums=item.cost.split("~");
						cost+=(parseFloat(nums[0])+parseFloat(nums[1]))/2;
					}else{
						cost+=parseFloat(item.cost);
					}
				}
				if(item.energyConsume!=undefined){
					energyConsume+=parseFloat(item.energyConsume);
				}
				if(item.emissionCo2!=undefined){
					emissionCo2+=parseFloat(item.emissionCo2);
				}
				if(item.emissionCh4!=undefined){
					emissionCh4+=parseFloat(item.emissionCh4);
				}
				if(item.emissionN2o!=undefined){
					emissionN2o+=parseFloat(item.emissionN2o);
				}
				if(item.emissionCo!=undefined){
					emissionCo+=parseFloat(item.emissionCo);
				}
				if(item.emissionSo2!=undefined){
					emissionSo2+=parseFloat(item.emissionSo2);
				}
				if(item.emissionNox!=undefined){
					emissionNox+=parseFloat(item.emissionNox);
				}
				if(item.emissionPb!=undefined){
					emissionPb+=parseFloat(item.emissionPb);
				}
				if(item.emissionZn!=undefined){
					emissionZn+=parseFloat(item.emissionZn);
				}
			}
			conserveData.result={};
			conserveData.result.cost=conserveData.costs.timeCost+conserveData.costs.carOpsCost+conserveData.costs.safeCost+cost;
			conserveData.result.energyConsume=energyConsume;
			conserveData.result.emissionCo2=emissionCo2;
			conserveData.result.emissionCh4=emissionCh4;
			conserveData.result.emissionN2o=emissionN2o;
			conserveData.result.emissionCo=emissionCo;
			conserveData.result.emissionSo2=emissionSo2;
			conserveData.result.emissionNox=emissionNox;
			conserveData.result.emissionPb=emissionPb;
			conserveData.result.emissionZn=emissionZn;
			influenceData.cost+=conserveData.result.cost;
			influenceData.energyConsume+=energyConsume;
			influenceData.emissionCo2+=emissionCo2;
			influenceData.emissionCh4+=emissionCh4;
			influenceData.emissionN2o+=emissionN2o;
			influenceData.emissionCo+=emissionCo;
			influenceData.emissionSo2+=emissionSo2;
			influenceData.emissionNox+=emissionNox;
			influenceData.emissionPb+=emissionPb;
			influenceData.emissionZn+=emissionZn;
		}
		// 能耗影响准备
		if(energyRange){
			$("#energyInfluence").show();
			//能耗显示
			$("#energyValue").text(influenceData.energyConsume.toFixed(3)+'MJ');
			$("#energyEnvCostInput").show();
			energyRange=2;
		}else{
			$("#energyInfluence").hide();
			$("#energyEnvCostInput").hide();
		}
		// 温室效应准备
		if(carbonRange){
			$("#carbonInfluence").show();
			$("#gwpValue").empty();
			$("#carbonEnvCostInput").show();
		}else{
			$("#carbonInfluence").hide();
			$("#carbonEnvCostInput").hide();
		}
		if(sourRange){
			$("#sourInfluence").show();
			$("#sourValue").empty();
			$("#sulfurDioxideEnvCostInput").show();
		}else{
			$("#sourInfluence").hide();
			$("#sulfurDioxideEnvCostInput").hide();
		}
		if(eutrophicationRange){
			$("#eutrophicationInfluence").show();
			$("#eutrophicationValue").empty();
			$("#nitrogenEnvCostInput").show();
		}else{
			$("#eutrophicationInfluence").hide();
			$("#nitrogenEnvCostInput").hide();
		}
		$("#envEconomicCost").empty();
		tool.stepGo(2,3);
		$("#step-inventory").hide();
		$("#step-influence").show();
		$(window).scrollTop(0);
	});
	// 温室效应
	$("#gwpForm").submit(function(){
		var g=$gwpSelect.select2("data")[0];
		if(g==undefined){
			var d = dialog({
				content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请您选择数据集/年份'+'</p></div>'
			});
			d.show();
			setTimeout(function() {
				d.close().remove();
			}, 1500);
			return false;
		}else{
			influenceData.gwpValue=influenceData.emissionCo2*g.co2+influenceData.emissionCh4*g.ch4+influenceData.emissionN2o*g.n2o;
			if(conserveRange==2){
				influenceData.gwpValueUp=influenceData.emissionCo2Up*g.co2+influenceData.emissionCh4Up*g.ch4+influenceData.emissionN2oUp*g.n2o;
				influenceData.gwpValueDown=influenceData.emissionCo2Down*g.co2+influenceData.emissionCh4Down*g.ch4+influenceData.emissionN2oDown*g.n2o;
			}
			$("#gwpValue").text(influenceData.gwpValue.toFixed(3)+'kg');
			carbonRange=2;
			influenceData.envEconomicCostFlag=false;
		}
		return false;
	});
	// 酸化
	$("#sourForm").submit(function(){
		var g=$sourSelect.select2("data")[0];
		if(g==undefined){
			var d = dialog({
				content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请您选择数据集'+'</p></div>'
			});
			d.show();
			setTimeout(function() {
				d.close().remove();
			}, 1500);
			return false;
		}else{
			influenceData.sourValue=influenceData.emissionSo2*g.so2+influenceData.emissionNox*g.nox;
			if(conserveRange==2){
				influenceData.sourValueUp=influenceData.emissionSo2Up*g.so2+influenceData.emissionNoxUp*g.nox;
				influenceData.sourValueDown=influenceData.emissionSo2Down*g.so2+influenceData.emissionNoxDown*g.nox;
			}
			$("#sourValue").text(influenceData.sourValue.toFixed(3)+'kg');
			sourRange=2;
			influenceData.envEconomicCostFlag=false;
		}
		return false;
	});
	// 富营养化
	$("#eutrophicationForm").submit(function(){
		var g=$eutrophicationSelect.select2("data")[0];
		if(g==undefined){
			var d = dialog({
				content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请您选择数据集'+'</p></div>'
			});
			d.show();
			setTimeout(function() {
				d.close().remove();
			}, 1500);
			return false;
		}else{
			influenceData.eutrophicationValue=influenceData.emissionNox*(g.noxds+g.noxhs);
			if(conserveRange==2){
				influenceData.eutrophicationValueUp=influenceData.emissionNoxUp*(g.noxds+g.noxhs);
				influenceData.eutrophicationValueDown=influenceData.emissionNoxDown*(g.noxds+g.noxhs);
			}
			$("#eutrophicationValue").text(influenceData.eutrophicationValue.toFixed(3)+'kg');
			eutrophicationRange=2;
			influenceData.envEconomicCostFlag=false;
		}
		return false;
	});
	// 环境影响等效经济成本
	var validatorEnvEconomicCostForm = $("#envEconomicCostForm").validate({
		errorClass: 'text-danger',
		rules:{
			energyEnvCost:{
				required:true,
				number:true,
				min:0
			},
			carbonEnvCost:{
				required:true,
				number:true,
				min:0
			},
			sulfurDioxideEnvCost:{
				required:true,
				number:true,
				min:0
			},
			nitrogenEnvCost:{
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
			var x=0;
			var xUp=0;
			var xDown=0;
			// 能耗评价不需输入参数，直接计算得到值，因此不用判断
			if(energyRange==2){
				influenceData.energyConsumeCost=influenceData.energyConsume*$("#energyEnvCost").val();
				if(conserveRange==2){
					influenceData.energyConsumeCostUp=influenceData.energyConsumeUp*$("#energyEnvCost").val();
					influenceData.energyConsumeCostDown=influenceData.energyConsumeDown*$("#energyEnvCost").val();
					xUp+=influenceData.energyConsumeCostUp;
					xDown+=influenceData.energyConsumeCostDown;
				}
				x+=influenceData.energyConsumeCost;
			}
			if(carbonRange==1){
				var d = dialog({
					content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请您完成温室效应评价'+'</p></div>'
				});
				d.show();
				setTimeout(function() {
					d.close().remove();
				}, 1500);
				return false;
			}else if(carbonRange==2){
				influenceData.gwpCost=influenceData.gwpValue*$("#carbonEnvCost").val()/1000;
				if(conserveRange==2){
					influenceData.gwpCostUp=influenceData.gwpValueUp*$("#carbonEnvCost").val()/1000;
					influenceData.gwpCostDown=influenceData.gwpValueDown*$("#carbonEnvCost").val()/1000;
					xUp+=influenceData.gwpCostUp;
					xDown+=influenceData.gwpCostDown;
				}
				x+=influenceData.gwpCost;
			}
			if(sourRange==1){
				var d = dialog({
					content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请您完成酸化评价'+'</p></div>'
				});
				d.show();
				setTimeout(function() {
					d.close().remove();
				}, 1500);
				return false;
			}else if(sourRange==2){
				influenceData.sourCost=influenceData.sourValue*$("#sulfurDioxideEnvCost").val()/1000;
				if(conserveRange==2){
					influenceData.sourCostUp=influenceData.sourValueUp*$("#sulfurDioxideEnvCost").val()/1000;
					influenceData.sourCostDown=influenceData.sourValueDown*$("#sulfurDioxideEnvCost").val()/1000;
					xUp+=influenceData.sourCostUp;
					xDown+=influenceData.sourCostDown;
				}
				x+=influenceData.sourCost;
			}
			if(eutrophicationRange==1){
				var d = dialog({
					content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请您完成富营养化评价'+'</p></div>'
				});
				d.show();
				setTimeout(function() {
					d.close().remove();
				}, 1500);
				return false;
			}else if(eutrophicationRange==2){
				influenceData.eutrophicationCost=influenceData.eutrophicationValue*$("#nitrogenEnvCost").val()/1000;
				if(conserveRange==2){
					influenceData.eutrophicationCostUp=influenceData.eutrophicationValueUp*$("#nitrogenEnvCost").val()/1000;
					influenceData.eutrophicationCostDown=influenceData.eutrophicationValueDown*$("#nitrogenEnvCost").val()/1000;
					xUp+=influenceData.eutrophicationCostUp;
					xDown+=influenceData.eutrophicationCostDown;
				}
				x+=influenceData.eutrophicationCost;
			}
			influenceData.envEconomicCost=x;
			$("#envEconomicCost").text(x.toFixed(2)+'元');
			influenceData.totalEconomicCost=x+influenceData.cost;
			if(conserveRange==2){
				influenceData.envEconomicCostUp=xUp;
				influenceData.envEconomicCostDown=xDown;
				influenceData.totalEconomicCostUp=xUp+influenceData.costUp;
				influenceData.totalEconomicCostDown=xDown+influenceData.costDown;
			}
			influenceData.envEconomicCostFlag=true;
		},
		onkeyup:false
	});
	$("#influence-prevStep").click(function(){
		tool.stepBack(3,2);
		$("#step-influence").hide();
		$("#step-inventory").show();
		$(window).scrollTop(0);
	});
	$("#influence-nextStep").click(function(){
		if(!influenceData.envEconomicCostFlag){
			var d = dialog({
				content:'<div class="king-notice-box king-notice-fail"><p class="king-notice-text">'+'请您完成环境影响等效经济成本计算'+'</p></div>'
			});
			d.show();
			setTimeout(function() {
				d.close().remove();
			}, 1500);
			return false;
		}
		tool.stepGo(3,4);
		$("#step-influence").hide();
		$("#step-output").show();
		$(window).scrollTop(0);
		// 清单分析作图
		var legend=[];
		var chartCostInventoryData=[],chartEnergyInventoryData=[],chartCo2InventoryData=[],chartSo2InventoryData=[],chartPbInventoryData=[],chartZnInventoryData=[];
		if(materialRange==2){
			legend.push('原材料获取');
			chartCostInventoryData.push(materialData.result.cost.toFixed(2));
			chartEnergyInventoryData.push(materialData.result.energyConsume);
			chartCo2InventoryData.push(materialData.result.emissionCo2);
			chartSo2InventoryData.push(materialData.result.emissionSo2);
			chartPbInventoryData.push(materialData.result.emissionPb);
			chartZnInventoryData.push(materialData.result.emissionZn);
		}
		if(transConsRange==2){
			legend.push('运输与施工');
			chartCostInventoryData.push(transConsData.result.cost.toFixed(2));
			chartEnergyInventoryData.push(transConsData.result.energyConsume);
			chartCo2InventoryData.push(transConsData.result.emissionCo2);
			chartSo2InventoryData.push(transConsData.result.emissionSo2);
			chartPbInventoryData.push(transConsData.result.emissionPb);
			chartZnInventoryData.push(transConsData.result.emissionZn);
		}
		if(use2Range==2){
			legend.push('使用(透水)');
			chartCostInventoryData.push(use2Data.result.cost.toFixed(2));
			chartEnergyInventoryData.push(use2Data.result.energyConsume);
			chartCo2InventoryData.push(use2Data.result.emissionCo2);
			chartSo2InventoryData.push(use2Data.result.emissionSo2);
			chartPbInventoryData.push(use2Data.result.emissionPb);
			chartZnInventoryData.push(use2Data.result.emissionZn);
		}
		if(use3Range==2){
			legend.push('使用(滚动阻力)');
			chartCostInventoryData.push(use3Data.result.cost.toFixed(2));
			chartEnergyInventoryData.push(use3Data.result.energyConsume);
			chartCo2InventoryData.push(use3Data.result.emissionCo2);
			chartSo2InventoryData.push(use3Data.result.emissionSo2);
			chartPbInventoryData.push(use3Data.result.emissionPb);
			chartZnInventoryData.push(use3Data.result.emissionZn);
		}
		if(conserveRange==2){
			legend.push('养护');
			chartCostInventoryData.push(conserveData.result.cost.toFixed(2));
			chartEnergyInventoryData.push(conserveData.result.energyConsume);
			chartCo2InventoryData.push(conserveData.result.emissionCo2);
			chartSo2InventoryData.push(conserveData.result.emissionSo2);
			chartPbInventoryData.push(conserveData.result.emissionPb);
			chartZnInventoryData.push(conserveData.result.emissionZn);
		}
		if(recycleRange==2){
			legend.push('回收');
			chartCostInventoryData.push(recycleData.result.cost.toFixed(2));
			chartEnergyInventoryData.push(recycleData.result.energyConsume);
			chartCo2InventoryData.push(recycleData.result.emissionCo2);
			chartSo2InventoryData.push(recycleData.result.emissionSo2);
			chartPbInventoryData.push(recycleData.result.emissionPb);
			chartZnInventoryData.push(recycleData.result.emissionZn);
		}
		chartData={};
		chartData.chartCostInventory = echarts.init(document.getElementById('chartCostInventory')); 
		chartData.chartCostInventory.setOption({
			title : {text: '经济成本'},
		    tooltip : {trigger: 'axis'},
		    toolbox: {
		        show : true,
		        feature : {
		            dataView : {show: true, readOnly: true},
		            magicType : {show: true, type: ['line', 'bar']},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    xAxis : [{type : 'category',data : legend,axisLabel: {interval:0,rotate:30}}],
		    yAxis : [{type : 'value',name:'经济成本(元)'}],
		    series : [{
	            type:'bar',
	            data:chartCostInventoryData,
	            itemStyle : { normal: {label : {show: true}}}
		    }]
		}); 
		chartData.chartEnergyInventory = echarts.init(document.getElementById('chartEnergyInventory')); 
		chartData.chartEnergyInventory.setOption({
			title : {text: '能耗'},
			tooltip : {trigger: 'axis'},
			toolbox: {
				show : true,
				feature : {
					dataView : {show: true, readOnly: true},
					magicType : {show: true, type: ['line', 'bar']},
					restore : {show: true},
					saveAsImage : {show: true}
				}
			},
			xAxis : [{type : 'category',data : legend,axisLabel: {interval:0,rotate:30}}],
			yAxis : [{type : 'value',name:'能耗(MJ)'}],
			series : [{
				type:'bar',
				data:chartEnergyInventoryData,
				itemStyle : { normal: {label : {show: true}}}
			}]
		}); 
		chartData.chartCo2Inventory = echarts.init(document.getElementById('chartCo2Inventory')); 
		chartData.chartCo2Inventory.setOption({
			title : {text: 'CO2'},
			tooltip : {trigger: 'axis'},
			toolbox: {
				show : true,
				feature : {
					dataView : {show: true, readOnly: true},
					magicType : {show: true, type: ['line', 'bar']},
					restore : {show: true},
					saveAsImage : {show: true}
				}
			},
			xAxis : [{type : 'category',data : legend,axisLabel: {interval:0,rotate:30}}],
			yAxis : [{type : 'value',name:'排放(kg)'}],
			series : [{
				type:'bar',
				data:chartCo2InventoryData,
				itemStyle : { normal: {label : {show: true}}}
			}]
		}); 
		chartData.chartSo2Inventory = echarts.init(document.getElementById('chartSo2Inventory')); 
		chartData.chartSo2Inventory.setOption({
			title : {text: 'SO2'},
			tooltip : {trigger: 'axis'},
			toolbox: {
				show : true,
				feature : {
					dataView : {show: true, readOnly: true},
					magicType : {show: true, type: ['line', 'bar']},
					restore : {show: true},
					saveAsImage : {show: true}
				}
			},
			xAxis : [{type : 'category',data : legend,axisLabel: {interval:0,rotate:30}}],
			yAxis : [{type : 'value',name:'排放(kg)'}],
			series : [{
				type:'bar',
				data:chartSo2InventoryData,
				itemStyle : { normal: {label : {show: true}}}
			}]
		}); 
		chartData.chartPbInventory = echarts.init(document.getElementById('chartPbInventory')); 
		chartData.chartPbInventory.setOption({
			title : {text: 'Pb'},
			tooltip : {trigger: 'axis'},
			toolbox: {
				show : true,
				feature : {
					dataView : {show: true, readOnly: true},
					magicType : {show: true, type: ['line', 'bar']},
					restore : {show: true},
					saveAsImage : {show: true}
				}
			},
			xAxis : [{type : 'category',data : legend,axisLabel: {interval:0,rotate:30}}],
			yAxis : [{type : 'value',name:'排放(kg)'}],
			series : [{
				type:'bar',
				data:chartPbInventoryData,
				itemStyle : { normal: {label : {show: true}}}
			}]
		}); 
		chartData.chartZnInventory = echarts.init(document.getElementById('chartZnInventory')); 
		chartData.chartZnInventory.setOption({
			title : {text: 'Zn'},
			tooltip : {trigger: 'axis'},
			toolbox: {
				show : true,
				feature : {
					dataView : {show: true, readOnly: true},
					magicType : {show: true, type: ['line', 'bar']},
					restore : {show: true},
					saveAsImage : {show: true}
				}
			},
			xAxis : [{type : 'category',data : legend,axisLabel: {interval:0,rotate:30}}],
			yAxis : [{type : 'value',name:'排放(kg)'}],
			series : [{
				type:'bar',
				data:chartZnInventoryData,
				itemStyle : { normal: {label : {show: true}}}
			}]
		});
		// 影响评价作图
		var influenceType=[];
		var chartCostInfluenceData=[];
		influenceType.push("成本");
		chartCostInfluenceData.push({name:"成本",value:influenceData.cost.toFixed(2)});
		if(energyRange==2){
			influenceType.push("能耗");
			chartCostInfluenceData.push({name:"能耗",value:influenceData.energyConsumeCost.toFixed(2)});
		}
		if(carbonRange==2){
			influenceType.push("温室效应");
			chartCostInfluenceData.push({name:"温室效应",value:influenceData.gwpCost.toFixed(2)});
		}
		if(sourRange==2){
			influenceType.push("酸化");
			chartCostInfluenceData.push({name:"酸化",value:influenceData.sourCost.toFixed(2)});
		}
		if(eutrophicationRange==2){
			influenceType.push("富营养化");
			chartCostInfluenceData.push({name:"富营养化",value:influenceData.eutrophicationCost.toFixed(2)});
		}
		chartData.chartCostInfluence = echarts.init(document.getElementById('chartCostInfluence'));
		chartData.chartCostInfluence.setOption({
			title : {
		        text: '各类经济成本比例',
		        x:'center',
		        subtext:'总经济成本(含污染经济成本)：'+influenceData.totalEconomicCost.toFixed(2)+"元",
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient : 'vertical',
		        x : 'left',
		        data:influenceType
		    },
		    toolbox: {
		        show : true,
		        feature : {
		            dataView : {show: true, readOnly: true},
					saveAsImage : {show: true}
		        }
		    },
		    series : [
		        {
		            type:'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            itemStyle: {
		                normal: {
		                    label: {
		                       formatter : "{b}({d}%)"
		                    }
		                }
		            },
		            data:chartCostInfluenceData
		        }
		    ]
		});
		// 概率分析作图
		if(conserveRange==2){
			$("#chartProbability").show();
			var legendData=['向下波动'+conserveData.conserveUncertainty+'%','确定值','向上波动'+conserveData.conserveUncertainty+'%'];
			chartData.chartCostProbability = echarts.init(document.getElementById('chartCostProbability')); 
			chartData.chartCostProbability.setOption({
				title : {text: '成本波动'},
				tooltip : {trigger: 'axis'},
				toolbox: {
					show : true,
					feature : {
						dataView : {show: true, readOnly: true},
						magicType : {show: true, type: ['line', 'bar']},
						restore : {show: true},
						saveAsImage : {show: true}
					}
				},
				xAxis : [{type : 'category',data : legendData,axisLabel: {interval:0,rotate:30}}],
				yAxis : [{type : 'value',scale:true,name:'经济成本(元)'}],
				series : [{
					type:'bar',
					data:[influenceData.costDown.toFixed(2),influenceData.cost.toFixed(2),influenceData.costUp.toFixed(2)],
					itemStyle : { normal: {label : {show: true}}}
				}]
			});
			if(energyRange==2){
				$("#chartEnergyProbability").show();
				chartData.chartEnergyProbability = echarts.init(document.getElementById('chartEnergyProbability'));
				chartData.chartEnergyProbability.setOption({
					title : {text: '能耗波动(折算为经济成本)'},
					tooltip : {trigger: 'axis'},
					toolbox: {
						show : true,
						feature : {
							dataView : {show: true, readOnly: true},
							magicType : {show: true, type: ['line', 'bar']},
							restore : {show: true},
							saveAsImage : {show: true}
						}
					},
					xAxis : [{type : 'category',data : legendData,axisLabel: {interval:0,rotate:30}}],
					yAxis : [{type : 'value',scale:true,name:'经济成本(元)'}],
					series : [{
						type:'bar',
						data:[influenceData.energyConsumeCostDown.toFixed(2),influenceData.energyConsumeCost.toFixed(2),influenceData.energyConsumeCostUp.toFixed(2)],
						itemStyle : { normal: {label : {show: true}}}
					}]
				});
			}else{
				$("#chartEnergyProbability").hide();
			}
			if(carbonRange==2){
				$("#chartGwpProbability").show();
				chartData.chartGwpProbability = echarts.init(document.getElementById('chartGwpProbability'));
				chartData.chartGwpProbability.setOption({
					title : {text: '温室效应波动(折算为经济成本)'},
					tooltip : {trigger: 'axis'},
					toolbox: {
						show : true,
						feature : {
							dataView : {show: true, readOnly: true},
							magicType : {show: true, type: ['line', 'bar']},
							restore : {show: true},
							saveAsImage : {show: true}
						}
					},
					xAxis : [{type : 'category',data : legendData,axisLabel: {interval:0,rotate:30}}],
					yAxis : [{type : 'value',scale:true,name:'经济成本(元)'}],
					series : [{
						type:'bar',
						data:[influenceData.gwpCostDown.toFixed(2),influenceData.gwpCost.toFixed(2),influenceData.gwpCostUp.toFixed(2)],
						itemStyle : { normal: {label : {show: true}}}
					}]
				});
			}else{
				$("#chartGwpProbability").hide();
			}
			if(sourRange==2){
				$("#chartSourProbability").show();
				chartData.chartSourProbability = echarts.init(document.getElementById('chartSourProbability'));
				chartData.chartSourProbability.setOption({
					title : {text: '酸化效应波动(折算为经济成本)'},
					tooltip : {trigger: 'axis'},
					toolbox: {
						show : true,
						feature : {
							dataView : {show: true, readOnly: true},
							magicType : {show: true, type: ['line', 'bar']},
							restore : {show: true},
							saveAsImage : {show: true}
						}
					},
					xAxis : [{type : 'category',data : legendData,axisLabel: {interval:0,rotate:30}}],
					yAxis : [{type : 'value',scale:true,name:'经济成本(元)'}],
					series : [{
						type:'bar',
						data:[influenceData.sourCostDown.toFixed(2),influenceData.sourCost.toFixed(2),influenceData.sourCostUp.toFixed(2)],
						itemStyle : { normal: {label : {show: true}}}
					}]
				});
			}else{
				$("#chartSourProbability").hide();
			}
			if(eutrophicationRange==2){
				$("#chartEutrophicationProbability").show();
				chartData.chartEutrophicationProbability = echarts.init(document.getElementById('chartEutrophicationProbability'));
				chartData.chartEutrophicationProbability.setOption({
					title : {text: '富营养化波动(折算为经济成本)'},
					tooltip : {trigger: 'axis'},
					toolbox: {
						show : true,
						feature : {
							dataView : {show: true, readOnly: true},
							magicType : {show: true, type: ['line', 'bar']},
							restore : {show: true},
							saveAsImage : {show: true}
						}
					},
					xAxis : [{type : 'category',data : legendData,axisLabel: {interval:0,rotate:30}}],
					yAxis : [{type : 'value',scale:true,name:'经济成本(元)'}],
					series : [{
						type:'bar',
						data:[influenceData.eutrophicationCostDown.toFixed(2),influenceData.eutrophicationCost.toFixed(2),influenceData.eutrophicationCostUp.toFixed(2)],
						itemStyle : { normal: {label : {show: true}}}
					}]
				});
			}else{
				$("#chartEutrophicationProbability").hide();
			}
			// 作图经济成本和环境经济成本范围
			var xx=influenceData.cost.toFixed(2);
			var yy=influenceData.envEconomicCost.toFixed(2);
			var xa=influenceData.costDown.toFixed(2);
			var xb=influenceData.costUp.toFixed(2);
			var ya=influenceData.envEconomicCostDown.toFixed(2);
			var yb=influenceData.envEconomicCostUp.toFixed(2);
			chartData.chartCostAndEnvCost = echarts.init(document.getElementById('chartCostAndEnvCost'));
			chartData.chartCostAndEnvCost.setOption({
				title : {
					text: '经济成本和环境经济成本变化范围',
					subtext: '五角星为确定值：（'+xx+'，'+yy+'）'
				},
				tooltip : {
					trigger: 'axis',
					showDelay : 0,
					formatter : function (params) {
						if (params.value.length > 1) {
							return '经济成本：'+params.value[0]+' 元<br/>'
							+'环境经济成本：'+params.value[1]+' 元';
						}
					},  
					axisPointer:{
						show: true,
						type : 'cross',
						lineStyle: {
							type : 'dashed',
							width : 1
						}
					}
				},
				toolbox: {
					show : true,
					feature : {
						saveAsImage : {show: true}
					}
				},
				grid : {x:90,x2:90},
				xAxis : [
					{
						type : 'value',
						name:'经济成本(元)',
						scale:true
					}
				],
				yAxis : [
					{
						type : 'value',
						scale:true,
						name:'环境经济成本(元)'
					}
				],
				series : [
					{
						type:'scatter',
						symbol: 'emptyCircle',
						itemStyle: {
							normal: {
								color: 'blue'
							},
							emphasis: {
								color: 'lightgreen',
							}
						},
						data: [[xa, ya], [xb, ya], [xa, yb], [xb, yb],[xx,yy]],
						markPoint : {
							data : [
							{xAxis: xx, yAxis: yy, symbol:'star',itemStyle:{normal:{color:'red'}}}
							]
						},
						markLine : {
							data : [
							{type : 'max', name: '环境经济成本最大值',itemStyle:{normal:{lineStyle: {type : 'solid'}}}},
							{type : 'min', name: '环境经济成本最小值',itemStyle:{normal:{lineStyle: {type : 'solid'}}}},
							{type : 'min', name: '经济成本最小值',valueIndex : 0,itemStyle:{normal:{lineStyle: {type : 'solid'}}}},
							{type : 'max', name: '经济成本最大值',valueIndex : 0,itemStyle:{normal:{lineStyle: {type : 'solid'}}}}
							]
						}
					}     
					]
			});
		}else{
			$("#chartProbability").hide();
		}
		// 数据适用性分析
		
		
		// echarts 自动调节宽度
		$(window).resize(function() {
			chartData.chartCostInventory.resize();
			chartData.chartEnergyInventory.resize();
			chartData.chartCo2Inventory.resize();
			chartData.chartSo2Inventory.resize();
			chartData.chartPbInventory.resize();
			chartData.chartZnInventory.resize();
			chartData.chartCostInfluence.resize();
			if(conserveRange==2){
				chartData.chartCostProbability.resize();
				if(energyRange==2){
					chartData.chartEnergyProbability.resize();
				}
				if(carbonRange==2){
					chartData.chartGwpProbability.resize();
				}
				if(sourRange==2){
					chartData.chartSourProbability.resize();
				}
				if(eutrophicationRange==2){
					chartData.chartEutrophicationProbability.resize();
				}
				chartData.chartCostAndEnvCost.resize();
			}
		});
	});
	$("#output-prevStep").click(function(){
		tool.stepBack(4,3);
		$("#step-output").hide();
		$("#step-influence").show();
		$(window).scrollTop(0);
	});
	$("#download").click(function(){
		var doc = new DDoc();
        doc.addParagraph("LCA评价结果报告",{
            fontSize:"28",
            bold:true,
        });
        doc.addParagraph("目标和范围",{
            bold:true,
        });
        doc.addParagraph("本次评价的对象是长"+(basicData.rLength/1000)+"km,宽"+basicData.rWidth+"m的"+basicData.roadType+"；");
        var x="评价的阶段范围是：";
        if(materialRange==2) x+="原材料获取、";
        if(transConsRange==2) x+="运输与施工、";
        if(use1Range==2) x+="使用（反射率）、";
        if(use2Range==2) x+="使用（透水率）、";
        if(use3Range==2) x+="使用（滚动阻力）、";
        if(conserveRange==2) x+="养护、";
        if(recycleRange==2) x+="回收、";
        x=x.substring(0,x.length-1)+"；";
        doc.addParagraph(x);
        x="评价的影响范围是：";
        if(energyRange==2) x+="能耗、";
        if(carbonRange==2) x+="温室效应、";
        if(sourRange==2) x+="酸化、";
        if(eutrophicationRange==2) x+="富营养化、";
        x=x.substring(0,x.length-1)+"；";
        doc.addParagraph(x);
        doc.addParagraph("注：本评价只针对路面实体，并且大量在不同案例中具有一致性的因素，如填挖方、车辆正常油耗、房屋正常供暖/制冷/照明等被忽略，因此更适用于多方案的比较，尤其对使用阶段而言，单个结果不具备实践意义");
        doc.addParagraph("清单分析结果",{
            bold:true,
        });
        doc.addParagraph("路面的总经济成本为："+influenceData.cost.toFixed(2)+" 元，各阶段经济成本的比例如下图：");
        doc.addImage(chartData.chartCostInventory.getDataURL(),$("#chartCostInventory").width(),400,{
            textAlign:doc.AlignType.Center
        });
        doc.addParagraph("路面的总能耗为："+influenceData.energyConsume.toFixed(0)+" MJ，各阶段能耗的比例如下图：");
        doc.addImage(chartData.chartEnergyInventory.getDataURL(),$("#chartEnergyInventory").width(),400,{
        	textAlign:doc.AlignType.Center
        });
        doc.addParagraph("路面的总CO2为："+influenceData.emissionCo2+" kg，各阶段CO2的比例如下图：");
        doc.addImage(chartData.chartCo2Inventory.getDataURL(),$("#chartCo2Inventory").width(),400,{
        	textAlign:doc.AlignType.Center
        });
        doc.addParagraph("路面的总SO2为："+influenceData.emissionSo2+" kg，各阶段SO2的比例如下图：");
        doc.addImage(chartData.chartSo2Inventory.getDataURL(),$("#chartSo2Inventory").width(),400,{
        	textAlign:doc.AlignType.Center
        });
        doc.addParagraph("路面的总Pb为："+influenceData.emissionPb+" kg，各阶段Pb的比例如下图：");
        doc.addImage(chartData.chartPbInventory.getDataURL(),$("#chartPbInventory").width(),400,{
        	textAlign:doc.AlignType.Center
        });
        doc.addParagraph("路面的总Zn为："+influenceData.emissionZn+" kg，各阶段Zn的比例如下图：");
        doc.addImage(chartData.chartZnInventory.getDataURL(),$("#chartZnInventory").width(),400,{
        	textAlign:doc.AlignType.Center
        });
        doc.addParagraph("影响评价结果",{
            bold:true,
        });
        doc.addParagraph("路面的总经济成本为："+influenceData.cost.toFixed(2)+" 元；");
        if(energyRange==2){
        	doc.addParagraph("路面的总能耗为："+influenceData.energyConsume.toFixed(0)+" MJ，折算为经济成本为："+influenceData.energyConsumeCost.toFixed(2)+" 元；");
        }
        if(carbonRange==2){
        	doc.addParagraph("路面的总温室效应为："+influenceData.gwpValue.toFixed(0)+" kg，折算为经济成本为："+influenceData.gwpCost.toFixed(2)+" 元；");
        }
        if(sourRange==2){
        	doc.addParagraph("路面的总酸化效应为："+influenceData.sourValue.toFixed(0)+" kg，折算为经济成本为："+influenceData.sourCost.toFixed(2)+" 元；");
        }
        if(eutrophicationRange==2){
        	doc.addParagraph("路面的总富营养化效应为："+influenceData.eutrophicationValue.toFixed(0)+" kg，折算为经济成本为："+influenceData.eutrophicationCost.toFixed(2)+" 元；");
        }
        doc.addParagraph("各类经济成本的比例如下图：");
        doc.addImage(chartData.chartCostInfluence.getDataURL(),$("#chartCostInfluence").width(),400,{
        	textAlign:doc.AlignType.Center
        });
        if(conserveRange==2){
        	doc.addParagraph("数据的概率性分析",{
        		bold:true,
        	});
        	doc.addParagraph("根据不确定性："+conserveData.conserveUncertainty+"%，各类影响的取值范围如下：");
        	doc.addImage(chartData.chartCostProbability.getDataURL(),$("#chartCostProbability").width(),400,{
        		textAlign:doc.AlignType.Center
        	});
        	if(energyRange==2){
        		doc.addImage(chartData.chartEnergyProbability.getDataURL(),$("#chartEnergyProbability").width(),400,{
        			textAlign:doc.AlignType.Center
        		});
        	}
        	if(carbonRange==2){
        		doc.addImage(chartData.chartGwpProbability.getDataURL(),$("#chartGwpProbability").width(),400,{
        			textAlign:doc.AlignType.Center
        		});
        	}
        	if(sourRange==2){
        		doc.addImage(chartData.chartSourProbability.getDataURL(),$("#chartSourProbability").width(),400,{
        			textAlign:doc.AlignType.Center
        		});
        	}
        	if(eutrophicationRange==2){
        		doc.addImage(chartData.chartEutrophicationProbability.getDataURL(),$("#chartEutrophicationProbability").width(),400,{
        			textAlign:doc.AlignType.Center
        		});
        	}
        	doc.addParagraph("经济成本和环境经济成本的范围如下：");
        	doc.addImage(chartData.chartCostAndEnvCost.getDataURL(),$("#chartCostAndEnvCost").width(),400,{
    			textAlign:doc.AlignType.Center
    		});
        	doc.addParagraph("数据适用性分析",{
        		bold:true,
        	});
        	doc.addParagraph("本次评价结果的数据来源可靠性：");
        }
        doc.generate();
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