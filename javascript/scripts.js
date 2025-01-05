document.getElementById('back-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    document.body.classList.add('zoom-out-fade-out');
    setTimeout(function() {
        window.location.href = 'https://mkatigbak.github.io/portfolio/';
    }, 1500);
});