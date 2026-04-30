window.onload = function() {
  var hamburger = document.getElementById("hamburger")
  var navLinks = document.getElementById("navLinks")

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function() {
      navLinks.classList.toggle("open")
    })
    var links = navLinks.querySelectorAll("a")
    links.forEach(function(link) {
      link.addEventListener("click", function() {
        navLinks.classList.remove("open")
      })
    })
  }
