import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'antd';


const data = [
  { value: 67, subtitle: 'ΔT-1' },
  { value: -28, subtitle: 'ΔT-7' },

  
];

const color = (value) => {
  if (value < 0) {
    return '#ff4d4f'; // розовый цвет
  } else {
    return '#b7eb8f'; // светло-зеленый цвет
  }
};

const chartStyle = (value) => {
  return {
    background: color(value),
    borderRadius: '5px',
    padding: '10px',
    height: '100%',
    maxWidth: '500px', // добавляем максимальную ширину для карточки
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', 
  };
};

const ChartCard = () => {
  return (
    <Card style={{ height: '600px' }}>
      <div style={{height: '80%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {data.map((item, index) => (
          <div key={index} style={{width: '100%', margin: '0 10px 20px'}}>
            <div style={chartStyle(item.value)}>
              <h3>{item.subtitle}</h3>
              <p>{item.value}%</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};


ReactDOM.render(<ChartCard  />, document.getElementById('container'));
