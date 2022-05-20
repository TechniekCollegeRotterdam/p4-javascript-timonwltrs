//Oefening angry-birds

const bird = document.querySelector(".bird");
let px = 0;
bird.addEventListener("click", function(){
    px = px + 50;
    bird.style.left = px + "px";
})

