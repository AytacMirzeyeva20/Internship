const menubar=document.getElementById("bar")
const menu=document.getElementById("nav_item")
menubar.addEventListener("click",function(){
    menu.classList.toggle("active")
})