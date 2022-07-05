async function BubbleSort(){

    document.querySelector(".best-time").innerText="Ω(N)";
    document.querySelector(".average-time").innerText="Θ(N^2)";
    document.querySelector(".worst-time").innerText="O(N^2)";
    document.querySelector(".worst-space").innerText="O(1)";

    var bars=document.querySelectorAll(".bar");

    for(var i=0;i<bars.length-1;i++)
    {
        for(var j=0;j<bars.length-i-1;j++)
        {
          
            bars[j].style.background=red;
            bars[j+1].style.background=red;
            
            await wait(delay);

            if(parseInt(bars[j].style.height)> parseInt(bars[j+1].style.height)){
                
                swap(bars[j],bars[j+1]);
            }
            
            bars[j].style.background=blue;
            bars[j+1].style.background=blue;
            await wait(delay);
            
        } 
        bars[bars.length-i-1].style.background=green;
        await wait(delay);
        for(var j=0;j<bars.length-i-2;j++)
        {
          
            bars[j].style.background="white";
            bars[j+1].style.background="white";

        } 
    }
    bars[0].style.background=green;
}

document.querySelector(".bubble").addEventListener("click",async()=>{
   document.querySelector(".bubble").classList.add("button-selected");
   addSortingHeading("Bubble Sort");
   disableSortButtons();
   disableSizeInput();
   disableGenerateArray();
   await BubbleSort();
   enableSortButtons();
   enableSizeInput();
   enableGenerateArray();
   document.querySelector(".bubble").classList.remove("button-selected");
    removeSortingHeading()
})