const toggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav-list");

toggle.addEventListener('click', ()=> {
    if (toggle.dataset.toggled == "false") {
        toggle.dataset.toggled = "true";
        nav.dataset.shown = "true";
    } else {
        toggle.dataset.toggled = "false";
        nav.dataset.shown = "false";
    }
});