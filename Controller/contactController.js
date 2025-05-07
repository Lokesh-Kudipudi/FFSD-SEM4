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

module.exports = {
  createContactForm,
};
