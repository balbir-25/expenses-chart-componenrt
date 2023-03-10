// JavaScript code
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const chartData = data.map(item => ({ x: item.day, y: item.amount }));

    chartData.forEach(item => {
      const bar = document.getElementById(item.x);
      bar.style.height = item.y + 'px';
      bar.style.backgroundColor = 'red';
    });
  })
  .catch(error => console.error(error));
