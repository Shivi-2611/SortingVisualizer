async function InsertionSort(){
    document.querySelector(".best-time").innerText="Ω(N)";
    document.querySelector(".average-time").innerText="Θ(N^2)";
    document.querySelector(".worst-time").innerText="O(N^2)";
    
    document.querySelector(".worst-space").innerText="O(1)";

    var bars=document.querySelectorAll(".bar");

    bars[0].style.background=green;

    for(var i=1;i<bars.length;i++)
    {
        bars[i].style.background=red;
        await wait(delay);
        var current= bars[i].style.height;

        bars[i].style.background=yellow;
        await wait(delay);

        var j=i-1;
        console.log("j",j);
        while(j>=0 && parseInt(bars[j].style.height)> parseInt(current))
        {
            bars[j+1].style.height=bars[j].style.height;
            bars[j+1].style.background=blue;
            await wait(delay);
            j--;

        }
        for(var k=i;k>=j+1;k--)
        {
            bars[k].style.background=green;
        }
        bars[j+1].style.height=current;
        bars[j+1].style.background=yellow;
        await wait(delay);
        bars[j+1].style.background=green;
        await wait(delay);
    }
}

document.querySelector(".insertion").addEventListener("click",async()=>{
   document.querySelector(".insertion").classList.add("button-selected");
   addSortingHeading("Insertion Sort");
   disableSortButtons();
   disableSizeInput();
   disableGenerateArray();
   await InsertionSort();
   enableSortButtons();
   enableSizeInput();
   enableGenerateArray();
   document.querySelector(".insertion").classList.remove("button-selected");
   removeSortingHeading()
})