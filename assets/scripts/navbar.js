function onScroll(){
    const header = document.querySelector('header'); 
    
    if (window.scrollY > 0) {                              // If scrolled down
        header.style.boxShadow = '0 0.5px 0 0 #674F2D';
        header.style.backgroundColor = 'rgb(245, 245, 220)';
        header.style.height = '40px';
    } else {                                               // If at the top
        header.style.boxShadow = 'none';
        header.style.height= '60px';
        header.style.backgroundColor = ' #F5F5DC00';
    }

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");


    let current = "";
    const triggerLine = window.innerHeight / 2; // center of screen
    sections.forEach(section => {
        const rect = section.getBoundingClientRect(); // section's position in viewport
        if (rect.top <= triggerLine && rect.bottom >= triggerLine) current = section.id; // center line is inside section
    });

    navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`); // toggle active class
    });
}


  

window.addEventListener('scroll', onScroll);
window.addEventListener('resize', onScroll);
window.addEventListener('load', onScroll);