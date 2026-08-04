const body = document.querySelector('body');

body.addEventListener('click', (e) => {
    const circleElement = document.createElement('div');
    circleElement.classList.add('circle');
    circleElement.textContent = 'Hi';
    console.log(circleElement.textContent);

    const arr = ['green','orange','blue','red','white','yellow'];

    circleElement.style.backgroundColor = arr[Math.floor(Math.random()*6)];
    circleElement.style.left = `${e.clientX-25}px`;
    circleElement.style.top = `${e.clientY-25}px`;

    body.append(circleElement)

});

