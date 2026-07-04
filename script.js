const loader = document.getElementById("loader");
const music = document.getElementById("music");
const play = document.getElementById("play");
const volume = document.getElementById("volume");
const counter = document.getElementById("counter");
const card = document.querySelector(".card");

// Volum initial
music.volume = 0.20;

// Loader
loader.addEventListener("click", () => {

    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

    music.play().catch(() => {});

});

// Play / Pause
play.addEventListener("click", () => {

    if (music.paused) {

        music.play();
        play.innerHTML = '<i class="fa-solid fa-pause"></i>';

    } else {

        music.pause();
        play.innerHTML = '<i class="fa-solid fa-play"></i>';

    }

});

// Volume
volume.addEventListener("input", () => {

    music.volume = volume.value / 100;

});

// Fake Counter
let views = localStorage.getItem("noxViews");

if (!views) {

    views = 12348;

} else {

    views++;

}

localStorage.setItem("noxViews", views);

counter.innerText = views;

// 3D Effect
document.addEventListener("mousemove", (e) => {

    let x = (window.innerWidth / 2 - e.clientX) / 35;
    let y = (window.innerHeight / 2 - e.clientY) / 35;

    card.style.transform =
    `perspective(1000px)
    rotateY(${-x}deg)
    rotateX(${y}deg)`;

});

document.addEventListener("mouseleave", () => {

    card.style.transform =
    "perspective(1000px) rotateY(0deg) rotateX(0deg)";

});