

// open and close menu in phone
let openmenu = document.getElementById("openmenu");
let menu = document.querySelector(".menu");

openmenu.addEventListener("click", () => {
  if (openmenu.classList.contains("fa-bars")) {
    openmenu.className = "fa-solid fa-xmark";
  } else {
    openmenu.className = "fa-solid fa-bars";
  }
  menu.classList.toggle("active");
});
if (localStorage.length > 0) {
  // sliders[localStorage.acc].classList.add("active");
}
// add active to header on scroll
let header = document.getElementById("header");
let conhome = document.getElementById("con-hm");
onscroll = function () {
  if (this.scrollY > 200) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};
// opacity of menu
let links = document.querySelectorAll(".menu ul li a");
links.forEach((link, i) => {
  window.setTimeout(() => {
    link.style.opacity = "1";
  }, 200 * i);
});
//sliders
var prev = document.getElementById("prev");
var next = document.getElementById("next");
let current= 0;
let sliders = document.querySelectorAll("#home .home-slider .slide") 
function slides(acc) {
  sliders.forEach((a) => a.classList.remove("active"));
  sliders[acc].classList.add("active");
  localStorage.setItem("acc", acc);
}

function nexts() {
  current += 1;
  if (current >= sliders.length) {
    current = 0;
  }
  slides(current);
}
setInterval(nexts,10000)   
next.addEventListener("click", nexts);
function prevs() {
  current -= 1;
  if (current < 0) {
    current = sliders.length - 1;
  }
  slides(current);
}
prev.addEventListener("click", prevs);
let up = document.getElementById("up");
onscroll = function () {
  if (this.scrollY > 200) {
    prev.classList.add("dis");
    next.classList.add("dis");
    header.classList.add("active");
    up.style.display = "block";
  } else {
    prev.classList.remove("dis");
    next.classList.remove("dis");
    header.classList.remove("active");
    up.style.display = "none";
  }
};
up.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
let res = document.getElementById("reser")
let x = document.getElementById("x")
let r = document.getElementById("r")
let book = document.getElementById("book")
r.onclick = ()=>res.classList.add("active")
book.onclick = ()=>res.classList.add("active")
x.onclick = ()=>res.classList.remove("active")
let sb = document.querySelectorAll("#home .btn")
sb.forEach((e)=>{
  e.onclick = ()=>{
    res.classList.add("active")
  }
})