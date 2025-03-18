// Sidebar toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-sidebar");
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.querySelector(".main");

  if (!toggleButton || !sidebar) {
    console.error("Sidebar elements not found");
    return;
  }

  // Function to toggle sidebar
  toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("collapsed");
    mainContent.classList.toggle("expanded");

    // Log to verify the click handler is working
    console.log("Sidebar toggle clicked");
  });

  // Check if sidebar should be collapsed by default on small screens
  function checkScreenSize() {
    if (window.innerWidth < 768) {
      sidebar.classList.add("collapsed");
      mainContent.classList.add("expanded");
    } else {
      sidebar.classList.remove("collapsed");
      mainContent.classList.remove("expanded");
    }
  }

  // Run on page load
  checkScreenSize();

  // Run on window resize
  window.addEventListener("resize", checkScreenSize);

  console.log("Responsive sidebar script loaded");
});

// Add this to your package.js file

document.addEventListener("DOMContentLoaded", function () {
  // Sample package data (simulating backend data)
  const packageData = [
    {
      id: 1,
      name: "Gokarna Beach Retreat",
      icon: "fas fa-water",
      iconColor: "#2ecc71",
      destination: "Karnataka, India",
      duration: "4 Days",
      price: "$499",
      bookings: 87,
      rating: 4.6,
      status: "Active",
    },
    {
      id: 2,
      name: "Goa Coastal Getaway",
      icon: "fas fa-umbrella-beach",
      iconColor: "#f39c12",
      destination: "Goa, India",
      duration: "5 Days",
      price: "$649",
      bookings: 142,
      rating: 4.7,
      status: "Active",
    },
    {
      id: 3,
      name: "Jaipur Heritage Tour",
      icon: "fas fa-landmark",
      iconColor: "#e74c3c",
      destination: "Rajasthan, India",
      duration: "6 Days",
      price: "$799",
      bookings: 93,
      rating: 4.5,
      status: "Featured",
    },
    {
      id: 4,
      name: "Puri Temple & Beach Tour",
      icon: "fas fa-dharmachakra",
      iconColor: "#9b59b6",
      destination: "Odisha, India",
      duration: "3 Days",
      price: "$399",
      bookings: 76,
      rating: 4.3,
      status: "Active",
    },
    {
      id: 5,
      name: "Vizag Coastal Explorer",
      icon: "fas fa-ship",
      iconColor: "#1abc9c",
      destination: "Andhra Pradesh, India",
      duration: "4 Days",
      price: "$549",
      bookings: 65,
      rating: 4.4,
      status: "Active",
    },
    {
      id: 6,
      name: "Manali Adventure Package",
      icon: "fas fa-mountain",
      iconColor: "#34495e",
      destination: "Himachal Pradesh, India",
      duration: "7 Days",
      price: "$899",
      bookings: 112,
      rating: 4.9,
      status: "Featured",
    },
    {
      id: 7,
      name: "Leh Ladakh Expedition",
      icon: "fas fa-hiking",
      iconColor: "#7f8c8d",
      destination: "Ladakh, India",
      duration: "10 Days",
      price: "$1,499",
      bookings: 54,
      rating: 4.8,
      status: "Active",
    },
    {
      id: 8,
      name: "Mumbai City Explorer",
      icon: "fas fa-city",
      iconColor: "#3498db",
      destination: "Maharashtra, India",
      duration: "3 Days",
      price: "$449",
      bookings: 98,
      rating: 4.2,
      status: "Active",
    },
    {
      id: 9,
      name: "Kolkata Heritage Tour",
      icon: "fas fa-monument",
      iconColor: "#f1c40f",
      destination: "West Bengal, India",
      duration: "4 Days",
      price: "$499",
      bookings: 63,
      rating: 4.4,
      status: "Draft",
    },
    {
      id: 10,
      name: "Chennai Cultural Experience",
      icon: "fas fa-gopuram",
      iconColor: "#e67e22",
      destination: "Tamil Nadu, India",
      duration: "5 Days",
      price: "$649",
      bookings: 72,
      rating: 4.3,
      status: "Inactive",
    },
  ];

  // Function to populate table with data
  function populatePackageTable(data) {
    const tableBody = document.querySelector("table tbody");

    // Clear existing rows
    tableBody.innerHTML = "";

    // Create and append rows for each package
    data.forEach((pkg) => {
      const row = createPackageRow(pkg);
      tableBody.appendChild(row);
    });

    // Update pagination info
    document.querySelector(
      ".pagination-info"
    ).textContent = `Showing 1 to ${data.length} of ${data.length} entries`;
  }

  // Function to create a table row for a package
  function createPackageRow(pkg) {
    const row = document.createElement("tr");
    row.dataset.packageId = pkg.id;

    // Package name cell with icon
    const nameCell = document.createElement("td");
    nameCell.innerHTML = `
                <div style="display: flex; align-items: center; gap: 12px">
                    <i class="${pkg.icon}" style="font-size: 24px; color: ${pkg.iconColor};"></i>
                    <div>${pkg.name}</div>
                </div>
            `;

    // Other cells
    const destinationCell = document.createElement("td");
    destinationCell.textContent = pkg.destination;

    const durationCell = document.createElement("td");
    durationCell.textContent = pkg.duration;

    const priceCell = document.createElement("td");
    priceCell.textContent = pkg.price;

    const bookingsCell = document.createElement("td");
    bookingsCell.textContent = pkg.bookings;

    const ratingCell = document.createElement("td");
    ratingCell.textContent = pkg.rating;

    // Status cell with badge
    const statusCell = document.createElement("td");
    const statusClass = getStatusClass(pkg.status);
    statusCell.innerHTML = `<span class="status-badge ${statusClass}">${pkg.status}</span>`;

    // Actions cell with buttons
    const actionsCell = document.createElement("td");
    actionsCell.className = "actions-cell";
    actionsCell.innerHTML = `
                <button class="action-btn refresh-btn" title="Refresh Package" data-package-id="${pkg.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 21a9 9 0 1 0-9-9"></path>
                    </svg>
                </button>
                <button class="action-btn edit-btn" title="Edit Package" data-package-id="${pkg.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 3l-4 4 4 4"></path>
                        <path d="M4 3l4 4-4 4"></path>
                    </svg>
                </button>
                <button class="action-btn delete-btn" title="Delete Package" data-package-id="${pkg.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            `;

    // Append all cells to the row
    row.appendChild(nameCell);
    row.appendChild(destinationCell);
    row.appendChild(durationCell);
    row.appendChild(priceCell);
    row.appendChild(bookingsCell);
    row.appendChild(ratingCell);
    row.appendChild(statusCell);
    row.appendChild(actionsCell);

    return row;
  }

  // Helper function to get appropriate status class
  function getStatusClass(status) {
    switch (status.toLowerCase()) {
      case "active":
        return "status-active";
      case "featured":
        return "status-featured";
      case "draft":
        return "status-draft";
      case "inactive":
        return "status-inactive";
      default:
        return "status-active";
    }
  }

  // Also update the sidebar toggle functionality
  const toggleButton = document.getElementById("toggle-sidebar");
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.querySelector(".main");

  if (toggleButton && sidebar) {
    toggleButton.addEventListener("click", function () {
      sidebar.classList.toggle("collapsed");
      mainContent.classList.toggle("expanded");
    });

    // Check screen size for responsive behavior
    function checkScreenSize() {
      if (window.innerWidth < 768) {
        sidebar.classList.add("collapsed");
        mainContent.classList.add("expanded");
      } else {
        sidebar.classList.remove("collapsed");
        mainContent.classList.remove("expanded");
      }
    }

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
  }

  // Call the function to populate the table
  populatePackageTable(packageData);

  // Add tab functionality
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));

      // Add active class to clicked tab
      this.classList.add("active");

      // Filter packages based on tab (in a real app, you'd fetch data or filter existing data)
      const tabText = this.textContent.trim();
      filterPackages(tabText);
    });
  });

  // Filter packages based on selected tab
  function filterPackages(tabName) {
    let filteredData = packageData;

    // Apply filters based on tab
    if (tabName !== "All Packages") {
      filteredData = packageData.filter((pkg) => {
        if (tabName === "Featured") return pkg.status === "Featured";
        if (tabName === "Active") return pkg.status === "Active";
        if (tabName === "Drafts") return pkg.status === "Draft";
        if (tabName === "Inactive") return pkg.status === "Inactive";
        return true;
      });
    }

    // Repopulate with filtered data
    populatePackageTable(filteredData);

    // Update table title
    document.querySelector(".table-title").textContent = tabName;
  }

  // Function to find package by ID
  function findPackageById(id) {
    return packageData.find((pkg) => pkg.id === id);
  }

  // Add event delegation for action buttons
  document.querySelector("table tbody").addEventListener("click", function (e) {
    // Find the closest action button
    const actionBtn = e.target.closest(".action-btn");
    if (!actionBtn) return;

    // Get the package ID from the button's data attribute
    const packageId = parseInt(actionBtn.dataset.packageId);
    const packageInfo = findPackageById(packageId);

    if (!packageInfo) {
      console.error("Package not found:", packageId);
      return;
    }

    // Handle different button actions
    if (actionBtn.classList.contains("refresh-btn")) {
      handleRefreshPackage(packageInfo);
    } else if (actionBtn.classList.contains("edit-btn")) {
      handleEditPackage(packageInfo);
    } else if (actionBtn.classList.contains("delete-btn")) {
      handleDeletePackage(packageInfo);
    }
  });

  // Action handlers
  function handleRefreshPackage(packageInfo) {
    showNotification(`Refreshing package "${packageInfo.name}"`, "info");

    // Simulate API call with timeout
    setTimeout(() => {
      showNotification(
        `Package "${packageInfo.name}" refreshed successfully`,
        "success"
      );
    }, 1000);
  }

  function handleEditPackage(packageInfo) {
    // Display a modal for editing
    showPackageModal(packageInfo);
  }

  function handleDeletePackage(packageInfo) {
    // Show confirmation dialog
    if (confirm(`Are you sure you want to delete "${packageInfo.name}"?`)) {
      // Simulate deletion
      const index = packageData.findIndex((pkg) => pkg.id === packageInfo.id);
      if (index !== -1) {
        packageData.splice(index, 1);

        // Repopulate the table
        const activeTab = document
          .querySelector(".tab.active")
          .textContent.trim();
        filterPackages(activeTab);

        showNotification(
          `Package "${packageInfo.name}" has been deleted`,
          "success"
        );
      }
    }
  }

  // Notification system
  function showNotification(message, type = "info") {
    // Create notification container if it doesn't exist
    let notificationContainer = document.querySelector(
      ".notification-container"
    );
    if (!notificationContainer) {
      notificationContainer = document.createElement("div");
      notificationContainer.className = "notification-container";
      document.body.appendChild(notificationContainer);

      // Style the container
      notificationContainer.style.position = "fixed";
      notificationContainer.style.top = "20px";
      notificationContainer.style.right = "20px";
      notificationContainer.style.zIndex = "1000";
    }

    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Style the notification
    notification.style.padding = "12px 16px";
    notification.style.marginBottom = "10px";
    notification.style.borderRadius = "4px";
    notification.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
    notification.style.minWidth = "300px";

    // Set color based on type
    if (type === "success") {
      notification.style.backgroundColor = "#d4edda";
      notification.style.color = "#155724";
      notification.style.borderLeft = "4px solid #28a745";
    } else if (type === "error") {
      notification.style.backgroundColor = "#f8d7da";
      notification.style.color = "#721c24";
      notification.style.borderLeft = "4px solid #dc3545";
    } else if (type === "info") {
      notification.style.backgroundColor = "#d1ecf1";
      notification.style.color = "#0c5460";
      notification.style.borderLeft = "4px solid #17a2b8";
    } else if (type === "warning") {
      notification.style.backgroundColor = "#fff3cd";
      notification.style.color = "#856404";
      notification.style.borderLeft = "4px solid #ffc107";
    }

    // Add to container
    notificationContainer.appendChild(notification);

    // Remove after timeout
    setTimeout(() => {
      notification.style.opacity = "0";
      notification.style.transition = "opacity 0.5s";
      setTimeout(() => {
        notification.remove();
      }, 500);
    }, 3000);
  }

  // Package edit modal
  function showPackageModal(packageInfo) {
    // Create modal container
    const modalOverlay = document.createElement("div");
    modalOverlay.className = "modal-overlay";
    modalOverlay.style.position = "fixed";
    modalOverlay.style.top = "0";
    modalOverlay.style.left = "0";
    modalOverlay.style.width = "100%";
    modalOverlay.style.height = "100%";
    modalOverlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    modalOverlay.style.display = "flex";
    modalOverlay.style.justifyContent = "center";
    modalOverlay.style.alignItems = "center";
    modalOverlay.style.zIndex = "1001";

    // Create modal
    const modal = document.createElement("div");
    modal.className = "edit-modal";
    modal.style.backgroundColor = "#fff";
    modal.style.borderRadius = "6px";
    modal.style.padding = "20px";
    modal.style.width = "500px";
    modal.style.maxWidth = "90%";
    modal.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";

    // Create form
    const form = document.createElement("form");
    form.innerHTML = `
          <h2 style="margin-top: 0; margin-bottom: 20px;">Edit Package</h2>
          <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: 500;">Package Name</label>
            <input type="text" id="edit-name" value="${packageInfo.name}" 
                   style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
          </div>
          <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: 500;">Destination</label>
            <input type="text" id="edit-destination" value="${
              packageInfo.destination
            }" 
                   style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
          </div>
          <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: 500;">Duration</label>
            <input type="text" id="edit-duration" value="${
              packageInfo.duration
            }" 
                   style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
          </div>
          <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: 500;">Price</label>
            <input type="text" id="edit-price" value="${packageInfo.price}" 
                   style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
          </div>
          <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: 500;">Status</label>
            <select id="edit-status" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
              <option value="Active" ${
                packageInfo.status === "Active" ? "selected" : ""
              }>Active</option>
              <option value="Featured" ${
                packageInfo.status === "Featured" ? "selected" : ""
              }>Featured</option>
              <option value="Draft" ${
                packageInfo.status === "Draft" ? "selected" : ""
              }>Draft</option>
              <option value="Inactive" ${
                packageInfo.status === "Inactive" ? "selected" : ""
              }>Inactive</option>
            </select>
          </div>
          <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px;">
            <button type="button" id="modal-cancel" 
                    style="padding: 8px 16px; border: 1px solid #ccc; background: #f5f5f5; border-radius: 4px; cursor: pointer;">
              Cancel
            </button>
            <button type="submit" 
                    style="padding: 8px 16px; border: none; background: #3498db; color: white; border-radius: 4px; cursor: pointer;">
              Save Changes
            </button>
          </div>
        `;

    modal.appendChild(form);
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);

    // Focus on first input
    setTimeout(() => {
      document.getElementById("edit-name").focus();
    }, 100);

    // Handle cancel
    document.getElementById("modal-cancel").addEventListener("click", () => {
      modalOverlay.remove();
    });

    // Handle click outside
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.remove();
      }
    });

    // Handle form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Update package data
      const updatedPackage = { ...packageInfo };
      updatedPackage.name = document.getElementById("edit-name").value;
      updatedPackage.destination =
        document.getElementById("edit-destination").value;
      updatedPackage.duration = document.getElementById("edit-duration").value;
      updatedPackage.price = document.getElementById("edit-price").value;
      updatedPackage.status = document.getElementById("edit-status").value;

      // Update data in the array
      const index = packageData.findIndex((pkg) => pkg.id === packageInfo.id);
      if (index !== -1) {
        packageData[index] = updatedPackage;

        // Repopulate the table
        const activeTab = document
          .querySelector(".tab.active")
          .textContent.trim();
        filterPackages(activeTab);

        showNotification(
          `Package "${updatedPackage.name}" has been updated`,
          "success"
        );
      }

      // Close modal
      modalOverlay.remove();
    });
  }

  // Add search functionality
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase();
      const activeTab = document
        .querySelector(".tab.active")
        .textContent.trim();

      // First filter by tab
      let filteredByTab = packageData;
      if (activeTab !== "All Packages") {
        filteredByTab = packageData.filter((pkg) => {
          if (activeTab === "Featured") return pkg.status === "Featured";
          if (activeTab === "Active") return pkg.status === "Active";
          if (activeTab === "Drafts") return pkg.status === "Draft";
          if (activeTab === "Inactive") return pkg.status === "Inactive";
          return true;
        });
      }

      // Then filter by search term
      const searchResults = filteredByTab.filter(
        (pkg) =>
          pkg.name.toLowerCase().includes(searchTerm) ||
          pkg.destination.toLowerCase().includes(searchTerm)
      );

      populatePackageTable(searchResults);
    });
  }
});
