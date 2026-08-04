const body = document.querySelector("body");

setInterval(() => {
    const circleElement = document.createElement("div");
    circleElement.classList.add("circle");
    circleElement.textContent = "Hi";

    const colors = ["green", "orange", "blue", "red", "white", "yellow"];
    circleElement.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

    // Random position
    circleElement.style.left = `${Math.random() * window.innerWidth}px`; // windowMaxWidth 1366px
    circleElement.style.top = `${Math.random() * window.innerHeight}px`; // windowMaxHeight 768px

    body.append(circleElement);
}, 1000);