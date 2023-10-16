fetch('blog.json')
    .then(response => response.json())
    .then(data => {
        const blogList = document.getElementById('blogs');

        data.blogs.forEach(blog => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span>ID:</span>${blog.id} | <span class="title">Title:</span>${blog.title} |
       <span class="category">Category:</span>${blog.category} |
       <span class="category">Category:</span>${blog.content} |
       <span class="category">Category:</span>${blog.author} |
       <span class="category">Category:</span>${blog.views}`
            blogList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
