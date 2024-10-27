document.addEventListener("scroll",function(){

var navbar = document.querySelector(".navbar");
var scrollvalue = window.scrollY;
if(scrollvalue>400){
    navbar.setAttribute("class", "navbar navbar-expand-lg navbar-light bg-danger");
}else{
    navbar.setAttribute("class" , "navbar navbar-expand-lg navbar-light bg-light");
}




});








