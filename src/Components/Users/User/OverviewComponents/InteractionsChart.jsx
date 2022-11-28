import React from 'react';
import Chart from 'react-apexcharts';

const InteractionsChart = () => {
  const ChartOptions = {
    chart: {
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
      },
    },

    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: 'vertical',
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: ['01/01/2023', '02/01/2023', '03/01/2023', '04/01/2023', '05/01/2023', '06/01/2023', '07/01/2023',
      '08/01/2023', '09/01/2023', '10/01/2023', '11/01/2023',
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      min: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter(y) {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} `;
          }
          return y;
        },
      },
    },
  };
  const ChartSeries = [{
    name: 'Likes',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
  }, {
    name: 'Comments',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
  }, {
    name: 'Shares',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
  }];
  return (
    <div className="card w-full 2xl:w-1/2  bg-base-100 text-base-content">
      <div className="card-body p-3 bg-transparent ">
        <div className="card-title opacity-70 m-1 italic">User Interactions</div>
        <Chart className="text-base-content" options={ChartOptions} series={ChartSeries} />
      </div>
    </div>
  );
};

export default InteractionsChart;
