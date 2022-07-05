let sliders=document.querySelectorAll(".slider");

sliders.forEach((slider)=>{
   slider.addEventListener("input",function(e){
    console.log(slider.min);
    let val=e.target.value;
    slider.parentElement.querySelector(".current-val p").textContent=val;
    slider.parentElement.querySelector(".current-val").style.left=`${((val-slider.min)/(slider.max-slider.min))*100}%`

   })
})
   

sliders.forEach((slider)=>{
   let val=slider.value;
   slider.parentElement.querySelector(".current-val p").textContent=val;
   slider.parentElement.querySelector(".current-val").style.left=`${((val-slider.min)/(slider.max-slider.min))*100}%`

})