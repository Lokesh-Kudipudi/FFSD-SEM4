const cardData = [
  {
    image: "./images/spa.webp",
    title: "The Leela Mumbai",
    location: "Andheri",
    rating: "9.2",
    reviews: "1,009",
    label: "Superb",
  },
  {
    image: "image2.jpg",
    title: "JW Marriott Mumbai Sahar",
    location: "Mumbai",
    rating: "9.2",
    reviews: "913",
    label: "Superb",
  },
  {
    image: "image3.jpg",
    title: "Grand Hyatt Mumbai Hotel",
    location: "Santacruz",
    rating: "8.8",
    reviews: "1,002",
    label: "Fabulous",
  },
  {
    image: "image4.jpg",
    title: "Courtyard by Marriott Mumbai",
    location: "Andheri East",
    rating: "8.8",
    reviews: "1,000",
    label: "Fabulous",
  },
  {
    image: "image5.jpg",
    title: "Taj Lands End",
    location: "Bandra West",
    rating: "9.0",
    reviews: "890",
    label: "Superb",
  },
  {
    image: "image6.jpg",
    title: "Sofitel Mumbai BKC",
    location: "Bandra Kurla Complex",
    rating: "8.9",
    reviews: "1,120",
    label: "Fabulous",
  },
  {
    image: "image7.jpg",
    title: "The Oberoi Mumbai",
    location: "Nariman Point",
    rating: "9.4",
    reviews: "750",
    label: "Superb",
  },
  {
    image: "image8.jpg",
    title: "Trident Nariman Point",
    location: "Nariman Point",
    rating: "9.1",
    reviews: "980",
    label: "Superb",
  },
];

const cardsContainer = document.querySelector(".cards");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const cardsPerPage = 4;

// Function to render cards based on index
function renderCards() {
  cardsContainer.innerHTML = "";
  for (let i = currentIndex; i < currentIndex + cardsPerPage; i++) {
    if (i >= cardData.length) break;

    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <img src="${cardData[i].image}" alt="${cardData[i].title}">
            <div class="card-content">
                <h3>${cardData[i].title}</h3>
                <p>${cardData[i].location}</p>
                <span class="rating">${cardData[i].rating} ${cardData[i].label} (${cardData[i].reviews} reviews)</span>
            </div>
        `;
    cardsContainer.appendChild(card);
  }

  // Enable/disable buttons based on index
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex + cardsPerPage >= cardData.length;
}

// Event listeners for navigation buttons
nextBtn.addEventListener("click", () => {
  if (currentIndex + cardsPerPage < cardData.length) {
    currentIndex += cardsPerPage;
    renderCards();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex - cardsPerPage >= 0) {
    currentIndex -= cardsPerPage;
    renderCards();
  }
});

// Initial render
renderCards();
