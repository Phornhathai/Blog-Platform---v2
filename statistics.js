fetch('statistics.json')
  .then(response => response.json())
  .then(data => {
    const statisticsDiv = document.getElementById('statistics');

    // แสดงข้อมูล statistics
    statisticsDiv.innerHTML = `
      <span>Blogs: ${data.statistics.totalBlogs}
      Views: ${data.statistics.totalViews}</span>
    `;
  })
  .catch(error => console.error('Error fetching data:', error));