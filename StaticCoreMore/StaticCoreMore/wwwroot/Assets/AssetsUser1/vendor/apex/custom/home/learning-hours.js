var options = {
  chart: {
    type: "bar",
    height: 341,
    toolbar: { show: false },
    fontFamily: "inherit"
  },
  series: [
    {
      name: "Learning Hours",
      type: "bar",
      data: [2, 3, 1.5, 4, 3.2, 5, 4.5] // example hours Mon-Sun
    },
    {
      name: "Cumulative",
      type: "line",
      data: [2, 5, 6.5, 10.5, 13.7, 18.7, 23.2]
    }
  ],
  colors: ["#3b82f6", "#22c55e"], // blue bars + green line
  stroke: {
    curve: "smooth",
    width: [0, 3]
  },
  fill: {
    opacity: [0.9, 1]
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    labels: { style: { fontSize: "12px" } },
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: {
    labels: { style: { fontSize: "12px" } },
    title: { text: "Hours" }
  },
  dataLabels: { enabled: false },
  markers: {
    size: 5,
    colors: ["#fff"],
    strokeColors: "#22c55e",
    strokeWidth: 2
  },
  grid: {
    borderColor: "#e5e7eb",
    strokeDashArray: 4
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (val, opts) {
        return val + " hrs";
      }
    }
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    fontSize: "12px"
  }
};

new ApexCharts(document.querySelector("#learningHours"), options).render();