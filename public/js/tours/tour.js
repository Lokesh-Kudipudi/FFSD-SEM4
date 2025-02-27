const tour = {
  tour_id: "T12345",
  title: "Grand European Adventure: 15 Days Tour",
  description:
    "Explore the best of Europe with this 15-day guided tour covering iconic cities, breathtaking landscapes, and cultural heritage sites.",
  duration: "15 days",
  language: "Telugu",
  price: {
    currency: "USD",
    amount: 3500,
    includes: [
      "Accommodation",
      "Daily breakfast & selected meals",
      "Guided sightseeing tours",
      "Airport transfers",
      "Transport between cities",
    ],
  },
  destinations: [
    {
      name: "London, United Kingdom",
      highlights: [
        "Buckingham Palace",
        "Big Ben & Houses of Parliament",
        "Thames River Cruise",
      ],
      stay_duration: "2 days",
      link: "https://live.staticflickr.com/7289/10991694376_40a1f41791_b.jpg",
    },
    {
      name: "Paris, France",
      highlights: [
        "Eiffel Tower",
        "Louvre Museum",
        "Seine River Cruise",
      ],
      stay_duration: "3 days",
      link: "https://live.staticflickr.com/7289/10991694376_40a1f41791_b.jpg",
    },
    {
      name: "Rome, Italy",
      highlights: [
        "Colosseum",
        "Vatican City & St. Peter’s Basilica",
        "Trevi Fountain",
      ],
      stay_duration: "3 days",
      link: "https://live.staticflickr.com/7289/10991694376_40a1f41791_b.jpg",
    },
  ],
  itinerary: [
    {
      day: 1,
      location: "London",
      activities: [
        "Arrive in London and check in to the hotel",
        "Evening Thames River Cruise",
        "Welcome Dinner at a traditional British restaurant",
      ],
    },
    {
      day: 2,
      location: "London",
      activities: [
        "Guided city tour covering Buckingham Palace, Big Ben, and Westminster Abbey",
        "Afternoon at the British Museum",
        "Evening at leisure in Covent Garden",
      ],
    },
    {
      day: 3,
      location: "Paris",
      activities: [
        "Morning Eurostar train to Paris",
        "Visit the Eiffel Tower and Champ de Mars",
        "Evening Seine River Cruise",
      ],
    },
  ],
  accommodations: [
    {
      city: "London",
      hotel_name: "The Royal London Hotel",
      rating: "4-star",
      amenities: [
        "Free WiFi",
        "Breakfast included",
        "Gym",
        "Airport Shuttle",
      ],
    },
    {
      city: "Paris",
      hotel_name: "Hotel de Paris",
      rating: "4-star",
      amenities: [
        "Free WiFi",
        "Breakfast included",
        "City view rooms",
      ],
    },
  ],
  transportation: {
    international_flights: "Not Included",
    local_transport: [
      "Eurostar train from London to Paris",
      "Luxury coach for city sightseeing",
    ],
  },
  meals: {
    included: [
      "Daily Breakfast",
      "Welcome Dinner in London",
      "Farewell Dinner in Rome",
    ],
    not_included: ["Lunches", "Drinks"],
  },
  guides: {
    type: "Professional English-speaking guides",
    available_languages: [
      "English",
      "French",
      "Italian",
      "Spanish",
    ],
  },
  reviews: [
    {
      user: "John Doe",
      rating: 4.8,
      comment:
        "Fantastic trip! The itinerary was well-planned, and the guides were knowledgeable.",
    },
    {
      user: "Emma Watson",
      rating: 5.0,
      comment:
        "A dream vacation! The accommodations and transportation were top-notch.",
    },
  ],
  available_months: ["April 2025", "May 2025", "June 2025"],
  booking_details: [
    {
      start_date: "2025-06-15",
      status: "Filling Fast",
      discount: 0.2,
    },
    {
      start_date: "2025-06-15",
      status: "Filling Fast",
      discount: 0.2,
    },
    {
      start_date: "2025-06-15",
      status: "Filling Fast",
      discount: 0.2,
    },
    {
      start_date: "2025-06-15",
      status: "Filling Fast",
      discount: 0.2,
    },
    {
      start_date: "2025-06-15",
      status: "Filling Fast",
      discount: 0.2,
    },
  ],
};

