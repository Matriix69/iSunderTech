window.onscroll = function() {scrollFunction()};

//   const scrolling = () => {
//     const scroll = document.getElementsByClassName('navbar')
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//       scroll.classList.add("affix");
//     } else {
//       scroll.classList.remove("affix");
//   }  
// }
function scrollFunction() {
  const scroll = document.querySelector('.navbar')
  const scroll2 = document.querySelector('.bgscroll')
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    scroll.classList.add("affix");
    scroll2.classList.add("affix2");    
  } else {
    scroll.classList.remove("affix");
    scroll2.classList.remove("affix2");
  }
}


var burger = document.querySelector(".burger");
var menu = document.querySelector("ul");

burger.addEventListener("click", function(){
  menu.classList.toggle("active");

  burger.classList.toggle('toggle')
})



const links = document.querySelector('.trigger')

  links.addEventListener("click", () => {
      menu.classList.remove("active");
      burger.classList.remove("toggle")
  })

  

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

const btn = document.querySelector(".dark-light-btn");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "light") {
  document.body.classList.add("light-theme");
  btn.classList.toggle("inactive");
}

btn.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");
  btn.classList.toggle("inactive");
  trans()

  let theme = "dark";
  if (document.body.classList.contains("light-theme")) {
    theme = "light";
  }
  localStorage.setItem("theme", theme);
});

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}

ScrollReveal().reveal('.scroll', {delay: 300, origin: 'bottom', distance: '10px', duration: 1500, easing: 'cubic-bezier(.39,.575,.565,1)', mobile: false})
ScrollReveal().reveal('.scroll2', {delay: 500, origin: 'bottom', distance: '10px', duration: 1500, easing: 'cubic-bezier(.39,.575,.565,1)', mobile: false})
ScrollReveal().reveal('.scroll3', {delay: 500, origin: 'bottom', distance: '10px', duration: 700, easing: 'cubic-bezier(.39,.575,.565,1)', mobile: false})
ScrollReveal().reveal('.scroll4', {delay: 600, origin: 'bottom', distance: '10px', duration: 700, easing: 'cubic-bezier(.39,.575,.565,1)', mobile: false})
ScrollReveal().reveal('.scroll5', {delay: 700, origin: 'bottom', distance: '10px', duration: 700, easing: 'cubic-bezier(.39,.575,.565,1)', mobile: false})
ScrollReveal().reveal('.header', {delay: 500, origin: 'bottom', distance: '10px', duration: 700, easing: 'cubic-bezier(.39,.575,.565,1)', mobile: false})
ScrollReveal().reveal('.box1', {delay: 500, origin: 'bottom', distance: '10px', duration: 700, easing: 'cubic-bezier(.39,.575,.565,1)', mobile: false})
ScrollReveal().reveal('.boxgrid', {delay: 500, origin: 'bottom', distance: '10px', duration: 700, easing: 'cubic-bezier(.39,.575,.565,1)', mobile: false})
ScrollReveal().reveal('.box', {delay: 500, origin: 'bottom', distance: '10px', duration: 700, easing: 'cubic-bezier(.39,.575,.565,1)', mobile: false})
ScrollReveal().reveal('.scroll6', {delay: 500, origin: 'bottom', distance: '10px', duration: 700, easing: 'cubic-bezier(.39,.575,.565,1)', mobile: false})
ScrollReveal().reveal('.boxfooter', {delay: 500, origin: 'bottom', distance: '10px', duration: 700, easing: 'cubic-bezier(.39,.575,.565,1)', mobile: false})

