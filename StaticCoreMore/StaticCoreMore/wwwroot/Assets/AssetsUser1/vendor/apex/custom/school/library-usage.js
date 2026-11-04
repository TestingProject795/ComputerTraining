var options = {
  chart: {
    height: 185,
    width: '100%',
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      distributed: true,
      columnWidth: '30%',
      borderRadius: 10,
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 0,
  },
  series: [{
    name: 'Students',
    data: [30, 40, 70, 90, 60]
  }],
  legend: {
    show: false,
  },
  xaxis: {
    categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  },
  yaxis: {
    show: false,
  },
  fill: {
    colors: ["#1ba7c1", "#1ba7c1", "#1ba7c1", "#26c77b", "#1ba7c1"],
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val
      },
    },
    theme: 'dark',
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: false,
      }
    },
  },
}
var chart = new ApexCharts(
  document.querySelector("#library-usage"),
  options
);
chart.render();