const whiteButton = document.getElementById("light-hero");
const blackButton = document.getElementById("dark-knight");

const body = document.body;
var className = document.body.className;
const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.replace(className, theme);
    className = theme;
}

whiteButton.onclick = () => {
    body.classList.replace(className, 'light-hero');
    className = 'light-hero';
    localStorage.setItem('theme', 'light-hero');
}

blackButton.onclick = () => {
    body.classList.replace(className, 'dark-knight');
    className = 'dark-knight';
    localStorage.setItem('theme', 'dark-knight');

}
