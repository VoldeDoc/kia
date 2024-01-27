const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'],
    datasets: [{
      label: 'Sales Trend',
      data: [0,6000,25000,10000,35000,10000,45000,5000,23000,30000,5000,30000,2000],
      backgroundColor: 'rgba(52, 202, 165,0.3)',
      borderRadius:'50',
      hoverBackgroundColor:'#34caa5',
      borderWidth: 1
    }]
  },
  options: {
    animations: {
      tension: {
        duration: 3000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        skipNull:true
      }
    }
  }
});

// Get the <h3> element
const yearsElement = document.querySelector('.years h3');
// Add event listeners to the dropdown items
document.getElementById('yearly').addEventListener('click', function() {
  myChart.data.labels = ['2017', '2018', '2019', '2020', '2021'];
  myChart.data.datasets[0].data = [50000, 60000, 70000, 80000, 90000]; // replace with your actual yearly data
  myChart.update();

  // Update the <h3> text
  yearsElement.textContent = 'Yearly';
});

document.getElementById('monthly').addEventListener('click', function() {
  myChart.data.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  myChart.data.datasets[0].data =  [0,6000,25000,10000,35000,10000,45000,5000,23000,30000,5000,30000,2000]
  myChart.update();

  // Update the <h3> text
  yearsElement.textContent = 'Monthly';
});

document.getElementById('weekly').addEventListener('click', function() {
  myChart.data.labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
  myChart.data.datasets[0].data = [3000, 2000, 1000, 4000]; // replace with your actual weekly data
  myChart.update();

  // Update the <h3> text
  yearsElement.textContent = 'Weeky';
});