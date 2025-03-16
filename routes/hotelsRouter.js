const express = require("express"); // Import the express module

const hotelsRouter = express.Router(); // Create a new router object

// Define a route for the root path of the hotelsRouter
hotelsRouter.route("/").get((req, res) => {
  // Render the "hotels/index" view and pass an object with a name property
  res.render("hotels/index", { user: req.session.user });
});

// hotelsRouter.route("/search").get((req, res) => {
//   // Render the "hotels/index" view and pass an object with a name property
//   res.render("hotels/hotels", { name: "Testing" });
// });

const hotels = [
  {
    id: "H12345",
    title: "JW Marriott Hotel Mumbai",
    location: "Mumbai",
    description:
      "Located in the heart of Mumbai, JW Marriott Hotel Mumbai offers luxurious accommodations",
    address: "No. 89 Century Avenue, Pudong New Area, Mumbai",
    rating: 4,
    amenities: [
      "🏊‍♀️ Pool",
      "🍸 Bar",
      "🍇 Restaurant",
      "🤸 Fitness Center",
      "💆‍♂️ Spa",
    ],
    mainImage:
      "https://www.varmalla.com/wp-content/uploads/2023/10/jw-marriott-juhu-65240737da1ee.webp",
    images: [
      "https://cache.marriott.com/content/dam/marriott-renditions/BLRJW/blrjw-deluxe-twin-3306-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1920px:*",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/519403307.jpg?k=f0b5f969ab27c629a8528b5aab3b757ed2db8a6e15f62b846a6034c31323f355&o=&hp=1",
      "https://cache.marriott.com/content/dam/marriott-digital/jw/apec/hws/b/blrjw/en_us/photo/unlimited/assets/blrjw-lobby-0041.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/629548962.jpg?k=d0365bfecf3dfd03e02ce81bfe0d825fb0b48ec6785a873e827e4f87ccedf758&o=&hp=1",
    ],
    faq: [
      {
        question:
          "Does JW Marriott Mumbai Juhu offer free cancellation for a full refund?",
        answer:
          "Yes, JW Marriott Mumbai Juhu does have fully refundable room rates available to book on our site. If you’ve booked a fully refundable room rate, this can be cancelled up to a few days before check-in depending on the property's cancellation policy. Just make sure to check this property's cancellation policy for the exact terms and conditions.",
      },
      {
        question: "Is there a pool at JW Marriott Mumbai Juhu?",
        answer:
          "Yes, there are 3 outdoor pools and a children's pool. Guests have 24-hour pool access.",
      },
      {
        question: "Are pets allowed at JW Marriott Mumbai Juhu?",
        answer:
          "Sorry, pets and service animals aren't allowed.",
      },
      {
        question:
          "Is parking offered on site at JW Marriott Mumbai Juhu?",
        answer:
          "Yes, there's free self and valet parking. Electric vehicle charging is available.",
      },
      {
        question:
          "What are the check-in and check-out times at JW Marriott Mumbai Juhu?",
        answer:
          "YCheck-in start time: 3:00 PM; Check-in end time: midnight. Check-out time is noon. Late check-out is available for a charge (subject to availability). Contactless check-in and check-out are available.",
      },
      {
        question:
          "What is there to do at JW Marriott Mumbai Juhu and nearby?",
        answer:
          "Have fun during the warmer months with activities nearby such as sailing. Additional recreation onsite includes fitness classes and yoga. Indulge in a treatment at the spa, soothe your senses in the hot tub, or go for a swim in one of the 3 outdoor swimming pools. JW Marriott Mumbai Juhu also has a waterslide and a sauna, as well as a steam room and a garden.",
      },
      {
        question:
          "Are there restaurants at or near JW Marriott Mumbai Juhu?",
        answer:
          "Yes, there are 4 onsite restaurants, featuring local and international cuisine and pool views.",
      },
      {
        question:
          "What's the area around JW Marriott Mumbai Juhu like?",
        answer:
          "Yes, there are 4 onsite restaurants, featuring local and international cuisine and pool views.",
      },
    ],
    policies: [
      "The property has connecting/adjoining rooms, which are subject to availability and can be requested by contacting the property using the number on the booking confirmation.",
      "Noise-free guestrooms cannot be guaranteed.",
      "Only registered guests are allowed in the guestrooms.",
      "This property uses wind energy, plus a grey water recycling system and eco-friendly cleaning products.",
      "Guests can rest easy knowing there's a carbon monoxide detector, a fire extinguisher, a smoke detector, a security system, a first aid kit, and window guards on site.",
      "This property accepts credit cards and cash.",
      "This property affirms that it follows the cleaning and disinfection practices of Commitment to Clean (Marriott).",
      "Please note that cultural norms and guest policies may differ by country and by property. The policies listed are provided by the property.",
      "Children aged 13 are allowed in the Executive Lounge until 2100 and must be accompanied by an adult.",
    ],
    extras: {
      "Children And Extra Beds": [
        "Rollaway beds are available for INR 2000.0 per night",
      ],
      "Pool, spa, & gym (if applicable)": [
        "Pool open 24-hours",
        "Guests under 18 years old are not allowed in the spa",
        "Reservations are required for massage services and spa treatments and can be made by contacting the property before arrival at the number on the booking confirmation",
      ],
      "Optional extras": [
        "Buffet breakfast is offered for an extra charge of approximately INR 1652 to 1652 for adults, and INR 826 to 826 for children",
        "Late check-out can be arranged for an extra charge (subject to availability)",
      ],
    },
    accessibility: {
      "Common Areas": [
        "Wheelchair accessible (may have limitations)",
        "Accessible parking spaces",
        "Accessible shuttle",
        "Elevator (43 inch wide door)",
        "Front entrance ramp",
        "Pool access ramp on site",
        "Stair-free path to entrance",
      ],
      Rooms: [
        "Accessible bathtub",
        "Doorbell and phone notification",
        "Hand-held showerhead",
        "Height-adjustable showerhead",
        "Lever door handles",
      ],
    },
    roomType: [
      {
        title: "1 King Bed, Ocean View",
        price: "24000",
        rating: 4,
        features: [
          "Free self parking",
          "28 sq m",
          "Free WiFi",
          "Partially refundable",
          "Non Smoking",
        ],
        image:
          "https://r1imghtlak.mmtcdn.com/e0a6f7a03dfb11eb9d0d0242ac110002.jpg",
      },
      {
        title: "2 Twin Beds, Ocean View",
        price: "28000",
        rating: 5,
        features: [
          "Free self parking",
          "28 sq m",
          "Free WiFi",
          "Partially refundable",
          "Non Smoking",
        ],
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/451904127.jpg?k=a17e5863d29dcb3c19364a4cb0a06601791e28e4a51c7461928a88ac9a4cf6fd&o=&hp=1",
      },
      {
        title: "1 King Bed, Hill View",
        price: "32000",
        rating: 3,
        features: [
          "Free self parking",
          "28 sq m",
          "Free WiFi",
          "Partially refundable",
        ],
        image:
          "https://q-xx.bstatic.com/xdata/images/hotel/max500/495925121.jpg?k=6c95f8e784b3e49dee4f2f6f6a74b0c904966615a1a55f67c17fcf3e8c4ad1d8&o=",
      },
    ],
  },
];

hotelsRouter.route("/search").get((req, res) => {
  // Render the "hotels/index" view and pass an object with a name property
  res.render("hotels/hotels", {
    hotels,
    user: req.session.user,
  });
});

hotelsRouter.route("/hotel/:id").get((req, res) => {
  const id = req.params.id;
  console.log(id);

  const hotel = hotels.filter((hotel) => hotel.id == id)[0];
  // Render the "hotels/index" view and pass an object with a name property
  res.render("hotels/hotel", { hotel, user: req.session.user });
});

module.exports = hotelsRouter; // Export the router object
