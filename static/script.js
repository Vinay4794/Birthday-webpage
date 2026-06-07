const birthdayDate = new Date(
"June 13, 2026 00:00:00"
).getTime();

const btn = document.getElementById("surpriseBtn");

const timer = setInterval(() => {

let now = new Date().getTime();

let distance = birthdayDate - now;

if(distance <= 0){

clearInterval(timer);

document.getElementById("days").innerHTML = "00";
document.getElementById("hours").innerHTML = "00";
document.getElementById("minutes").innerHTML = "00";
document.getElementById("seconds").innerHTML = "00";

btn.disabled = false;
btn.classList.add("active");
btn.innerHTML = "🎁 Open Surprise";

return;
}

let days = Math.floor(
distance / (1000*60*60*24)
);

let hours = Math.floor(
(distance % (1000*60*60*24))
/
(1000*60*60)
);

let minutes = Math.floor(
(distance % (1000*60*60))
/
(1000*60)
);

let seconds = Math.floor(
(distance % (1000*60))
/
1000
);

document.getElementById("days").innerHTML =
String(days).padStart(2,"0");

document.getElementById("hours").innerHTML =
String(hours).padStart(2,"0");

document.getElementById("minutes").innerHTML =
String(minutes).padStart(2,"0");

document.getElementById("seconds").innerHTML =
String(seconds).padStart(2,"0");

},1000);

btn.addEventListener("click",()=>{

if(btn.disabled) return;

document.getElementById("letterModal")
.style.display="flex";

createConfetti();
});

document.getElementById("closeBtn")
.addEventListener("click",()=>{

document.getElementById("letterModal")
.style.display="none";
});

function createConfetti(){

for(let i=0;i<100;i++){

const confetti =
document.createElement("div");

confetti.style.position="fixed";
confetti.style.width="10px";
confetti.style.height="10px";
confetti.style.background=
`hsl(${Math.random()*360},100%,50%)`;

confetti.style.left=
Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.zIndex="999";

confetti.style.borderRadius="50%";

document.body.appendChild(confetti);

let animation =
confetti.animate([
{
transform:"translateY(0)"
},
{
transform:`translateY(${window.innerHeight+100}px)`
}
],
{
duration:3000+Math.random()*3000
});

animation.onfinish=()=>{
confetti.remove();
};
}
}
const memoryImages =
document.querySelectorAll(".memory-card img");

const imageModal =
document.getElementById("imageModal");

const modalImage =
document.getElementById("modalImage");

const closeImage =
document.getElementById("closeImage");

memoryImages.forEach(img => {

img.addEventListener("click", () => {

imageModal.style.display = "flex";
modalImage.src = img.src;

});

});

closeImage.addEventListener("click", () => {

imageModal.style.display = "none";

});

imageModal.addEventListener("click", () => {

imageModal.style.display = "none";

});

function createHeart() {

const heart = document.createElement("div");

heart.innerHTML = "❤️";

heart.classList.add("heart");

heart.style.left = Math.random()*100 + "vw";

heart.style.fontSize =
(Math.random()*20+15)+"px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);
}

setInterval(createHeart,1000);