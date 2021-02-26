let css = document.querySelector("#css-mode");
let btn = document.querySelector("#mode-switch");

let currentTheme = localStorage.getItem("theme");

function setMode() {
    if (currentTheme == "light") {
        // css.href = "yesby-light.css";
        css.setAttribute("href", "yesby-light.css");
        btn.value = "Dark Mode";
    } else if (currentTheme == "dark") {
        // css.href = "yesby-dark.css";
        css.setAttribute("href", "yesby-dark.css");
        btn.value = "Light Mode";
    }
}

function changeMode() {

    console.log(css);

    if (css.href.search("yesby-light") == -1) {
        // css.href = "yesby-light.css";
        css.setAttribute("href", "yesby-light.css");
        localStorage.setItem("theme", "light");
        btn.value = "Dark Mode";
    } else if (css.href.search("yesby-dark") == -1) {
        // css.href = "yesby-dark.css";
        css.setAttribute("href", "yesby-dark.css");
        localStorage.setItem("theme", "dark");
        btn.value = "Light Mode";
    }
}
    
window.addEventListener("load", setMode);
document.querySelector("#mode-switch").addEventListener("click", changeMode);
