define(['bootstrap','bootstrapTable'],function(){
	queryAccountList();
});

function queryAccountList() {
	var columns = [{
            checkbox: true
        },
        {
            field: 'index',
            title: '序号',
            align: 'center',
            formatter: function (value, row, index) { return index + 1; }
        },
        {
            field: 'platform',
            title: '平台'
        },
        {
            field: 'website',
            title: '网址'
        },
        {
            field: 'account',
            title: '账号'
        },
        {
            field: 'password',
            title: '密码'
        },
        {
            field: 'siteType',
            title: '类型'
        },
        {
            field: 'email',
            title: '注册邮箱'
        },
        {
            field: 'phonenumber',
            title: '预留手机'
        },
        {
            field: 'createTime',
            title: '创建时间'
        },
        {
            field: 'updateTime',
            title: '修改时间'
        },
        {
            field: 'describle',
            title: '备注'
        },
        {
            title: '操作',
            align: 'center',
            formatter: function(value, row, index) {
            	var actions = [];
                actions.push('<a class="btn btn-info btn-sm" href="#" title="编辑" onclick="edit(\'' + row.id + '\')"><i class="fa fa-edit"></i></a> ');
                actions.push('<a class="btn btn-warning btn-sm" href="#" title="删除" onclick="remove(\'' + row.id + '\')"><i class="fa fa-remove"></i></a> ');
                return actions.join('');
            }
        }];
	var url = "pages/bootstraptable/table_text.json";
	$.initTable(columns,url);
}

// 初始bootstrap table数据
$.initTable = function(_columns, _url) {
	$('.bootstrap-table').bootstrapTable({
		method: 'get', // 请求方式（*）
		dataType: "json", // 返回格式（*）
		url: _url, // 请求后台的URL（*）
		pagination: true, // 是否显示分页（*）
		pageSize: 8, // 每页的记录行数（*）
		pageNumber: 1, // 初始化加载第一页，默认第一页
		pageList: [8, 10, 12], // 可供选择的每页的行数（*）
		paginationFirstText: "首页",
		paginationPreText: "<<",
		paginationNextText: ">>",
		paginationLastText: "尾页",
		search: true, // 是否显示搜索框功能
		singleSelect: false, // 是否禁止多选
		iconSize: 'undefined', // 图标大小：undefined默认的按钮尺寸 xs超小按钮sm小按钮lg大按钮
		icons:{
			refresh: 'fa-refresh',
			columns: 'fa-th-list',
		},
		toolbar: '#tableToolbar', // 指定工作栏
		//sidePagination: "server",     // 启用服务端分页 
		showRefresh: true, // 是否显示刷新按钮
		showColumns: true, // 是否显示隐藏某列下拉框
		showToggle: false, // 是否显示详细视图和列表视图的切换按钮
		cache: false, // 是否使用缓存
		queryParams: function(params) {
			return {
				// 传递参数查询参数
				limit: params.limit,
				offset: params.offset,
				search: params.search,
				sort: params.sort,
				order: params.order
			};
		},
		columns: _columns,
		rowStyle:function(row,index){
	        	var classes = ['active', 'success', 'info', 'warning', 'danger'];
			    if (index == 0) {
			        return {
			            classes: classes[2]
			        };
			    }
			    return {};
	        }
	});
}