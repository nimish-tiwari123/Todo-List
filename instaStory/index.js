let imgs = [
  "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664102191724-97e85d71a61a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542729368-abee233a3a3a?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
let stories = document.querySelector(".stories");
let fullStory = document.querySelector(".full-story");
imgs.map((item) => {
  stories.innerHTML += `<div class="story" >
                 <img src="${item}" alt="img" class="story-img">
                 </div>`;
});
let storyElement = document.querySelectorAll(".story");
storyElement.forEach((story, index) => {
  story.addEventListener("click", function () {
    displayFullImg(index);
  });
});
function displayFullImg(index) {
  fullStory.style.display = "block";
  fullStory.style.backgroundImage = `url(${imgs[index]})`;
}
setInterval(function () {
  fullStory.style.display = "none";
}, 3000);
