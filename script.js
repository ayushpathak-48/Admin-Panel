const body = document.querySelector("body"),
    modeToggle = body.querySelectorAll(".mode-toggle");
sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");
moonBtn = document.querySelector("#moonBtn");
profileSettings = body.querySelector(".profile-settings");




let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.toggle("dark");
    moonBtn.classList.replace("uil-moon", "uil-brightness-low")
} else {
    moonBtn.classList.replace("uil-brightness-low", "uil-moon")
}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
    sidebar.classList.toggle("close");
    sidebarToggle.innerHTML = `<i class="uil uil-angle-double-right "></i>`;
} else {
    sidebarToggle.innerHTML = `<i class="uil uil-angle-double-left "></i>`;
}


function chngMode(e) {
    body.classList.toggle("dark");
    modeToggle.forEach(mode => {
        if (mode.classList.contains("uil-moon")) {
            mode.classList.replace("uil-moon", "uil-brightness-low");
        } else {
            mode.classList.replace("uil-brightness-low", "uil-moon");
        }
    })
    if (body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
}


sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if (sidebar.classList.contains("close")) {
        localStorage.setItem("status", "close");
        sidebarToggle.innerHTML = `<i class="uil uil-angle-double-right "></i>`;
    } else {
        localStorage.setItem("status", "open");
        sidebarToggle.innerHTML = `<i class="uil uil-angle-double-left "></i>`;
    }
})

const menuItems = document.querySelector("#menu-items"),
    navLinks = menuItems.querySelector("#nav-links"),
    li = navLinks.querySelectorAll("a");

li.forEach(item => {
    item.addEventListener("click", function () {
        navLinks.querySelector('.active').classList.remove('active');
        item.classList.add("active");
    });
});

let fullScreen = document.getElementById("fullscreen");

fullScreen.addEventListener("click", function () {
    if (document.fullscreen) {
        fullScreen.innerHTML = `<i class="uil uil-expand-arrows-alt"></i>`;
        document.exitFullscreen()
    } else {
        fullScreen.innerHTML = `<i class="uil uil-compress-arrows"></i>`;
        document.body.requestFullscreen();
    }
})



document.querySelector(".dash-content").addEventListener("click", function () {
    let card = document.getElementById("profile-card");
    if (card.classList.contains("active")) {openPopup()};
});

function openPopup() {
    let card = document.getElementById("profile-card");
    if (card.classList.contains("active")) {
        card.style.transform = "scale(1,0)";
        card.classList.remove("active");
    } else {
        card.style.transform = "scale(1,1)";
        card.classList.add("active");
    }
}
