const customerModal = document.getElementById("customerModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const viewCustomerBtns =
  document.querySelectorAll(".view-customer");

viewCustomerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    customerModal.classList.add("show");
  });
});

closeModalBtn.addEventListener("click", () => {
  customerModal.classList.remove("show");
});

window.addEventListener("click", (event) => {
  if (event.target === customerModal) {
    customerModal.classList.remove("show");
  }
});

const tabs = document.querySelectorAll(".tab");
const tabPanes = document.querySelectorAll(".tab-pane");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tabPanes.forEach((pane) => pane.classList.remove("active"));

    tab.classList.add("active");
    document
      .getElementById(tab.getAttribute("data-tab"))
      .classList.add("active");
  });
});
