let changeTheme = (icon) => {
    let body = document.querySelector(":root")
    if (icon.classList[1] == "fa-moon") {
        icon.classList.replace(`fa-moon`, `fa-sun`)
        body.classList.add("dark")
    } else if (icon.classList[1] == "fa-sun") {
        icon.classList.replace(`fa-sun`, `fa-moon`)
        body.classList.remove("dark")
    }
}
// nav-bar fixed when we scrolled 
window.addEventListener("scroll", () => {
    let nav = document.querySelector("nav")
    nav.classList.toggle("scrolled-fixed-nav", scrollY > 50)
    nav.style.transition = "0.5s ease-in-out"
})

// viedo-visible 
let video_show = (icon) => {
    let video_div = document.querySelector(".video-overly")
    if (icon.classList[1] == "fa-play") {
        video_div.classList.add("video-overly_show")
    } else if (icon.classList[1] == "fa-xmark") {
        video_div.classList.remove("video-overly_show")
    }
}

// dark-mode and light mode 
let darkMode = () => {
    // let x = document.querySelector("body")
    // x.style.removePropertyProperty()
}