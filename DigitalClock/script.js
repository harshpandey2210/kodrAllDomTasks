


const clock = document.querySelector('#clock');
setInterval(() => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    clock.textContent = time;
},1000)

