const startTimer = Date.now();

const futureTimer = new Date("2028-11-10").getTime();
const countdown = document.getElementById('countdown');

setInterval(() => {
    const diff = futureTimer - Date.now();
    const seconds = diff/1000;
    console.log(seconds);
    const minutes = seconds/60;
    console.log(minutes);
    const hours = minutes/60;
    console.log(hours);
    const days = hours/24;
    console.log(days);

    countdown.textContent = `${Math.floor(days)} Days ${Math.floor(hours%24)} Hours ${Math.floor(minutes%60)} Minutes ${Math.floor(seconds%60)} Seconds`;
})
