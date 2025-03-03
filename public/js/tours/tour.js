const itineraryAccordion = document.querySelector(
  ".itinerary-accordion"
);

const choiceSelectionContainer = document.querySelector(
  ".choice-selection-container"
);

itineraryAccordion.addEventListener("click", (e) => {
  const divClicked = e.target.closest(".itinerary-item");
  divClicked.classList.toggle("itinerary-open");
});

choiceSelectionContainer.addEventListener("click", (e) => {
  document
    .querySelectorAll(".choice-month")
    .forEach((btn) => btn.classList.remove("choice-selected"));
  const button = e.target.closest("button");
  button.classList.toggle("choice-selected");
});
