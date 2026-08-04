const form = document.getElementById('form');
const answer = document.getElementById('result');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const income = document.getElementById('income');

    const incomeValue = income.value;

    console.log(typeof incomeValue);

    
    if(incomeValue <=  1200000) {
        const taxAmount = (incomeValue * 0.0)/100;
        answer.textContent = `Your Tax Amount: $${taxAmount}`;
    }
    else if(incomeValue > 1200000 && incomeValue <= 1600000){
        const diff = incomeValue - 1200000;
        const taxAmount = (diff * 15)/100;
        answer.textContent = `Your Tax Amount: $${taxAmount}`;
    }
    else if(incomeValue > 1600000){
        const diff1 = 1600000 - 1200000;
        const diff2 = incomeValue - 1600000;
        const taxAmount = (diff1 * 15)/100 + (diff2 * 20)/100;
        answer.textContent = `Your Tax Amount: $${taxAmount}`;
    }
    form.reset();
})