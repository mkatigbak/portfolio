document.addEventListener('scroll', function() {
    const projects = document.querySelectorAll('.project');
    const scrollPosition = window.scrollY;

    projects.forEach((project, index) => {
        const offset = index * 100; // Adjust this value to control the stacking effect
        project.style.top = `${scrollPosition - offset}px`;
    });
});