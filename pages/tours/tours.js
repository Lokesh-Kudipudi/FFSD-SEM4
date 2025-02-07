const tours = [
  {
    title: "Cochin, Alleppey, Varkala, & Kovalam Tour",
    tags: ["featured"],
    duration: "7 days 6 nights",
    price: "24,000.00",
    img: "../../assets/tours/heroBg1.jpg",
  },
  {
    title: "Cochin, Alleppey, Varkala, & Kovalam Tour",
    tags: [],
    duration: "7 days 6 nights",
    price: "24,000.00",
    img: "../../assets/tours/heroBg1.jpg",
  },
  {
    title: "Cochin, Alleppey, Varkala, & Kovalam Tour",
    tags: [],
    duration: "7 days 6 nights",
    price: "24,000.00",
    img: "../../assets/tours/heroBg1.jpg",
  },
  {
    title: "Cochin, Alleppey, Varkala, & Kovalam Tour",
    tags: [],
    duration: "7 days 6 nights",
    price: "24,000.00",
    img: "../../assets/tours/heroBg1.jpg",
  },
  {
    title: "Cochin, Alleppey, Varkala, & Kovalam Tour",
    tags: [],
    duration: "7 days 6 nights",
    price: "24,000.00",
    img: "../../assets/tours/heroBg1.jpg",
  },
  {
    title: "Cochin, Alleppey, Varkala, & Kovalam Tour",
    tags: [],
    duration: "7 days 6 nights",
    price: "24,000.00",
    img: "../../assets/tours/heroBg1.jpg",
  },
  {
    title: "Cochin, Alleppey, Varkala, & Kovalam Tour",
    tags: [],
    duration: "7 days 6 nights",
    price: "24,000.00",
    img: "../../assets/tours/heroBg1.jpg",
  },
  {
    title: "Cochin, Alleppey, Varkala, & Kovalam Tour",
    tags: [],
    duration: "7 days 6 nights",
    price: "24,000.00",
    img: "../../assets/tours/heroBg1.jpg",
  },
  {
    title: "Cochin, Alleppey, Varkala, & Kovalam Tour",
    tags: [],
    duration: "7 days 6 nights",
    price: "24,000.00",
    img: "../../assets/tours/heroBg1.jpg",
  },
  {
    title: "Cochin, Alleppey, Varkala, & Kovalam Tour",
    tags: [],
    duration: "7 days 6 nights",
    price: "24,000.00",
    img: "../../assets/tours/heroBg1.jpg",
  },
  {
    title: "Cochin, Alleppey, Varkala, & Kovalam Tour",
    tags: [],
    duration: "7 days 6 nights",
    price: "24,000.00",
    img: "../../assets/tours/heroBg1.jpg",
  },
  {
    title: "Cochin, Alleppey, Varkala, & Kovalam Tour",
    tags: [],
    duration: "7 days 6 nights",
    price: "24,000.00",
    img: "../../assets/tours/heroBg1.jpg",
  },
  {
    title: "Cochin, Alleppey, Varkala, & Kovalam Tour",
    tags: [],
    duration: "7 days 6 nights",
    price: "24,000.00",
    img: "../../assets/tours/heroBg1.jpg",
  },
  {
    title: "Cochin, Alleppey, Varkala, & Kovalam Tour",
    tags: [],
    duration: "7 days 6 nights",
    price: "24,000.00",
    img: "../../assets/tours/heroBg1.jpg",
  },
  {
    title: "Cochin, Alleppey, Varkala, & Kovalam Tour",
    tags: [],
    duration: "7 days 6 nights",
    price: "24,000.00",
    img: "../../assets/tours/heroBg1.jpg",
  },
];

const buttonLeft = document.querySelector(".buttonLeft");
const buttonRight = document.querySelector(".buttonRight");

const numberOfCardsPerPage = 12;
const numberOfPages = Math.floor(
  tours.length / numberOfCardsPerPage
);
let currentPage = 0;

// 0 ->

const allToursContainer = document.querySelector(
  ".allToursContainer"
);

const location = document.querySelector(
  ".dropdown-header-location"
);

const rating = document.querySelector(".dropdown-header-rating");

function displayToursTemplate() {
  allToursContainer.innerHTML = "";

  const toursTemplate = tours
    .slice(
      currentPage * numberOfCardsPerPage,
      currentPage * numberOfCardsPerPage + numberOfCardsPerPage
    )
    .map((tour) => {
      return `<div class="card">
          <div style="position: relative">
            <img
              src=${tour.img}
              alt="Tour Image"
            />
            ${
              tour.tags.length != 0
                ? `<span class="featured">${tour.tags[0]}</span>`
                : ""
            }
          </div>
          <div class="card-content">
            <h3>${tour.title}</h3>
            <div class="rating">
              <i class="fas fa-star"></i> 0 (No Review)
            </div>
            <div class="price">From ₹${tour.price}</div>
            <div class="duration">${tour.duration}</div>
          </div>
        </div>`;
    });

  toursTemplate.forEach((tour) => {
    allToursContainer.insertAdjacentHTML("beforeend", tour);
  });
}

buttonRight.addEventListener("click", () => {
  currentPage += 1;
  if (currentPage == numberOfPages + 1) {
    currentPage = 0;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
  displayToursTemplate();
});

buttonLeft.addEventListener("click", () => {
  currentPage -= 1;

  if (currentPage == -1) {
    currentPage = 0;
    return;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
  displayToursTemplate();
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
      console.log(event.target.value);
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

rating.addEventListener("click", () => {
  toggleDropdown("Rating");
});

location.addEventListener("click", () => {
  toggleDropdown("Location");
});

displayToursTemplate();
