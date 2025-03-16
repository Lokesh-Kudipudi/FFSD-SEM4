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
    title: "JW Marriott Hotel",
    location: "Mumbai",
    description:
      "Located in the heart of Mumbai, JW Marriott Hotel Mumbai offers luxurious accommodations",
    address: "No. 89 Century Avenue, Pudong New Area, Mumbai",
    rating: 4,
    price: "20000",
    currency: "INR",
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
  {
    id: "H004",
    title: "The Leela Palace",
    location: "Bengaluru",
    description:
      "A luxurious retreat in the heart of Bengaluru, The Leela Palace offers regal accommodations and world-class hospitality.",
    address: "23, Airport Road, Bengaluru, Karnataka 560008",
    rating: 5,
    currency: "INR",

    amenities: [
      "🏊‍♀ Pool",
      "🍷 Bar",
      "🍽 Fine Dining",
      "💆‍♂ Spa",
      "🏋 Gym",
    ],
    mainImage:
      "https://cdn.kiwicollection.com/media/property/PR003110/xl/003110-01-hotel-exterior-night.jpg",
    images: [
      "https://cdn0.weddingwire.in/vendor/9648/3_2/1920/jpg/lobby-pillars_15_39648-161701165311275.jpeg",
      "https://indiatravelite.com/uploads/leelabangaloreroyal-premiere-room1.jpg",
      "https://th.bing.com/th/id/OIP.K3NYA3ZLbPD1N4AIfIrIfQHaE8?rs=1&pid=ImgDetMain",
      "https://c8.alamy.com/comp/BB0GAW/hotel-leela-palace-kempinski-bangalore-india-BB0GAW.jpg",
    ],
    faq: [
      {
        question: "Does The Leela Palace Bengaluru have a spa?",
        answer:
          "Yes, guests can enjoy an Ayurvedic spa experience.",
      },
      {
        question:
          "Is there a swimming pool at The Leela Palace Bengaluru?",
        answer:
          "Yes, there is an outdoor temperature-controlled pool available.",
      },
      {
        question: "What are the check-in and check-out timings?",
        answer:
          "Check-in starts at 3:00 PM and check-out is until 12:00 PM.",
      },
      {
        question:
          "Does the hotel offer airport shuttle service?",
        answer:
          "Yes, an airport shuttle service is available for an additional charge.",
      },
      {
        question:
          "Are there dining options available at The Leela Palace Bengaluru?",
        answer:
          "Yes, there are multiple fine-dining restaurants serving Indian and international cuisine.",
      },
      {
        question: "Does the hotel have free parking?",
        answer:
          "Yes, free self and valet parking are available for guests.",
      },
    ],

    policies: [
      "Valid ID required at check-in.",
      "Pets are not allowed in the property.",
      "No outside food and beverages allowed.",
      "Smoking is only permitted in designated areas.",
      "Guests must be 18 or older to check in without a guardian.",
      "A security deposit may be required at check-in.",
      "Early check-in and late check-out are subject to availability and may incur additional charges.",
      "Children under 12 stay free when using existing bedding.",
    ],

    extras: {
      "Children And Extra Beds": [
        "Rollaway beds available for INR 3000 per night.",
        "Cribs are available upon request at no additional charge.",
        "Maximum occupancy per room may vary depending on room type.",
      ],
      "Dining & Beverages": [
        "Breakfast buffet available for an additional charge.",
        "24-hour room service is available.",
        "Complimentary welcome drink on arrival.",
        "Special dietary meals can be arranged on request.",
      ],
      "Spa & Wellness": [
        "Access to wellness spa and sauna is available for an extra charge.",
        "Yoga and meditation sessions available upon request.",
        "Advance booking required for spa treatments.",
      ],
    },

    accessibility: {
      "Common Areas": [
        "Wheelchair accessible entrance and lobby.",
        "Elevators with braille indicators.",
        "Accessible pathways throughout the property.",
        "Reserved accessible parking spaces available.",
        "Assistance available for guests with disabilities upon request.",
      ],
      Rooms: [
        "Accessible bathroom with grab bars.",
        "Roll-in shower available in select rooms.",
        "Lowered light switches and peepholes for accessibility.",
        "Doorbell with visual and audio notifications.",
        "Accessible desk height and space under the sink.",
      ],
    },

    roomType: [
      {
        title: "Grand Suite, Garden View",
        price: "40000",
        rating: 5,
        features: ["Free WiFi", "Luxury Bath", "Non Smoking"],
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/10/f5/08/b3/lobby--v17459706.jpg",
      },
      {
        title: "Deluxe Room, City View",
        price: "25000",
        rating: 4,
        features: ["Smart TV", "King Bed", "Free Breakfast"],
        image:
          "https://th.bing.com/th/id/OIP.kqVBd_6Lu1rdjSrYp-MPkgHaD4?rs=1&pid=ImgDetMain",
      },
      {
        title: "Executive Suite, Pool View",
        price: "48000",
        rating: 5,
        features: [
          "Private Balcony",
          "Luxury Bath",
          "24/7 Room Service",
        ],
        image:
          "https://th.bing.com/th/id/OIP.J1zhgytRg40UJsOqFGFrKQHaE7?rs=1&pid=ImgDetMain",
      },
    ],
  },
  {
    id: "H005",
    title: "The Lalit",
    location: "Kolkata",
    description:
      "Situated in the heart of Kolkata, The Lalit offers a blend of heritage and luxury with contemporary facilities.",
    address: "EM Bypass, Kolkata, West Bengal 700107",
    rating: 5,
    currency: "INR",

    amenities: [
      "🏊‍♀ Pool",
      "🍽 Restaurant",
      "💆‍♂ Spa",
      "🎭 Live Music",
      "🏋 Gym",
    ],
    mainImage:
      "https://www.thelalit.com/wp-content/uploads/2017/02/Kolkata-Fascade-1-e1486538560549-820x399.jpg",
    images: [
      "https://static.toiimg.com/thumb/msid-29958192,width-1070,height-580,resizemode-75,imgsize-1278268,pt-32,y_pad-40/29958192.jpg",
      "https://www.indianholiday.com/pictures/hotel/hotelgalleryn/the-lalit-great-eastern-hotel-5462-26.jpg",
      "https://r1imghtlak.mmtcdn.com/df5535e053b611eaab4d0242ac110002.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,35&output-format=jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/68/50/7b/the-lalit-great-eastern.jpg?w=900&h=500&s=1",
    ],
    faq: [
      {
        question:
          "Is there an airport shuttle at The Lalit, Kolkata?",
        answer:
          "Yes, paid airport shuttle services are available.",
      },
      {
        question:
          "Does The Lalit, Kolkata have a swimming pool?",
        answer:
          "Yes, the hotel has an outdoor pool with a poolside bar.",
      },
      {
        question: "Are pets allowed at The Lalit, Kolkata?",
        answer: "No, pets are not allowed at the property.",
      },
      {
        question: "What are the dining options at the hotel?",
        answer:
          "The hotel has multiple restaurants offering Indian, Chinese, and continental cuisine.",
      },
      {
        question: "Does The Lalit, Kolkata provide free Wi-Fi?",
        answer:
          "Yes, complimentary Wi-Fi is available in all rooms and public areas.",
      },
      {
        question:
          "What safety measures are in place at the hotel?",
        answer:
          "The hotel follows enhanced cleaning procedures, offers contactless check-in, and provides sanitization stations throughout the property.",
      },
    ],

    policies: [
      "Smoking is allowed in designated areas only.",
      "No outside food or beverages allowed inside the property.",
      "Guests must present a valid government-issued ID at check-in.",
      "Check-in time starts at 2:00 PM and check-out is until 12:00 PM.",
      "Early check-in and late check-out are subject to availability and may incur additional charges.",
      "Visitors are not allowed in guest rooms after 10:00 PM.",
      "Parties or loud music inside rooms are strictly prohibited.",
      "Children under 6 years stay free when using existing bedding.",
    ],

    extras: {
      "Children And Extra Beds": [
        "Extra beds available for INR 2500 per night.",
        "Complimentary cribs available upon request.",
        "Maximum of one extra bed per room.",
      ],
      "Dining & Beverages": [
        "24-hour room service available.",
        "Buffet breakfast is offered at an additional charge.",
        "Special dietary meals can be arranged on prior request.",
        "In-room minibar with a selection of beverages and snacks.",
      ],
      "Recreation & Wellness": [
        "Full-service spa with various treatments available.",
        "Fitness center open 24/7 for guests.",
        "Yoga and meditation sessions available upon booking.",
      ],
    },

    accessibility: {
      "Common Areas": [
        "Ramp access available at main entrance.",
        "Elevator with braille indicators.",
        "Wheelchair-accessible seating in the restaurant and lobby area.",
        "Designated accessible parking spaces available.",
        "Service animals are welcome at the property.",
      ],
      Rooms: [
        "Hand-held showerhead available in accessible rooms.",
        "Grab bars installed in bathrooms for added support.",
        "Lowered light switches and thermostat controls.",
        "Doorbell with visual and audio notifications for hearing-impaired guests.",
        "Wider doorways to accommodate wheelchairs.",
      ],
    },

    roomType: [
      {
        title: "Premium Room, City View",
        price: "18000",
        rating: 4,
        features: ["Free WiFi", "Smart TV", "Non Smoking"],
        image:
          "https://th.bing.com/th/id/OIP.3FOL0tRBRKXWVr_T984LZwHaE7?rs=1&pid=ImgDetMain",
      },
      {
        title: "Luxury Suite, River View",
        price: "32000",
        rating: 5,
        features: [
          "Balcony",
          "Luxury Bath",
          "24/7 Butler Service",
        ],
        image:
          "https://th.bing.com/th/id/OIP.mq3Ges_BfGveiGff6UqSkQHaCU?rs=1&pid=ImgDetMain",
      },
      {
        title: "Club Room, Executive Lounge Access",
        price: "26000",
        rating: 4,
        features: [
          "Free Lounge Access",
          "King Bed",
          "Complimentary Breakfast",
        ],
        image:
          "https://th.bing.com/th/id/OIP.DZO4-IDEKo77EZKIiSwHyQHaEv?rs=1&pid=ImgDetMain",
      },
    ],
  },
  {
    id: "H006",
    title: "Radisson Blu",
    location: "Jaipur",
    description:
      "Located near Jaipur Airport, Radisson Blu provides modern comforts with traditional Rajasthani hospitality.",
    address: "Tonk Road, Jaipur, Rajasthan 302018",
    rating: 4,
    currency: "INR",

    amenities: [
      "🏊‍♀ Rooftop Pool",
      "🍸 Bar",
      "💆‍♂ Spa",
      "🏋 Gym",
    ],
    mainImage:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/75/8d/c3/exterior.jpg?w=900&h=-1&s=1",
    images: [
      "https://r1imghtlak.mmtcdn.com/c194a042252f11e991ea0242ac110003.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,35&output-format=jpg",
      "https://media.radissonhotels.net/image/radisson-blu-hotel-jaipur/poolview/16256-116522-f64874143_3xl.jpg?impolicy=SecondGalleryImg",
      "https://pix10.agoda.net/hotelImages/9456910/0/c12e3a1bd713f658ce6cb8808ec33c3c.jpg?ca=9&ce=1&s=1024x768",
      "https://media.radissonhotels.net/image/radisson-blu-jaipur/guestroom/16256-116522-f68189764_3xl.jpg?impolicy=CustomCrop&cwidth=670&cheight=384",
    ],
    faq: [
      {
        question:
          "Is breakfast included at Radisson Blu, Jaipur?",
        answer:
          "Yes, complimentary breakfast is available for all guests.",
      },
      {
        question:
          "Does Radisson Blu, Jaipur have a swimming pool?",
        answer:
          "Yes, the hotel features an outdoor rooftop pool.",
      },
      {
        question: "What are the check-in and check-out timings?",
        answer:
          "Check-in starts at 2 PM, and check-out is until 12 PM.",
      },
      {
        question:
          "Does Radisson Blu, Jaipur offer airport transfers?",
        answer:
          "Yes, airport shuttle services are available for an additional charge.",
      },
      {
        question:
          "Are there any business facilities at the hotel?",
        answer:
          "Yes, the hotel offers meeting rooms, a business center, and high-speed Wi-Fi.",
      },
      {
        question:
          "What dining options are available at the hotel?",
        answer:
          "Guests can enjoy multiple dining options, including an all-day restaurant, a rooftop bar, and in-room dining.",
      },
    ],

    policies: [
      "Pets are not allowed on the property.",
      "Check-in starts at 2 PM; check-out is until 12 PM.",
      "Government-issued ID is required at check-in.",
      "Smoking is permitted only in designated areas.",
      "Early check-in and late check-out are subject to availability and may incur additional charges.",
      "Guests under 18 must be accompanied by an adult.",
      "Loud music and parties are not permitted inside guest rooms.",
      "Outside food and alcohol are not allowed on the premises.",
    ],

    extras: {
      "Children And Extra Beds": [
        "Extra beds available for INR 2000 per night.",
        "Cribs available upon request at no additional charge.",
        "Maximum of one extra bed per room.",
      ],
      "Dining & Beverages": [
        "Buffet breakfast available daily from 7 AM to 10:30 AM.",
        "24-hour room service available.",
        "A minibar is provided in all rooms.",
        "Special dietary meals available upon request.",
      ],
      "Wellness & Recreation": [
        "Guests have access to the fitness center and spa.",
        "Outdoor rooftop pool with sun loungers.",
        "Sauna and steam room available for guests.",
      ],
    },

    accessibility: {
      "Common Areas": [
        "Ramp access available at hotel entrance.",
        "Accessible parking spots near the main entrance.",
        "Elevators with braille indicators.",
        "Wheelchair-accessible seating in the lobby and restaurant.",
        "Assistance available for guests with mobility needs upon request.",
      ],
      Rooms: [
        "Height-adjustable showerhead in accessible rooms.",
        "Bathroom grab bars for additional support.",
        "Lowered light switches and peepholes for accessibility.",
        "Doorbell with audio and visual notifications for hearing-impaired guests.",
        "Wider doorways to accommodate wheelchairs.",
      ],
    },

    roomType: [
      {
        title: "Deluxe Room, City View",
        price: "15000",
        rating: 4,
        features: ["Free WiFi", "King Bed", "Non Smoking"],
        image:
          "https://media.radissonhotels.net/image/radisson-blu-jaipur/suite/16256-116522-f68189776_3xl.jpg?impolicy=CustomCrop&cwidth=670&cheight=384",
      },
      {
        title: "Business Suite, Lounge Access",
        price: "28000",
        rating: 5,
        features: [
          "Private Lounge",
          "Work Desk",
          "Complimentary Drinks",
        ],
        image:
          "https://www.hotelsgroup.in/radissonblu/gallery/radisson-blu-jaipur-06.jpg",
      },
      {
        title: "Royal Suite, Private Balcony",
        price: "35000",
        rating: 5,
        features: [
          "Private Balcony",
          "Luxury Bath",
          "24/7 Concierge",
        ],
        image:
          "https://th.bing.com/th/id/OIP.EG0afA61AhUezWkCpBZKvQHaEK?rs=1&pid=ImgDetMain",
      },
    ],
  },
  {
    id: "H007",
    title: "Taj Falaknuma Palace",
    location: "Hyderabad",
    description:
      "A former royal palace now serving as a luxury hotel, Taj Falaknuma Palace offers an experience of grandeur and elegance.",
    address:
      "Engine Bowli, Falaknuma, Hyderabad, Telangana 500053",
    rating: 5,
    currency: "INR",

    amenities: [
      "🏊‍♀ Pool",
      "🍽 Fine Dining",
      "🏇 Horse Carriage Rides",
      "💆‍♂ Spa",
    ],
    mainImage:
      "https://th.bing.com/th/id/OIP.pE9U-WlLmb9FjUdD0FEShAHaDc?rs=1&pid=ImgDetMain",
    images: [
      "https://d1cdc15hzkd3wm.cloudfront.net/products/medias/originalmark/X1FQUVhL.jpg",
      "https://th.bing.com/th/id/OIP.Q1AQDzRNCHU4NtY6Ib8GswHaFj?rs=1&pid=ImgDetMain",
      "https://itc.imgix.net/websiteimages/luxurytravel/33477260_h1_palace_zenana.jpg?crop=fit&auto=compress&w=1600",
      "https://d1cdc15hzkd3wm.cloudfront.net/products/medias/originalmark/X1FQUFNB.jpg",
    ],
    faq: [
      {
        question:
          "Is there a dress code at Taj Falaknuma Palace restaurants?",
        answer:
          "Yes, formal attire is required for dinner service.",
      },
      {
        question:
          "Does Taj Falaknuma Palace offer airport transportation?",
        answer:
          "Yes, the hotel provides luxury airport transfers for an additional charge.",
      },
      {
        question: "Is there a spa at Taj Falaknuma Palace?",
        answer:
          "Yes, guests can enjoy Ayurvedic treatments and personalized wellness therapies at the Jiva Spa.",
      },
      {
        question:
          "Are guided palace tours available for guests?",
        answer:
          "Yes, guests can book guided heritage walks to explore the palace's history and architecture.",
      },
      {
        question: "Does the hotel offer free Wi-Fi?",
        answer:
          "Yes, complimentary high-speed Wi-Fi is available throughout the property.",
      },
      {
        question: "What are the check-in and check-out timings?",
        answer:
          "Check-in starts at 2 PM, and check-out is until 12 PM.",
      },
    ],

    policies: [
      "No outside food or beverages allowed on the premises.",
      "Pets are not permitted inside the hotel.",
      "Formal attire is required for dining at select restaurants.",
      "Smoking is allowed only in designated areas.",
      "Check-in starts at 2 PM; check-out is until 12 PM.",
      "Government-issued ID is required for all guests at check-in.",
      "Children under 12 years must be accompanied by an adult at all times.",
      "Guests must maintain decorum due to the historical significance of the property.",
    ],

    extras: {
      "Children And Extra Beds": [
        "Extra beds available for INR 4000 per night.",
        "Complimentary cribs available upon request.",
        "Maximum of one extra bed per room.",
      ],
      "Dining & Beverages": [
        "24-hour in-room dining service available.",
        "Specialized Hyderabadi cuisine available at on-site restaurants.",
        "Private dining experiences available upon request.",
        "Wine-tasting sessions can be arranged for guests.",
      ],
      "Recreation & Wellness": [
        "Outdoor swimming pool with private cabanas.",
        "Fully equipped fitness center with personal trainers available.",
        "Yoga and meditation sessions available upon request.",
        "Horse-drawn carriage rides for a royal experience.",
      ],
    },

    accessibility: {
      "Common Areas": [
        "Elevator available with wide doors and tactile buttons.",
        "Ramp access at the main entrance and throughout the property.",
        "Wheelchair-accessible pathways in the gardens and courtyards.",
        "Dedicated seating for differently-abled guests in dining areas.",
        "Braille signage for visually impaired guests.",
      ],
      Rooms: [
        "Accessible bathroom with grab bars and roll-in showers.",
        "Lever door handles for easy access.",
        "Lowered light switches and wardrobe handles for convenience.",
        "Doorbell with flashing light indicators for hearing-impaired guests.",
        "Wide doorways to accommodate wheelchairs.",
      ],
    },

    roomType: [
      {
        title: "Luxury Room, Garden View",
        price: "38000",
        rating: 5,
        features: ["Free WiFi", "Heritage Decor", "Non Smoking"],
        image:
          "https://cdn.audleytravel.com/1050/751/79/420383-palace-room-taj-falaknuma-palace-hyderabad.jpg",
      },
      {
        title: "Royal Suite, Private Courtyard",
        price: "55000",
        rating: 5,
        features: [
          "Courtyard Access",
          "Luxury Bath",
          "24/7 Butler Service",
        ],
        image:
          "https://d1cdc15hzkd3wm.cloudfront.net/products/medias/originalmark/X1FQUFBF.jpg",
      },
      {
        title: "Grand Presidential Suite",
        price: "75000",
        rating: 5,
        features: [
          "Private Pool",
          "Personal Chef",
          "Exclusive Lounge",
        ],
        image:
          "https://th.bing.com/th/id/OIP.E1Kdw_kwAwg4qM_NQMIWaQHaE7?rs=1&pid=ImgDetMain",
      },
    ],
  },
  {
    id: "H008",
    title: "Oberoi Udaivilas",
    location: "Udaipur",
    description:
      "A lakeside retreat with opulent decor, The Oberoi Udaivilas offers world-class luxury on the banks of Lake Pichola.",
    address: "Haridasji Ki Magri, Udaipur, Rajasthan 313001",
    rating: 5,
    amenities: [
      "🏊‍♀ Infinity Pool",
      "🍷 Wine Cellar",
      "💆‍♂ Spa",
      "🚤 Boat Rides",
    ],
    currency: "INR",

    mainImage:
      "https://media.cntraveler.com/photos/5c06e5a801ffc86b13da2529/16:9/w_2560%2Cc_limit/The-Oberoi-Udaivilas%2C-Udaipur__2018_Chandni----the-al-fresco-dining---The-Oberoi-Udaivilas%2C-Udaipur.jpg",
    images: [
      "https://th.bing.com/th/id/OIP.JQfRshmCHwC4p7qIV9p2JwHaDt?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.aXvk2Q2pDtuBcaa9a4CzCQHaEw?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.uzbVEnmfPiSG3yPeTTmDhAHaE6?rs=1&pid=ImgDetMain",
      "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-udaivilas-udaipur/gallery/featured/udaivilas-gallery-featured-9-spa-pool-724x407.jpg",
    ],

    faq: [
      {
        question:
          "Do all rooms at Oberoi Udaivilas have lake views?",
        answer:
          "Only select premium suites offer direct lake views.",
      },
      {
        question:
          "Does Oberoi Udaivilas offer private boat transfers?",
        answer:
          "Yes, guests can arrive at the hotel via private boat transfers arranged by the hotel.",
      },
      {
        question: "Are pets allowed at Oberoi Udaivilas?",
        answer: "No, pets are not allowed at the property.",
      },
      {
        question:
          "Does the hotel provide airport shuttle services?",
        answer:
          "Yes, luxury airport transfers can be arranged for an additional fee.",
      },
      {
        question: "Are there guided heritage walks available?",
        answer:
          "Yes, guests can book guided tours of Udaipur’s historical sites through the concierge.",
      },
      {
        question: "What wellness facilities are available?",
        answer:
          "The hotel offers an exclusive spa, steam room, and yoga pavilion for guests.",
      },
    ],

    policies: [
      "No smoking indoors; designated smoking areas available.",
      "Children under 12 are not allowed in the spa area.",
      "Guests must present a government-issued ID at check-in.",
      "Check-in starts at 3 PM, and check-out is at 12 PM.",
      "Loud music is not permitted after 10 PM to maintain the tranquility of the resort.",
      "Outside food and beverages are not allowed in the hotel.",
      "Formal or smart-casual attire is required at fine dining restaurants.",
    ],

    extras: {
      "Children And Extra Beds": [
        "Extra beds available for INR 5000 per night.",
        "Complimentary cribs are available for infants.",
        "Maximum one extra bed per room.",
      ],
      "Dining & Beverages": [
        "24-hour in-room dining available.",
        "Authentic Rajasthani cuisine served at the on-site restaurant.",
        "Exclusive private dining experiences available upon request.",
        "Wine and cheese tasting sessions can be arranged.",
      ],
      "Recreation & Wellness": [
        "Outdoor infinity pool with a lake view.",
        "Private yoga and meditation sessions available.",
        "Cooking classes with the hotel’s executive chef.",
        "Luxury spa treatments with traditional Ayurvedic therapies.",
      ],
    },

    accessibility: {
      "Common Areas": [
        "Wheelchair-friendly pathways across the property.",
        "Elevator available with wide doors and braille buttons.",
        "Accessible seating in restaurants and lounge areas.",
        "Ramp access at the main entrance.",
        "Tactile paving for visually impaired guests.",
      ],
      Rooms: [
        "Accessible shower with grab bars.",
        "Hand-held showerhead for convenience.",
        "Lowered light switches and wardrobe handles.",
        "Wide doorways for wheelchair accessibility.",
        "Doorbell with flashing light indicators for hearing-impaired guests.",
      ],
    },

    roomType: [
      {
        title: "Premier Room, Garden View",
        price: "45000",
        rating: 5,
        features: [
          "Free Breakfast",
          "Luxury Bath",
          "24/7 Room Service",
        ],
        image:
          "https://th.bing.com/th/id/OIP.hB72cIV-oYfE2eJM3beJkAHaFj?rs=1&pid=ImgDetMain",
      },
      {
        title: "Luxury Suite, Private Pool",
        price: "78000",
        rating: 5,
        features: [
          "Private Infinity Pool",
          "King Bed",
          "Personal Butler",
        ],
        image:
          "https://cdn.audleytravel.com/1400/1000/60/168184-udaivilas-entrance.jpg",
      },
      {
        title: "Kohinoor Suite, Lake View",
        price: "120000",
        rating: 5,
        features: [
          "Panoramic Lake View",
          "Luxury Decor",
          "Private Garden",
        ],
        image:
          "https://qtxasset.com/quartz/qcloud1/media/image/Morning%20at%20The%20Oberoi%20Udaivilas%2C%20Udaipur.jpg?VersionId=M1k8ds8HHvhd.sN9eXmp9fb7PVtfi6pc",
      },
    ],
  },
  {
    id: "H009",
    title: "The Westin",
    location: "Mumbai",
    description:
      "A modern luxury hotel in the heart of Mumbai, offering wellness-focused amenities and premium accommodations.",
    address:
      "International Business Park, Mumbai, Maharashtra 400063",
    rating: 5,
    amenities: [
      "🏊‍♀ Pool",
      "💆‍♂ Spa",
      "🏋 Fitness Studio",
      "🍹 Rooftop Bar",
    ],
    currency: "INR",

    mainImage:
      "https://th.bing.com/th/id/OIP.x6Rwx1sxk9nmexCxkf8OIQAAAA?w=293&h=350&rs=1&pid=ImgDetMain",
    images: [
      "https://th.bing.com/th/id/OIP.8J6har2GlfrERi3GT6QvoQHaC9?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.dMx_uoepu-ytRpXYWUhOUAHaE7?w=800&h=533&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.gwxYlo3O97M1HmKPqJ3qugHaD4?rs=1&pid=ImgDetMain",
      "https://r1imghtlak.mmtcdn.com/df5bc9b83b2611e9a92e0242ac110002.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg",
    ],
    faq: [
      {
        question:
          "Does The Westin Mumbai have a business center?",
        answer:
          "Yes, a fully-equipped business center is available.",
      },
      {
        question:
          "Is airport transportation available at The Westin Mumbai?",
        answer:
          "Yes, paid airport shuttle services can be arranged upon request.",
      },
      {
        question:
          "Does the hotel offer early check-in or late check-out?",
        answer:
          "Early check-in and late check-out are subject to availability and may incur additional charges.",
      },
      {
        question: "Are pets allowed at The Westin Mumbai?",
        answer: "No, pets are not permitted at the property.",
      },
      {
        question: "What dining options are available on-site?",
        answer:
          "The hotel features multiple restaurants serving Indian and international cuisines, as well as a 24-hour café.",
      },
      {
        question: "Are there wellness facilities available?",
        answer:
          "Yes, guests can access a full-service spa, a fitness center, and an outdoor swimming pool.",
      },
    ],

    policies: [
      "Check-in starts at 3 PM and check-out is at 12 PM.",
      "Valid government-issued ID is required at check-in.",
      "No smoking inside rooms; designated smoking areas are available.",
      "Guests are not allowed to bring outside food or beverages.",
      "Noise levels should be minimized after 10 PM to maintain guest comfort.",
      "Formal or smart-casual attire is required in fine-dining areas.",
      "Credit card and cash payments are accepted.",
    ],

    extras: {
      "Children And Extra Beds": [
        "Extra beds available for INR 3000 per night.",
        "Cribs available at no additional charge for infants.",
        "Maximum one extra bed per room.",
      ],
      "Dining & Beverages": [
        "Buffet breakfast available daily for an extra charge.",
        "Room service available 24/7.",
        "Rooftop bar with city views and live music.",
        "Special dietary meals available upon request.",
      ],
      "Recreation & Wellness": [
        "State-of-the-art gym with personal training sessions.",
        "Outdoor infinity pool with sun loungers.",
        "Full-service spa offering Ayurvedic and aromatherapy treatments.",
        "Steam room, sauna, and hot tub facilities available.",
      ],
    },

    accessibility: {
      "Common Areas": [
        "Elevator access to all floors.",
        "Accessible parking spaces available near the entrance.",
        "Ramp access to the main lobby and restaurants.",
        "Braille signage for visually impaired guests.",
        "Wheelchair-accessible pathways throughout the property.",
      ],
      Rooms: [
        "Wheelchair-accessible shower with grab bars.",
        "Hand-held showerhead with adjustable height settings.",
        "Lowered light switches and thermostat controls.",
        "Wide doorways and step-free room access.",
        "Auditory guidance and visual alarms for hearing-impaired guests.",
      ],
    },

    roomType: [
      {
        title: "Deluxe Room, City View",
        price: "22000",
        rating: 4,
        features: ["Smart TV", "Free WiFi", "King Bed"],
        image:
          "https://r1imghtlak.mmtcdn.com/df5bc9b83b2611e9a92e0242ac110002.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg",
      },
      {
        title: "Club Room, Lounge Access",
        price: "28000",
        rating: 5,
        features: [
          "Executive Lounge Access",
          "Non Smoking",
          "Luxury Bath",
        ],
        image:
          "https://th.bing.com/th/id/R.47e79c87b08b3fbad8f7def0c5b7b7ac?rik=klpofztVxvqWPw&riu=http%3a%2f%2fpix10.agoda.net%2fhotelImages%2f195%2f195901%2f195901_17090618310056065186.jpg&ehk=YrNBTC2FInmynIS%2fE842l6msLlpmhNoI8riZHifPqNE%3d&risl=&pid=ImgRaw&r=0",
      },
    ],
  },
  {
    id: "H010",
    title: "ITC Grand Chola",
    location: "Chennai",
    description:
      "A majestic luxury hotel inspired by South Indian heritage, ITC Grand Chola offers a blend of traditional elegance and modern comfort.",
    address: "Mount Road, Chennai, Tamil Nadu 600032",
    rating: 5,
    amenities: [
      "🏊‍♀ Pool",
      "🍽 Fine Dining",
      "💆‍♂ Spa",
      "🏋 Gym",
    ],
    currency: "INR",

    mainImage:
      "https://cache.marriott.com/marriottassets/marriott/MAALC/maalc-exterior-9797-hor-feat.jpg",
    images: [
      "https://images.trvl-media.com/hotels/5000000/4950000/4942800/4942760/116d9887_z.jpg",
      "https://www.oyster.com/wp-content/uploads/sites/35/2019/05/pool-v16387879-1440-1024x683.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/3e/1e/56/itc-one-room.jpg?w=1200&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/a3/53/ee/pool--v16387682.jpg?w=900&h=-1&s=1",
    ],
    faq: [
      {
        question:
          "Does ITC Grand Chola have an airport shuttle service?",
        answer:
          "Yes, paid airport transfer services are available.",
      },
      {
        question:
          "What dining options are available at ITC Grand Chola?",
        answer:
          "The hotel features multiple fine-dining restaurants, a 24-hour café, and a rooftop bar.",
      },
      {
        question: "Does ITC Grand Chola have a swimming pool?",
        answer:
          "Yes, the hotel has an outdoor swimming pool and a children's pool.",
      },
      {
        question: "Are pets allowed at ITC Grand Chola?",
        answer:
          "No, pets are not permitted within the hotel premises.",
      },
      {
        question:
          "What wellness facilities are available at ITC Grand Chola?",
        answer:
          "The hotel offers a full-service luxury spa, a sauna, and a well-equipped fitness center.",
      },
      {
        question:
          "Is there a business center at ITC Grand Chola?",
        answer:
          "Yes, a fully-equipped business center and conference rooms are available for guests.",
      },
    ],

    policies: [
      "No outside food allowed.",
      "Only registered guests are allowed in rooms.",
      "Check-in starts at 2 PM and check-out is at 12 PM.",
      "Smoking is allowed only in designated areas.",
      "Guests must present a valid government-issued ID at check-in.",
      "Credit and debit cards are accepted for all transactions.",
      "Quiet hours must be observed after 10 PM in guest areas.",
    ],

    extras: {
      "Children And Extra Beds": [
        "Extra beds available for INR 3500 per night.",
        "Complimentary cribs are available for infants upon request.",
        "Maximum one extra bed allowed per room.",
      ],
      "Dining & Beverages": [
        "Buffet breakfast available for an extra charge.",
        "24-hour room service with an extensive menu.",
        "A variety of international and Indian cuisines are offered at multiple on-site restaurants.",
      ],
      "Recreation & Wellness": [
        "Outdoor pool with sun loungers and poolside service.",
        "Luxury spa with Ayurvedic and holistic treatments.",
        "State-of-the-art gym with personal trainers available.",
        "Yoga and meditation sessions upon request.",
      ],
    },

    accessibility: {
      "Common Areas": [
        "Ramp access at all major entry points.",
        "Elevator access to all floors.",
        "Braille signage for visually impaired guests.",
        "Accessible parking spaces near the entrance.",
        "Wheelchair-friendly pathways across the property.",
      ],
      Rooms: [
        "Lever door handles for ease of access.",
        "Accessible bathroom with grab bars and roll-in showers.",
        "Height-adjustable showerhead with hand-held options.",
        "Lowered light switches and thermostat controls.",
        "Auditory guidance and visual alarms for guests with hearing impairments.",
      ],
    },

    roomType: [
      {
        title: "Luxury Room, City View",
        price: "30000",
        rating: 5,
        features: [
          "Smart TV",
          "Luxury Bath",
          "24/7 Room Service",
        ],
        image:
          "https://cache.marriott.com/content/dam/marriott-renditions/MAALC/maalc-room-3900-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
      },
      {
        title: "Royal Suite, Private Lounge",
        price: "60000",
        rating: 5,
        features: [
          "Private Lounge Access",
          "Complimentary Breakfast",
          "Luxury Decor",
        ],
        image:
          "https://th.bing.com/th/id/OIP.CF2AcWdJ4xP_ltPSFsxBQQHaE8?w=1024&h=683&rs=1&pid=ImgDetMain",
      },
    ],
  },
  {
    id: "H011",
    title: "The Leela Palace ",
    location: "New Delhi",
    description:
      "A luxurious palace hotel in the capital city, The Leela Palace offers a regal experience with world-class hospitality.",
    address: "Chanakyapuri, New Delhi, Delhi 110023",
    rating: 5,
    amenities: [
      "🏊‍♀ Rooftop Pool",
      "🍽 Fine Dining",
      "💆‍♂ Spa",
      "🏋 Fitness Center",
    ],
    currency: "INR",

    mainImage:
      "https://th.bing.com/th/id/OIP.-FIWNEyvqnIjSOE607bpDAHaDe?rs=1&pid=ImgDetMain",
    images: [
      "https://th.bing.com/th/id/OIP.wRlKI0VUK6fg2w-OvYtTXQHaEK?rs=1&pid=ImgDetMain",
      "https://i.ytimg.com/vi/cr2Rrl3vz9I/maxresdefault.jpg",
      "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2020/08/IMG_3061.jpg?ssl=1",
      "https://th.bing.com/th/id/OIP.bAbpwYFjJRJitJDQLKsirgAAAA?rs=1&pid=ImgDetMain",
    ],

    faq: [
      {
        question:
          "Does The Leela Palace provide airport transfers?",
        answer:
          "Yes, airport transfers are available for an additional charge.",
      },
      {
        question:
          "What dining options are available at The Leela Palace?",
        answer:
          "The hotel features multiple fine-dining restaurants, a rooftop bar, and 24-hour in-room dining.",
      },
      {
        question: "Does The Leela Palace have a swimming pool?",
        answer:
          "Yes, the hotel has an outdoor temperature-controlled swimming pool with a sundeck.",
      },
      {
        question: "Are pets allowed at The Leela Palace?",
        answer:
          "No, pets are not permitted within the hotel premises.",
      },
      {
        question:
          "What wellness facilities are available at The Leela Palace?",
        answer:
          "The hotel offers a luxury spa, steam room, sauna, and a state-of-the-art fitness center.",
      },
      {
        question:
          "Is there a business center at The Leela Palace?",
        answer:
          "Yes, a fully-equipped business center with high-speed internet and meeting rooms is available.",
      },
    ],

    policies: [
      "No outside food allowed.",
      "Pets are not permitted.",
      "Check-in starts at 3 PM, and check-out is at 12 PM.",
      "Smoking is only allowed in designated areas.",
      "Guests must provide a valid government-issued ID at check-in.",
      "Credit and debit cards are accepted for all transactions.",
      "Quiet hours must be observed after 10 PM in guest areas.",
    ],

    extras: {
      "Children And Extra Beds": [
        "Extra beds available for INR 5000 per night.",
        "Complimentary cribs available for infants upon request.",
        "One extra bed allowed per room, subject to availability.",
      ],
      "Dining & Beverages": [
        "Buffet breakfast available for an additional charge.",
        "24-hour room service with an extensive menu.",
        "Signature restaurants serving Indian, Italian, and Pan-Asian cuisine.",
      ],
      "Recreation & Wellness": [
        "Outdoor infinity pool with sun loungers and cabanas.",
        "Luxury spa offering Ayurvedic and international treatments.",
        "Fully-equipped gym with personal trainers available.",
        "Yoga and meditation sessions upon request.",
      ],
    },

    accessibility: {
      "Common Areas": [
        "Wheelchair accessible pathways and ramps.",
        "Elevator access to all floors.",
        "Braille signage for visually impaired guests.",
        "Accessible parking spaces near the entrance.",
        "Handrails along pathways for additional support.",
      ],
      Rooms: [
        "Accessible bathtub with grab bars.",
        "Lever door handles for ease of use.",
        "Lowered light switches and thermostats.",
        "Height-adjustable showerhead with a hand-held option.",
        "Visual alarms and auditory guidance for guests with hearing impairments.",
      ],
    },

    roomType: [
      {
        title: "Grand Deluxe Room, Garden View",
        price: "38000",
        rating: 5,
        features: [
          "Luxury Bath",
          "Non Smoking",
          "24/7 Room Service",
        ],
        image:
          "https://www.theleela.com/prod/content/assets/styles/destinations_slider/public/2021-06/Grande-Deluxe-Room-The-Leela-Palace-New-Delhi.jpg?VersionId=oOunfw00OsE6kmnJo9mRwiHYSflOY77P&itok=QZtmKB3n",
      },
      {
        title: "Royal Suite, Pool View",
        price: "62000",
        rating: 5,
        features: [
          "Personal Butler",
          "Luxury Decor",
          "Complimentary Breakfast",
        ],
        image:
          "https://www.theluxevoyager.com/wp-content/uploads/2019/04/The-Leela-Palace-New-Delhi-Royal-Suite-with-Plunge-Pool-971x546.jpg",
      },
    ],
  },
  {
    id: "H012",
    title: "The Lalit",
    location: "Bangalore",
    description:
      "A premium luxury hotel in the cultural capital of India, The Lalit Kolkata offers contemporary amenities with a touch of heritage.",
    address: "Salt Lake City, Bangalore, Karanataka 700091",
    rating: 5,
    amenities: [
      "🏊‍♀ Pool",
      "🎭 Live Entertainment",
      "💆‍♂ Spa",
      "🍷 Lounge Bar",
    ],
    currency: "INR",

    mainImage:
      "https://th.bing.com/th/id/OIP.7AOpk8_d1M-qwIegxzrpZAHaCU?rs=1&pid=ImgDetMain",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a7c82410203999.566ab3b1a6cd8.jpg",
      "https://th.bing.com/th/id/OIP.NAq2i3u07J_xF5V-DrzwdwHaF7?w=950&h=760&rs=1&pid=ImgDetMain",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/96978e10203999.566ab3b1a3a48.jpg",
      "https://th.bing.com/th/id/OIP.6gy4KPNINkroB1LvFExurQHaE9?rs=1&pid=ImgDetMain",
    ],
    faq: [
      {
        question:
          "Does The Lalit Bangalore allow early check-in?",
        answer:
          "Early check-in is subject to availability and may incur extra charges.",
      },
      {
        question:
          "Does The Lalit Bangalore provide airport shuttle service?",
        answer:
          "Yes, paid airport transfer services are available upon request.",
      },
      {
        question:
          "Are there dining options available at The Lalit Bangalore?",
        answer:
          "Yes, the hotel has multiple restaurants serving Indian and international cuisine.",
      },
      {
        question:
          "Does The Lalit Bangalore have a fitness center?",
        answer:
          "Yes, the hotel offers a fully equipped gym with modern equipment.",
      },
      {
        question:
          "Is there a swimming pool at The Lalit Bangalore?",
        answer:
          "Yes, there is an outdoor pool with a poolside bar.",
      },
      {
        question: "Are pets allowed at The Lalit Bangalore?",
        answer: "No, pets are not allowed at the property.",
      },
    ],

    policies: [
      "No smoking indoors.",
      "Guests must present a valid ID at check-in.",
      "Check-in starts at 2 PM, and check-out is at 12 PM.",
      "Only registered guests are allowed in the rooms.",
      "Outside food and beverages are not permitted.",
      "Guests are required to follow the hotel's dress code in public areas.",
      "Credit and debit cards are accepted for payments.",
    ],

    extras: {
      "Children And Extra Beds": [
        "Rollaway beds available for INR 3500 per night.",
        "Complimentary cribs available for infants upon request.",
        "Extra bed requests are subject to availability.",
      ],
      "Dining & Beverages": [
        "24-hour room service is available.",
        "Complimentary buffet breakfast for select room categories.",
        "Live cooking stations at the all-day dining restaurant.",
      ],
      "Wellness & Recreation": [
        "Luxury spa offering Ayurvedic and international treatments.",
        "Outdoor swimming pool with sun loungers.",
        "Fitness center with personal trainers available upon request.",
      ],
    },

    accessibility: {
      "Common Areas": [
        "Elevator access to all floors.",
        "Ramp access for wheelchairs.",
        "Braille signage for visually impaired guests.",
        "Handrails along walkways for additional support.",
        "Accessible parking spaces near the entrance.",
      ],
      Rooms: [
        "Accessible shower with grab bars.",
        "Hand-held showerhead for easy use.",
        "Lever-style door handles for convenience.",
        "Lowered light switches and thermostats.",
        "Visual alarm system for hearing-impaired guests.",
      ],
    },

    roomType: [
      {
        title: "Deluxe Room, City View",
        price: "24000",
        rating: 4,
        features: ["Smart TV", "Free WiFi", "Non Smoking"],
        image:
          "https://static.toiimg.com/thumb/msid-34160750,width-1070,height-580,resizemode-75,imgsize-1236456,pt-32,y_pad-40/34160750.jpg",
      },
      {
        title: "Executive Suite, Lounge Access",
        price: "40000",
        rating: 5,
        features: [
          "Executive Lounge Access",
          "Luxury Bath",
          "City View",
        ],
        image:
          "https://www.indianholiday.com/pictures/hotel/hotelgalleryn/the-trident-hilton-hotel-chennai-55973.jpg",
      },
    ],
  },
  {
    id: "H014",
    title: "Fortune Park Moksha",
    location: "Dharamshala",
    description:
      "Nestled in the serene hills of Dharamshala, Fortune Park Moksha offers a tranquil retreat with breathtaking views of the Dhauladhar range.",
    address:
      "Strawberry Hills, Near Dal Lake, Dharamshala, Himachal Pradesh 176216",
    rating: 4,
    amenities: [
      "🏊‍♀ Pool",
      "🌿 Spa",
      "🍽 Multi-cuisine Restaurant",
      "🏋‍♂ Fitness Center",
    ],
    currency: "INR",

    mainImage:
      "https://q-xx.bstatic.com/xdata/images/hotel/max1200/38776574.jpg?k=fb8abb6c80c029aebbca73fd483f4cc492c0b6dac75938b83020ad504fcdba4c&o=",
    images: [
      "https://i.ytimg.com/vi/qdL4mT2iI-Q/maxresdefault.jpg",
      "https://cdn.archilovers.com/projects/b_730_7ff803ac-9a4e-45f7-b8ac-691adcc6b2e9.jpg",
      "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2020/02/12/0056/Hyatt-Regency-Dharamshala-Resort-P025-Club-Room.jpg/Hyatt-Regency-Dharamshala-Resort-P025-Club-Room.16x9.jpg?imwidth=1920",
    ],

    faq: [
      {
        question:
          "Does Fortune Park Moksha provide airport shuttle services?",
        answer:
          "Yes, paid airport transfers can be arranged upon request.",
      },
      {
        question: "Are pets allowed at Fortune Park Moksha?",
        answer: "No, pets are not permitted at the property.",
      },
      {
        question: "Is there a spa at Fortune Park Moksha?",
        answer:
          "Yes, the hotel has a wellness spa offering rejuvenating treatments.",
      },
      {
        question:
          "What are the check-in and check-out times at the hotel?",
        answer:
          "Check-in starts at 2 PM, and check-out is until 12 PM.",
      },
    ],

    policies: [
      "No smoking in indoor areas.",
      "Guests must present valid ID at check-in.",
      "Check-in time is 2 PM; check-out time is 12 PM.",
      "Outside food and beverages are not allowed.",
      "The property follows eco-friendly sustainability practices.",
    ],

    extras: {
      "Children And Extra Beds": [
        "Rollaway beds available for INR 2500 per night.",
        "Complimentary cribs available for infants upon request.",
      ],
      "Wellness & Recreation": [
        "Full-service spa with traditional and modern therapies.",
        "Outdoor swimming pool with mountain views.",
        "Yoga and meditation sessions on request.",
      ],
    },

    accessibility: {
      "Common Areas": [
        "Ramp access for wheelchairs.",
        "Elevator access to all floors.",
        "Handrails along pathways for added safety.",
      ],
      Rooms: [
        "Accessible bathroom with grab bars.",
        "Lever-style door handles for easy access.",
        "Lowered light switches for convenience.",
      ],
    },

    roomType: [
      {
        title: "Premium Room, Mountain View",
        price: "18000",
        rating: 4,
        features: [
          "Smart TV",
          "Free WiFi",
          "Non Smoking",
          "Private Balcony",
        ],
        image:
          "https://th.bing.com/th/id/OIP.pcuEQOfarxaLfK-9Tn4UOgHaEQ?rs=1&pid=ImgDetMain",
      },
      {
        title: "Suite, Private Terrace",
        price: "30000",
        rating: 5,
        features: [
          "Spacious Living Area",
          "Luxury Bath",
          "Mountain View",
        ],
        image:
          "https://th.bing.com/th/id/OIP.eUmRjpZOz3-yqS_-wEwRPQHaE8?rs=1&pid=ImgDetMain",
      },
    ],
  },
  {
    id: "H015",
    title: "Novotel Resort & Spa",
    description:
      "A luxury beachside resort in Goa, offering a perfect blend of relaxation and adventure.",
    address: "Candolim, Goa 403515",
    location: "Goa",
    rating: 5,
    currency: "INR",

    amenities: [
      "🏊‍♀ Pool",
      "🏖 Private Beach",
      "💆‍♂ Spa",
      "🍹 Poolside Bar",
    ],
    mainImage:
      "https://www.holidify.com/images/cmsuploads/compressed/269273643_20210525121056.jpg",
    images: [
      "https://cf.bstatic.com/xdata/images/xphoto/2560x1280/99522494.jpg?k=2d99bf193075453768018107841ce9b1b94b2c42f379e34b9ae238be2a402712&o=",
      "https://gos3.ibcdn.com/266007925c8411e9ac1b0242ac110002.jpg",
      "https://th.bing.com/th/id/OIP.Do6gjyabsrTpBLphknZwkwHaE7?w=1230&h=819&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.4XgGTinszR6PkSjN5SHGMwAAAA?rs=1&pid=ImgDetMain",
    ],
    faq: [
      {
        question: "Does Novotel Goa Resort offer beach access?",
        answer:
          "Yes, the resort provides direct access to a private beach.",
      },
      {
        question: "Are pets allowed at Novotel Goa Resort?",
        answer: "No, pets are not allowed at the property.",
      },
      {
        question:
          "Does Novotel Goa Resort offer airport shuttle service?",
        answer:
          "Yes, the resort offers a paid airport shuttle service.",
      },
      {
        question: "Are there restaurants at Novotel Goa Resort?",
        answer:
          "Yes, the resort has multiple dining options, including a beachfront restaurant.",
      },
      {
        question: "Does Novotel Goa Resort have a spa?",
        answer:
          "Yes, a full-service spa offering Ayurvedic and international treatments is available.",
      },
      {
        question: "Is there a kids' club at Novotel Goa Resort?",
        answer:
          "Yes, the resort has a supervised kids' club with activities.",
      },
    ],

    policies: [
      "Check-in time: 3 PM.",
      "No smoking indoors.",
      "Valid government-issued ID is required at check-in.",
      "Only registered guests are allowed in the rooms.",
      "Outside food and drinks are not allowed.",
      "Loud music is not permitted after 10 PM.",
      "The property follows eco-friendly and sustainable practices.",
    ],

    extras: {
      "Children And Extra Beds": [
        "Cribs available on request.",
        "Extra beds available for INR 2500 per night.",
        "Children under 6 stay free when using existing bedding.",
      ],
      "Dining & Beverages": [
        "24-hour room service is available.",
        "Daily buffet breakfast included for select room categories.",
        "Poolside bar serving cocktails and snacks.",
      ],
      "Wellness & Recreation": [
        "Luxury spa with sauna and steam room.",
        "Fitness center with personal trainers available on request.",
        "Two outdoor swimming pools, including a kids' pool.",
        "Live evening entertainment at the lounge area.",
      ],
    },

    accessibility: {
      "Common Areas": [
        "Wheelchair accessible.",
        "Ramp access to all key areas.",
        "Braille signage for visually impaired guests.",
        "Elevator access to all floors.",
        "Accessible parking spaces near the entrance.",
      ],
      Rooms: [
        "Accessible shower with grab bars.",
        "Lever door handles for easy access.",
        "Height-adjustable hand-held showerhead.",
        "Lowered bed and desk for accessibility.",
        "Visual alarm system for hearing-impaired guests.",
      ],
    },

    roomType: [
      {
        title: "Deluxe Room, Pool View",
        price: "28000",
        rating: 4,
        features: ["Free WiFi", "Mini Bar", "Non Smoking"],
        image:
          "https://th.bing.com/th/id/OIP.aSQ5UesaEQregKiLBEBKXgHaEb?w=710&h=425&rs=1&pid=ImgDetMain",
      },
      {
        title: "Suite, Private Terrace",
        price: "45000",
        rating: 5,
        features: [
          "Private Terrace",
          "Luxury Decor",
          "Complimentary Breakfast",
        ],
        image:
          "https://th.bing.com/th/id/R.e041503adcf6226dc5c66753d1c0c35a?rik=LM2LB9TYenIqBw&riu=http%3a%2f%2fwww.ahstatic.com%2fphotos%2f8861_ho_00_p_953x385.jpg&ehk=xCARfwStKcnJ2TVApKJXT8rvnRVIdcC08re%2fc7HLKyo%3d&risl=&pid=ImgRaw&r=0",
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
