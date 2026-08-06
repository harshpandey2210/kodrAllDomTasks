const form = document.querySelector('form');
const answer = ["Sachin Tendulkar","West Indies","Sachin Tendulkar","264","Muttiah Muralitharan"];



form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let total = 0;

    const data = new FormData(form);
    let a = 0;

    for(let [name,value] of data.entries()){
        console.log(name,value);
        if(answer[a] == value)total++;
        a++;
    }
    const marks = document.querySelector('#marks');
    marks.textContent = `Score: ${total}/5`

    form.reset();
})

