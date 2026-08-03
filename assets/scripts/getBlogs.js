fetch('https://api.lewiscoding.com/blogs?siteId=3')
    .then(response => response.json())
    .then(data => {
        if (!data || data.length === 0) {return;}              //break out if no blogs

        const blogContainer = document.getElementById('blogs');
        const header = document.createElement('h2');
        header.textContent = 'LATEST UPDATES';
        header.style.marginBottom = '.5rem';
        blogContainer.appendChild(header);

        data.forEach(blog => {
            const blogElement = document.createElement('div');
            blogElement.classList.add('blog');
            blogElement.innerHTML = `
                <h3>${blog.title}</h3>
                <p><em>Posted on: ${new Date(blog.published_at).toLocaleDateString()}</em></p>
                <p>${blog.content}</p>
            `;
            blogContainer.appendChild(blogElement);
        });
    })
    .catch(error => console.error('Error fetching blogs:', error));
        