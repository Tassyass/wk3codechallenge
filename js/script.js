// // Function to fetch movie data from the server
// async function fetchMovieData() {
//     try {
//       const response = await fetch("http://localhost:3000/films");
//       if (!response.ok) {
//         throw new Error("Failed to fetch movie data.");
//       }
//       const movieData = await response.json();
  
//       // Display movie details
//       document.getElementById("movie-title").textContent = movieData.title;
//       document.getElementById("movie-runtime").textContent = movieData.runtime;
//       document.getElementById("movie-showtime").textContent = movieData.showtime;
//       document.getElementById("movie-description").textContent = movieData.description;
  
//       const availableTickets = movieData.capacity - movieData.tickets_sold;
//       document.getElementById("tickets-available").textContent = availableTickets;
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   // Buy Ticket button click event
//   document.getElementById("buy-ticket").addEventListener("click", () => {
//     const available = parseInt(document.getElementById("tickets-available").textContent, 10);
//     if (available > 0) {
//       document.getElementById("tickets-available").textContent = available - 1;
//       alert("Ticket purchased!");
//     } else {
//       alert("No tickets available.");
//     }
//   });
  
//   // Fetch movie data when the page loads
//   fetchMovieData();
  

// const buyTicketButton = document.getElementById("buy-ticket");
// const ticketsAvailable = document.getElementById("tickets-available");

// // Function to fetch movie data from the server
// const fetchMovieData = async () => {
//   try {
//     const response = await fetch("http://localhost:3000/films");
//     if (response.ok) {
//       const movies = await response.json();
//       const movieData = movies[0]; // Assuming you want the first movie

//       // Display movie details
//       document.getElementById("movie-title").textContent = movieData.title;
//       document.getElementById("movie-runtime").textContent = movieData.runtime;
//       document.getElementById("movie-showtime").textContent = movieData.showtime;
//       document.getElementById("movie-description").textContent = movieData.description;
//       ticketsAvailable.textContent = movieData.capacity - movieData.tickets_sold;
//     } else {
//       throw new Error("Failed to fetch movie data.");
//     }
//   } catch (error) {
//     console.error(error);
//     alert("Failed to fetch movie data.");
//   }
// };

// // Buy Ticket button click event
// buyTicketButton.addEventListener("click", () => {
//   const available = parseInt(ticketsAvailable.textContent, 10);
//   if (available > 0) {
//     ticketsAvailable.textContent = available - 1;
//     alert("Ticket purchased!");
//   } else {
//     alert("No tickets available.");
//   }
// });

// // Fetch movie data when the page loads
// fetchMovieData();


// URL of the published Google Doc
// const docURL = "http://localhost:3000/films";

// // Function to fetch and display film details
// function fetchFilmDetails() {
//   fetch(docURL)
//     .then((response) => response.text())
//     .then((data) => {
//       // Parse the data and extract film details
//       // This depends on the structure and formatting of your Google Doc
//       const filmDetails = extractFilmDetailsFromData(data);

//       // Update the DOM with film details
//       updateDOMWithFilmDetails(filmDetails);
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// }

// // Function to extract film details from the fetched data
// function extractFilmDetailsFromData(data) {
//   // Implement this function to parse the Google Doc content
//   // and extract film details as needed
//   // You might use libraries like DOMParser or regular expressions
//   // to extract the relevant information from the HTML content.
//   // For example, if film details are within certain HTML elements,
//   // you can search for and extract those elements.
// }

// // Function to update the DOM with film details
// function updateDOMWithFilmDetails(filmDetails) {
//   // Implement this function to populate your website's DOM
//   // with the film details, e.g., title, description, and ticket availability.
// }

// // Add an event listener to fetch film details when needed
// document.getElementById("fetchFilmButton").addEventListener("click", fetchFilmDetails);




// const baseURL= `http://localhost:3000/films`

// fetch(baseURL)
// .then(res => res.json())
// .then(data => {displayFilmList(data)})
// .catch(error=> console.log(error))

// const filmlList = document.getElementById('film-list');
//  const filmDetails = document.getElementById('film-details');
//  const ticketButton = document.getElementById('buy-ticket');

