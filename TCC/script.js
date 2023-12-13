const textAreaEl = document.getElementById("text")
const countEl = document.querySelector(".count")

textAreaEl.addEventListener("input", function(){
    countEl.textContent= textAreaEl.value.length;
    if(textAreaEl.value.length >50){
        countEl.style.color = "#F00"
        textAreaEl.style.borderColor = "#F00"
    }
    else{
        countEl.style.color = "#FFF"
        textAreaEl.style.borderColor = "transparent"
    }
});