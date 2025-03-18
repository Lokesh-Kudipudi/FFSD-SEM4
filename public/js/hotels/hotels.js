document.addEventListener("DOMContentLoaded", function () {
  // Dropdown functionality
  const filterHeaders =
    document.querySelectorAll(".filter-header");

  filterHeaders.forEach((header) => {
    header.addEventListener("click", toggleDropdown);
  });

  function toggleDropdown() {
    const filterSection = this.closest(".filter-section");
    const options = filterSection.querySelector(
      ".filter-options"
    );
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

const input = document.querySelector("#location-header");

function handleHotelClick(hotelId) {
  window.location.href = `${window.location.protocol}//${window.location.host}/hotels/hotel/${hotelId}`;
}

function handleSearch() {
  if (input.value.length == 0) {
    window.location.href = `/hotels/search`;
  } else {
    window.location.href = `/hotels/search?q=${input.value}`;
  }
}

function setInputValue() {
  const url = new URLSearchParams(window.location.search);
  const query = url.get("q");
  if (query) {
    input.value = query;
  }
}

setInputValue();
