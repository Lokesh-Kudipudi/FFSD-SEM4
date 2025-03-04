const express = require("express");
const { URLSearchParams } = require("url");
// Create a new router object
const toursRouter = express.Router();

// Define route for the root path of tours
toursRouter.route("/").get((req, res) => {
  // Render the 'tours/index' view with a name variable
  res.render("tours/index", { name: "Testing" });
});

const tours = [
  {
    title: "Golden Triangle: Delhi, Agra & Jaipur",
    tag: "featured",
    rating: 5,
    duration: "6 days 5 nights",
    price: "28,000.00",
    mainImage:
      "https://triptovaranasi.in/wp-content/uploads/2023/08/Varanasi-1024x664.webp",
  },
  {
    title: "Backwaters of Kerala: Alleppey & Kumarakom",
    tag: "popular",
    rating: 4,
    duration: "5 days 4 nights",
    price: "22,500.00",
    mainImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbadu9m2jEZPw8VwMwbViQlXerMZ_TTc-hg&s",
  },
  {
    title: "Majestic Rajasthan: Udaipur, Jodhpur & Jaisalmer",
    tag: "new",
    rating: 5,
    duration: "8 days 7 nights",
    price: "30,000.00",
    mainImage:
      "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZnJpbmRpYV9jb2tlX3B1ZXJ0YV9tZXJsaW5fMC1pbWFnZS1reWJkZmpqci5qcGc.jpg",
  },
  {
    title: "Spiritual Varanasi & Sarnath Tour",
    tag: "spiritual",
    rating: 5,
    duration: "4 days 3 nights",
    price: "15,000.00",
    mainImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_VDxOBv8Q1u3yjsZO6aUgbFsaEXL0cb6NA&s",
  },
  {
    title: "Kashmir Paradise: Srinagar, Gulmarg & Pahalgam",
    rating: 4,
    duration: "7 days 6 nights",
    price: "35,000.00",
    mainImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTDtqVgKil3J5sQeg_u8xU5FhfXJ52zEps9Q&s",
  },
  {
    title: "Goa Beach & Adventure Tour",
    rating: 3,
    duration: "5 days 4 nights",
    price: "20,500.00",
    mainImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhwZZXAO5lOnJ5ue3I3mx2KIQ19rmdZs3eWw&s",
  },
  {
    title: "Himalayan Escape: Shimla & Manali",
    rating: 4,
    duration: "6 days 5 nights",
    price: "26,000.00",
    mainImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWtgI18oOyQCJpoOIoLuQAbPGYrgT1QkoAQ&s",
  },
  {
    title: "Andaman Islands: Port Blair & Havelock",
    rating: 4,
    duration: "6 days 5 nights",
    price: "32,000.00",
    mainImage:
      "https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL2ZydGhhaWxhbmRfcGh1a2V0X2tvaF9waGlfOC1pbWFnZS1reWJhaDJpYi5qcGc.jpg",
  },
  {
    title: "Darjeeling & Gangtok: Himalayan Retreat",
    rating: 4,
    duration: "7 days 6 nights",
    price: "25,500.00",
    mainImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspADhqmvbB5NqFX55mw05WhwgO1Z2Iso9qg&s",
  },
  {
    title: "Ranthambore & Jaipur: Wildlife & Heritage",
    rating: 5,
    duration: "5 days 4 nights",
    price: "23,000.00",
    mainImage:
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/Naulakha_gate%2Cranthambor_fort.jpg",
  },
  {
    title: "Rishikesh & Haridwar Yoga & Spiritual Retreat",

    rating: 3,
    duration: "5 days 4 nights",
    price: "18,000.00",
    mainImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIHAHWCb9Sfaa_jKKJ6h7qSKeD-9obvpvn0Q&s",
  },
  {
    title: "Meghalaya: Cherrapunji & Shillong Adventure",
    rating: 0,
    duration: "6 days 5 nights",
    price: "27,000.00",
    mainImage:
      "https://images.pexels.com/photos/18476582/pexels-photo-18476582/free-photo-of-waterfalls-on-rocks-in-deep-forest.jpeg",
  },
  {
    title: "Madurai, Rameshwaram & Kanyakumari Pilgrimage",

    rating: 2,
    duration: "6 days 5 nights",
    price: "21,500.00",
    mainImage:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/India_-_Madurai_temple_-_0781.jpg",
  },
  {
    title: "Sundarbans Wildlife Safari",
    rating: 5,
    duration: "4 days 3 nights",
    price: "19,000.00",
    mainImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Chital_deer%2C_Sundarbans_East_Wildlife_Sanctuary_01.jpg",
  },
  {
    title: "Ooty & Coorg Hill Station Retreat",
    rating: 5,
    duration: "6 days 5 nights",
    price: "24,500.00",
    mainImage:
      "https://live.staticflickr.com/3588/3445424333_f14c80b6da_b.jpg",
  },
  {
    title: "Leh & Ladakh Adventure Tour",
    rating: 5,
    duration: "7 days 6 nights",
    price: "40,000.00",
    mainImage:
      "https://live.staticflickr.com/7289/10991694376_40a1f41791_b.jpg",
  },
  {
    title: "Pondicherry & Mahabalipuram Coastal Tour",
    rating: 5,
    duration: "5 days 4 nights",
    price: "19,500.00",
    mainImage:
      "https://www.worldhistory.org/uploads/images/4127.jpg",
  },
  {
    title: "Lakshadweep Island Getaway",
    duration: "5 days 4 nights",
    rating: 5,
    price: "35,000.00",
    mainImage:
      "https://images.pexels.com/photos/22614625/pexels-photo-22614625/free-photo-of-idyllic-beach-on-bangaram-island-in-india.jpeg",
  },
  {
    title: "Bhubaneswar & Puri: Odisha Heritage",

    rating: 5,
    duration: "5 days 4 nights",
    price: "21,000.00",
    mainImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7Q96iTxbBt6p28T9o3Nl5knojVV7_GRBjQ&s",
  },
  {
    title: "Ajanta & Ellora: Maharashtra Heritage Tour",
    rating: 5,
    duration: "4 days 3 nights",
    price: "18,500.00",
    mainImage:
      "https://upload.wikimedia.org/wikipedia/commons/f/f3/Ajanta_Ellora_caves-_Maharashtra%2CIndia.jpg",
  },
];

