// 左侧菜单加载，包括菜单导航滚动条
$("#side-menu").metisMenu();

$(".sidebar-collapse").slimScroll({
	height: "100%",
	railOpacity: .9,
	alwaysVisible: !1
});

// tabs 加载
$("#nav-tabs").tabsMenu({
	kind:".J_menuItem",
	activeKind:"metismenu-active",
	fixed_tab:{
		icon:"fa fa-home",
		src:"pages/dashboard/dashboard.html"
	},
	close_btns:true,
	tabsCallback: pageLoad
});

// 菜单按钮控制切换
$(".navbar-minimalize").click(function() {
	$("body").toggleClass("mini-sidebar");
	$(this).children().toggleClass("fa-th-large").toggleClass("fa-bars");
	SmoothlyMenu();
});

function SmoothlyMenu() {
	$("body").hasClass("mini-sidebar") ? ($("#side-menu").hide(), setTimeout(function() {
		$("#side-menu").fadeIn(500);
	}, 300)) : ($("#side-menu").hide(), setTimeout(function() {
		$("#side-menu").fadeIn(500);
	}, 300));
}

function NavToggle() {
	$(".navbar-minimalize").trigger("click");
}

$("#side-menu>li").click(function(e) {
	$("body").hasClass("mini-sidebar") && NavToggle();
});

$("#side-menu>li li a").click(function() {
	$(window).width() < 769 && NavToggle();
});

/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) && $("#content-main").css("overflow-y", "auto");


// 
$('#content-main').on('click', '.collapse-link', function() {
	var o = $(this).closest("div.ibox"),
		e = $(this).find("i"),
		i = o.find("div.ibox-content");
	i.slideToggle(200);
	e.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down");
	o.toggleClass("").toggleClass("border-bottom");
	setTimeout(function() {
		o.resize();
		o.find("[id^=map-]").resize();
	}, 50);
});

$('#content-main').on('click', '.close-link', function() {
	var o = $(this).closest("div.ibox");
	o.remove();
});

// 主题页面初始化
var home_src = $('.J_iframe').data("src");
var options = {
	current: home_src
}
pageLoad(options);


// 页面加载函数
function pageLoad(options) {
	var current = options.current;
	var pageName = current.split('/').pop().split('.')[0];
	router({
		pageName: pageName,
		el: $('.J_iframe')
	});
}












