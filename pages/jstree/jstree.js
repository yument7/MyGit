define(['jstree'], function() {
	$('#container').jstree();

	$('#container1').jstree({
		'core': {
			'data': [{
					"text": "System",
					"children": [{
							"text": "apache"
						},
						{
							"text": "nginx"
						}
					]
				},
				{
					"text": "Tools",
					"children": [{
							"text": "Idea"
						},
						{
							"text": "eclipse"
						}
					]
				}
			]
		}
	});

	$('#container2').jstree({
		'core': {
			'data': [{
				"text": "工作目录",
				"state": {
					"opened": true
				},
				"children": [{
						"text": "器件模型",
						"state": {
							"selected": true
						},
						"icon": "fa fa-folder pl-e"
					},
					{
						"text": "开发文档",
						"state": {
							"disabled": true
						}
					}
				]
			}]
		}
	});

	var arrayData = [{
			text: '文件目录名称'
		}, {
			text: '唯一标识'
		}, {
			text: '文件目录状态，有多个参数选择:<br>selected<br>opened<br>disabled<br>checked<br>undetermined'
		},
		{
			text: '自定义文件夹图标'
		}, {
			text: '附加到节点的元数据，与显示无关'
		}, {
			text: '节点类型'
		}, {
			text: '添加到节点li的属性'
		}, {
			text: '添加到a上的属性'
		}
	];

	$(".tree-attr dl>dd").each(function() {
		var index = $(this).index();
		var tips_index;
		$(this).mouseover(function() {
			var that = this;
			tips_index = layer.tips(arrayData[index].text, that, {
				tips: [1, '#0D8DDB']
			});
		}).mouseout(function() {
			layer.close(tips_index);
		})
	});

	// ajax demo
	$('#container3').jstree({
		'core': {
			'data': {
				"url": "pages/jstree/testData.json",
				"dataType": "json" // needed only if you do not supply JSON headers
			}
		}
	});

	// lazy demo
	$('#container4').jstree({
		'core': {
			'data': {
				"url": "pages/jstree/testData.json",
				"data": function(node) {
					return {
						"id": node.id
					};
				}
			}
		}
	});

	// event
	$('#container5').jstree({
		'core': {
			'data': [{
					"id": 1,
					"text": "Node1"
				},
				{
					"id": 2,
					"text": "Node2"
				},
			]
		}
	});
	$('#container5').on("changed.jstree", function(e, data) {
		var data = data.instance.get_node(data.selected[0]);
		if(data.id == 1) {
			$("#result1").text(data.text);
			$("#result2").text("");
		}
		if(data.id == 2) {
			$("#result1").text("");
			$("#result2").text(data.text);
		}
	});

	// instance
	$('#container6').jstree({
		'core': {
			'data': [{
					"id": 1,
					"text": "Node1"
				},
				{
					"id": 2,
					"text": "Node2"
				},
			]
		}
	});
	$('#tree-toggle').on("click", function() {
		var instance = $('#container6').jstree(true);
		var selected = instance.get_selected();
		instance.deselect_all();
		if(selected.length == 0) {
			instance.select_node(1);
		} else {
			if(selected[0] == 1) {
				instance.select_node(2);
			}
			if(selected[0] == 2) {
				instance.select_node(1);
			}
		}
	});

	// plugins
	$('#container7').jstree({
		'plugins': ["wholerow", "checkbox"],
		'core': {
			'data': [{
					"text": "Same but with checkboxes",
					"children": [{
							"text": "initially selected",
							"state": {
								"selected": true
							}
						},
						{
							"text": "custom icon URL",
							"icon": "fa fa-leaf pl-s"
						},
						{
							"text": "initially open",
							"state": {
								"opened": true
							},
							"children": ["Another node"]
						},
						{
							"text": "custom icon class",
							"icon": "fa fa-briefcase pl-e"
						}
					]
				},
				"And wholerow selection"
			]
		}
	});
});