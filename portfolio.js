var content =document.getElementById("main_div");
var sidebar =document.getElementById("sidebar");
var main_content =document.getElementById("main_content");
var main_div =document.getElementsByClassName("section");
var home =document.getElementById("home");
var p=document.getElementsByTagName("p");
var n=0;
function showsidebar(){
   if(n==0){
    sidebar.style.left="0";
    main_content.style.left="20%";
    for(var i=0;i<main_div.length;i++){
        main_div[i].style.width="80%";
    }
    main_div[1].style.width="80vw"; 
    main_div[1].p.style.fontSize="1rem";    
    n=1;
   }
   else{
    sidebar.style.left="-20%";
    main_content.style.left="0";
    for(var i=0;i<main_div.length;i++){
        main_div[i].style.width="100%";
    }
    main_div[1].style.width="100vw";
    n=0;
   }
}
function showhome(){
    content.style.transform="translateY(0)";
    content.style.transition="0.5s";
}
function showabout(){
    content.style.transform="translateY(-100%)";
    content.style.transition="0.5s";
}
function showskills(){
    content.style.transform="translateY(-200%)";
    content.style.transition="0.5s";
}
function showwork(){
    content.style.transform="translateY(-300%)";
    content.style.transition="0.5s";
}
function showcontact(){
    content.style.transform="translateY(-400%)";
    content.style.transition="0.5s";
}
