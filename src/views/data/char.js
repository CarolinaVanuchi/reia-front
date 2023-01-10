let labelsArray
let dataArray = [40, 39, 10, 40, 39, 80, 40];

export const data = {
    labels: labelsArray,
    datasets: [
      {
        label: 'Valores',
        backgroundColor: '#6A5ACD',
        data: dataArray
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  