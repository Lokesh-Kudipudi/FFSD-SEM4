const { Tour } = require("../Model/tourModel");

async function getAllTours() {
  try {
    const tours = await Tour.find().lean();
    return {
      status: "success",
      data: tours,
    };
  } catch (error) {
    throw new Error("Error fetching tours: " + error.message);
  }
}

async function getRecommendedTours(toursIds) {
  try {
    const recommendedTours = await Tour.find({
      _id: { $in: toursIds },
    });
    return {
      status: "success",
      data: recommendedTours,
    };
  } catch (error) {
    throw new Error(
      "Error fetching recommended tours: " + error.message
    );
  }
}

async function getTourById(tourId) {
  try {
    const tour = await Tour.findById(tourId).lean();
    if (!tour) {
      return {
        status: "fail",
        message: "Tour not found",
      };
    }
    return {
      status: "success",
      data: tour,
    };
  } catch (error) {
    throw new Error("Error fetching tour: " + error.message);
  }
}

module.exports = {
  getAllTours,
  getTourById,
  getRecommendedTours,
};
