const bgc = document.querySelector('#bgc');
bgc.addEventListener('click', (e) => {
    const whichColorSelected = e.target;
    console.log(whichColorSelected);
    document.body.style.backgroundColor = whichColorSelected.textContent;
})