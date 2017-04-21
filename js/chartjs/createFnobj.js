var createFnobj={};//创建函数对象

//参数id为容器，num为2、3、4,numarr为传入数据，如果对象内展示数据为动态，可都设置为参数传入
		createFnobj.Gliyonglv=function (num,numarr){
			if($('#leftonetu')){
				$('#leftonetu').remove()
			}
			$('.leftonebox').eq(0).append($('<div id="leftonetu" class="leftonetu"></div>'))
			$('#leftonetu').highcharts({
		        chart: {
		        	backgroundColor: 'black',
		            type: 'line'
		        },
		        title: {
		            text: num+'G可用率:',
					align:"left"
		        },
		        xAxis: {
		            categories: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00','20:00']
		        },
		        yAxis: {
		            title: {
		                text: '可用率占比'
		            }
		        },
		        plotOptions: {
		            line: {
		                dataLabels: {
		                    enabled: true          // 开启数据标签
		                },
		                enableMouseTracking: true // 关闭鼠标跟踪，对应的提示框、点击事件会失效
		            }
		        },
		        series: [{
		            name:'可用率',
		            data: numarr          //传入的数据
		        }],
                credits: {
                    // enabled:true,                    // 默认值，如果想去掉版权信息，设置为false即可
                    text: '中国联通',             // 显示的文字
                    href: 'index.html',      // 链接地址
                }
			})
		}	
		
//左上图点击【折线图切换柱状图】
		createFnobj.cutleftytop=function (num,arr){
			if($('#leftonetu')){
				$('#leftonetu').remove()
			}
			$('.leftonebox').eq(0).append($('<div id="leftonetu" class="leftonetu"></div>'))
			$('#leftonetu').highcharts({
		        chart: {
		        	backgroundColor: 'black',
		            type: 'column'
		        },
		        title: {
		            text: num+'G可用率',
                    align:"left"
		        },
		        xAxis: {
		            categories: [
		                '8',
		                '9',
		                '10',
		                '11',
		                '12',
		                '13',
		                '14',
		                '15',
		                '16',
		                '17',
		                '18',
		                '19',
		                '20'
		            ],
		            crosshair: true
		        },
		        yAxis: {
		            min: 0,
		            title: {
		                text: 'Y轴单位'
		            }
		        },
		        tooltip: {
		            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
		            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
		            footerFormat: '</table>',
		            shared: true,
		            useHTML: true
		        },
		        plotOptions: {
		            column: {
		                pointPadding: 0.2,
		                borderWidth: 0
		            }
		        },
		        series: [{
		            name: 'name',
		            data: arr
		        }],
                credits: {
                    // enabled:true,                    // 默认值，如果想去掉版权信息，设置为false即可
                    text: '中国联通',             // 显示的文字
                    href: 'index.html',      // 链接地址
                }
		    });
		}
		
//流量横向柱状图
createFnobj.FlowHcolumn = function (num,arr1,arr2){
	  		if($('#leftwotu')){
	  			$('#leftwotu').remove()
	  		}
	  		$('.leftonebox').eq(1).append($('<div id="leftwotu" class="leftonetu"></div>'))
	  		$('#leftwotu').highcharts({
		        chart: {
		        	backgroundColor: 'black',
		            type: 'bar'
		        },
		        title: {
		            text: num+'G流量:',
                    align:"left"
		        },
		        xAxis: {
		            categories:arr1
		        },
		        yAxis: {
		            min: 0,
		            title: {
		                text: ''
		            }
		        },
		        legend: {
		            reversed: true
		        },
		        plotOptions: {
		            series: {
		                stacking: 'normal'
		            }
		        },
		        series:arr2,
                credits: {
                    // enabled:true,                    // 默认值，如果想去掉版权信息，设置为false即可
                    text: '中国联通',             // 显示的文字
                    href: 'index.html',      // 链接地址
                }
		    })
	  	}


