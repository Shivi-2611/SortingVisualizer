async function Merge(bars,l,mid,r){

    await wait(delay);
    let n1=mid-l+1;
    let n2=r-mid;

    let left=new Array(n1);
    let right=new Array(n2);

    for(var i=0;i<n1;i++)
    {
        bars[l+i].style.background= orange;
        left[i]=bars[l+i].style.height;
    }
    for(var i=0;i<n2;i++)
    {
        bars[mid+1+i].style.background= purple;
        right[i]=bars[mid+1+i].style.height;
    }
    await wait(delay);

    //merging
    var i=0, j=0, k=l;
    while(i<n1 && j<n2)
    {
        if(parseInt(left[i])<=parseInt(right[j]))
        {
            bars[k].style.height=left[i];

            if((n1+n2)===bars.length)
            {
                bars[k].style.background=green;

            }
            else{
                bars[k].style.background=lightgreen;
            }
            i++;
            k++;
        }
        else{
            bars[k].style.height=right[j];
            if((n1+n2)===bars.length)
            {
                bars[k].style.background=green;
            }
            else{
                bars[k].style.background=lightgreen;
            }
            j++;
            k++;
        }
        await wait(delay);
    }
    while(i<n1)
    {
        bars[k].style.height=left[i];  
        if((n1+n2)===bars.length)
        {
            bars[k].style.background=green;
        }
        else{
            bars[k].style.background=lightgreen;
        }
        await wait(delay);
        i++;
        k++;
    }
    while(j<n2)
    {
        bars[k].style.height=right[j]; 
        if((n1+n2)===bars.length)
        {
            bars[k].style.background=green;

        }
        else{
            bars[k].style.background=lightgreen;
        } 
        await wait(delay);
        j++;
        k++;
    }

}

async function MergeSort(bars,l,r){
    if(l>=r)
    {
        return;
    }
   var  mid=l+Math.floor((r-l)/2);
    await MergeSort(bars,l,mid);
    await MergeSort(bars,mid+1,r);
    await Merge(bars,l,mid,r);
}

document.querySelector(".merge").addEventListener("click",async()=>{
   document.querySelector(".merge").classList.add("button-selected");
   addSortingHeading("Merge Sort");
   disableSortButtons();
   disableSizeInput();
   disableGenerateArray();
   var bars=document.querySelectorAll(".bar");
   var l=0;
   var r= bars.length-1;
   document.querySelector(".best-time").innerText="Ω(N log N)";
   document.querySelector(".average-time").innerText="Θ(N log N)";
   document.querySelector(".worst-time").innerText="O(N log N)";

   document.querySelector(".worst-space").innerText="O(N)";
   
   await MergeSort(bars,l,r);
   enableSortButtons();
   enableSizeInput();
   enableGenerateArray();
    document.querySelector(".merge").classList.remove("button-selected");
    removeSortingHeading()
})