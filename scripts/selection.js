async function SelectionSort(){
    document.querySelector(".best-time").innerText="Ω(N2)";
    document.querySelector(".average-time").innerText="Θ(N^2)";
    document.querySelector(".worst-time").innerText="O(N^2)";
    
    document.querySelector(".worst-space").innerText="O(1)";

    var bars=document.querySelectorAll(".bar");

    for(var i=0;i<bars.length;i++)
    {
        bars[i].style.background=yellow;
        var min=bars[i].style.height
        var min_index =i;
        for(var j=i+1;j<bars.length;j++)
        {
            bars[j].style.background=red;
            await wait(delay);
            if(parseInt(min)> parseInt(bars[j].style.height))
            {
                min=bars[j].style.height;
                min_index=j;
            }
        }
        bars[min_index].style.background=yellow;
        await wait(delay);
        swap(bars[i],bars[min_index]);
        bars[i].style.background=blue;
        bars[min_index].style.background=blue;
        await wait(delay);
        bars[i].style.background=green;
        await wait(delay);
        
        for(var k=i+1;k<bars.length;k++)
        {         
            bars[k].style.background="white";
        } 
        await wait(delay);
    }
    bars[bars.length-1].style.background=green;
}

document.querySelector(".selection").addEventListener("click",async()=>{
   document.querySelector(".selection").classList.add("button-selected");
   addSortingHeading("Selection Sort");
   disableSortButtons();
   disableSizeInput();
   disableGenerateArray();
   await SelectionSort();
   enableSortButtons();
   enableSizeInput();
   enableGenerateArray();
   document.querySelector(".selection").classList.remove("button-selected");
   removeSortingHeading()
})
