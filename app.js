//for click btn dark-mode
let btn = document.getElementById("btnDark");
let html = document.getElementById("html");
let img = document.getElementById("img");
let flag = true;
btn.addEventListener("click",function(){
 if(flag===true){
  html.setAttribute("class","dark");
  img.src = "../img/night-mode.png";
  flag=false;
 }else{
  html.setAttribute("class","");
  img.src = "../img/night-mode (1).png";
  flag=true;
 }
   
})



// add dot for more
function myClick(){
  const dot = document.getElementById("dot");
  const more = document.getElementById("more");
  if(dot==="none"){
    dot.style.display = "inline";
    more.style.display = "none";
  }else{
    dot.style.display = "none";
    more.style.display = "inline";
  }
}