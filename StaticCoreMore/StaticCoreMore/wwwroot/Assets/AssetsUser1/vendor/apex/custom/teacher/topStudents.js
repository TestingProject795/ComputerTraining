var options = {
  chart: {
    type: 'bar',
    height: 330,
    toolbar: { show: false },
    animations: { enabled: true, easing: 'easeinout', speed: 800 }
  },
  series: [{
    name: 'Average Score',
    data: [95, 92, 90, 88, 87]
  }],
  colors: [
    function ({ value, seriesIndex, w }) {
      return value === Math.max(...w.config.series[0].data) ? '#26c77b' : '#0dcaf0';
    }
  ],
  plotOptions: {
    bar: {
      borderRadius: 12,
      columnWidth: '40%',
      distributed: true,
      endingShape: 'rounded',
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) { return val + '%'; },
    style: { fontSize: '12px', colors: ['#FFF'] },
    offsetY: -4
  },
  xaxis: {
    categories: ['John', 'Emma', 'Sarah', 'David', 'Liam'],
    labels: {
      rotate: -15,
      style: { fontSize: '13px' },
      show: true
    },
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: { show: false },
  tooltip: { y: { formatter: function (val) { return val + '% Avg Score'; } } },
  grid: { borderColor: '#e9ecef', strokeDashArray: 4 },
  legend: { show: false } // hide legend to prevent duplicate label
};

var chart = new ApexCharts(document.querySelector("#topStudents"), options);
chart.render();