//话务量柱形图
//参数id为容器id，num为2、3、4,arr1为传入数据1,arr2为传入数据2
createFnobj.Huacloumn = function (num,arr1,arr2){
	  		if($('#lefthreetu')){
	  			$('#lefthreetu').remove()
	  		}
	  		$('.leftonebox').eq(2).append($('<div id="lefthreetu" class="leftonetu"></div>'))
	  		 Highcharts.chart('lefthreetu', {
			        chart: {
			        	backgroundColor: 'black',
			            type: 'column'
			        },
			        title: {
			            text: num+'G话务量:',
                        align:"left"
			        },
			        xAxis: {
			            type: 'category'
			        },
			        yAxis: {
			            title: {
			                text: 'Y轴单位'
			            }
			        },
			        legend: {
			            enabled: false
			        },
			        plotOptions: {
			            series: {
			                borderWidth: 0,
			                dataLabels: {
			                    enabled: true,
			                    format: '{point.y:.1f}%'
			                }
			            }
			        },
			        tooltip: {
			            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
			        },
			        series:arr1,
			        drilldown: {
			            series:arr2
			        },
					credits: {
						 // enabled:true,                    // 默认值，如果想去掉版权信息，设置为false即可
						 text: '中国联通',             // 显示的文字
						 href: 'index.html',      // 链接地址
					}
			    });
	  	}


//中部仪表图
//参数num1为仪表盘1初始化数据，参数num2为仪表盘1初始化数据，参数num3为仪表盘1初始化数据
//根据数据范围设置仪表盘单位

createFnobj.createinst = function (num1,num2,num3){
	  		if($('#inst1') && $('#inst2') && $('#inst3')){
	  			$('#inst1').remove()
	  			$('#inst2').remove()
	  			$('#inst3').remove()
	  		}
	  		$('.instbox').append($('<div id="inst1" class="inst"></div><div id="inst2" class="inst"></div><div id="inst3" class="inst"></div>'))
	  		var gaugeOptions = {
        chart: {
            type: 'solidgauge'
        },
        title: null,
        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },
        tooltip: {
            enabled: false
        },
        // the value axis
        yAxis: {
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };
    // The speed gauge
    $('#inst1').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 200,
            title: {
                text: '参数1'
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '参数1',
            data: [num1],//初始化参数
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:12px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                '<span style="font-size:10px;color:silver">单位1</span></div>'
            },
            tooltip: {
                valueSuffix: ' 单位'
            }
        }],
        credits: {
            enabled:false,                    // 默认值，如果想去掉版权信息，设置为false即可
        }
    }));
    // The RPM gauge
    $('#inst2').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,//最小单位
            max: 200,//最大单位
            title: {
                text: '参数2'
            }
        },
        series: [{
            name: '参数2',
            data: [num2],//初始化参数
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:12px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                '<span style="font-size:10px;color:silver">单位2</span></div>'
            },
            tooltip: {
                valueSuffix: ' revolutions/min'
            }
        }],
        credits: {
            enabled:false,                    // 默认值，如果想去掉版权信息，设置为false即可
        }
    }));
    $('#inst3').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 200,
            title: {
                text: '参数3'
            }
        },
        series: [{
            name: '参数3',
            data: [num3],//初始化参数
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:12px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                '<span style="font-size:10px;color:silver">单位3</span></div>'
            },
            tooltip: {
                valueSuffix: ' revolutions/min'
            }
        }],
        credits: {
            enabled:false,                    // 默认值，如果想去掉版权信息，设置为false即可
        }
    }));
    // Bring life to the dials
//  setInterval(function () {
//      // Speed
//      var chart,
//          point,
//          newVal,
//          inc;
//      for(var i=1;i<4;i++){//循环插入数据并且更新
//      	var chart = $('#inst'+i).highcharts();
//      	if (chart) {
//	        	point = chart.series[0].points[0];
//	            inc = Math.round((Math.random() - 0.5) * 100);
//	            newVal = point.y + inc;
//	            if (newVal < 0 || newVal > 200) {
//	                newVal = point.y - inc;
//	            }
//	            point.update(newVal);//更新值
//	        }
//      }
//      
//  }, 2000);
}
//日期时间：
function currentTime(){
    var d=new Date(),str='';
    str+=d.getFullYear()+'年';
    str+=d.getMonth() + 1+'月';
    str+=d.getDate()+'日  ';
    str+=d.getHours()+':';
    str+=d.getMinutes()+':';
    str+= d.getSeconds()+'';
    return str;
}
setInterval(function(){$('#show').html(currentTime)},1000);

