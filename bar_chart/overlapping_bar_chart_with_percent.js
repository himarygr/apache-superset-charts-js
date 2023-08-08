var data1 = [200, 332, 301, 334, 390];
var data2 = [150, 132, 101, 134, 90];
var ratio = data2.map((value, index) => (value * 100 / data1[index]).toFixed(2));

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['Category 1',  'Category 3']
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
      startValue: 0
    }
  ],
  series: [
   {
      name: 'Category 1',
      type: 'bar',
      stack: 'total',
      color: 'transparent',
      label: {
        show: true,
        position: 'outside'
      },
      data:  data1,
      itemStyle: {
        opacity: 1,
        borderWidth: 1,
        borderType: 'solid',
        borderColor: 'black'},
      barWidth: '25%'
    },
    
     {
      name: 'Category 2',
      type: 'line',
      stack: 'total',
      color: 'transparent',
      label: {
        show: true,
        position: 'inside',
        formatter: '{c}%',
        textStyle: {
          fontSize: 20,
          color: 'red'
        }
      },  
      data:  ratio,
      itemStyle: {
        opacity: 1,
        borderWidth: 1,
        borderColor: 'red',
        borderType: 'dashed'
      },
      barWidth: '25%'
    },

      {
      name: 'Category 3',
      type: 'bar',
      stack: 'total3',
      color: '#fa8792',
      barGap: -1,
      label: {
        show: true,
        position: 'inside'
      },  
      data:  data2,
      itemStyle: {opacity: 0.7},
      barWidth: '25%'
    }
  ]
};
