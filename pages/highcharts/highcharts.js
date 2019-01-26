define(['highcharts', 'hchartExport', 'highcharts3d', 'hchartMore'], function(Highcharts, exporting, highcharts3d) {
	return {
		init: function() {
			exporting(Highcharts);
			var opt_a = {
				title: {
					text: '2010 ~ 2016 年太阳能行业就业人员发展情况'
				},
				subtitle: {
					text: '数据来源：thesolarfoundation.com'
				},
				yAxis: {
					title: {
						text: '就业人数'
					}
				},
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle'
				},
				plotOptions: {
					series: {
						label: {
							connectorAllowed: false
						},
						pointStart: 2010
					}
				},
				series: [{
					name: '安装，实施人员',
					data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
				}, {
					name: '工人',
					data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
				}, {
					name: '销售',
					data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
				}, {
					name: '项目开发',
					data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
				}, {
					name: '其他',
					data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
				}],
				responsive: {
					rules: [{
						condition: {
							maxWidth: 500
						},
						chartOptions: {
							legend: {
								layout: 'horizontal',
								align: 'center',
								verticalAlign: 'bottom'
							}
						}
					}]
				},
				credits: {
					enabled: false // 禁用版权信息
				}
			}
			Highcharts.chart('highcharts-line-chart', opt_a);

			var opt_b = {
				chart: {
					type: 'area'
				},
				title: {
					text: '美苏核武器库存量'
				},
				subtitle: {
					text: '数据来源: <a href="https://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
						'thebulletin.metapress.com</a>'
				},
				xAxis: {
					allowDecimals: false
				},
				yAxis: {
					title: {
						text: '核武库国家'
					},
					labels: {
						formatter: function() {
							return this.value / 1000 + 'k';
						}
					}
				},
				tooltip: {
					pointFormat: '{series.name} 制造 <b>{point.y:,.0f}</b>枚弹头'
				},
				plotOptions: {
					area: {
						pointStart: 1940,
						marker: {
							enabled: false,
							symbol: 'circle',
							radius: 2,
							states: {
								hover: {
									enabled: true
								}
							}
						}
					}
				},
				series: [{
					name: '美国',
					data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
						1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
						27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
						26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
						24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
						22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
						10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104
					]
				}, {
					name: '苏联/俄罗斯',
					data: [null, null, null, null, null, null, null, null, null, null,
						5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
						4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
						15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
						33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
						35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
						21000, 20000, 19000, 18000, 18000, 17000, 16000
					]
				}],
				credits: {
					enabled: false // 禁用版权信息
				}
			}
			Highcharts.chart("highcharts-area-chart", opt_b);

			var opt_c = {
				chart: {
					type: 'bar'
				},
				title: {
					text: '各洲不同时间的人口条形图'
				},
				subtitle: {
					text: '数据来源: Wikipedia.org'
				},
				xAxis: {
					categories: ['非洲', '美洲', '亚洲', '欧洲', '大洋洲'],
					title: {
						text: null
					}
				},
				yAxis: {
					min: 0,
					title: {
						text: '人口总量 (百万)',
						align: 'high'
					},
					labels: {
						overflow: 'justify'
					}
				},
				tooltip: {
					valueSuffix: ' 百万'
				},
				plotOptions: {
					bar: {
						dataLabels: {
							enabled: true,
							allowOverlap: true // 允许数据标签重叠
						}
					}
				},
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'top',
					x: -40,
					y: 100,
					floating: true,
					borderWidth: 1,
					backgroundColor: ((highcharts.theme && highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
					shadow: true
				},
				series: [{
					name: '1800 年',
					data: [107, 31, 635, 203, 2]
				}, {
					name: '1900 年',
					data: [133, 156, 947, 408, 6]
				}, {
					name: '2008 年',
					data: [973, 914, 4054, 732, 34]
				}],
				credits: {
					enabled: false // 禁用版权信息
				}
			};
			Highcharts.chart("highcharts-bar-chart", opt_c);

			var opt_d = {
				chart: {
					type: 'column'
				},
				title: {
					text: '月平均降雨量'
				},
				subtitle: {
					text: '数据来源: WorldClimate.com'
				},
				xAxis: {
					categories: [
						'一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
					],
					crosshair: true
				},
				yAxis: {
					min: 0,
					title: {
						text: '降雨量 (mm)'
					}
				},
				tooltip: {
					// head + 每个 point + footer 拼接成完整的 table
					headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
					pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
						'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
					footerFormat: '</table>',
					shared: true,
					useHTML: true
				},
				plotOptions: {
					column: {
						borderWidth: 0
					}
				},
				series: [{
					name: '东京',
					data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
				}, {
					name: '纽约',
					data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
				}, {
					name: '伦敦',
					data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
				}, {
					name: '柏林',
					data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
				}],
				credits: {
					enabled: false // 禁用版权信息
				}
			};
			Highcharts.chart("highcharts-column-chart", opt_d);

			var opt_e = {
				chart: {
					plotBackgroundColor: null,
					plotBorderWidth: null,
					plotShadow: false,
					type: 'pie'
				},
				title: {
					text: '2018年1月浏览器市场份额'
				},
				tooltip: {
					pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
				},
				plotOptions: {
					pie: {
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
							enabled: true,
							format: '<b>{point.name}</b>: {point.percentage:.1f} %',
							style: {
								color: (highcharts.theme && highcharts.theme.contrastTextColor) || 'black'
							}
						}
					}
				},
				series: [{
					name: 'Brands',
					colorByPoint: true,
					data: [{
						name: 'Chrome',
						y: 61.41,
						sliced: true,
						selected: true
					}, {
						name: 'Internet Explorer',
						y: 11.84
					}, {
						name: 'Firefox',
						y: 10.85
					}, {
						name: 'Edge',
						y: 4.67
					}, {
						name: 'Safari',
						y: 4.18
					}, {
						name: 'Opera',
						y: 1.6
					}, {
						name: 'Other',
						y: 5.45
					}]
				}],
				credits: {
					enabled: false // 禁用版权信息
				}
			};
			Highcharts.chart("highcharts-pie-chart", opt_e);

			var opt_f = {
				chart: {
					type: 'scatter',
					zoomType: 'xy'
				},
				title: {
					text: '507 人按性别划分的身高和体重分布图'
				},
				subtitle: {
					text: '数据来源: Heinz  2003'
				},
				xAxis: {
					title: {
						enabled: true,
						text: '身高 (cm)'
					},
					startOnTick: true,
					endOnTick: true,
					showLastLabel: true
				},
				yAxis: {
					title: {
						text: '体重 (kg)'
					}
				},
				legend: {
					layout: 'vertical',
					align: 'left',
					verticalAlign: 'top',
					x: 100,
					y: 70,
					floating: true,
					backgroundColor: (highcharts.theme && highcharts.theme.legendBackgroundColor) || '#FFFFFF',
					borderWidth: 1
				},
				plotOptions: {
					scatter: {
						marker: {
							radius: 5,
							states: {
								hover: {
									enabled: true,
									lineColor: 'rgb(100,100,100)'
								}
							}
						},
						states: {
							hover: {
								marker: {
									enabled: false
								}
							}
						},
						tooltip: {
							headerFormat: '<b>{series.name}</b><br>',
							pointFormat: '{point.x} cm, {point.y} kg'
						}
					}
				},
				series: [{
					name: '女',
					color: 'rgba(223, 83, 83, .5)',
					data: [
						[161.2, 51.6],
						[167.5, 59.0],
						[159.5, 49.2],
						[157.0, 63.0],
						[155.8, 53.6],
						[170.0, 59.0],
						[159.1, 47.6],
						[166.0, 69.8],
						[176.2, 66.8],
						[172.5, 55.2],
						[170.9, 54.2],
						[172.9, 62.5],
						[153.4, 42.0],
						[170.5, 67.8],
						[160.0, 47.0],
						[154.4, 46.2],
						[162.0, 55.0],
						[176.5, 83.0],
						[152.0, 45.8],
						[162.1, 53.6],
						[170.0, 73.2],
						[161.3, 67.9],
						[166.4, 56.6],
						[168.9, 62.3],
						[163.8, 58.5],
						[167.6, 54.5],
						[161.3, 60.3],
						[167.6, 58.3],
						[165.1, 56.2],
						[160.0, 50.2],
						[170.0, 72.9],
						[157.5, 59.8],
						[167.6, 61.0],
						[160.7, 69.1],
						[163.2, 55.9],
						[152.4, 46.5],
						[157.5, 54.3],
						[168.3, 54.8],
						[180.3, 60.7],
						[165.5, 60.0],
						[165.0, 62.0],
						[164.5, 60.3],
						[156.0, 52.7],
						[160.0, 74.3],
						[163.0, 62.0],
						[165.7, 73.1],
						[161.0, 80.0],
						[162.0, 54.7],
						[166.0, 53.2],
						[174.0, 75.7],
						[172.7, 61.1],
						[167.6, 55.7],
						[151.1, 48.7],
						[164.5, 52.3],
						[163.5, 50.0],
						[152.0, 59.3],
						[169.0, 62.5],
						[164.0, 55.7],
						[161.2, 54.8],
						[155.0, 45.9],
						[170.0, 70.6],
						[176.2, 67.2],
						[170.0, 69.4],
						[162.5, 58.2],
						[170.3, 64.8],
						[164.1, 71.6],
						[169.5, 52.8],
						[163.2, 59.8],
						[154.5, 49.0],
						[159.8, 50.0],
						[173.2, 69.2],
						[170.0, 55.9],
						[169.0, 58.2],
						[166.2, 58.6],
						[159.4, 45.7],
						[167.0, 59.8],
						[160.0, 54.8],
						[160.0, 43.2],
						[168.9, 60.5],
						[158.2, 46.4],
						[167.1, 62.2],
						[158.0, 55.5],
						[167.6, 57.8],
						[156.0, 54.6],
						[162.1, 59.2],
						[173.4, 52.7],
						[159.8, 53.2],
						[170.5, 64.5],
						[157.5, 56.0],
						[161.3, 63.6],
						[162.6, 63.2],
						[160.0, 59.5],
						[168.9, 56.8],
						[165.1, 64.1],
						[162.6, 50.0],
						[165.1, 72.3],
						[166.4, 55.0],
						[152.4, 60.4],
						[170.2, 69.1],
						[162.6, 84.5],
						[170.2, 55.9],
						[158.8, 55.5],
						[172.7, 69.5],
						[167.6, 76.4],
						[156.2, 58.6],
						[175.2, 66.8],
						[172.1, 56.6],
						[162.6, 58.6],
						[160.0, 55.9],
						[165.1, 59.1],
						[182.9, 81.8],
						[166.4, 70.7],
						[165.1, 56.8],
						[177.8, 60.0],
						[165.1, 58.2],
						[175.3, 72.7],
						[154.9, 54.1],
						[158.8, 49.1],
						[172.7, 75.9],
						[168.9, 55.0],
						[161.3, 57.3],
						[167.6, 55.0],
						[165.1, 65.5],
						[175.3, 65.5],
						[157.5, 48.6],
						[163.8, 58.6],
						[167.6, 63.6],
						[165.1, 55.2],
						[165.1, 62.7],
						[168.9, 56.6],
						[162.6, 53.9],
						[164.5, 63.2],
						[176.5, 73.6],
						[168.9, 62.0],
						[175.3, 63.6],
						[159.4, 53.2],
						[160.0, 53.4],
						[170.2, 55.0],
						[162.6, 70.5],
						[167.6, 54.5],
						[162.6, 54.5],
						[168.9, 63.0],
						[170.2, 73.6],
						[175.2, 62.3],
						[175.2, 57.7],
						[160.0, 55.4],
						[174.0, 55.5],
						[170.2, 77.3],
						[160.0, 80.5],
						[167.6, 64.5],
						[167.6, 72.3],
						[167.6, 61.4],
						[154.9, 58.2],
						[162.6, 81.8],
						[175.3, 63.6],
						[171.4, 53.4],
						[157.5, 54.5],
						[165.1, 53.6],
						[160.0, 60.0],
						[174.0, 73.6],
						[162.6, 61.4],
						[174.0, 55.5],
						[162.6, 63.6],
						[161.3, 60.9],
						[163.8, 67.3]
					]
				}, {
					name: '男',
					color: 'rgba(119, 152, 191, .5)',
					data: [
						[174.0, 65.6],
						[175.3, 71.8],
						[193.5, 80.7],
						[186.5, 72.6],
						[187.2, 78.8],
						[181.5, 74.8],
						[184.5, 78.4],
						[175.0, 62.0],
						[184.0, 81.6],
						[180.0, 76.6],
						[177.8, 83.6],
						[192.0, 90.0],
						[176.0, 74.6],
						[184.0, 79.6],
						[192.7, 93.8],
						[171.5, 70.0],
						[173.0, 72.4],
						[175.5, 63.2],
						[171.2, 79.1],
						[181.6, 78.9],
						[167.4, 67.7],
						[181.1, 66.0],
						[177.0, 68.2],
						[174.5, 63.9],
						[177.5, 72.0],
						[170.5, 56.8],
						[182.4, 74.5],
						[197.1, 90.9],
						[180.1, 93.0],
						[175.5, 80.9],
						[184.4, 68.0],
						[175.5, 70.9],
						[180.6, 72.5],
						[177.0, 72.5],
						[181.6, 75.5],
						[176.5, 73.0],
						[175.0, 70.2],
						[174.0, 73.4],
						[165.1, 70.5],
						[177.0, 68.9],
						[192.0, 102.3],
						[176.5, 68.4],
						[169.4, 65.9],
						[182.1, 75.7],
						[179.8, 84.5],
						[175.3, 87.7],
						[184.9, 86.4],
						[177.3, 73.2],
						[167.4, 53.9],
						[178.1, 72.0],
						[168.9, 55.5],
						[157.2, 58.4],
						[180.3, 83.2],
						[170.2, 72.7],
						[177.8, 64.1],
						[172.7, 72.3],
						[165.1, 65.0],
						[186.7, 86.4],
						[165.1, 65.0],
						[174.0, 88.6],
						[175.3, 84.1],
						[185.4, 66.8],
						[177.8, 75.5],
						[180.3, 93.2],
						[180.3, 82.7],
						[177.8, 58.0],
						[177.8, 79.5],
						[177.8, 78.6],
						[177.8, 71.8],
						[177.8, 116.4],
						[163.8, 72.2],
						[188.0, 83.6],
						[175.3, 90.9],
						[190.5, 89.1],
						[166.4, 75.0],
						[177.8, 77.7],
						[179.7, 86.4],
						[172.7, 90.9],
						[190.5, 73.6],
						[185.4, 102.3],
						[181.6, 70.5],
						[172.7, 95.9],
						[190.5, 84.1],
						[179.1, 87.3],
						[175.3, 71.8],
						[170.2, 65.9],
						[193.0, 95.9],
						[171.4, 91.4],
						[177.8, 96.8],
						[167.6, 69.1],
						[167.6, 82.7],
						[180.3, 75.5],
						[182.9, 79.5],
						[176.5, 73.6],
						[186.7, 91.8],
						[188.0, 85.9],
						[177.8, 81.8],
						[174.0, 82.5],
						[177.8, 80.5],
						[171.4, 70.0],
						[185.4, 81.8],
						[188.0, 90.5],
						[182.9, 89.1],
						[176.5, 85.0],
						[175.3, 73.6],
						[188.0, 80.5],
						[175.3, 86.4],
						[170.5, 67.7],
						[179.1, 92.7],
						[177.8, 93.6],
						[175.3, 70.9],
						[182.9, 75.0],
						[170.8, 93.2],
						[188.0, 93.2],
						[180.3, 77.7],
						[177.8, 61.4],
						[185.4, 94.1],
						[168.9, 75.0],
						[185.4, 83.6],
						[180.3, 85.5],
						[174.0, 73.9],
						[167.6, 66.8],
						[182.9, 87.3],
						[160.0, 72.3],
						[180.3, 88.6],
						[167.6, 75.5],
						[186.7, 101.4],
						[175.3, 91.1],
						[175.3, 67.3],
						[175.9, 77.7],
						[175.3, 81.8],
						[179.1, 75.5],
						[181.6, 84.5],
						[177.8, 76.6],
						[182.9, 85.0],
						[177.8, 102.5],
						[184.2, 77.3],
						[179.1, 71.8],
						[176.5, 87.9],
						[188.0, 94.3],
						[174.0, 70.9],
						[167.6, 64.5],
						[170.2, 77.3],
						[188.0, 87.3],
						[176.5, 82.3],
						[180.3, 73.6],
						[167.6, 74.1],
						[188.0, 85.9],
						[180.3, 73.2],
						[167.6, 76.3],
						[183.0, 65.9],
						[183.0, 90.9],
						[179.1, 89.1],
						[177.8, 82.7],
						[179.1, 79.1],
						[190.5, 98.2],
						[177.8, 84.1],
						[180.3, 83.2],
					]
				}],
				credits: {
					enabled: false // 禁用版权信息
				}
			};
			Highcharts.chart("highcharts-scatter-chart", opt_f);

			/*var opt_g = {
				chart: {
					type: 'gauge',
					plotBackgroundColor: null,
					plotBackgroundImage: null,
					plotBorderWidth: 0,
					plotShadow: false
				},
				title: {
					text: '速度仪'
				},
				pane: {
					startAngle: -150,
					endAngle: 150,
					background: [{
						backgroundColor: {
							linearGradient: {
								x1: 0,
								y1: 0,
								x2: 0,
								y2: 1
							},
							stops: [
								[0, '#FFF'],
								[1, '#333']
							]
						},
						borderWidth: 0,
						outerRadius: '109%'
					}, {
						backgroundColor: {
							linearGradient: {
								x1: 0,
								y1: 0,
								x2: 0,
								y2: 1
							},
							stops: [
								[0, '#333'],
								[1, '#FFF']
							]
						},
						borderWidth: 1,
						outerRadius: '107%'
					}, {
						backgroundColor: '#DDD',
						borderWidth: 0,
						outerRadius: '105%',
						innerRadius: '103%'
					}]
				},
				// the value axis
				yAxis: {
					min: 0,
					max: 200,
					minorTickInterval: 'auto',
					minorTickWidth: 1,
					minorTickLength: 10,
					minorTickPosition: 'inside',
					minorTickColor: '#666',
					tickPixelInterval: 30,
					tickWidth: 2,
					tickPosition: 'inside',
					tickLength: 10,
					tickColor: '#666',
					labels: {
						step: 2,
						rotation: 'auto'
					},
					title: {
						text: 'km/h'
					},
					plotBands: [{
						from: 0,
						to: 120,
						color: '#55BF3B' // green
					}, {
						from: 120,
						to: 160,
						color: '#DDDF0D' // yellow
					}, {
						from: 160,
						to: 200,
						color: '#DF5353' // red
					}]
				},
				series: [{
					name: 'Speed',
					data: [80],
					tooltip: {
						valueSuffix: ' km/h'
					}
				}],
				credits: {
					enabled: false // 禁用版权信息
				}
			};
			var chart = Highcharts.chart("highcharts-gauge-chart", opt_g, function(chart) {
				if(!chart.renderer.forExport) {
					setInterval(function() {
						var point = chart.series[0].points[0],
							newVal,
							inc = Math.round((Math.random() - 0.5) * 20);
						newVal = point.y + inc;
						if(newVal < 0 || newVal > 200) {
							newVal = point.y - inc;
						}
						point.update(newVal);
					}, 3000);
				}
			});*/

			// 3d 图还不能正常显示
			require(['highcharts','hchartMore'], function(Highcharts) {
				var opt_h = {
					chart: {
						type: 'pie',
						options3d: {
							enabled: true,
							alpha: 45
						}
					},
					title: {
						text: '简数科技每周水果消耗量'
					},
					subtitle: {
						text: 'Highcharts 中的3D环形图'
					},
					plotOptions: {
						pie: {
							innerSize: 100,
							depth: 45
						}
					},
					series: [{
						name: '货物金额',
						data: [
							['香蕉', 8],
							['猕猴桃', 3],
							['桃子', 1],
							['橘子', 6],
							['苹果', 8],
							['梨', 4],
							['柑橘', 4],
							['橙子', 1],
							['葡萄 (串)', 1]
						]
					}]
				};
				Highcharts.chart("highcharts-column3d-chart", opt_h);
			});
		},
		destroy: function() { // 内存释放
		}
	}
});