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
		echarts: 'echarts/dist/echarts',
		echartsMapChina: 'echarts/map/js/china',
		highcharts: 'highcharts/highcharts',
		hchartExport: 'highcharts/modules/exporting',
		hchartMore: 'highcharts/highcharts-more',
		highcharts3d: 'highcharts/highcharts-3d',
		fancybox: 'fancybox/dist/js/jquery.fancybox',
		icheck:'icheck/icheck.min',
		select2:'select2/dist/js/select2.full.min',
		bootstrap:'bootstrap/dist/js/bootstrap.bundle.min',
		bootstrapTable:'bootstrap-table/dist/bootstrap-table.min',
		jstree:'jstree/dist/jstree.min',
		'../jquery.validate': 'jquery-validation/dist/jquery.validate',
		jqueryValidationZh: 'jquery-validation/dist/localization/messages_zh',
		text: 'requirejs-text/text',
		initial: '../config/initial'
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
		}
	}
});

// 框架加载
require(['jquery', 'layui', 'metisMenu', 'slimscroll'], function() {
	layui.use(['element', 'layer'], function() {
		var element = layui.element;
		var layer = layui.layer;
		require(['initial']);
	});
});

// 记录打开页面的数组对象
window['pages'] = [];

// 页面作用域
window.scope = {};

// 模拟路由
function router(param) { // pageName为moduleName，src完整路径，state页面执行状态
	var reqMoudelName = '../pages/' + param.pageName + '/' + param.pageName; // 匿名模块的模块名称，用于移除
	if(param.status !== 'init') {
		var cur = currentPage(reqMoudelName);
		if(cur && typeof cur.page[param.status] === 'function') {
			cur.page[param.status]();
		}
		if(param.status === 'in') { // 再次切进页面
			setTitle(param.pageName);
			setScope(cur.page);
		}
		if(param.status === 'destroy') { // 关闭页面
			destroyPage(reqMoudelName);
			cur && window.pages.splice(cur.index, 1);
		}
	} else { // 第一次进来
		initMainContent(reqMoudelName, param);
	}
}

// 初始化页面html
function initMainContent(reqMoudelName, param) {
	window.pageloadCode = layer.load(2, {
		shade: [0.5, '#fff']
	});
	require(['text!' + reqMoudelName + '.html'], function(text) {
		param.el.html(text);
		setTitle(param.pageName);
		loadPage(reqMoudelName, param.pageName);
	});
}

// 初始化页面js
function loadPage(reqMoudelName, pageName) {
	require([
		reqMoudelName, // 动态参数
		'css!' + reqMoudelName
	], function(page) {
		layer.close(window.pageloadCode);
		page = typeof page === 'object' ? page : {};
		window.pages.push({
			pageName: pageName,
			reqMoudelName: reqMoudelName,
			page: page
		});
		setScope(page);
		if(typeof page.init === "function") {
			page.init();
		}
	});
}

// 销毁页面
function destroyPage(reqMoudelName) {
	requirejs.undef(reqMoudelName); // 销毁模块 // 依赖的模块不销毁
	requirejs.undef('require-css/css!' + reqMoudelName); // 销毁css
	$('link[href*="' + reqMoudelName + '"]').remove();
}

// 获得当前页
function currentPage(name) {
	var index_;
	var page = window.pages.filter(function(item, index) {
		if(item.reqMoudelName === name || item.pageName === name) {
			index_ = index;
			return true;
		}
	});
	if(index_ === undefined || page.length !== 1 || !page[0] || !page[0].page) return;
	return {
		index: index_,
		page: page[0].page
	}
}

// 设置作用域
function setScope(exports) {
	window.scope = {};
	$.extend(window.scope, exports);
	delete window.scope.init;
	delete window.scope.in;
	delete window.scope.out;
	delete window.scope.destroy;
}

// 设置title
function setTitle(name) {
	var pageTitle = $('title').text().split('-')[0];
	if(pageTitle.indexOf('#') < 0) window.pageTitle = pageTitle;
	var title = $('.J_iframe #' + name).attr('name') || $('.J_iframe:visible .wrapper-content').attr('name');
	$('title').text(window.pageTitle + (title ? '-' + title : ''));
}