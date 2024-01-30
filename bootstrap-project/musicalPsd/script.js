let changeTheme = (icon) => {
    let body = document.querySelector("body")
    if (icon.classList[1] == "fa-moon") {
        icon.classList.replace(`fa-moon`, `fa-sun`)
        // body.style.background = "pink";
    } else if (icon.classList[1] == "fa-sun") {
        icon.classList.replace(`fa-sun`, `fa-moon`)
        // body.style.background = "black";
    }
}

// nav-bar fixed when we scrolled 
window.addEventListener("scroll",()=>{
    let nav = document.querySelector("nav")
    nav.classList.toggle("scrolled-fixed-nav",scrollY>50)
    nav.style.transition = "0.9s ease-in-out"
})