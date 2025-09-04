function createSnow() {
    const snow = document.createElement("div");
    snow.classList.add("snow");
    snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.animationDuration = (Math.random() * 3 + 2) + "s"; // speed
    snow.style.opacity = Math.random();
    snow.style.width = snow.style.height = Math.random() * 8 + 5 + "px"; // size
    document.body.appendChild(snow);
    setTimeout(() => {
        snow.remove();
    }, 5000);
}

setInterval(createSnow, 50);