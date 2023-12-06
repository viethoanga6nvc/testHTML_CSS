$(function () {
  loadComponent();
});

function loadComponent() {
  $("header").load("./Header.html");
  $(".page-title").load("./PageTitle.html");
  $(".about1").load("./About1.html");
  $(".proud-of").load("./ProudOf.html");
  $(".about2").load("./About2.html");
  $(".our-team").load("./OurTeam.html");
  $(".benifit").load("./Benifit.html");
  $("footer").load("./Footer.html");
}
