const { Tour } = require("../Model/tourModel");

async function getAllTours() {
  try {
    const tours = await Tour.find();
    return {
      status: "success",
      data: tours,
    };
  } catch (error) {
    throw new Error("Error fetching tours: " + error.message);
  }
}
