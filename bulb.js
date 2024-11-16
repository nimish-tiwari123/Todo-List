let container = document.querySelector(".container");
let cursor = document.querySelector(".cursor");

container.addEventListener("mousemove", function(event){
    cursor.style.top = event.y +"px";
    cursor.style.left = event.x + "px";
})