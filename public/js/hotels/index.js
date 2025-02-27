let currIndex = 0;
const totalCards = document.querySelectorAll(".card").length;
const visibleCards = 5;
const cardWidth =
  document.querySelector(".card").offsetWidth + 10; // card width + margin
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

document.addEventListener("DOMContentLoaded", function () {
  const hotelCardsContainer =
    document.querySelector(".hotel-cards");

  const hotels = [
    {
      image: "https://via.placeholder.com/250x150", // Replace with real image URL
      name: "Luxury Hotel",
      location: "Paris, France",
      rating: "⭐ 4.5",
    },
    {
      image: "https://via.placeholder.com/250x150",
      name: "Cozy Resort",
      location: "Bali, Indonesia",
      rating: "⭐ 4.8",
    },
    {
      image: "https://via.placeholder.com/250x150",
      name: "City Stay",
      location: "New York, USA",
      rating: "⭐ 4.3",
    },
  ];

  hotels.forEach((hotel) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${hotel.image}" alt="${hotel.name}">
      <h3>${hotel.name}</h3>
      <p>${hotel.location}</p>
      <span class="rating">${hotel.rating}</span>
    `;

    hotelCardsContainer.appendChild(card);
  });
});
