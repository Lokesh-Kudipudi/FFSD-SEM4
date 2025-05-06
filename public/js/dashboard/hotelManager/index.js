// const tableBody = document.querySelector(
//   ".available-rooms-info-table-body"
// );

// const bookingsInfo = [
//   {
//     roomNo: 501,
//     name: "John Doe",
//     checkin: "10/1/2025",
//     checkout: "10/5/2025",
//     mobile: "1234567890",
//     status: "Booked",
//   },
//   {
//     roomNo: 502,
//     name: "Jane smith",
//     checkin: "10/2/2025",
//     checkout: "10/6/2025",
//     mobile: "0987654321",
//     status: "Booked",
//   },
//   {
//     roomNo: 503,
//     name: "Alice Johnson",
//     checkin: "10/3/2025",
//     checkout: "10/7/2025",
//     mobile: "4449876543",
//     status: "Checkout",
//   },
//   {
//     roomNo: 504,
//     name: "Bob Brown",
//     checkin: "10/4/2025",
//     checkout: "10/8/2025",
//     mobile: "4449876543",
//     status: "Booked",
//   },

//   {
//     roomNo: 505,
//     name: "Charlie Davis",
//     checkin: "10/5/2025",
//     checkout: "10/9/2025",
//     mobile: "7776543210",
//     status: "checkin",
//   },

//   {
//     roomNo: 506,
//     name: "Eve Wilson",
//     checkin: "10/6/2025",
//     checkout: "10/10/2025",
//     mobile: "8887654321",
//     status: "cancelled",
//   },

//   {
//     roomNo: 507,
//     name: "David Clark",
//     checkin: "10/7/2025",
//     checkout: "10/11/2025",
//     mobile: "3332221111",
//     status: "Booked",
//   },
// ];

// bookingsInfo.forEach((booking) => {
//   const stylesForBookingStatus = function () {
//     if (booking.status.toLowerCase() === "booked") {
//       return "style=color:lightgreen";
//     } else if (booking.status.toLowerCase() === "cancelled") {
//       return "style=color:red";
//     } else if (booking.status.toLowerCase() === "checkin") {
//       return "style=color:lightblue";
//     } else if (booking.status.toLowerCase() === "checkout") {
//       return "style=color:orange";
//     }
//     return "";
//   };
//   const template = `<tr>
//                   <td>${booking.roomNo}</td>
//                   <td>${booking.name}</td>
//                   <td>${booking.checkin}</td>
//                   <td>${booking.checkout}</td>
//                   <td>${booking.mobile}</td>
//                   <td ${stylesForBookingStatus(
//                     booking.status
//                   )} >${booking.status}</td>
//                 </tr>`;

//   tableBody.insertAdjacentHTML("beforeend", template);
// });
