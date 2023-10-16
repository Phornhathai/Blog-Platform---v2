document.addEventListener('DOMContentLoaded', () => {
    const blogList = document.getElementById('blog-list');
    let blogsData = null;
  
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        blogsData = data;
        displayBlogs(data.blogs);
      })
      .catch(error => console.error('Error fetching data:', error));
  
    window.filterByCategory = function(category) {
      let filteredBlogs = [];
      if (category === 'all') {
        filteredBlogs = blogsData.blogs;
      } else {
        filteredBlogs = blogsData.blogs.filter(blog => blog.category === category);
      }
      displayBlogs(filteredBlogs);
    }
  
    function displayBlogs(blogs) {
      blogList.innerHTML = ''; // Clear existing content
  
      blogs.forEach(blog => {
        const card = document.createElement('div');
        card.classList.add('card', 'col-md-3');
  
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
  
        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerText = blog.title;
  
        const cardCategory = document.createElement('p');
        cardCategory.classList.add('card-category');
        cardCategory.innerText = `Category: ${blog.category}`;
  
        const cardContent = document.createElement('p');
        cardContent.innerText = blog.content;
  
        const continueReading = document.createElement('div');
        continueReading.classList.add('continue-reading');
        continueReading.innerHTML = `<a href="#" class="btn btn-primary">Continue reading...</a>`;
  
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardCategory);
        cardBody.appendChild(cardContent);
        cardBody.appendChild(continueReading);
  
        card.appendChild(cardBody);
        blogList.appendChild(card);
      });
    }
  });
  