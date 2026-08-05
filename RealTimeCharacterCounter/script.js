const input = document.querySelector('#input');
const count = document.querySelector('#count');
const remaining = document.querySelector('#remaining');

let len = 0;
let str = "";
let remainLen = 0;
input.addEventListener("input",(e)=>{

    if(e.data == null){
        str1 = str.substring(0,str.length-1);
        count.textContent = `Total Characters:${str1.length}`;
        remaining.textContent = `Remaining:${remainLen + 1}`
        str = str1;
        remainLen = remainLen + 1;
    }
    else{
        str = str + e.data;
        count.textContent = `Total Characters:${str.length}`;
        remaining.textContent = `Remaining:${30-str.length}`
        remainLen = 30-str.length;
    }
})