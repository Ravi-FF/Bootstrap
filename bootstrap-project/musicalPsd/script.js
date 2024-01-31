let changeTheme = (icon) => {
    let body = document.querySelector(":root")
    if (icon.classList[1] == "fa-moon") {
        icon.classList.replace(`fa-moon`, `fa-sun`)
        body.style.setProperty("--font-dark-color", "#b7b7b7")
        body.style.setProperty("--font-light-color", "#19211e")
        body.style.setProperty("--bg-color", "#19211e")
        body.style.setProperty("--black-color", "white")
        body.style.setProperty("--border-color", " rgba(255, 255, 255, 0.2)")
        body.style.setProperty("--bg-light-gray", "#131917")
    } else if (icon.classList[1] == "fa-sun") {
        icon.classList.replace(`fa-sun`, `fa-moon`)
        body.style.removeProperty("--font-dark-color", "#b7b7b7")
        body.style.removeProperty("--font-light-color", "#19211e")
        body.style.removeProperty("--bg-color", "#19211e")
        body.style.removeProperty("--black-color", "white")
        body.style.removeProperty("--border-color", " rgba(255, 255, 255, 0.2)")
        body.style.removeProperty("--bg-light-gray", "#131917")
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