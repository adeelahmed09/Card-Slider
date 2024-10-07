const forward_button = document.getElementById("forward_b");
const backward_button = document.getElementById("backward_b");
let index = 1;
let percent = 0;
const cards_grid = document.getElementById("cards_grid");
let num = 91;

forward_button.addEventListener("click",()=>{
    if(index < 5){
        cards_grid.style.transform = `translateX(-${(percent+num)}%)`
        percent += 91;
        index++;
        let cdot = document.getElementById(`d${index}`)
        let pdot = document.getElementById(`d${index -1}`)
        cdot.style.background = "orangered";
        pdot.style.background = "gray"
    }
})
backward_button.addEventListener("click",()=>{
    if(index > 0){
        cards_grid.style.transform = `translateX(-${(percent-num)}%)`
        percent -= 91;
        index--;
        let cdot = document.getElementById(`d${index}`)
        let pdot = document.getElementById(`d${index +1}`)
        cdot.style.background = "orangered";
        pdot.style.background = "gray"
    }
})