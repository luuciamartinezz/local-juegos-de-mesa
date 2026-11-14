document.addEventListener("DOMContentLoaded", function() {
  var accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(function(header) {
    header.addEventListener("click", function() {
      header.classList.toggle("active");
      var content = header.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});