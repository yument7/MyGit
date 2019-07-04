define(['d3'], function(d3) {
	paintChinaMap();

	// 绘制中国地图
	function paintChinaMap() {
		var width = 1000,
			height = 600;
		var svg = d3.select("#d3-map").append("svg")
			.attr("width", "100%")
			.attr("height", height).append("g");

		var projection = d3.geoMercator()
			.center([120, 35])
			.scale(540);
		var path = d3.geoPath()
			.projection(projection);

		// 利用d3的提供的主题，使用比例尺生成的颜色方案
		var color = d3.scaleOrdinal().range(d3.schemeCategory10);

		// 自己生成的颜色方案
		var colorData = {}; /* Sample random data. */
		["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
			"13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
			"24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34"
		]
		.forEach(function(d) {
			var low = Math.round(100 * Math.random()),
				mid = Math.round(100 * Math.random()),
				high = Math.round(100 * Math.random());
			colorData[d] = {
				low: d3.min([low, mid, high]),
				high: d3.max([low, mid, high]),
				avg: Math.round((low + mid + high) / 3),
				color: d3.interpolate("#ffffcc", "#008B00")(low / 100)
			};
		});

		function mouseOver(d) {
			d3.select("#tooltip").transition().duration(200).style("opacity", .9);
			
			d3.select("#tooltip").html("<h4>" + d.properties.name + "</h4>")
				.style("left", (d3.event.offsetX -10) + "px")
				.style("top", (d3.event.offsetY - 28) + "px");
		}

		function mouseOut() {
			d3.select("#tooltip").transition().duration(500).style("opacity", 0);
		}

		// 采用了fetch().then()的写法
		d3.json("pages/d3/china.json").then(function(china) {
			svg.selectAll("path")
				.data(china.features)
				.enter()
				.append("path")
				.attr("d", path)
				.attr("fill", function(d, i) {
					//return colorData[d.properties.id].color;
					return color(i);
				}).on("mouseover", mouseOver).on("mouseout", mouseOut);
		});
		
		//添加南海诸岛示意图
		//此图截自Echarts：http://echarts.baidu.com/doc/example/map9.html
		svg.append("svg:image")
			.attr("xlink:href", "pages/d3/southchinasea.png")
			.attr("x", 550)
			.attr("y", 350)
			.attr("width", 50)
			.attr("height", 70);
	}

});