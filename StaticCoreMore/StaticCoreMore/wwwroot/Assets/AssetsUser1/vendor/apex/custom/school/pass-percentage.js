var options = {
  series: [94],
  chart: {
    height: 270,
    type: "radialBar",
    offsetY: -10,
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: "16px",
          color: undefined,
          offsetY: 0,
        },
        value: {
          offsetY: 20,
          fontSize: "21px",
          color: undefined,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
    },
  },
  colors: ['#673de6'],
  stroke: {
    dashArray: 4,
  },
  labels: ["Results"],
};

var chart = new ApexCharts(document.querySelector("#passPercentage"), options);
chart.render();