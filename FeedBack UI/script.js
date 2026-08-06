const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);

    for (let [name, value] of data.entries()) {

        const box = document.querySelector("#box");
        box.style.display = "none";
        const h1 = document.createElement("h1");
        h1.textContent = `Welcome! ${value}`

        const p = document.createElement("p");
        p.textContent = `Thanks! Your Mood is ${value}`

        const box2 = document.querySelector("#box2");
        box2.append(h1,p);
        box2.style.display = "flex";
    }
});