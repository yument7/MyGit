// 左侧菜单加载，包括菜单导航滚动条
$("#side-menu").metisMenu();

$(".sidebar-collapse").slimScroll({
	height: "100%",
	railOpacity: .9,
	alwaysVisible: !1
});

// 菜单按钮控制切换
$(".navbar-minimalize").click(function() {
	$("body").toggleClass("mini-sidebar");
	$(this).children().toggleClass("fa-th-large").toggleClass("fa-bars");
	SmoothlyMenu();
});

function NavToggle() {
	$(".navbar-minimalize").trigger("click");
}

function SmoothlyMenu() {
	$("body").hasClass("mini-sidebar") ? ($("#side-menu").hide(), setTimeout(function() {
		$("#side-menu").fadeIn(500);
	}, 300)) : ($("#side-menu").hide(), setTimeout(function() {
		$("#side-menu").fadeIn(500);
	}, 100));
}

$("#side-menu>li").click(function(e) {
	$("body").hasClass("mini-sidebar") && NavToggle();
});

$("#side-menu>li li a").click(function() {
	$(window).width() < 769 && NavToggle();
});

/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) && $("#content-main").css("overflow-y", "auto");

// 关闭选项卡按钮
$("a.cartbtn-switcher").click(function() {
	$(this).find('.fa').toggleClass("fa-caret-down").toggleClass("fa-caret-up");
	$(this).next().toggle();
});

// 导航菜单链接及选项卡和初始化

var homeSrc = $('div[name="iframe0"]').attr('src');
pageLoad(homeSrc, 'init');
selectTab(homeSrc);

// 为menuitem 添加data-index 属性
$(".J_menuItem").each(function(k) {
	if(!$(this).attr("data-index")) {
		$(this).attr("data-index", k);
	}
});

// 点击 menuitem 加载对应页面
$(".J_menuItem").on("click", triggerMIeffects);

// 点击menuTabs 下 a 标签
$(".J_menuTabs").on("click", ".J_menuTab", triggerMTeffects);

// 点击menuTabs 下关闭按钮 
$(".J_menuTabs").on("click", ".J_menuTab i", triggerMTclose);

// 前一个按钮选项卡
$(".J_tabLeft").on("click", triggerPrevBtn);

// 后一个按钮选项卡
$(".J_tabRight").on("click", triggerNextBtn);

// 关闭操作选项卡 --关闭所有选项卡 -- 事件
$(".J_tabCloseAll").on("click", triggerCloseAll);

// 关闭操作选项卡 --关闭其他选项卡-- 事件
$(".J_tabCloseOther").on("click", triggerCloseOther);

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

// 页面加载函数
function pageLoad(src, status) {
	var pageName = src.split('/').pop().split('.')[0];
	router({
		pageName: pageName,
		status: status,
		el: $('.J_iframe[src="' + src + '"]')
	});
}

function selectTab(src) {
	var current = $('a.J_menuItem[href="' + src + '"]');
	if(src){
		$("a.J_menuItem").removeClass("metismenu-active");
		current.addClass("metismenu-active");
	}
}

// menuitem点击事件 响应函数
function triggerMIeffects() {
	var src = $(this).attr("href"),
		index = $(this).data("index"),
		txt = $.trim($(this).text()),
		exsit_opt = true;
	if(src == undefined || $.trim(src).length == 0) {
		return false;
	}
	$(".J_menuTab").each(function() {
		if($(this).data("id") == src && !$(this).hasClass("active")) {
			var prev_src = $(this).parent().find(".J_menuTab.active").data("id");
			pageLoad(prev_src, "out");
			$(this).addClass("active").siblings(".J_menuTab").removeClass("active");
			dealWidth($(this));
			$(".J_mainContent .J_iframe").each(function() {
				if($(this).data("id") == src) {
					$(this).show().siblings(".J_iframe").hide();
					pageLoad(src, "in");
					return false;
				}
			})
			exsit_opt = false;
			return false;
		}
	});
	if(exsit_opt) {
		pageLoad($(".J_menuTab.active").data("id"), "out");
		var tab_a = '<a href="javascript:;" class="active J_menuTab" data-id="' + src + '">' + txt + ' <i class="fa fa-close"></i></a>';
		$(".J_menuTab").removeClass("active");
		var frame_div = $('<div class="J_iframe" name="iframe' + index + '" width="100%" height="100%" src="' + src + '" frameborder="0" data-id="' + src + '" seamless></div>');
		$(".J_mainContent").find("div.J_iframe").hide().parents(".J_mainContent").append(frame_div);
		$(".J_menuTabs .page-tabs-content").append(tab_a);
		dealWidth($(".J_menuTab.active"));
		pageLoad(src, "init");
	}
	selectTab(src);
	return false;
}

// menutab 点击事件 响应函数
function triggerMTeffects() {
	var self = $(this);
	var src = self.data("id");
	if(!self.hasClass("active")) {
		var prev_src = self.siblings(".J_menuTab.active").data("id");
		pageLoad(prev_src, "out");
		$(".J_mainContent .J_iframe").each(function() {
			if($(this).data("id") == src) {
				$(this).show().siblings(".J_iframe").hide();
				pageLoad(src, "in");
				return false;
			}
		});
		self.addClass("active").siblings(".J_menuTab").removeClass("active");
		dealWidth(this);
	}
	selectTab(src);
}

