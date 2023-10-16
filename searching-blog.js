// ฟังก์ชันค้นหาตาม title, author, หรือ views
function search() {
  const searchValue = document.getElementById('searchValue').value.toLowerCase();
  fetch('blogs.json')
    .then(response => response.json())
    .then(data => {
      const foundBlogs = data.blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchValue) ||
        blog.author.toLowerCase().includes(searchValue) ||
        blog.views.toString().includes(searchValue)  // เปลี่ยนเป็น string ก่อนค้นหา
      );
      displayBlogs(foundBlogs);
    })
    .catch(error => console.error('Error fetching data:', error));
}

// ฟังก์ชันแสดงข้อมูล blog
function displayBlogs(blogs) {
  const blogDetails = document.getElementById('blogDetails');
  blogDetails.innerHTML = '';

  if (blogs.length === 0) {
    blogDetails.innerHTML = '<p>No matching blogs found.</p>';
    return;
  }

  blogs.forEach(blog => {
    const blogDiv = document.createElement('div');
    blogDiv.innerHTML = `<hr>
      <h5>Title : ${blog.title}</h5>
      <p><strong>Author:</strong> ${blog.author}</p>
      <p><strong>Content:</strong> ${blog.content}</p>
      <p><strong>Views:</strong> ${blog.views}</p>

    `;
    blogDetails.appendChild(blogDiv);
  });
}
