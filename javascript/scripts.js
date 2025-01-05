document.getElementById('back-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = 'https://mkatigbak.github.io/portfolio/';
    }, 1000);
});