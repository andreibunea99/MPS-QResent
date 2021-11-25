import React from 'react';
import {Pie} from 'react-chartjs-2';
import Chart from 'chart.js/auto';


export default class App extends React.Component {
  render() {
    const data = localStorage.getItem("LIST");
const array = JSON.parse(data);
console.log("a" + array)
const state = {
    labels: ['Start', 'Middle', 'End'],
      datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
        '#e4d9ff',          
          '#273469',
          '#1e2749'
        ],
        hoverBackgroundColor: [
        '#E6D9FD',
        '#2A3166',
        '#202648'
        ],
        data: array
      }
    ]
  }

    return (
      <div>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            width:10,
height:5,
            options:{
                responsive: true,
                maintainAspectRatio: true,
              },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}