// Define route for the search path of tours
toursRouter.route("/search").get((req, res) => {
  const searchParam = req.query;

  let currentPage = searchParam?.page;
  let rating = searchParam?.rating;

  if (currentPage == undefined) {
    currentPage = 0;
  }

  if (rating == undefined) {
    rating = 1;
  }

  let toursToDisplay = tours;

  if (rating != undefined) {
    toursToDisplay = toursToDisplay.filter((tour) => {
      return +rating <= tour.rating;
    });
  }

  const numberOfCardsPerPage = 12;
  const numberOfPages = Math.floor(
    (toursToDisplay.length - 1) / numberOfCardsPerPage
  );

  toursToDisplay = toursToDisplay.slice(
    currentPage * numberOfCardsPerPage,
    currentPage * numberOfCardsPerPage + numberOfCardsPerPage
  );

  let displayRightButton = true;
  let displayLeftButton = true;

  if (currentPage == numberOfPages) {
    displayRightButton = false;
  }

  if (currentPage == 0) {
    displayLeftButton = false;
  }

  // Render the 'tours/tours' view
  res.render("tours/tours", {
    tours: toursToDisplay,
    displayButton: { displayLeftButton, displayRightButton },
    rating: rating,
  });
});

const tour = {
  tour_id: "T12345", //
  title: "Grand European Adventure", //
  tags: ["In-depth Cultural", "Group", "Fully Guided"], //
  images: [
    "https://live.staticflickr.com/7289/10991694376_40a1f41791_b.jpg",
  ], //
  duration: "14 days", //
  startLocation: "Vijayawada", //
  description:
    "Explore the best of Europe with this 15-day guided tour covering iconic cities, breathtaking landscapes, and cultural heritage sites.", //
  language: "Telugu",
  price: {
    currency: "INR", //
    amount: 3500, //
    discount: 0.2, //
  },
  includes: [
    "Accommodation",
    "Daily breakfast & selected meals",
    "Guided sightseeing tours",
    "Airport transfers",
    "Transport between cities",
  ], //
  destinations: [
    {
      name: "London, United Kingdom",
      image:
        "https://live.staticflickr.com/7289/10991694376_40a1f41791_b.jpg",
    },
    {
      name: "Paris, France",
      image:
        "https://live.staticflickr.com/7289/10991694376_40a1f41791_b.jpg",
    },
    {
      name: "Rome, Italy",
      image:
        "https://live.staticflickr.com/7289/10991694376_40a1f41791_b.jpg",
    },
  ], //
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
  ], //
  guides: {
    type: "Professional English-speaking guides",
    available_languages: [
      "English",
      "French",
      "Italian",
      "Spanish",
    ],
  },
  availableMonths: ["April 2025", "May 2025", "June 2025"],
  bookingDetails: [
    {
      startDate: "16 March 2025",
      startDay: "Sunday",
      endDate: "20 March 2025",
      endDay: "Thursday",
      status: "Filling Fast",
      discount: 0.2,
    },
    // {
    //   startDate: "19 March 2025",
    //   status: "Filling Fast",
    //   discount: 0.2,
    // },
    // {
    //   startDate: "25 March 2025",
    //   status: "Filling Fast",
    //   discount: 0.2,
    // },
  ],
};

// Define route
toursRouter.route("/tour/:id").get((req, res) => {
  res.render("tours/tour", { tour: tour });
});

module.exports = toursRouter;
