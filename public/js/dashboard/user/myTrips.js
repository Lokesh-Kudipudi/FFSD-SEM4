const cancelButtons = document.querySelectorAll(".cancel-trip");
const viewDetailsButtons = document.querySelectorAll(".view-details-trip");

cancelButtons.forEach((button) => {
  button.addEventListener("click", async (e) => {
    const itemId = button.getAttribute("data-itemId");
    const bookingId = button.getAttribute("data-bookingId");
    
  });
});

viewDetailsButtons.forEach((button) => {
  button.addEventListener("click", async (e) => {
    const itemId = button.getAttribute("data-itemId");
    window.location.href = `/tours/tour/${itemId}`;
  });
});


