const siteBreak = document.getElementById("break");
const everything = document.getElementsByTagName("*");

siteBreak.addEventListener("click", ()=> {    
    for (let i = 0; i < everything.length; i++) {
        everything[i].style.display="inline";
    }
});
