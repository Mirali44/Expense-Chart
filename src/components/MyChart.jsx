import { useState } from "react";
import Chart from "chart.js/auto";
import { Data } from "../Data";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale);

function MyChart() {
  let labels = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

  let color = [];
  let hoverColor = [];

  

  for (var i = 0; i < 7; i++) {
    color.push("hsl(10, 79%, 65%)");
    hoverColor.push("hsl(10, 91%, 77%)");    
  }
  var d = new Date();
  var dayName = d.toString().split(" ")[0];
console.log(dayName)
  const str = labels[d.getDay()-1];
  const str2 = str?.charAt(0).toUpperCase() + str?.slice(1);

  const strSun = labels[6];
  const strSun2 = strSun?.charAt(0).toUpperCase() + strSun?.slice(1);

  if (dayName === str2) {
    color[d.getDay()-1] = "hsl(186, 34%, 60%)",
    hoverColor[d.getDay()-1] = "hsl(186, 56%, 78%)";
  }
  else if(dayName === strSun2){
    color[6] = "hsl(186, 34%, 60%)",
    hoverColor[6] = "hsl(186, 56%, 78%)";
  }
console.log(dayName)
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.day),
    datasets: [
      {
        label: "",
        data: Data.map((data) => data.amount),
        backgroundColor: color,
        hoverBackgroundColor: hoverColor,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  });

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar className="Bar"
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "",
            },
            legend: {
              display: false,
            },
            },
            responsive: true,
            scales: {
              x: {
                ticks: { color: "hsl(28, 10%, 53%)", font: { size: 12 } },
                grid: {
                  color: "white",
                  borderColor: "white",
                },
              },
              y: {
                ticks: {
                  display: false,
                },
                grid: {
                  color: "white",
                  borderColor: "white",
                  display: false,
                },
              },
            },
        }}
      />
        <hr />
      <div className="total">
        <div className="totalLeft">
          <span className="pale">Total this month</span>
          <span className="totalPrice">$478.33</span>
        </div>
        <div className="totalRight">
          <span>+2.4%</span>
          <span className="pale">from last month</span>
        </div>
      </div>
    </div>
  );
}

export default MyChart;
