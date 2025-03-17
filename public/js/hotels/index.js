let currIndex = 0;
const totalCards = document.querySelectorAll(".card1").length;
const visibleCards = 5;
const cardWidth =
  document.querySelector(".card1").offsetWidth + 10; // card width + margin
const container = document.getElementById("card-container");

document
  .getElementById("nextBtn")
  .addEventListener("click", () => {
    if (currIndex < totalCards - visibleCards) {
      currIndex++;
      container.style.transform = `translateX(-${
        currIndex * cardWidth
      }px)`;
    }
  });

document
  .getElementById("prevBtn")
  .addEventListener("click", () => {
    if (currIndex > 0) {
      currIndex--;
      container.style.transform = `translateX(-${
        currIndex * cardWidth
      }px)`;
    }
  });

// document.addEventListener("DOMContentLoaded", function () {
//   const hotelCardsContainer =
//     document.querySelector(".hotel-cards");
//   const leftArrow = document.getElementById("leftArrow");
//   const rightArrow = document.getElementById("rightArrow");

//   const hotels = [
//     {
//       image:
//         "https://imgs.search.brave.com/79Jv16CuXlIx0SLUgUvvGdNtecF__awMDcfauKRE8MY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zml2ZXN0YXJhbGxp/YW5jZS5jb20vZmls/ZXMvZml2ZXN0YXJh/bGxpYW5jZS5jb20v/ZmllbGQvaW1hZ2Uv/bm9kZXMvMjAxOC80/NjA0Ny8wX0VYVEVS/SU9SLVhMLmpwZw",
//       name: "JW Marriott Mumbai Sahar",
//       location: "Mumbai",
//       rating: "⭐ 9.2 Superb (927 reviews)",
//     },
//     {
//       image:
//         "https://imgs.search.brave.com/79Jv16CuXlIx0SLUgUvvGdNtecF__awMDcfauKRE8MY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zml2ZXN0YXJhbGxp/YW5jZS5jb20vZmls/ZXMvZml2ZXN0YXJh/bGxpYW5jZS5jb20v/ZmllbGQvaW1hZ2Uv/bm9kZXMvMjAxOC80/NjA0Ny8wX0VYVEVS/SU9SLVhMLmpwZw",
//       name: "JW Marriott Mumbai Juhu",
//       location: "Juhu",
//       rating: "⭐ 8.8 Fabulous (886 reviews)",
//     },
//     {
//       image:
//         "https://imgs.search.brave.com/79Jv16CuXlIx0SLUgUvvGdNtecF__awMDcfauKRE8MY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zml2ZXN0YXJhbGxp/YW5jZS5jb20vZmls/ZXMvZml2ZXN0YXJh/bGxpYW5jZS5jb20v/ZmllbGQvaW1hZ2Uv/bm9kZXMvMjAxOC80/NjA0Ny8wX0VYVEVS/SU9SLVhMLmpwZw",
//       name: "The Leela Mumbai",
//       location: "Andheri",
//       rating: "⭐ 9.2 Superb (1,003 reviews)",
//     },
//     {
//       image:
//         "https://imgs.search.brave.com/79Jv16CuXlIx0SLUgUvvGdNtecF__awMDcfauKRE8MY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zml2ZXN0YXJhbGxp/YW5jZS5jb20vZmls/ZXMvZml2ZXN0YXJh/bGxpYW5jZS5jb20v/ZmllbGQvaW1hZ2Uv/bm9kZXMvMjAxOC80/NjA0Ny8wX0VYVEVS/SU9SLVhMLmpwZw",
//       name: "Trident Bandra Kurla Mumbai",
//       location: "Bandra Kurla Complex",
//       rating: "⭐ 9.2 Superb (1,000 reviews)",
//     },
//     {
//       image:
//         "https://imgs.search.brave.com/79Jv16CuXlIx0SLUgUvvGdNtecF__awMDcfauKRE8MY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zml2ZXN0YXJhbGxp/YW5jZS5jb20vZmls/ZXMvZml2ZXN0YXJh/bGxpYW5jZS5jb20v/ZmllbGQvaW1hZ2Uv/bm9kZXMvMjAxOC80/NjA0Ny8wX0VYVEVS/SU9SLVhMLmpwZw",
//       name: "SoBar",
//       location: "Mumbai",
//       rating: "⭐ 9.1 Excellent (950 reviews)",
//     },
//     {
//       image:
//         "https://imgs.search.brave.com/79Jv16CuXlIx0SLUgUvvGdNtecF__awMDcfauKRE8MY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zml2ZXN0YXJhbGxp/YW5jZS5jb20vZmls/ZXMvZml2ZXN0YXJh/bGxpYW5jZS5jb20v/ZmllbGQvaW1hZ2Uv/bm9kZXMvMjAxOC80/NjA0Ny8wX0VYVEVS/SU9SLVhMLmpwZw",
//       name: "Trident Bandra Kurla Mumbai",
//       location: "Bandra Kurla Complex",
//       rating: "⭐ 9.2 Superb (1,000 reviews)",
//     },
//     {
//       image:
//         "https://imgs.search.brave.com/79Jv16CuXlIx0SLUgUvvGdNtecF__awMDcfauKRE8MY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zml2ZXN0YXJhbGxp/YW5jZS5jb20vZmls/ZXMvZml2ZXN0YXJh/bGxpYW5jZS5jb20v/ZmllbGQvaW1hZ2Uv/bm9kZXMvMjAxOC80/NjA0Ny8wX0VYVEVS/SU9SLVhMLmpwZw",
//       name: "Trident Bandra Kurla Mumbai",
//       location: "Bandra Kurla Complex",
//       rating: "⭐ 9.2 Superb (1,000 reviews)",
//     },
//     {
//       image:
//         "https://imgs.search.brave.com/79Jv16CuXlIx0SLUgUvvGdNtecF__awMDcfauKRE8MY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zml2ZXN0YXJhbGxp/YW5jZS5jb20vZmls/ZXMvZml2ZXN0YXJh/bGxpYW5jZS5jb20v/ZmllbGQvaW1hZ2Uv/bm9kZXMvMjAxOC80/NjA0Ny8wX0VYVEVS/SU9SLVhMLmpwZw",
//       name: "Trident Bandra Kurla Mumbai",
//       location: "Bandra Kurla Complex",
//       rating: "⭐ 9.2 Superb (1,000 reviews)",
//     },
//     {
//       image:
//         "https://imgs.search.brave.com/79Jv16CuXlIx0SLUgUvvGdNtecF__awMDcfauKRE8MY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zml2ZXN0YXJhbGxp/YW5jZS5jb20vZmls/ZXMvZml2ZXN0YXJh/bGxpYW5jZS5jb20v/ZmllbGQvaW1hZ2Uv/bm9kZXMvMjAxOC80/NjA0Ny8wX0VYVEVS/SU9SLVhMLmpwZw",
//       name: "Trident Bandra Kurla Mumbai",
//       location: "Bandra Kurla Complex",
//       rating: "⭐ 9.2 Superb (1,000 reviews)",
//     },
//   ];

