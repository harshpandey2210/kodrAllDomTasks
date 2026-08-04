const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const text = input.value;

    const div = document.createElement('div');
    div.classList.add('box');

    const h1 = document.createElement("h1");
    h1.textContent = text;


    const done = document.createElement("button");
    done.textContent = "done";
    done.classList.add('done');
    const deleteB = document.createElement("button");
    deleteB.textContent = "Delete";
    deleteB.classList.add('deleteB');


    div.append(h1, done, deleteB);
    

    const task = document.querySelector('#task');
    task.append(div);

    done.addEventListener('click',()=>{
        h1.style.textDecoration = 'line-through';
    })

    deleteB.addEventListener('click',()=>{
        div.remove();
    })

    form.reset();

})