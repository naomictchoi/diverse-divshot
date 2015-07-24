$(document).ready(function() {
	
var chart = c3.generate({
    data: {
    	x : 'x',
        columns: [
        	['x', '中六非華語生', '所有考生'],
        	['以文憑試中國語文科成績通過聯招獲取錄', 1.96, 18.72],
            ['符合本地大學入學要求並獲聯招取錄', 9.80, 18.72],
            ['符合教資會資助學士學位課程的一般入學要求', 24.51, 36.68]
        ],
        type: 'bar',
        colors:{
        	以文憑試中國語文科成績通過聯招獲取錄: '#D47B0D',
        	符合本地大學入學要求並獲聯招取錄: '#EF6055',
        	符合教資會資助學士學位課程的一般入學要求: '#28A614'
        },
        groups: [
            ['符合本地大學入學要求並獲聯招取錄', '符合教資會資助學士學位課程的一般入學要求']
        ]
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    },

   tooltip: {
  show: false
},
        legend: {
  			item: {
   				 onmouseover: function (id) { 
    				if (id == '符合本地大學入學要求並獲聯招取錄'){
    					chart.hide('符合教資會資助學士學位課程的一般入學要求');
    					chart.hide('以文憑試中國語文科成績通過聯招獲取錄');
    					chart.show('符合本地大學入學要求並獲聯招取錄');
    				}
    					
    				else if (id == '符合教資會資助學士學位課程的一般入學要求') {
    					chart.hide('符合本地大學入學要求並獲聯招取錄');
    					chart.hide('以文憑試中國語文科成績通過聯招獲取錄');
    					chart.show('符合教資會資助學士學位課程的一般入學要求');
    				} else {
    					chart.hide('符合本地大學入學要求並獲聯招取錄');
    					chart.hide('符合教資會資助學士學位課程的一般入學要求');
    					chart.show('以文憑試中國語文科成績通過聯招獲取錄');
    				}
    			}
			}
    },
    axis: {
  		y: {
    		label: '佔報考人數比率',
    		tick: {
                format: function (d) { return d + '%'; }
            }
  		},
  		x : {
  			type: 'category'
  		}

	}
});
chart.hide('符合本地大學入學要求並獲聯招取錄');
chart.hide('符合教資會資助學士學位課程的一般入學要求');
/*

function toggle(id) {
    chart.toggle(id);
}

d3.select('.container').insert('div', '.chart').attr('class', 'legend').selectAll('span')
    .data(['符合本地大學入學要求並獲聯招取錄', '符合教資會資助學士學位課程的一般入學要求'])
  .enter().append('span')
    .attr('data-id', function (id) { return id; })
    .html(function (id) { return id; })
    .each(function (id) {
        d3.select(this).style('background-color', chart.color(id));
    })
    .on('mouseover', function (id) {
        chart.focus(id);
    })
    .on('mouseout', function (id) {
        chart.revert();
    })
    .on('click', function (id) {
        chart.toggle(id);
    });*/

});