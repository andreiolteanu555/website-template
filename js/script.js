/* activate toggle menu */
document.addEventListener("DOMContentLoaded", function () {
    let navToggle = document.querySelector(".nav-toggle");
    let navMenu = document.getElementById("nav-menu");

    navToggle.addEventListener("click", function () {
       navMenu.classList.toggle("active");
    });
 });


/* smooth scrolling */
  document.addEventListener('DOMContentLoaded', function () {
    let scrollLinks = document.querySelectorAll('.smooth-scroll');

    scrollLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        let targetId = this.getAttribute('href').substring(1);
        let targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
      });
    });
  });


/* scroll to top button */
  document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    scrollToTopBtn.addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; 
    });
});



