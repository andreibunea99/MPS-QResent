import React from 'react';
import {Pie} from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const data = localStorage.getItem("LIST");
const array = JSON.parse(data);
console.log("a" +array)


const state = {
  labels: ['Start', 'Middle', 'End'],
    datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      ],
      data: array
    }
  ]
}

export default class App extends React.Component {

  render() {
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