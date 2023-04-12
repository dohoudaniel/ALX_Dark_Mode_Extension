// Create a new style element and append it to the head.
const style = document.createElement("style");
document.head.appendChild(style);

// Get all elements on the page.
const allElements = document.getElementsByTagName("*");

const applyTheme = (theme) => {
    console.log(theme);
    // Create a CSS rule for your new class.
    const rule = `.theme { 
        background-color: ${theme.backgroundColor} !important;
        color: ${theme.textColor} !important;
        border-color: ${theme.borderColor}
    }`;

    // Remove previous rule.
    if (style.sheet.cssRules.length > 0) {
        style.sheet.deleteRule(0);
    }

    // Add the rule to the style element.
    style.sheet.insertRule(rule);

    // Loop through all elements and apply theme class.
    for (let i = 0; i < allElements.length; i++) {
        const element = allElements[i];
        element.classList.add("theme");
    }
};

// Load saved theme.
const theme = localStorage.getItem('theme');

if (theme) {
    applyTheme(JSON.parse(theme));
};


/*
 * Messaging
 */
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request);

        if (request.theme !== undefined) {
            applyTheme(request.theme);

            // Save theme
            localStorage.setItem('theme', JSON.stringify(request.theme));
        }

        sendResponse({ farewell: "goodbye" });
    }
);