// function displayFilmList(){
//   filmTitle.innerHTML= '';
//   data.forEach(film => {
//     const filmTitle = document.createElement('div');
//     filmTitle.textContent = film.name;
//     filmTitle.classList.add('film-title');

//     filmTitle.addEventListener('click', () =>{
//      displayFilmList(film);
//     });
//     filmlList.appendChild(filmName);
//   });
// }

// function displayfilmDetails(animal) {
//   filmDetails.innerHTML = '';
//   const filmName = document.createElement('h2');
//   animalName.textContent = animal.name;

//   const filmImage = document.createElement('img');
//   filmImage.src = film.image;

//   const ticketCount = document.createElement('p');
//   ticketCount.textContent = `Votes: ${ticket.bought}`;

//   const ticketButton = document.createElement('button');
//   ticketButton.textContent = 'sold';
//   ticketButton.addEventListener('click', () => {
//       tickets.sold++;
//       ticketCount.textContent = `tickets: ${animal.votes}`;
//   });

//   filmDetails.appendChild(filmName);
//   filmDetails.appendChild(filmImage);
//   filmDetails.appendChild(ticketCount);
//   filmDetails.appendChild(ticketButton);
// }

// ticketButton.addEventListener('click', () => {
//   filmData.forEach(film => {
//       film.sold = 0;
//   });
//   displayFilmList();
//  filmDetails.innerHTML = '';
// });


// displayFilmList();

const baseURL= `http://localhost:3000/films`

fetch(baseURL)
.then(res => res.json())
.then(data => {displayFilmList(data)})
.catch(error=> console.log(error))

const filmList = document.getElementById("film-list");
const filmDetails = document.getElementById("film-details");

// // Sample film data
// const films = [
//     {
//         "id": "1",
//         "title": "The Giant Gila Monster",
//         "runtime": "108",
//         "capacity": 30,
//         "showtime": "04:00PM",
//         "tickets_sold": 27,
//         "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
//     },
    
// ];

// Function to populate the film list
function populateFilmList() {
    films.forEach((film) => {
        const filmElement = document.createElement("div");
        filmElement.className = "film";
        filmElement.innerHTML = `
            <h3>${film.title}</h3>
            <img src="${film.poster}" alt="${film.title}">
            <p>Showtime: ${film.showtime}</p>
            <p>Description: ${film.description}</p>
            <p>Tickets Sold: ${film.tickets_sold} / Capacity: ${film.capacity}</p>
            <button id="${film.id}" class="view-details">View Details</button>
            <button id="${film.id}" class="buy-ticket">Buy Ticket</button>
        `;
        filmList.appendChild(filmElement);
    });
}

// Event listener for viewing film details
filmList.addEventListener("click", (event) => {
    if (event.target.classList.contains("view-details")) {
        const filmId = event.target.id;
        const selectedFilm = films.find((film) => film.id === filmId);
        showFilmDetails(selectedFilm);
    }
});

// Event listener for buying a ticket
filmList.addEventListener("click", (event) => {
    if (event.target.classList.contains("buy-ticket")) {
        const filmId = event.target.id;
        const selectedFilm = films.find((film) => film.id === filmId);
        buyTicket(selectedFilm);
    }
});

// Function to display film details
function showFilmDetails(film) {
    filmDetails.innerHTML = `
        <h2>${film.title}</h2>
        <img src="${film.poster}" alt="${film.title}">
        <p>Runtime: ${film.runtime} minutes</p>
        <p>Showtime: ${film.showtime}</p>
        <p>Tickets Sold: ${film.tickets_sold} / Capacity: ${film.capacity}</p>
        <p>Description: ${film.description}</p>
    `;
    
    if (film.tickets_sold >= film.capacity) {
        filmDetails.innerHTML += '<p class="sold-out">Sold Out</p>';
    }

    filmDetails.style.display = "block";
    filmList.style.display = "none";
}

// Function to buy a ticket
function buyTicket(film) {
    if (film.tickets_sold < film.capacity) {
        film.tickets_sold++;
        showFilmDetails(film); // Update film details
    } else {
        filmDetails.innerHTML += '<p class="sold-out">Sold Out</p>';
    }
}

// Initialize the film list
populateFilmList();