//   let currentIndex = 0;
//   const cardsPerPage = 4;

//   function renderCards() {
//     hotelCardsContainer.innerHTML = "";
//     const visibleHotels = hotels.slice(
//       currentIndex,
//       currentIndex + cardsPerPage
//     );

//     visibleHotels.forEach((hotel) => {
//       const card = document.createElement("div");
//       card.classList.add("card");

//       card.innerHTML = `
//         <img src="${hotel.image}" alt="${hotel.name}">
//         <h3>${hotel.name}</h3>
//         <p>${hotel.location}</p>
//         <span class="rating">${hotel.rating}</span>
//       `;

//       hotelCardsContainer.appendChild(card);
//     });
//   }

//   leftArrow.addEventListener("click", function () {
//     if (currentIndex > 0) {
//       currentIndex -= cardsPerPage;
//       renderCards();
//     }
//   });

//   rightArrow.addEventListener("click", function () {
//     if (currentIndex < hotels.length - cardsPerPage) {
//       currentIndex += cardsPerPage;
//       renderCards();
//     }
//   });

//   // Initial render
//   renderCards();
// });

document.addEventListener("DOMContentLoaded", function () {
  const swipeCards = document.querySelector(".swipe-cards");
  const leftNavBtn = document.querySelector(".left-nav-btn");
  const rightNavBtn = document.querySelector(".right-nav-btn");
  let currentIndex = 0;
  const cardsPerPage = 1; // Adjust based on how many cards you want to show at once

  leftNavBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex -= cardsPerPage;
      updateSwipe();
    }
  });

  rightNavBtn.addEventListener("click", function () {
    if (
      currentIndex <
      swipeCards.children.length - cardsPerPage
    ) {
      currentIndex += cardsPerPage;
      updateSwipe();
    }
  });

  function updateSwipe() {
    const translateX = -currentIndex * (300 + 20); // 300px card width + 20px margin
    swipeCards.style.transform = `translateX(${translateX}px)`;
  }

  // Touch swipe functionality
  let startX,
    isSwiping = false;

  swipeCards.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
    isSwiping = true;
  });

  swipeCards.addEventListener("touchmove", function (e) {
    if (!isSwiping) return;
    const touchX = e.touches[0].clientX;
    const deltaX = startX - touchX;

    if (
      deltaX > 50 &&
      currentIndex < swipeCards.children.length - cardsPerPage
    ) {
      currentIndex += cardsPerPage;
      updateSwipe();
      isSwiping = false;
    } else if (deltaX < -50 && currentIndex > 0) {
      currentIndex -= cardsPerPage;
      updateSwipe();
      isSwiping = false;
    }
  });

  swipeCards.addEventListener("touchend", function () {
    isSwiping = false;
  });

  // Image carousel navigation
});
// Add this to your JS file or in a script tag
function setupImageCarousels() {
  const carousels = document.querySelectorAll(
    ".card-img-wrapper"
  );

  carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll(
      ".image-carousel img"
    );
    const leftBtn = carousel.querySelector(".left-img-nav");
    const rightBtn = carousel.querySelector(".right-img-nav");
    let currentImageIndex = 0;

    // Show first image initially
    if (images.length > 0) {
      images[0].style.display = "block";
    }

    leftBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      images[currentImageIndex].style.display = "none";
      currentImageIndex =
        (currentImageIndex - 1 + images.length) % images.length;
      images[currentImageIndex].style.display = "block";
    });

    rightBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      images[currentImageIndex].style.display = "none";
      currentImageIndex =
        (currentImageIndex + 1) % images.length;
      images[currentImageIndex].style.display = "block";
    });
  });
}

