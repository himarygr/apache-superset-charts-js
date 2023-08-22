import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['Category 1', 'Category 2']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
     },
  xAxis: [
    {
      type: 'category',
      data: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
    }
  ],
  yAxis: [
    {
      type: 'value',
      min: 0,
      max: 500,
      startValue: 0
    }
  ],
  series: [
    {
      name: 'Category 1',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        position: 'inside'
      },
      data: [320, 332, 301, 334, 390],
      itemStyle: { opacity: 1 },
      barWidth: '70%'
    },
    {
      name: 'Category 2',
      type: 'bar',
      stack: 'total7',
      barGap: -0.85,
      label: {
        show: true,
        position: 'inside'
      },
      data: [120, 132, 101, 134, 90],
      itemStyle: { opacity: 1 },
      barWidth: '50%'
    }
  ]
};

option && myChart.setOption(option); 
