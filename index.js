//scroll affix function
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

//burger toggle and animation
var burger = document.querySelector(".burger");
var menu = document.querySelector("ul");

burger.addEventListener("click", function(){
  menu.classList.toggle("active");

  burger.classList.toggle('toggle')
})


//hide nav links on click
const links = document.querySelector('.trigger')

  links.addEventListener("click", () => {
      menu.classList.remove("active");
      burger.classList.remove("toggle")
  })

  

//read more and readless function
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

const btn = document.querySelector(".theme-toggle-btn");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "light") {
  document.body.classList.add("light-theme");
}

//theme switch
btn.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");
  btn.classList.toggle("disactive");
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

//scroll reveal
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

//scrollspy
function adjustScrollSpy(){
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  var removeclass =  document.querySelector(".inactive");
  if (viewportWidth <= 988){
    document.querySelector(".inactive").classList.remove("active");
  }
  else{
      const sections = document.querySelectorAll(".hero-bg");
          const scrollPos =
          document.documentElement.scrollTop || document.body.scrollTop;
    
          for (let s in sections)
          if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos) {
              const id = sections[s].id;
              document.querySelector(".active").classList.remove("active");
              document.querySelector(`ul li a[href*=${id}]`).parentNode.classList.add("active");  
          }
      }

}

['load','scroll', 'resize'].forEach(eventName => {
  window.addEventListener(eventName, () =>{
    scrollFunction();
    adjustScrollSpy();
  })
})
