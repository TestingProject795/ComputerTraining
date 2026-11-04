var options = {
  chart: {
    height: 260,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "30%",
      borderRadius: 2,
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val;
    },
    offsetY: -12,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },
  series: [
    {
      name: "Present",
      data: [22, 20, 23, 21, 24, 22],
    },
    {
      name: "Leave",
      data: [2, 1, 0, 1, 0, 2],
    },
  ],
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "right",
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    axisBorder: {
      show: true,
      color: "#ccc",
    },
    axisTicks: {
      show: true,
      color: "#ccc",
    },
    labels: {
      show: true,
      rotate: -45,
      style: {
        fontSize: "12px",
        colors: ["#6c757d"],
      },
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val + " days";
      },
      style: {
        fontSize: "12px",
        colors: ["#6c757d"],
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  grid: {
    borderColor: "#e0e0e0",
    strokeDashArray: 4,
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  tooltip: {
    theme: "dark",
    y: {
      formatter: function (val) {
        return val + " days";
      },
    },
  },
  colors: ["#673de6", "#ff5d88"],
};

var chart = new ApexCharts(document.querySelector("#attendance-overview"), options);
chart.render();
