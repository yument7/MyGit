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

});