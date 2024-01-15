document.addEventListener("DOMContentLoaded", function () {
  var dropdownItem = document.querySelector(".sidebar");
  var dropdown = document.querySelector(".beckdrop");

  dropdownItem.addEventListener("mouseenter", function (e) {
    dropdown.classList.add("beckdrop-show");
  });
  dropdownItem.addEventListener("mouseleave", function () {
    dropdown.classList.remove("beckdrop-show");
  });
});
