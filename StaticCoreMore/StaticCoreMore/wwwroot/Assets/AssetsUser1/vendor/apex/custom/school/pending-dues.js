var options = {
  series: [
    {
      name: "Pending Dues",
      data: [15, 20, 12, 25, 18, 28, 22, 19, 17, 24, 21, 20],
    }
  ],
  chart: {
    toolbar: { show: false },
    type: "bar",
    height: 300,
  },
  colors: ["#35b9c4"],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "20%",
      borderRadius: 2,
      borderRadiusApplication: 'around',
      distributed: false,
      borderColor: "#1f7d8c",
      borderWidth: 5
    },
  },
  dataLabels: { enabled: false },
  legend: { show: false },
  grid: {
    borderColor: "#e5e7eb",
    strokeDashArray: 4,
    padding: { top: 0, bottom: 0, right: 10 },
  },
  xaxis: {
    categories: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    labels: {
      formatter: val => "$" + val + "k"
    }
  },
  tooltip: {
    y: {
      formatter: val => "$" + val + "k"
    },
    theme: "dark",
  }
};

var chart = new ApexCharts(document.querySelector("#pending-dues"), options);
chart.render();
