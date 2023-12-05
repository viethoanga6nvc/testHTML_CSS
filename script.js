$(function () {
  loadComponent();
});

function loadComponent() {
  $("header").load("./header.html");
  $(".page-title").load("./pagetitle.html");
  $(".about1").load("./About1.html");
  $(".proud-of").load("./ProudOf.html");
}
