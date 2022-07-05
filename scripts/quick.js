async function Partition(bars,l,r){


    for(var i=l;i<=r;i++)
    {
        bars[i].style.background=brown;
    }
    await wait(delay);

    var pivot=r;
    bars[pivot].style.background=red;
    await wait(delay);
    var i=l-1;

    for(var j=l;j<=r-1;j++)
    {
        bars[j].style.background=yellow;
        await wait(delay);
        if(parseInt(bars[j].style.height)<parseInt(bars[pivot].style.height))
        {
            i++;
            await wait(delay);
            swap(bars[i],bars[j]);
            bars[i].style.background=orange;
            if(i!=j) bars[j].style.background=purple
            await wait(delay);

        }
        else{
            bars[j].style.background=purple;
            await wait(delay);
        }
    }
    swap(bars[i+1],bars[r]);
    bars[i+1].style.background=green;
    bars[r].style.background=purple;
    await wait(delay);
    for(var k=l;k<=r;k++){
        if(bars[k].style.background!=green)
        {
            bars[k].style.background=blue;
        }
    }
    return i+1;

}

async function QuickSort(bars,l,r){
    if(l<r)
    {
        var pivot_index=await Partition(bars,l,r);
        await QuickSort(bars,l,pivot_index-1);
        await QuickSort(bars,pivot_index+1,r);   
    }
    else{
        if(l>=0 && l<bars.length && r>=0 && r<bars.length)
        {
            bars[l].style.background=green;
            bars[r].style.background=green;
        }
    }
}

document.querySelector(".quick").addEventListener("click",async()=>{
   document.querySelector(".quick").classList.add("button-selected");
   addSortingHeading("Quick Sort");
   disableSortButtons();
   disableSizeInput();
   disableGenerateArray();
   var bars=document.querySelectorAll(".bar");
   var l=0;
   var r= bars.length-1;
   document.querySelector(".best-time").innerText="Ω(N log N)";
   document.querySelector(".average-time").innerText="Θ(N log N)";
   document.querySelector(".worst-time").innerText="O(N^2)";
    
   document.querySelector(".worst-space").innerText="O(log N)";

   await QuickSort(bars,l,r);
   bars[r].style.background=green;
   enableSortButtons();
   enableSizeInput();
   enableGenerateArray();
   document.querySelector(".quick").classList.remove("button-selected");
   removeSortingHeading()
})