const placesToVisitContainer = document.querySelector(
  ".places-to-visit-image-container"
);
const placesToVisitImageContainer = document.querySelector(
  ".places-to-visit-image-container"
);
const itineraryAccordion = document.querySelector(
  ".itinerary-accordion"
);
const includedSectionList = document.querySelector(
  ".included-section-list"
);

const choiceSelectionContainer = document.querySelector(
  ".choice-selection-container"
);
const bookingCardContainer = document.querySelector(
  ".booking-card-container"
);

const destinations = tour.destinations;
const itinerary = tour.itinerary;
const included = tour.price.includes;
const bookingDetails = tour.booking_details;
const available_months = tour.available_months;

destinations.forEach((destination) => {
  const placesToVisitTemplate = `<div class="places-to-visit-image-card">
            <img
              class="places-to-visit-image-card-img"
              src=${destination.link}
              alt="NOTHING"
            />
            <h3 class="places-to-visit-image-card-heading">
              ${destination.name}
            </h3>
          </div>`;

  placesToVisitImageContainer.insertAdjacentHTML(
    "afterbegin",
    placesToVisitTemplate
  );
});

itinerary.forEach((item) => {
  const itineraryTemplate = `<div class="itinerary-item">
            <p class="itinerary-number">${item.day}</p>
            <p class="itinerary-text">
              ${item.location}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="itinerary-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div class="itinerary-hidden-box">
              <ul>
              ${item.activities
                .map((activity) => {
                  return `<li>
                  ${activity}
                </li>`;
                })
                .join()}
              </ul>
            </div>
          </div>`;

  itineraryAccordion.insertAdjacentHTML(
    "beforeend",
    itineraryTemplate
  );
});

itineraryAccordion.addEventListener("click", (e) => {
  const divClicked = e.target.closest(".itinerary-item");
  divClicked.classList.toggle("itinerary-open");
});

included.forEach((item) => {
  const includedTemplate = `<div>✔ ${item}</div>`;
  includedSectionList.insertAdjacentHTML(
    "beforeend",
    includedTemplate
  );
});

choiceSelectionContainer.addEventListener("click", (e) => {
  document
    .querySelectorAll(".choice-month")
    .forEach((btn) => btn.classList.remove("choice-selected"));
  const button = e.target.closest("button");
  button.classList.toggle("choice-selected");
});

available_months.forEach((month) => {
  const choiceMonthTemplate = `<button class="choice-month">${month}</button>`;

  choiceSelectionContainer.insertAdjacentHTML(
    "beforeend",
    choiceMonthTemplate
  );
});

bookingDetails.forEach((booking_detail) => {
  const bookingCardTemplate = `<div class="booking-card">
            <div class="booking-card-date-section">
              <div class="booking-card-date">
                <span class="booking-card-day">Sunday</span>
                <span class="booking-card-full-date"
                  >16 Mar, 2025</span
                >
              </div>
              <div class="booking-card-arrow">➡</div>
              <div class="booking-card-date">
                <span class="booking-card-day">Saturday</span>
                <span class="booking-card-full-date"
                  >29 Mar, 2025</span
                >
              </div>
              <div class="booking-card-details-section">
                <div class="booking-card-price">
                  ${
                    booking_detail.discount
                      ? `<span  class="booking-card-old-price"
                    >${tour.price.amount}</span
                  >
                  <span class="booking-card-new-price"
                    >$${
                      tour.price.amount -
                      tour.price.amount * booking_detail.discount
                    }</span
                  >`
                      : `
                  <span class="booking-card-new-price"
                    >$${tour.price.amount}</span
                  >`
                  }
                </div>
              </div>
              <button class="booking-card-confirm-btn">
                Confirm Dates
              </button>
            </div>
            <div class="booking-card-language">🌐 ${
              tour.language
            }</div>

            <div class="booking-card-status">
              <span class="booking-card-status-icon"></span>
              <span class="booking-card-status-text"
                >${booking_detail.status}</span
              >
            </div>
          </div>`;

  bookingCardContainer.insertAdjacentHTML(
    "beforeend",
    bookingCardTemplate
  );
});