// 前进定位选项卡
function triggerPrevBtn() {
	var prev = $(".J_menuTab.active").prev();
	var src;

	if(prev.length) {
		prev.addClass("active").siblings().removeClass("active");
		src = prev.data("id");
	} else {
		console.log("1111");
		$(".J_menuTab:last").addClass("active").siblings().removeClass("active");
		src = $(".J_menuTab:last").data("id");
	}
	
	dealWidth($(".J_menuTab.active"));
	
	$(".J_mainContent .J_iframe").each(function() {
		if($(this).data("id") == src) {
			$(this).show().siblings(".J_iframe").hide();
			pageLoad(src, 'in');
			return false;
		}
	});
}

// 下一个定位选项卡
function triggerNextBtn() {
	var next = $(".J_menuTab.active").next();
	var src;

	if(next.length) {
		next.addClass("active").siblings().removeClass("active");
		src = next.data("id");
	} else {
		$(".J_menuTab:first").addClass("active").siblings().removeClass("active");
		src = $(".J_menuTab:first").data("id");
	}
	
	dealWidth($(".J_menuTab.active"));
	
	$(".J_mainContent .J_iframe").each(function() {
		if($(this).data("id") == src) {
			$(this).show().siblings(".J_iframe").hide();
			pageLoad(src, 'in');
			return false;
		}
	});
}

// 横向选项卡超长处理
function dealWidth(that) {
	var otherWh = getWidth($(".content-tabs").children().not(".J_menuTabs"));
	var firstWh = $(".J_menuTab:first").outerWidth();
	var tabsWh = $(".content-tabs").outerWidth(true) - otherWh - firstWh;
	var prevWh = getWidth($(that).prevAll()) - firstWh;
	var mlWh = parseInt($(".page-tabs-content").css("margin-left"));
	var actWh = $(that).outerWidth(true);
	var overWh = mlWh;
	var isOverMlFlag = (prevWh + actWh + mlWh - firstWh - tabsWh) > 0; 
	var isOverMrFlag = (prevWh + mlWh - firstWh) < 0 ;
	if($(that).index() == $(".content-tabs:first").index()){
		overWh = firstWh;
	}else{
		if(isOverMlFlag) {
			overWh = firstWh - (prevWh + actWh - tabsWh);
			var widths = 0;
			$(that).prevAll().each(function() {
				widths += $(this).outerWidth(true);
				if(widths > (firstWh-overWh)) {
					overWh = firstWh - widths;
					return false;
				}
			});
		}else if(isOverMrFlag){
			overWh = firstWh - prevWh;
			console.log('111');
		} else {
			overWh = mlWh;
		}
	}
	$(".page-tabs-content").animate({
		marginLeft: overWh + "px"
	}, "fast");
}

// 获取元素宽度
function getWidth(thats) {
	var widths = 0;
	$(thats).each(function() {
		widths += $(this).outerWidth(true); // outerWidth(true) 包含margin的width
	});
	return widths;
}

// menutab 关闭事件 响应函数
function triggerMTclose() {
	var selfa = $(this).parents(".J_menuTab");
	var src = selfa.data("id");
	var wh = selfa.width();
	if(selfa.hasClass("active")) {
		if(selfa.next(".J_menuTab").length) {
			var next_src = selfa.next().data("id");
			selfa.next().addClass("active");
			$(".J_mainContent .J_iframe").each(function() {
				if($(this).data("id") == next_src) {
					$(this).show().siblings(".J_iframe").hide();
					return false;
				}
			});
			selfa.remove();
			$(".J_mainContent .J_iframe").each(function() {
				if($(this).data("id") == src) {
					$(this).remove();
					pageLoad(src, 'destroy');
					return false;
				}
			});
			selectTab(next_src);
		}
		if(selfa.prev().length) {
			var prev_src = selfa.prev().data("id");
			selfa.prev().addClass("active");
			selfa.remove();
			$(".J_mainContent .J_iframe").each(function() {
				if($(this).data("id") == src) {
					$(this).remove();
					pageLoad(src, 'destroy');
					return false;
				}
			});
			$(".J_mainContent .J_iframe").each(function() {
				if($(this).data("id") == prev_src) {
					$(this).show().siblings(".J_iframe").hide();
					pageLoad(prev_src, "in");
					return false;
				}
			});
			selectTab(prev_src);
		}
	} else {
		selfa.remove();
		$(".J_mainContent .J_iframe").each(function() {
			if($(this).data("id") == src) {
				$(this).remove();
				pageLoad(src, 'destroy');
				return false;
			}
		});
		dealWidth($(".J_menuTab.active"));
	}
	return false;
}

// 关闭所有选项卡
function triggerCloseAll() {
	$(".page-tabs-content").children("[data-id]").not(":first").each(function() {
		var src = $(this).data("id");
		var iframe = $('.J_iframe[data-id="' + src + '"]');
		iframe.remove();
		$(this).remove();
		pageLoad(src, 'destroy');
	});
	$(".page-tabs-content").children("[data-id]:first").each(function() {
		var src = $(this).data("id");
		$('.J_iframe[data-id="' + src + '"]').show();
		$(this).addClass("active");
		pageLoad(src, 'in');
	});
}

// 关闭除选中的其他选项卡
function triggerCloseOther() {
	$(".page-tabs-content").children("[data-id]").not(":first").not(".active").each(function() {
		var dataId = $(this).data("id");
		var iframe = $('.J_iframe[data-id="' + dataId + '"]');
		iframe.remove();
		$(this).remove();
		pageLoad(dataId, 'destroy');
	});
}

