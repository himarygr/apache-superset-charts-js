import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'antd';

const data = [
  { label: 'Plan', value: 8 },
  { label: 'Forecast', value: 12 },
  { label: 'Run Rate', value: 15 },
];

const CardChart = () => {
  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {data.map((item, index) => (
          <div key={index}>
            <p style={{ color: index === 0 ? '#F4664A' : index === 1 ? '#30BF78' : '#FAAD14', fontWeight: 'bold' }}>{item.label}</p>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CardChart;


ReactDOM.render(<CardChart />, document.getElementById('container'));
