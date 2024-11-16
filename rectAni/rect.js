let rect = document.querySelector(".container");

rect.addEventListener("mousemove", function(event) {
  const { x } = rect.getBoundingClientRect(); 
  
  if (event.x >= x && event.x < x + 200) {
    rect.style.backgroundColor = "red";
  } else if (event.x >= x + 200 && event.x < x + 400) {
    rect.style.backgroundColor = "yellow";
  } else if (event.x >= x + 400 && event.x < x + 600) {
    rect.style.backgroundColor = "aqua";
  }
});
