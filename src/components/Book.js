// import React, { useState } from 'react';



// function Book() {
//   const [departureCity, setDepartureCity] = useState('');
//   const [arrivalCity, setArrivalCity] = useState('');
//   const [departureDate, setDepartureDate] = useState('');
//   const [returnDate, setReturnDate] = useState('');

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//   };

//   return (
//     <div className="bg-gray-100 py-10 px-4">
//       <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">Flight Booking</h2>
//         <form onSubmit={handleFormSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-600 font-medium mb-2">Departure City</label>
//             <input
//               type="text"
//               className="w-full border rounded px-3 py-2"
//               placeholder="Enter departure city"
//               value={departureCity}
//               onChange={(e) => setDepartureCity(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-600 font-medium mb-2">Arrival City</label>
//             <input
//               type="text"
//               className="w-full border rounded px-3 py-2"
//               placeholder="Enter arrival city"
//               value={arrivalCity}
//               onChange={(e) => setArrivalCity(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-600 font-medium mb-2">Departure Date</label>
//             <input
//               type="date"
//               className="w-full border rounded px-3 py-2"
//               value={departureDate}
//               onChange={(e) => setDepartureDate(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-600 font-medium mb-2">Return Date</label>
//             <input
//               type="date"
//               className="w-full border rounded px-3 py-2"
//               value={returnDate}
//               onChange={(e) => setReturnDate(e.target.value)}
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
//           >
//             Book Flight
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



// export default Book;

