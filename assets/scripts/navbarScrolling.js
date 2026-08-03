document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // kill default jump
      const target = document.querySelector(link.getAttribute('href')); // get target section
      target.scrollIntoView({ behavior: 'smooth', block: 'center' }); // smooth scroll + center
    });
  });