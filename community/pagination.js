var pagOptions = document.querySelectorAll(".pag_link");

pagOptions.forEach(function (element, index) {
  element.addEventListener("click", switchActive);
});

function switchActive(event) {
  var targetElement = event.target;

  pagOptions.forEach(function (element, index) {
    element.classList.remove("active");
  });

  targetElement.classList.add("active");
}
