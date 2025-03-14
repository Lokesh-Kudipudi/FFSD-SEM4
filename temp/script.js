document.addEventListener("DOMContentLoaded", function () {
  // Dropdown functionality
  const filterHeaders = document.querySelectorAll(".filter-header");

  filterHeaders.forEach(header => {
    header.addEventListener("click", toggleDropdown);
  });

  function toggleDropdown() {
    const filterSection = this.closest(".filter-section");
    const options = filterSection.querySelector(".filter-options");
    const arrow = filterSection.querySelector(".arrow");

    // Toggle the dropdown visibility
    if (options.style.maxHeight) {
      options.style.maxHeight = null; // Close dropdown
      arrow.style.transform = "rotate(0deg)"; // Reset arrow
    } else {
      options.style.maxHeight = options.scrollHeight + "px"; // Open dropdown
      arrow.style.transform = "rotate(180deg)"; // Rotate arrow
    }
  }
});