const form = document.getElementById('loveForm');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name1 = document.getElementById('BoyName');
    const name2 = document.getElementById('GirlName');

    const l1 = name1.value.length;
    const l2 = name2.value.length;

    const lovePercentage = (((l1+l2)-3)*11)%101;
    const answer = document.getElementById('answer');
    answer.textContent = `Ans: ${lovePercentage}%`;
    form.reset();

})
