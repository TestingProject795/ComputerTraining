var options = {
  chart: {
    type: 'bar',
    height: 335,
    toolbar: { show: false }
  },
  series: [{
    name: 'Average Score',
    data: [85, 78, 92, 66, 74]
  }],
  xaxis: {
    categories: ['Mathematics', 'Science', 'English', 'History', 'Geography'],
    labels: { style: { fontSize: '13px' } }
  },
  colors: ['#673de6'],
  plotOptions: {
    bar: {
      borderRadius: 6,
      columnWidth: '45%'
    }
  },
  dataLabels: {
    enabled: true,
    style: { fontWeight: 'bold' }
  },
  annotations: {
    points: [
      {
        x: 'English',
        y: 92,
        marker: { size: 6, fillColor: '#26c77b', strokeColor: '#26c77b' },
        label: {
          borderColor: '#26c77b',
          style: { color: '#fff', background: '#26c77b' },
          text: 'Top Performer'
        }
      },
      {
        x: 'History',
        y: 66,
        marker: { size: 6, fillColor: '#ff5d88', strokeColor: '#ff5d88' },
        label: {
          borderColor: '#ff5d88',
          style: { color: '#fff', background: '#ff5d88' },
          text: 'Needs Attention'
        }
      }
    ]
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "% Avg Score";
      }
    }
  },
  grid: { borderColor: '#e9ecef' }
};

var chart = new ApexCharts(document.querySelector("#subjectPerformance"), options);
chart.render();