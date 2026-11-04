var options = {
  series: [
    {
      name: 'Certifications',
      type: 'area',
      data: [70, 80, 90, 80, 90, 80, 90, 80, 90, 80, 90, 80]
    },
    {
      name: 'Free',
      type: 'bar',
      data: [60, 70, 80, 70, 80, 70, 80, 70, 80, 70, 80, 70]
    },
    {
      name: 'Paid',
      type: 'bar',
      data: [50, 60, 70, 60, 70, 60, 70, 60, 70, 60, 70, 60]
    }
  ],
  chart: {
    height: 360,
    type: 'line',
    stacked: false,
    toolbar: { show: false },
    dropShadow: {
      enabled: true,
      top: 3,
      left: 0,
      blur: 6,
      color: '#3b82f6',
      opacity: 0.2
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '40%',
      borderRadius: 2,
      dataLabels: { position: 'top' }
    }
  },
  colors: ["#3b82f6", "#a855f7", "#22c55e"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight',
    width: [3, 0, 0]
  },
  yaxis: {
    show: true,
    labels: {
      style: { colors: "#64748b", fontSize: '12px' }
    }
  },
  legend: {
    show: true,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels: {
      style: { colors: "#94a3b8", fontSize: '12px' }
    },
    axisTicks: { show: false },
    axisBorder: { show: false }
  },
  grid: {
    borderColor: "#f1f5f9",
    strokeDashArray: 5,
    xaxis: { lines: { show: false } },
    yaxis: { lines: { show: true } }
  },
  fill: {
    type: ['gradient', 'solid', 'solid'],
    gradient: {
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 80, 100]
    }
  },
  tooltip: {
    theme: 'dark',
    y: {
      formatter: function (val) {
        return val + "k";
      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#courses-trainings"), options);
chart.render();