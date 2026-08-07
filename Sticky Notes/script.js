const form = document.querySelector('#form');
const textarea = document.querySelector('#textarea');
const colortext = document.querySelector('#colortext');
const btn1 = document.querySelector('#b1');
const btn2 = document.querySelector('#b2');

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const div = document.querySelector('#div');
    div.style.display = "none";
    const whichButton = e.submitter.value;
    console.log(whichButton);
    const text = textarea.value;
    console.log(text);
    console.log(colortext.value);

    if(whichButton == "add"){
        const notes = document.createElement("div");
        notes.classList.add("note1");
        notes.textContent = text;
        notes.style.backgroundColor = colortext.value;

        const noteboxes = document.querySelector('#noteboxes');
        noteboxes.append(notes);
    }
    else{
        const noteboxes = document.querySelector('#noteboxes');
        noteboxes.innerHTML = "";
    }
})