// Learning Hours Graph
var options = {
  chart: {
    type: 'bar',
    height: 280,
    toolbar: { show: false }
  },
  series: [{
    name: 'Hours Studied',
    data: [2, 3, 4, 2, 3, 2, 2]
  }],
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  colors: ['#4e73df'],
  plotOptions: {
    bar: {
      borderRadius: 6,
      columnWidth: '40%'
    }
  },
  dataLabels: { enabled: false },
  grid: { borderColor: '#f1f1f1' }
};

var chart = new ApexCharts(document.querySelector("#learningHours"), options);
chart.render();


// Attendance Graph
var options = {
  series: [85],
  chart: {
    height: 270,
    type: "radialBar",
    sparkline: { enabled: true }
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      hollow: {
        size: "65%"
      },
      track: {
        background: "#f5f6fa",
        strokeWidth: "100%"
      },
      dataLabels: {
        name: { show: false },
        value: {
          fontSize: "24px",
          fontWeight: 700,
          offsetY: 6,
          formatter: function (val) {
            return val + "%";
          }
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ["#20c997"],
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  stroke: { lineCap: "round" },
  labels: ["Attendance"]
};
var chart = new ApexCharts(document.querySelector("#attendance"), options);
chart.render();