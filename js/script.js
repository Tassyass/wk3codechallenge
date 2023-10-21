// const filmList = document.getElementById("film-list");
// const filmDetails = document.getElementById("film-details");

// let films = []
// document.addEventListener("DOMContentLoaded",()=>{
//     getflims ()
// })
// function getflims (){
//     fetch("http://localhost:3000/films")
//     .then (res =>res.json())
    
//     .then (data=>{
//         films = [...data]
//         dispalyFlims (films)
        
//     })
    
// }

// function populateFilmList() {
//   films.forEach((film) => {
//       const filmElement = document.createElement("div");
//       filmElement.className = "film";
//       filmElement.innerHTML = `
//           <h3>${film.title}</h3>
//           <img src="${film.poster}" alt="${film.title}">
//           <p>Showtime: ${film.showtime}</p>
//           <p>Description: ${film.description}</p>
//           <p>Tickets Sold: ${film.tickets_sold} / Capacity: ${film.capacity}</p>
//           <button id="${film.id}" class="view-details">View Details</button>
//           <button id="${film.id}" class="buy-ticket">Buy Ticket</button>
//       `;
//       filmList?.appendChild(filmElement);
//   });
// }

// // Event listener for viewing film details
// filmList?.addEventListener("click", (event) => {
//   if (event.target.classList.contains("view-details")) {
//       const filmId = event.target.id;
//       const selectedFilm = films.find((film) => film.id === filmId);
//       showFilmDetails(selectedFilm);
//   }
// });

// // Event listener for buying a ticket
// filmList?.addEventListener("click", (event) => {
//   if (event.target.classList.contains("buy-ticket")) {
//       const filmId = event.target.id;
//       const selectedFilm = films.find((film) => film.id === filmId);
//       buyTicket(selectedFilm);
//   }
// });

// // Function to display film details
// function showFilmDetails(film) {
//   filmDetails.innerHTML = `
//       <h2>${film.title}</h2>
//       <img src="${film.poster}" alt="${film.title}">
//       <p>Runtime: ${film.runtime} minutes</p>
//       <p>Showtime: ${film.showtime}</p>
//       <p>Tickets Sold: ${film.tickets_sold} / Capacity: ${film.capacity}</p>
//       <p>Description: ${film.description}</p>
//   `;
  
//   if (film.tickets_sold >= film.capacity) {
//       filmDetails.innerHTML += '<p class="sold-out">Sold Out</p>';
//   }

//   filmDetails.style.display = "block";
//   filmList.style.display = "none";
// }

// // Function to buy a ticket
// function buyTicket(film) {
//   if (film.tickets_sold < film.capacity) {
//       film.tickets_sold++;
//       showFilmDetails(film); // Update film details
//   } else {
//       filmDetails.innerHTML += '<p class="sold-out">Sold Out</p>';
//   }
// }

// // Initialize the film list
// populateFilmList();


const baseURL = `http://localhost:3000/films`


fetch(baseURL) 
.then (res => res.json())
.then(data => {displayAnimalList(data)})
.catch(error => console.log(error))
