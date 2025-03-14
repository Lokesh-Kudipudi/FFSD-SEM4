const ctx = document
  .getElementById("reservationChart")
  .getContext("2d");

const bookingSourceChart = document
  .getElementById("bookingSourceChart")
  .getContext("2d");

const visitorsChart = document
  .getElementById("visitorsChart")
  .getContext("2d");

const tableBody = document.querySelector(
  ".available-rooms-info-table-body"
);

const bookingsInfo = [
  {
    roomNo: 501,
    name: "John Doe",
    checkin: "10/1/2025",
    checkout: "10/5/2025",
    mobile: "1234567890",
    status: "Booked",
  },
  {
    roomNo: 502,
    name: "Jane smith",
    checkin: "10/2/2025",
    checkout: "10/6/2025",
    mobile: "0987654321",
    status: "Booked",
  },
  {
    roomNo: 503,
    name: "Alice Johnson",
    checkin: "10/3/2025",
    checkout: "10/7/2025",
    mobile: "4449876543",
    status: "Checkout",
  },
  {
    roomNo: 504,
    name: "Bob Brown",
    checkin: "10/4/2025",
    checkout: "10/8/2025",
    mobile: "4449876543",
    status: "Booked",
  },

  {
    roomNo: 505,
    name: "Charlie Davis",
    checkin: "10/5/2025",
    checkout: "10/9/2025",
    mobile: "7776543210",
    status: "checkin",
  },

  {
    roomNo: 506,
    name: "Eve Wilson",
    checkin: "10/6/2025",
    checkout: "10/10/2025",
    mobile: "8887654321",
    status: "cancelled",
  },

  {
    roomNo: 507,
    name: "David Clark",
    checkin: "10/7/2025",
    checkout: "10/11/2025",
    mobile: "3332221111",
    status: "Booked",
  },
];

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan",
      "08 Jan",
    ],
    datasets: [
      {
        label: "Booked",
        data: [44, 55, 41, 67, 22, 43, 55, 64],
        backgroundColor: "#A885F3",
        borderWidth: 1,
      },
      {
        label: "Canceled",
        data: [13, 23, 20, 18, 13, 27, 12, 9],
        backgroundColor: "#F5B841",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        ticks: { color: "white" },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: { color: "white" },
      },
    },
    plugins: {
      legend: {
        labels: { color: "white" },
      },
    },
  },
});

// Create gradient colors
const gradientOnline = ctx.createLinearGradient(0, 0, 0, 400);
gradientOnline.addColorStop(0, "rgba(0, 191, 255, 1)"); // Blue
gradientOnline.addColorStop(1, "rgba(0, 191, 255, 0.2)"); // Transparent Blue

const gradientOffline = ctx.createLinearGradient(0, 0, 0, 400);
gradientOffline.addColorStop(0, "rgba(255, 99, 132, 1)"); // Red
gradientOffline.addColorStop(1, "rgba(255, 99, 132, 0.2)"); // Transparent Red

new Chart(bookingSourceChart, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Online",
        data: [80, 250, 50, 180, 260, 140, 100],
        borderColor: gradientOnline,
        backgroundColor: gradientOnline,
        pointBackgroundColor: "white",
        pointBorderColor: "blue",
        pointRadius: 5,
        fill: false,
        tension: 0.4,
      },
      {
        label: "Offline",
        data: [90, 120, 100, 220, 180, 160, 110],
        borderColor: gradientOffline,
        backgroundColor: gradientOffline,
        pointBackgroundColor: "white",
        pointBorderColor: "red",
        pointRadius: 5,
        fill: false,
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "white" },
      },
      y: {
        grid: { color: "rgba(255, 255, 255, 0.2)" },
        ticks: { color: "white" },
      },
    },
    plugins: {
      legend: {
        labels: { color: "white" },
      },
    },
  },
});

new Chart(visitorsChart, {
  type: "bar",
  data: {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Daily Visitors",
        data: [23, 45, 28, 30, 38, 21, 30],
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 50,
        ticks: {
          color: "white",
          font: {
            size: 12,
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      x: {
        ticks: {
          color: "white",
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

bookingsInfo.forEach((booking) => {
  const stylesForBookingStatus = function () {
    if (booking.status.toLowerCase() === "booked") {
      return "style=color:lightgreen";
    } else if (booking.status.toLowerCase() === "cancelled") {
      return "style=color:red";
    } else if (booking.status.toLowerCase() === "checkin") {
      return "style=color:lightblue";
    } else if (booking.status.toLowerCase() === "checkout") {
      return "style=color:orange";
    }
    return "";
  };
  const template = `<tr>
                  <td>${booking.roomNo}</td>
                  <td>${booking.name}</td>
                  <td>${booking.checkin}</td>
                  <td>${booking.checkout}</td>
                  <td>${booking.mobile}</td>
                  <td ${stylesForBookingStatus(
                    booking.status
                  )} >${booking.status}</td>
                </tr>`;

  tableBody.insertAdjacentHTML("beforeend", template);
});
