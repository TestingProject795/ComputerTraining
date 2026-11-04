var options = {
  chart: {
    height: 350,
    type: 'line',
    toolbar: { show: false },
    fontFamily: 'inherit'
  },
  stroke: {
    width: [0, 3],
    curve: 'smooth'
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '10%',
      borderRadius: 4
    }
  },
  colors: ['#26c77b', '#35b9c4'],
  dataLabels: { enabled: false },
  series: [
    {
      name: 'Paid',
      type: 'bar',
      data: [820000, 860000, 910000, 945000, 880000, 900000, 975000, 990000, 940000, 970000, 985000, 1000000]
    },
    {
      name: 'Delayed',
      type: 'area',
      data: [120000, 115000, 105000, 395000, 430000, 625000, 410000, 500000, 295000, 397000, 692000, 285000]
    }
  ],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yaxis: {
    labels: {
      formatter: val => "$" + val.toLocaleString()
    }
  },
  fill: {
    opacity: [1, 0.3]
  },
  grid: {
    borderColor: "#e5e7eb",
    strokeDashArray: 4,
  },
  tooltip: {
    y: {
      formatter: val => "$" + val.toLocaleString()
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right'
  }
};

var chart = new ApexCharts(document.querySelector("#feeChart"), options);
chart.render();
