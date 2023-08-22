import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const DemoColumn = () => {
  const data = [
    {
      type: 'type1',
      value: 0.16,
    },
    {
      type: 'type2',
      value: 0.125,
    },
    {
      type: 'type3',
      value: 0.24,
    },
    {
      type: 'type4',
      value: 0.21,
    },
    {
      type: 'type5',
      value: 0.22,
    }
  ];
const paletteSemanticRed = '#F4664A';
  const brandColor = '#5B8FF9';

  const config = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: '',
    columnStyle: 
      (data) => {
        if (data.value < 0.2) {
          return {fill: paletteSemanticRed};
        } else if (data.value <= 0.21 && data.value >= 0.2) {
          return { fill: 'yellow' };
        } else {
        return {fill: brandColor};
      }
    },
    legend: true,
  };
  return <Column {...config} />;
};
ReactDOM.render(<DemoColumn />, document.getElementById('container'));
