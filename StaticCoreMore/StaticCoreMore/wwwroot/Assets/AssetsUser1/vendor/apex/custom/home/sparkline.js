function createRadialChart(selector, value, color) {
  new ApexCharts(document.querySelector(selector), {
    chart: {
      type: "radialBar",
      sparkline: { enabled: true },
      height: 90,
      width: 90,
    },
    series: [value],
    plotOptions: {
      radialBar: {
        hollow: { size: "40%" },
        track: { background: "rgba(255, 255, 255, 0.2)" },
        dataLabels: {
          show: true,
          name: { show: false }, // hide "series name"
          value: {
            show: true,
            fontSize: "13px",
            fontWeight: 600,
            color: color,
            offsetY: 4,
            formatter: function (val) {
              return val + "%"; // add % sign
            },
          },
        },
      },
    },
    colors: [color],
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        gradientToColors: [color],
        stops: [0, 100],
      },
    },
  }).render();
}

// Call charts
createRadialChart("#option1", 75, "#ffffff"); // Enrolled Students
createRadialChart("#option2", 60, "#ffffff"); // Completed Assignments
createRadialChart("#option3", 92, "#ffffff"); // Attendance
createRadialChart("#option4", 65, "#ffffff"); // Active Courses
