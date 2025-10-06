const { ContactForm } = require("../Model/contactModel");

async function createContactForm(contactData) {
  try {
    const contactForm = new ContactForm(contactData);
    await contactForm.save();
    return contactForm;
  } catch (error) {
    console.error("Error creating contact form:", error);
    throw error;
  }
}

const getAllQueries = async (req, res) => {
  try {
    const userQueries = await ContactForm.find().sort({ createdAt: -1 });

    res.render("dashboard/admin/queries", { user: req.user, userQueries });
  } catch (error) {
    console.error("Error fetching queries:", error);
    res.status(500).send("Server Error: Unable to fetch queries");
  }
};

module.exports = {
  createContactForm,
  getAllQueries,
};
