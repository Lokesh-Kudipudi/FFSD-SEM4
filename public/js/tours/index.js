function handleSearch() {
  const input = document.querySelector("#location");
  window.location.href = `/tours/search?tour=${input.value}`;
}

function handleExploreClick() {
  window.location.href = "/tours/search";
}
