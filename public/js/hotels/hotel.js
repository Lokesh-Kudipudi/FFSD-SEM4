const faqItems = document.querySelectorAll(".faq-item");
const sectionsNavbar = document.querySelector(".section-navbar");
const sectionsNavbarLinks = document.querySelectorAll(
  ".section-navbar-link"
);

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    // Close other open items
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    // Toggle the clicked item
    item.classList.toggle("active");
  });
});

sectionsNavbar.addEventListener("click", (e) => {
  sectionsNavbarLinks.forEach((el) => {
    el.classList.remove("active");
  });

  e.target.classList.add("active");
});
