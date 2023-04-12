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

    changeSiteTheme({ backgroundColor: "#ffffff", textColor: "#000000" });
}

blackButton.onclick = () => {
    body.classList.replace(className, 'dark-knight');
    className = 'dark-knight';
    localStorage.setItem('theme', 'dark-knight');

    changeSiteTheme({ backgroundColor: "#202124", textColor: "#ffffff" });
}

const changeSiteTheme = (themeColor) => {
    (async () => {
        const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
        const response = await chrome.tabs.sendMessage(tab.id, { theme: themeColor });
        // do something with response here, not outside the function
        console.log(response);
    })();
};
