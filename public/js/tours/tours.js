const buttonLeft = document.querySelector(".buttonLeft");
const buttonRight = document.querySelector(".buttonRight");
const allToursContainer = document.querySelector(
  ".allToursContainer"
);
const locationHeader = document.querySelector(
  ".dropdown-header-location"
);
const ratingHeader = document.querySelector(
  ".dropdown-header-rating"
);

buttonRight.addEventListener("click", () => {
  const urlParams = new URLSearchParams(window.location.search);
  let currentPage = parseInt(urlParams.get("page")) || 0; // Default to page 0 if not present
  let nextPage = currentPage + 1;
  urlParams.set("page", nextPage);
  window.location.search = urlParams.toString();
});

buttonLeft.addEventListener("click", () => {
  const urlParams = new URLSearchParams(window.location.search);
  let currentPage = parseInt(urlParams.get("page")) || 0; // Default to page 0 if not present
  let nextPage = currentPage - 1;
  urlParams.set("page", nextPage);
  window.location.search = urlParams.toString();
});

document
  .getElementById("dropdownContentLocation")
  .addEventListener("change", function (event) {
    if (event.target.type === "checkbox") {
      console.log(event.target.parentElement.textContent.trim());
    }
  });

document
  .getElementById("dropdownContentRating")
  .addEventListener("change", function (event) {
    if (event.target.type === "checkbox") {
      let urlParams = new URLSearchParams(
        window.location.search
      );
      urlParams.set("rating", +event.target.value);
      window.location.search = urlParams.toString();
    }
  });

function toggleDropdown(filter) {
  let content = document.getElementById(
    `dropdownContent${filter}`
  );
  let arrow = document.getElementById(`arrow${filter}`);
  if (
    content.style.maxHeight === "0px" ||
    content.style.maxHeight === ""
  ) {
    content.style.maxHeight = "300px";
    content.style.padding = "10px";
    arrow.innerHTML = "&#9660;"; // Down arrow
  } else {
    content.style.maxHeight = "0px";
    content.style.padding = "0px 10px";
    arrow.innerHTML = "&#9650;"; // Up arrow
  }
}

ratingHeader.addEventListener("click", () => {
  toggleDropdown("Rating");
});

locationHeader.addEventListener("click", () => {
  toggleDropdown("Location");
});
