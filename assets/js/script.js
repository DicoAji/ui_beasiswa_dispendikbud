/*********  Navbar  **********/
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
};
// active
$(document).ready(function () {
  if (document.title == "Beasiswa Batang | Beranda") {
    $("#nav__beranda").addClass("active");
  } else if (document.title == "Beasiswa Batang | Informasi") {
    $("#nav__informasi").addClass("active");
  } else if (document.title == "Beasiswa Batang | Daftar Beasiswa") {
    $("#nav__beasiswa").addClass("active");
  } else if (document.title == "Beasiswa Batang | Sekolah") {
    $("#nav__sekolah").addClass("active");
  } else if (document.title == "Beasiswa Batang | Soal") {
    $("#nav__soal").addClass("active");
  } else if (document.title == "Beasiswa Batang | Guru") {
    $("#nav__guru").addClass("active");
  }
});
