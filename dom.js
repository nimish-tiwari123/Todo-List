let circleArr = [];
 
let container = document.querySelector(".container");

function checkCircle() {
  if (circleArr.length >= 2) {
    const [cir1, cir2] = circleArr;
    container.removeChild(cir1.element);
    container.removeChild(cir2.element);
    circleArr.shift();
    circleArr.shift();
  }
}

function checkOverlay() {
    const [cir1, cir2] = circleArr;
  let dis = Math.hypot(cir2?.x - cir1?.x, cir2?.y - cir1?.y);
  let sumRad = cir1?.rad + cir2?.rad;
  if (dis <= sumRad) {
    console.log("Intersecting");
  } else {
    console.log("Not Intersecting");
  }
}

document.addEventListener("mousedown", function (event) {
  checkCircle();

  let rand = Math.floor(Math.random() * (50, 100) + 50);
  let element = document.createElement("div");
  element.setAttribute("class", "circle");
  container.appendChild(element);

  element.style.borderRadius = rand + "px";
  element.style.top = event.y + "px";
  element.style.left = event.x + "px";
  element.style.width = rand * 2 + "px";
  element.style.height = rand * 2 + "px";
  let x = event.x;
  let y = event.y;
  let rad = rand;

  const obj = { x, y, element, rad };
  circleArr.push(obj);
  checkOverlay();
});
