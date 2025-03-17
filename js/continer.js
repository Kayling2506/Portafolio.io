const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

app.get('../index.hml', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
});