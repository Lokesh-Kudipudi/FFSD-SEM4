const tableBody = document.querySelector(
  ".main-bookings-table-body"
);

const bookingsInfo = [
  {
    name: "Jay Soni",
    package: "Business",
    room: "Delux",
    status: "Cancelled",
    checkIn: "02/21/2025",
    checkOut: "02/23/2025",
    payment: "Paid",
    email: "test@example.com",
    mobile: "1234567890",
  },
  {
    name: "Sarah Smith",
    package: "Business",
    room: "Super Delux",
    status: "Booked",
    checkIn: "02/12/2025",
    checkOut: "02/15/2025",
    payment: "Unpaid",
    email: "test@example.com",
    mobile: "1234567890",
  },
  {
    name: "Jay Soni",
    package: "Business",
    room: "Delux",
    status: "Cancelled",
    checkIn: "02/21/2025",
    checkOut: "02/23/2025",
    payment: "Paid",
    email: "test@example.com",
    mobile: "1234567890",
  },

  {
    name: "Smita parikh",
    package: "All inclusive",
    room: "villa",
    status: "CheckOut",
    checkIn: "02/16/2025",
    checkOut: "02/19/2025",
    payment: "UnPaid",
    email: "test@example.com",
    mobile: "1234567890",
  },
  {
    name: "Pankaj sinha ",
    package: "Wedding",
    room: "Double",
    status: "Booked",
    checkIn: "02/11/2025",
    checkOut: "02/14/2025",
    payment: "UnPaid",
    email: "test@example.com",
    mobile: "1234567890",
  },
  {
    name: "Pankaj sinha ",
    package: "Business",
    room: "Single",
    status: "CheckIn",
    checkIn: "02/27/2025",
    checkOut: "02/28/2025",
    payment: "UnPaid",
    email: "test@example.com",
    mobile: "1234567890",
  },
  {
    name: "Jay Soni",
    package: "All inclusive",
    room: "Delux",
    status: "booked",
    checkIn: "02/17/2025",
    checkOut: "02/20/2025",
    payment: "Paid",
    email: "test@example.com",
    mobile: "1234567890",
  },

  {
    name: "Smita parikh",
    package: "Wedding",
    room: "Delux",
    status: "CheckOut",
    checkIn: "02/07/2025",
    checkOut: "02/10/2025",
    payment: "Paid",
    email: "test@example.com",
    mobile: "1234567890",
  },

  {
    name: "Pooja Patel",
    package: "Business",
    room: " Super Delux",
    status: "Cancelled",
    checkIn: "02/09/2025",
    checkOut: "02/12/2025",
    payment: "UnPaid",
    email: "test@example.com",
    mobile: "1234567890",
  },
];

// Function to apply styles to statuses
const stylesForBookingStatus = (status) => {
  const statusLower = status.toLowerCase();
  return statusLower === "booked"
    ? "color: lightgreen;"
    : statusLower === "cancelled"
    ? "color: red;"
    : statusLower === "checkin"
    ? "color: lightblue;"
    : statusLower === "checkout"
    ? "color: orange;"
    : "";
};

// Function to apply styles to payment statuses
const stylesForPaymentStatus = (payment) => {
  return payment.toLowerCase() === "paid"
    ? "color: lightgreen;"
    : "color: red;";
};

// Generate table rows dynamically
bookingsInfo.forEach((booking, index) => {
  const row = document.createElement("tr");

  row.innerHTML = `
      <td>${booking.name}</td>
      <td>${booking.package}</td>
      <td>${booking.room}</td>
      <td style="${stylesForBookingStatus(booking.status)}">${
    booking.status
  }</td>
      <td>${booking.checkIn}</td>
      <td>${booking.checkOut}</td>
      <td style="${stylesForPaymentStatus(booking.payment)}">${
    booking.payment
  }</td>
      <td>
        <span class="material-symbols-outlined" style="color: #aa1419;">email</span> ${
          booking.email
        }
      </td>
      <td>
        <span class="material-symbols-outlined" style="color: #7e9b3b;">phone</span> ${
          booking.mobile
        }
      </td>
      <td>
        <span class="action-btn" data-id="${index}">⋮</span>
        <div class="action-menu" id="menu-${index}">
          <a href="editBooking.html?id=${index}"><span class="material-symbols-outlined icon">edit</span> Edit Booking</a>
          <a href="deleteBooking.html?id=${index}" class="delete"><span class="material-symbols-outlined icon">delete</span> Delete Booking</a>
          <a href="cancelBooking.html?id=${index}"><span class="material-symbols-outlined icon">cancel</span> Cancel Booking</a>
        </div>
      </td>
    `;

  tableBody.appendChild(row);
});

document.addEventListener("click", function (event) {
  // Close any open menus
  document.querySelectorAll(".action-menu").forEach((menu) => {
    menu.style.display = "none";
  });

  // Open menu only if the action button was clicked
  if (event.target.classList.contains("action-btn")) {
    const menuId = event.target.getAttribute("data-id");
    const menu = document.getElementById(`menu-${menuId}`);
    menu.style.display = "block";
  }
});
