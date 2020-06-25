const toTop = document.querySelector(".fa-chevron-up");
const navLinks = document.querySelectorAll("header a");

$(document).ready(function () {
  $(".about-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top,
      },
      2000
    );
  });

  $(".projects-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#projects").offset().top,
      },
      2000
    );
  });

  $(".contact-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#contact").offset().top,
      },
      2000
    );
  });

  $(".fa-chevron-up").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("html").offset().top,
      },
      2000
    );
  });

  window.onscroll = testScroll;

  function testScroll(ev) {
    if (window.pageYOffset > 400) {
      toTop.classList.add("show-up");
    }
    if (window.pageYOffset < 400) {
      toTop.classList.remove("show-up");
    }
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      let target = this.getAttribute("href");
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top - 20,
        },
        1000
      );
    });
  });
});
