const navbar = document.querySelector('.main-nav');
window.onscroll = () => {
    if (window.scrollY > 10) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

$(document).ready(function () {
const navIcon = document.getElementById('navIcon');

navIcon.onclick= () =>{
    const navBar = document.getElementById('sect-2');
    navBar.classList.toggle("icon-active");
    navBar.classList.toggle("icon-deactive");
    navIcon.classList.toggle("icon-btn-active")
    
    const mainNavBar = document.getElementById('sect-1');

    mainNavBar.classList.toggle("nav-active")

};
}
);

window.addEventListener("scroll", function reveal() {
    var animate = document.querySelectorAll(".animate");
    for (var i = 0; i < animate.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = animate[i].getBoundingClientRect().top;
      var elementVisible = 50;
      if (elementTop < windowHeight - elementVisible) {
        animate[i].classList.add("active");
      } else {
        animate[i].classList.remove("active");
      }
    }
  }

);


