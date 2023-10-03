import React from 'react';
import ReactDOM from 'react-dom';
import { DecompositionTreeGraph } from '@ant-design/graphs';

const DemoDecompositionTreeGraph = () => {
  const data = {
    id: 'A0',
    value: {
      title: 'Metric',
      items: [
        {
          text: 'Subheader',
          value: '80%',
        },
      ],
      real_val: 0.8,
    },  
  };

  const config = {
    data,
    nodeCfg: {
      size: [150, 25],
      items: {
        containerStyle: {
           fill: 'transparent',
        },
        
        style: (cfg, group, type) => {
          const styles = {
            text: {
              fill: '#aaa',
              fontSize: 10,
            },
            value: {
              fill: cfg.value.real_val <  0.8 ? '#FF3D3D' : '#21BA45', // изменение цвета текста в зависимости от значения value
              fontSize: 28,
              fontWeight: 'bold',
            },

          };
          return styles[type];
        },
      },
      title: {
        containerStyle: {
          fill: 'transparent',
        },
        style: {
          fill: '#000',
          fontSize: 15,
        },
      },
    },
  
  };

  return <DecompositionTreeGraph {...config} />;
};

ReactDOM.render(<DemoDecompositionTreeGraph />, document.getElementById('container'));
