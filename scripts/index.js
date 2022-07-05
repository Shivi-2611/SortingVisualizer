
var blue="#33bee0"
var yellow="yellow"
var red="rgb(202, 29, 52)"
var green="rgb(28, 224, 126)"
var lightgreen= "#88ee29"
var brown="rgb(255, 188, 111)";
var purple="#8949ff"
var orange= "#ff8f0f"


var inputArr=document.querySelector("#arr-size");
var arrSize=inputArr.value;
var sortButtons=document.querySelectorAll(".sort-button");
var vizualizer=document.querySelector("#vizualizer");
var algoSpeed = document.querySelector("#algo-speed");
var generateButton=document.querySelector(".generate-button");

function disableSortButtons(){
   for(var i=0;i<sortButtons.length;i++)
    {
        sortButtons[i].disabled=true;
    }
}

function enableSortButtons(){
   for(var i=0;i<sortButtons.length;i++)
    {
        sortButtons[i].disabled=false;
    }
}

function disableSizeInput()
{
     inputArr.disabled=true;
}
function enableSizeInput()
{
     inputArr.disabled=false;
}

function disableGenerateArray()
{
     generateButton.disabled=true;
}
function enableGenerateArray()
{
     generateButton.disabled=false;
}

function swap(bar1,bar2)
{
      var temp=bar1.style.height;
      bar1.style.height=bar2.style.height;
      bar2.style.height=temp;
}
function deleteChildren(){
   vizualizer.innerHTML="";   
}

function generateArray(arrSize)
{
    deleteChildren();
    var no_bars=arrSize;
    var bar_heights=[];

    for(var i=0;i<no_bars;i++)
    {   
        bar_heights[i]= Number(Math.floor(Math.random()*(inputArr.max-inputArr.min+1))) + Number(inputArr.min);
    }
     
    for(var i=0;i<no_bars;i++){
        const bar = document.createElement("div");
        bar.style.width = `${100/(no_bars-(2*0.1))}%`;
        bar.style.height = `${bar_heights[i]}%`;
        bar.classList.add('bar');
        bar.classList.add(`bar-${i}`);
        vizualizer.appendChild(bar);
    }

}

generateButton.addEventListener("click",()=>{

    generateArray(inputArr.value);
})

inputArr.addEventListener("input",()=>{
    generateArray(inputArr.value);
})
function addSortingHeading(x){
    document.querySelector(".sorting-title").innerText=x;
}
function removeSortingHeading(){
   document.querySelector(".sorting-title").innerText="Choose Your Sorting Algorithm!!";
}

generateArray(arrSize);


var delay=300;
algoSpeed.addEventListener("input",()=>{
    delay=1500-(parseInt(algoSpeed.value)*300)
})
function wait(millisec)
{
      return new Promise((resolve) => {
         setTimeout(()=>{
            resolve('');
         },millisec);
      })
}