// Run the function when the document is loaded
document.addEventListener(
  "DOMContentLoaded",
  setupImageCarousels
);

const currentImageIndices = [0, 0, 0, 0, 0];

// Navigate image within a card
function navigateImage(cardIndex, direction) {
  const wrapper = document.getElementById(
    `imageWrapper${cardIndex}`
  );
  const images = wrapper.querySelectorAll("img");

  if (direction === "next") {
    currentImageIndices[cardIndex] =
      (currentImageIndices[cardIndex] + 1) % images.length;
  } else {
    currentImageIndices[cardIndex] =
      (currentImageIndices[cardIndex] - 1 + images.length) %
      images.length;
  }

  wrapper.style.transform = `translateX(-${
    currentImageIndices[cardIndex] * 100
  }%)`;
}

// Scroll cards carousel
function scrollCards(direction) {
  const container = document.getElementById("cardsContainer");
  const cardWidth =
    document.querySelector(".mns-card").offsetWidth;
  const scrollAmount = cardWidth + 20; // card width + gap

  if (direction === "right") {
    container.scrollLeft += scrollAmount;
  } else {
    container.scrollLeft -= scrollAmount;
  }
}

// Touch swipe functionality for card carousel
const cardsContainer = document.getElementById("cardsContainer");
let startX, scrollLeft;

cardsContainer.addEventListener("touchstart", (e) => {
  startX = e.touches[0].pageX - cardsContainer.offsetLeft;
  scrollLeft = cardsContainer.scrollLeft;
});

cardsContainer.addEventListener("touchmove", (e) => {
  if (!startX) return;
  const x = e.touches[0].pageX - cardsContainer.offsetLeft;
  const walk = (x - startX) * 2; // Scroll speed multiplier
  cardsContainer.scrollLeft = scrollLeft - walk;
});

cardsContainer.addEventListener("touchend", () => {
  startX = null;
});

// Touch swipe functionality for individual image carousels
document
  .querySelectorAll(".rty-image-carousel")
  .forEach((carousel, index) => {
    let touchStartX, touchEndX;

    carousel.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].clientX;

      if (touchStartX - touchEndX > 50) {
        // Swiped left, show next image
        navigateImage(index, "next");
      } else if (touchEndX - touchStartX > 50) {
        // Swiped right, show previous image
        navigateImage(index, "prev");
      }
    });
  });

// Search Handler

function handleSearch() {
  const input = document.querySelector("#location");
  if (input.value.length == 0) {
    window.location.href = `/hotels/search`;
  } else {
    window.location.href = `/hotels/search?q=${input.value}`;
  }
}
