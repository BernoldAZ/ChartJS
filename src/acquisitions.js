import Chart from 'chart.js/auto' // loading all components
import { getAquisitionsByYear } from './api';

(async function() {
  const data = await getAquisitionsByYear();

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      options: {
        animation: true,
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            enabled: true
          }
        }
      },
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          },
          {
            label: 'Double',
            data: data.map(row => row.count*2)
          }
        ]
      }
    }
  );
})();