/**
 * 入口文件
 */
require.config({
	baseUrl: './node_modules/',
	map: {
		'*': {
			'css': 'require-css/css'
		}
	},
	paths: {
		jquery: 'jquery/dist/jquery.min',
		layui: 'layui-src/dist/layui',
		metisMenu: 'metismenu/dist/metisMenu',
		slimscroll: 'jquery-slimscroll/jquery.slimscroll',
		tabsMenu: 'tabsmenu/dist/tabsMenu.min',
		echarts: 'echarts/dist/echarts',
		echartsMapChina: 'echarts/map/js/china',
		highcharts: 'highcharts/highcharts',
		hchartExport: 'highcharts/modules/exporting',
		hchartMore: 'highcharts/highcharts-more',
		highcharts3d: 'highcharts/highcharts-3d',
		d3:'d3/dist/d3.min',
		fancybox: 'fancybox/dist/js/jquery.fancybox',
		icheck:'icheck/icheck.min',
		select2:'select2/dist/js/select2.full.min',
		bootstrap:'bootstrap/dist/js/bootstrap.bundle.min',
		bootstrapTable:'bootstrap-table/dist/bootstrap-table.min',
		jstree:'jstree/dist/jstree.min',
		webuploader:"webuploader/dist/webuploader.min",
		'../jquery.validate': 'jquery-validation/dist/jquery.validate',
		jqueryValidationZh: 'jquery-validation/dist/localization/messages_zh',
		text: 'requirejs-text/text',
		initial: '../config/initial',
		iconfont: '../asserts/css/iconfont/iconfont'
	},
	shim: {
		layui: {
			deps: ['css!layui-src/dist/css/layui.css']
		},
		metisMenu: {
			deps: ['css!metismenu/dist/metisMenu.css']
		},
		slimscroll: {
			deps: ['jquery']
		},
		tabsMenu:{
			deps:['css!tabsmenu/dist/tabsMenu.min.css']
		},
		fancybox: {
			deps: ['css!../node_modules/fancybox/dist/css/jquery.fancybox.css']
		},
		hchartExport: {
			deps: ['highcharts']
		},
		hchartMore: {
			deps: ['highcharts']
		},
		highcharts3d: {
			deps: ['highcharts']
		},
		icheck:{
			deps:['jquery','css!../node_modules/icheck/skins/all']
		},
		select2:{
			deps:['css!../node_modules/select2/dist/css/select2.min.css',
				  'css!../node_modules/select2-bootstrap-theme/dist/select2-bootstrap.min.css',
				  'css!../node_modules/select2-Flat_Theme/dist/select2-flat-theme.min.css']
		},
		bootstrap:{
			deps:['jquery']
		},
		bootstrapTable:{
			deps:['css!../node_modules/bootstrap-table/dist/bootstrap-table.min.css',
				  'css!../node_modules/bootstrap/dist/css/bootstrap.min.css'
			    ]
		},
		jstree:{
			deps:['css!../node_modules/jstree/dist/themes/default/style.min.css']
		},
		webuploader:{
			deps:['css!../node_modules/webuploader/dist/webuploader.css']
		}
	}
});

// 框架加载
require(['jquery', 'layui', 'metisMenu', 'slimscroll', 'tabsMenu','iconfont'], function() {
	layui.use(['element', 'layer'], function() {
		var element = layui.element;
		var layer = layui.layer;
		require(['initial']);
	});
});

// 记录打开页面的数组对象
window['pages'] = [];

// 模拟路由
function router(param) {
	var reqMoudelName = '../pages/' + param.pageName + '/' + param.pageName;
	destroyPage(param);
	initPage(reqMoudelName, param);
}

// 初始化页面html
function initPage(reqMoudelName, param) {
	window.pageloadCode = layer.load(2, {
		shade: [0.5, '#fff']
	});
	require(['text!' + reqMoudelName + '.html'], function(text) {
		param.el.html(text);
		loadPage(reqMoudelName, param.pageName);
	});
}

// 加载页面
function loadPage(reqMoudelName, pageName) {
	require([reqMoudelName,'css!' + reqMoudelName], function(page) {
		layer.close(window.pageloadCode);
		page = typeof page === 'object' ? page : {};
		window.pages.push({
			pageName: pageName,
			reqMoudelName: reqMoudelName
		});
		// 由于echarts，highcharts 自定义书写返回的是一个init函数，并没有直接调用，所有需要在此调用
		if(typeof page.init === "function") {
			page.init();
		}
	});
}

// 销毁页面
function destroyPage(param) {
	// 卸载掉关于bootstrap的基础基础样式
	$('link[href*="../node_modules/bootstrap/dist/css/bootstrap.min.css"]').remove();
	window.pages.forEach(function(item){
		requirejs.undef(item.reqMoudelName); // 销毁模块 // 依赖的模块不销毁
		requirejs.undef('require-css/css!' + item.reqMoudelName); // 销毁css
		$('link[href*="' + item.reqMoudelName + '"]').remove();
	});
	if(param.pageName == "bootstrapTable"){
		$("head").append('<link type="text/css" rel="stylesheet" href="./node_modules/../node_modules/bootstrap/dist/css/bootstrap.min.css">');
	}
	window.pages = [];
}
