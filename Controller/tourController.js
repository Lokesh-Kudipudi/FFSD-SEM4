const { Tour } = require("../Model/tourModel");

async function getAllToursGemini() {
  try {
    const tours = await Tour.find()
      .select(
        "title tags duration startLocation description language price destinations"
      )
      .lean();
    return {
      status: "success",
      data: tours,
    };
  } catch (error) {
    throw new Error("Error fetching tours: " + error.message);
  }
}

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
    throw new Error("Error fetching recommended tours: " + error.message);
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

async function updateTour(tourId, updateData) {
  try {
    const updatedTour = await Tour.findByIdAndUpdate(tourId, updateData, {
      new: true,
    }).lean();
    if (!updatedTour) {
      return {
        status: "fail",
        message: "Tour not found",
      };
    }
    return {
      status: "success",
      data: updatedTour,
    };
  } catch (error) {
    throw new Error("Error updating tour: " + error.message);
  }
}

async function deleteTour(tourId) {
  try {
    const deletedTour = await Tour.findByIdAndDelete(tourId).lean();
    if (!deletedTour) {
      return {
        status: "fail",
        message: "Tour not found",
      };
    }
    return {
      status: "success",
      message: "Tour deleted successfully",
    };
  } catch (error) {
    return {
      status: "fail",
      message: "Tour not found",
    };
  }
}

export const addTour = async (req, res) => {
  try {
    const {
      title,
      tags,
      mainImage,
      images,
      rating,
      duration,
      startLocation,
      description,
      language,
      price,
      includes,
      destinations,
      itinerary,
      availableMonths,
      bookingDetails,
    } = req.body;

    // Create a new tour
    const newTour = new Tour({
      title,
      tags,
      mainImage,
      images,
      rating,
      duration,
      startLocation,
      description,
      language,
      price,
      includes,
      destinations,
      itinerary,
      availableMonths,
      bookingDetails,
    });

    await newTour.save();
    res.status(201).json({ message: "Tour added successfully", tour: newTour });
  } catch (error) {
    console.error("Error adding tour:", error);
    res
      .status(500)
      .json({ message: "Error adding tour", error: error.message });
  }
};

module.exports = {
  getAllTours,
  getTourById,
  getRecommendedTours,
  updateTour,
  deleteTour,
  getAllToursGemini,
  addTour,
};
