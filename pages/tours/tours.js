const tours = [
  {
    title: "Golden Triangle: Delhi, Agra & Jaipur",
    tags: ["featured"],
    rating: 5,
    duration: "6 days 5 nights",
    price: "28,000.00",
    img: "https://triptovaranasi.in/wp-content/uploads/2023/08/Varanasi-1024x664.webp",
  },
  {
    title: "Backwaters of Kerala: Alleppey & Kumarakom",
    tags: ["popular"],
    rating: 4,
    duration: "5 days 4 nights",
    price: "22,500.00",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbadu9m2jEZPw8VwMwbViQlXerMZ_TTc-hg&s",
  },
  {
    title: "Majestic Rajasthan: Udaipur, Jodhpur & Jaisalmer",
    tags: ["new"],
    rating: 5,
    duration: "8 days 7 nights",
    price: "30,000.00",
    img: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZnJpbmRpYV9jb2tlX3B1ZXJ0YV9tZXJsaW5fMC1pbWFnZS1reWJkZmpqci5qcGc.jpg",
  },
  {
    title: "Spiritual Varanasi & Sarnath Tour",
    tags: ["spiritual"],
    rating: 5,
    duration: "4 days 3 nights",
    price: "15,000.00",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_VDxOBv8Q1u3yjsZO6aUgbFsaEXL0cb6NA&s",
  },
  {
    title: "Kashmir Paradise: Srinagar, Gulmarg & Pahalgam",
    tags: [],
    rating: 4,
    duration: "7 days 6 nights",
    price: "35,000.00",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTDtqVgKil3J5sQeg_u8xU5FhfXJ52zEps9Q&s",
  },
  {
    title: "Goa Beach & Adventure Tour",
    tags: [],
    rating: 3,
    duration: "5 days 4 nights",
    price: "20,500.00",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhwZZXAO5lOnJ5ue3I3mx2KIQ19rmdZs3eWw&s",
  },
  {
    title: "Himalayan Escape: Shimla & Manali",
    tags: [],
    rating: 4,
    duration: "6 days 5 nights",
    price: "26,000.00",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWtgI18oOyQCJpoOIoLuQAbPGYrgT1QkoAQ&s",
  },
  {
    title: "Andaman Islands: Port Blair & Havelock",
    tags: [],
    rating: 4,
    duration: "6 days 5 nights",
    price: "32,000.00",
    img: "https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL2ZydGhhaWxhbmRfcGh1a2V0X2tvaF9waGlfOC1pbWFnZS1reWJhaDJpYi5qcGc.jpg",
  },
  {
    title: "Darjeeling & Gangtok: Himalayan Retreat",
    tags: [],
    rating: 4,
    duration: "7 days 6 nights",
    price: "25,500.00",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspADhqmvbB5NqFX55mw05WhwgO1Z2Iso9qg&s",
  },
  {
    title: "Ranthambore & Jaipur: Wildlife & Heritage",
    tags: [],
    rating: 5,
    duration: "5 days 4 nights",
    price: "23,000.00",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Naulakha_gate%2Cranthambor_fort.jpg",
  },
  {
    title: "Rishikesh & Haridwar Yoga & Spiritual Retreat",
    tags: [],
    rating: 3,
    duration: "5 days 4 nights",
    price: "18,000.00",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIHAHWCb9Sfaa_jKKJ6h7qSKeD-9obvpvn0Q&s",
  },
  {
    title: "Meghalaya: Cherrapunji & Shillong Adventure",
    tags: [],
    rating: 0,
    duration: "6 days 5 nights",
    price: "27,000.00",
    img: "https://images.pexels.com/photos/18476582/pexels-photo-18476582/free-photo-of-waterfalls-on-rocks-in-deep-forest.jpeg",
  },
  {
    title: "Madurai, Rameshwaram & Kanyakumari Pilgrimage",
    tags: [],
    rating: 2,
    duration: "6 days 5 nights",
    price: "21,500.00",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/India_-_Madurai_temple_-_0781.jpg",
  },
  {
    title: "Sundarbans Wildlife Safari",
    tags: [],
    rating: 5,
    duration: "4 days 3 nights",
    price: "19,000.00",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/70/Chital_deer%2C_Sundarbans_East_Wildlife_Sanctuary_01.jpg",
  },
  {
    title: "Ooty & Coorg Hill Station Retreat",
    tags: [],
    rating: 5,
    duration: "6 days 5 nights",
    price: "24,500.00",
    img: "https://live.staticflickr.com/3588/3445424333_f14c80b6da_b.jpg",
  },
  {
    title: "Leh & Ladakh Adventure Tour",
    tags: [],
    rating: 5,
    duration: "7 days 6 nights",
    price: "40,000.00",
    img: "https://live.staticflickr.com/7289/10991694376_40a1f41791_b.jpg",
  },
  {
    title: "Pondicherry & Mahabalipuram Coastal Tour",
    tags: [],
    rating: 5,
    duration: "5 days 4 nights",
    price: "19,500.00",
    img: "https://www.worldhistory.org/uploads/images/4127.jpg",
  },
  {
    title: "Lakshadweep Island Getaway",
    tags: [],
    duration: "5 days 4 nights",
    rating: 5,
    price: "35,000.00",
    img: "https://images.pexels.com/photos/22614625/pexels-photo-22614625/free-photo-of-idyllic-beach-on-bangaram-island-in-india.jpeg",
  },
  {
    title: "Bhubaneswar & Puri: Odisha Heritage",
    tags: [],
    rating: 5,
    duration: "5 days 4 nights",
    price: "21,000.00",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7Q96iTxbBt6p28T9o3Nl5knojVV7_GRBjQ&s",
  },
  {
    title: "Ajanta & Ellora: Maharashtra Heritage Tour",
    tags: [],
    rating: 5,
    duration: "4 days 3 nights",
    price: "18,500.00",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Ajanta_Ellora_caves-_Maharashtra%2CIndia.jpg",
  },
];

const buttonLeft = document.querySelector(".buttonLeft");
const buttonRight = document.querySelector(".buttonRight");

const numberOfCardsPerPage = 12;
const numberOfPages = Math.floor(
  (tours.length - 1) / numberOfCardsPerPage
);
let currentPage = 0;

let ratingSelected = [];

// 0 ->

const allToursContainer = document.querySelector(
  ".allToursContainer"
);

const locationHeader = document.querySelector(
  ".dropdown-header-location"
);

const ratingHeader = document.querySelector(
  ".dropdown-header-rating"
);

function displayToursTemplate() {
  function generateStars(i) {
    const singleStar = `<i class="fas fa-star"></i>`;
    let stars = "";
    if (!i) {
      return "No Reviews";
    }
    while (i) {
      stars = stars + singleStar;
      i--;
    }
    return stars;
  }

  allToursContainer.innerHTML = "";

  let toursToDisplay = tours;

  if (ratingSelected.length != 0) {
    toursToDisplay = tours.filter((tour) => {
      if (ratingSelected.includes(tour.rating)) {
        return true;
      } else {
        return false;
      }
    });
  }

  const toursTemplate = toursToDisplay
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
              ${generateStars(tour.rating)}
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
      if (ratingSelected.includes(+event.target.value)) {
        ratingSelected = ratingSelected.filter(
          (num) => num != +event.target.value
        );
      } else {
        ratingSelected.push(+event.target.value);
      }
      console.log(ratingSelected);
      displayToursTemplate();
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

displayToursTemplate();
