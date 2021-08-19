let img = document.querySelector("#img");
let slider =   document.querySelector("#slider");
let sliderValue;

slider.addEventListener("input", function(){
    if (this.value < 10){
        sliderValue =  "bord_rotation/000" + this.value + ".jpg";
    }else{
        sliderValue = "bord_rotation/00" + this.value +  ".jpg";
    }
    img.setAttribute("src", sliderValue);
});