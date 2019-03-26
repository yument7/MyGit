define(['select2'], function() {

	$(".testA1").select2({});
	$(".testA2").select2({
		theme: "bootstrap"
	});
	$(".testA3").select2({
		theme: "flat"
	});

	$(".testA4").select2({
		theme: "flat"
	});
	$("#enabled").on("click", function() {
		$(".testA4").prop("disabled", false);
	});
	$("#disabled").on("click", function() {
		$(".testA4").prop("disabled", true);
	});
	$(".testA5").select2({
		theme: "flat"
	});

	//
	$(".testB1").select2({
		theme: "flat",
		placeholder:"测试一",
		ajax: {
			url: "pages/select2/testData.json",
			dataType: 'json',
			// 如果需要带请求参数，在这里处理
			data: function(param) {

			},
			// 响应结果处理
			processResults: function(data) {
				return {
					results: data
				}
			}
		}
	});
	
	var data = [{
			id: 0,
			text: '华为'
		},
		{
			id: 1,
			text: '阿里'
		},
		{
			id: 2,
			text: '百度'
		},
		{
			id: 3,
			text: '腾讯'
		},
		{
			id: 4,
			text: '小米'
		}
	];
	$(".testB2").select2({
		theme:"flat",
		placeholder:"测试二",
		data:data
	});
});