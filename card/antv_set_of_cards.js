import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'antd';


const data = [
  { value: -10, subtitle: 'Подзаголовок 1' },
  { value: 20, subtitle: 'Подзаголовок 2' },
  { value: 5, subtitle: 'Подзаголовок 3' },
  { value: 15, subtitle: 'Подзаголовок 4' },
  { value: -5, subtitle: 'Подзаголовок 5' },
  { value: 8, subtitle: 'Подзаголовок 6' },
  { value: 0, subtitle: 'Подзаголовок 7' },
  { value: -3, subtitle: 'Подзаголовок 8' },
  { value: 7, subtitle: 'Подзаголовок 9' },
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
    maxWidth: '250px', // добавляем максимальную ширину для карточки
  };
};

const ChartCard = () => {
  return (
    <Card title="Заголовок" style={{ height: '600px' }}>
      <div style={{height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexWrap: 'wrap'}}>
        {data.map((item, index) => (
          <div key={index} style={{width: '30%', margin: '0 10px 20px'}}>
            <div style={chartStyle(item.value)}>
              <h3 style = {{fontSize: '16px'}}>{item.subtitle}</h3>
              <p style = {{fontSize: '20px'}}>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};


ReactDOM.render(<ChartCard  />, document.getElementById('container'));
