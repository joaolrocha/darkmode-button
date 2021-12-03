const checkbox = document.getElementById ('checkbox');

checkbox.addEventListener('change', () => {
    //mudar o tema do site
document.body.classList.toggle('dark');
});

