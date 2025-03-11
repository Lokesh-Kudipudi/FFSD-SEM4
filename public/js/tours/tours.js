const buttonLeft = document.querySelector(".buttonLeft");
const buttonRight = document.querySelector(".buttonRight");
const allToursContainer = document.querySelector(
  ".allToursContainer"
);
// const locationHeader = document.querySelector(
//   ".dropdown-header-location"
// );
const ratingHeader = document.querySelector(
  ".dropdown-header-rating"
);
const input = document.querySelector("#location");

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

// document
//   .getElementById("dropdownContentLocation")
//   .addEventListener("change", function (event) {
//     if (event.target.type === "checkbox") {
//       console.log(event.target.parentElement.textContent.trim());
//     }
//   });

document
  .getElementById("dropdownContentRating")
  .addEventListener("change", function (event) {
    if (event.target.type === "checkbox") {
      let urlParams = new URLSearchParams(
        window.location.search
      );
      let rating = urlParams.get("rating");
      let ratingArray = [];

      if (rating) {
        ratingArray = rating.split(",");
      } else {
        ratingArray.push(event.target.value);
      }

      if (rating) {
        if (ratingArray.includes(event.target.value)) {
          ratingArray = ratingArray.filter(
            (rat) => rat != event.target.value
          );
        } else {
          ratingArray = [...ratingArray, event.target.value];
        }
      }

      console.log(ratingArray);
      ratingArray.length == 0
        ? urlParams.delete("rating")
        : urlParams.set("rating", ratingArray.join(","));

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

// locationHeader.addEventListener("click", () => {
//   toggleDropdown("Location");
// });

function handleTourClick(tourId) {
  window.location.href = `${window.location.protocol}//${window.location.host}/tours/tour/${tourId}`;
}

// Funtion to set intial Filter height by default

function initialHeaderHeight(filter) {
  let content = document.getElementById(
    `dropdownContent${filter}`
  );
  let arrow = document.getElementById(`arrow${filter}`);

  let url = new URLSearchParams(window.location.search);
  const rating = url.get("rating");

  if (rating) {
    content.style.maxHeight = "300px";
    content.style.padding = "10px";
    arrow.innerHTML = "&#9660;";
  } else {
    content.style.maxHeight = "0px";
    content.style.padding = "0px 10px";
    arrow.innerHTML = "&#9650;";
  }
}

initialHeaderHeight("Rating");

// Funtion to manage search in tours

function handleSearch() {
  if (input.value.length == 0) {
    window.location.href = `/tours/search`;
  } else {
    window.location.href = `/tours/search?q=${input.value}`;
  }
}

function setInputValue() {
  const url = new URLSearchParams(window.location.search);
  const query = url.get("q");
  if (query) {
    input.value = query;
  }
}

setInputValue();
