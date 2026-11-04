var options = {
  chart: {
    type: 'line',
    height: 240,
    toolbar: { show: false },
    fontFamily: 'inherit',
    zoom: { enabled: false }
  },
  series: [{
    name: "Progress (%)",
    data: [20, 35, 50, 65, 72, 80, 88]
  }],
  colors: ['#673de6'],
  stroke: {
    curve: 'smooth',
    width: 3
  },
  markers: {
    size: 5,
    colors: ['#fff'],
    strokeColors: '#673de6',
    strokeWidth: 3,
    hover: { size: 7 }
  },
  xaxis: {
    categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    labels: { style: { fontSize: '13px', colors: '#6b7280' } },
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: {
    min: 0,
    max: 100,
    tickAmount: 5,
    labels: { style: { colors: '#6b7280' } },
  },
  tooltip: {
    theme: 'light',
    y: { formatter: (val) => val + "%" }
  },
  grid: {
    borderColor: '#e5e7eb',
    strokeDashArray: 4
  }
};

var chart = new ApexCharts(document.querySelector("#learningCurve"), options);
chart.render();