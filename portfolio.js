var content =document.getElementById("main_div");
var sidebar =document.getElementById("sidebar");
var main_content =document.getElementById("main_content");
var main_div =document.getElementsByClassName("section");
var li=document.getElementsByClassName("li");
var main_project=document.getElementsByClassName("main_project")[0];
var main_project_div=document.getElementsByClassName("main_project_div")[0];
var dots=document.getElementsByClassName("dot");
var n=0;
showactive(0);
showactivedot(0);
showhome();
function showsidebar(){
   if(n==0){
    sidebar.style.left="0";
    main_content.style.left="20%";
    for(var i=0;i<main_div.length;i++){
        main_div[i].style.width="80%";
    }
    main_div[1].style.width="80vw";
    main_div[3].style.width="80vw";
    main_div[4].style.width="80vw";
    main_content.style.width="80vw";  
    main_project_div.style.height="50%";
    main_project_div.style.marginTop="30%";  
    n=1;
   }
   else{
    main_content.style.width="100vw";
    sidebar.style.left="-20%";
    main_content.style.left="0";
    for(var i=0;i<main_div.length;i++){
        main_div[i].style.width="100%";
    }
    main_div[1].style.width="100vw";
    main_div[3].style.width="100vw";
    main_div[4].style.width="100vw";
    main_project_div.style.height="60%";
    main_project_div.style.marginTop="10%";
    n=0;
   }
}
function showactive(n){
    for(var i=0;i<li.length;i++){
        li[i].style.backgroundColor="#ff4893";
        li[i].style.color="#fff";
    }
    li[n].style.backgroundColor="#ffd5d5";
    li[n].style.color="#ff4893";
}

function showactivedot(n){
    for(var i=0;i<dots.length;i++){
        dots[i].style.backgroundColor="#ffd5d5";
        dots[i].style.color="rgba(0,0,0,0.35)";
    }
    dots[n].style.backgroundColor="#ff4893";
    dots[n].style.color="#fff";
}
function showhome(){
    content.style.transform="translateY(0)";
    content.style.transition="0.5s";
    main_content.style.backgroundImage="url(images/works_bg.svg)";
    main_content.style.backgroundSize="cover";
    showactive(0);
}
function showabout(){
    content.style.transform="translateY(-100%)";
    content.style.transition="0.5s";
    main_content.style.backgroundImage="url(images/About_bg.svg)";
    main_content.style.backgroundSize="cover";
    showactive(1);
}
function showskills(){
    content.style.transform="translateY(-200%)";
    content.style.transition="0.5s";
    main_content.style.backgroundImage="url(images/skills_bg.svg)";
    main_content.style.backgroundSize="cover";
    showactive(2);
}
function showwork(){
    content.style.transform="translateY(-300%)";
    content.style.transition="0.5s";
    main_content.style.backgroundImage="url(images/works_bg.svg)";
    main_content.style.backgroundSize="cover";
    showactive(3);
}
function showcontact(){
    content.style.transform="translateY(-400%)";
    content.style.transition="0.5s";
    main_content.style.backgroundImage="url(images/contact_bg.svg)";
    main_content.style.backgroundSize="cover";
    showactive(4);
}

$(document).on("click",".dot",function(){
    var index=$(this).index();
    showproject(index);
})

function showproject(n){
    switch(n){
        case 0:main_project.style.transform="translateX(0)";
             showactivedot(0);               
             break;
        case 1:main_project.style.transform="translateX(-100%)";
              showactivedot(1);
              break;
        case 2:main_project.style.transform="translateX(-200%)";
               showactivedot(2);
               break;
    }
}