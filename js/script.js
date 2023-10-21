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

// const baseURL= `http://localhost:3000/films`

// fetch(baseURL)
// .then(res => res.json())
// .then(data => {displayFilmList(data)})
// .catch(error=> console.log(error))

// const filmList = document.getElementById("film-list");
// const filmDetails = document.getElementById("film-details");



// //Function to populate the film list
// function populateFilmList() {
//     films.forEach((film) => {
//         const filmElement = document.createElement("div");
//         filmElement.className = "film";
//         filmElement.innerHTML = `
//             <h3>${film.title}</h3>
//             <img src="${film.poster}" alt="${film.title}">
//             <p>Showtime: ${film.showtime}</p>
//             <p>Description: ${film.description}</p>
//             <p>Tickets Sold: ${film.tickets_sold} / Capacity: ${film.capacity}</p>
//             <button id="${film.id}" class="view-details">View Details</button>
//             <button id="${film.id}" class="buy-ticket">Buy Ticket</button>
//         `;
//         filmList.appendChild(filmElement);
//     });
// }

// // Event listener for viewing film details
// filmList.addEventListener("click", (event) => {
//     if (event.target.classList.contains("view-details")) {
//         const filmId = event.target.id;
//         const selectedFilm = films.find((film) => film.id === filmId);
//         showFilmDetails(selectedFilm);
//     }
// });

// // Event listener for buying a ticket
// filmList.addEventListener("click", (event) => {
//     if (event.target.classList.contains("buy-ticket")) {
//         const filmId = event.target.id;
//         const selectedFilm = films.find((film) => film.id === filmId);
//         buyTicket(selectedFilm);
//     }
// });

// // Function to display film details
// function showFilmDetails(film) {
//     filmDetails.innerHTML = `
//         <h2>${film.title}</h2>
//         <img src="${film.poster}" alt="${film.title}">
//         <p>Runtime: ${film.runtime} minutes</p>
//         <p>Showtime: ${film.showtime}</p>
//         <p>Tickets Sold: ${film.tickets_sold} / Capacity: ${film.capacity}</p>
//         <p>Description: ${film.description}</p>
//     `;
    
//     if (film.tickets_sold >= film.capacity) {
//         filmDetails.innerHTML += '<p class="sold-out">Sold Out</p>';
//     }

//     filmDetails.style.display = "block";
//     filmList.style.display = "none";
// }

// // Function to buy a ticket
// function buyTicket(film) {
//     if (film.tickets_sold < film.capacity) {
//         film.tickets_sold++;
//         showFilmDetails(film); // Update film details
//     } else {
//         filmDetails.innerHTML += '<p class="sold-out">Sold Out</p>';
//     }
// }

// // Initialize the film list
// populateFilmList();



// const filmList = document.getElementById("film-list");
// const filmDetails = document.getElementById("film-details");

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
//     {
//         "id": "2",
//         "title": "Manos: The Hands Of Fate",
//         "runtime": "118",
//         "capacity": 50,
//         "showtime": "06:45PM",
//         "tickets_sold": 44,
//         "description": "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg"
//       },
//       {
//         "id": "3",
//         "title": "Time Chasers",
//         "runtime": "93",
//         "capacity": 50,
//         "showtime": "09:30PM",
//         "tickets_sold": 31,
//         "description": "An inventor comes up with a time machine, but must prevent its abuse at the hands of an evil C.E.O.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/23342/p23342_v_v8_ab.jpg"
//       },
//       {
//         "id": "4",
//         "title": "The Touch Of Satan",
//         "runtime": "101",
//         "capacity": 40,
//         "showtime": "09:00PM",
//         "tickets_sold": 31,
//         "description": "A young man meets a farm girl who is actually a witch.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/43468/p43468_v_v8_aa.jpg"
//       },
//       {
//         "id": "5",
//         "title": "Santa Claus Conquers The Martians",
//         "runtime": "96",
//         "capacity": 50,
//         "showtime": "03:30PM",
//         "tickets_sold": 45,
//         "description": "The Martians kidnap Santa Claus because there is nobody on Mars to give their children presents.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/4232/p4232_v_v8_aa.jpg"
//       },
//       {
//         "id": "6",
//         "title": "Track Of The Moon Beast",
//         "runtime": "112",
//         "capacity": 30,
//         "showtime": "10:30PM",
//         "tickets_sold": 16,
//         "description": "A young man is transformed into a hideous 'moon beast' due to a meteor fragment lodged in his body.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/39804/p39804_v_v8_ab.jpg"
//       },
//       {
//         "id": "7",
//         "title": "The Skydivers",
//         "runtime": "94",
//         "capacity": 30,
//         "showtime": "07:30PM",
//         "tickets_sold": 22,
//         "description": "A woman seeks revenge on her former lover, who owns a skydiving business.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/40518/p40518_v_v8_aa.jpg"
//       },
//       {
//         "id": "8",
//         "title": "The Killer Shrews",
//         "runtime": "115",
//         "capacity": 40,
//         "showtime": "08:30PM",
//         "tickets_sold": 32,
//         "description": "On an isolated island, a small group of people are terrorized by giant voracious shrews in the midst of a hurricane.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/1466/p1466_v_v8_ab.jpg"
//       },
//       {
//         "id": "9",
//         "title": "Project Moon Base",
//         "runtime": "99",
//         "capacity": 40,
//         "showtime": "07:30PM",
//         "tickets_sold": 22,
//         "description": "A saboteur posing as a scientist strives to destroy the world's first space station.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/46755/p46755_v_v8_aa.jpg"
//       },
//       {
//         "id": "10",
//         "title": "The Giant Spider Invasion",
//         "runtime": "122",
//         "capacity": 50,
//         "showtime": "10:00PM",
//         "tickets_sold": 44,
//         "description": "Giant spiders from another dimension invade Wisconsin.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/42171/p42171_v_v8_ab.jpg"
//       },
//       {
//         "id": "11",
//         "title": "Catalina Caper",
//         "runtime": "104",
//         "capacity": 30,
//         "showtime": "06:00PM",
//         "tickets_sold": 12,
//         "description": "A group of swingin' teens take time out from having fun in the sun to try to foil a group of crooks searching for a stolen scroll.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/58122/p58122_v_v8_aa.jpg"
//       },
//       {
//         "id": "12",
//         "title": "Secret Agent Super Dragon",
//         "runtime": "104",
//         "capacity": 30,
//         "showtime": "07:00PM",
//         "tickets_sold": 20,
//         "description": "A series of murders in Michigan lead an American secret agent to Amsterdam, where he uncovers a plot to imperil the world with a potent new drug.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/93417/p93417_v_v8_aa.jpg",
//         "showing_id": "12"
//       },
//       {
//         "id": "13",
//         "title": "Wild Rebels",
//         "runtime": "100",
//         "capacity": 40,
//         "showtime": "09:00PM",
//         "tickets_sold": 31,
//         "description": "A stock car driver goes undercover as the wheel man for a motorcycle gang.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/45367/p45367_v_v8_aa.jpg"
//       },
//       {
//         "id": "14",
//         "title": "Danger: Diabolik",
//         "runtime": "111",
//         "capacity": 50,
//         "showtime": "08:00PM",
//         "tickets_sold": 40,
//         "description": "International man of mystery Diabolik and his lover pull off heist after heist, all while European cops led by Inspector Ginko and envious mobsters led by Ralph Valmont are closing in on them.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/11850/p11850_v_v8_aa.jpg"
//       },
//       {
//         "id": "15",
//         "title": "Village Of The Giants",
//         "runtime": "98",
//         "capacity": 50,
//         "showtime": "04:45PM",
//         "tickets_sold": 33,
//         "description": "Delinquent teen-agers ingest a substance and grow thirty feet tall, then proceed to take over a small town.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/37991/p37991_v_v8_aa.jpg"
//       }
//     ];

// // Function to populate the film list
// function populateFilmList() {
//     films.forEach((film) => {
//         const filmElement = document.createElement("div");
//         filmElement.className = "film";
//         filmElement.innerHTML = `
//             <h3>${film.title}</h3>
//             <img src="${film.poster}" alt="${film.title}">
//             <p>Showtime: ${film.showtime}</p>
//             <p>Description: ${film.description}</p>
//             <p>Tickets Sold: ${film.tickets_sold} / Capacity: ${film.capacity}</p>
//             <button id="${film.id}" class="view-details">View Details</button>
//             <button id="${film.id}" class="buy-ticket">Buy Ticket</button>
//         `;
//         filmList.appendChild(filmElement);
//     });
// }

// // Event listener for viewing film details
// filmList.addEventListener("click", (event) => {
//     if (event.target.classList.contains("view-details")) {
//         const filmId = event.target.id;
//         const selectedFilm = films.find((film) => film.id === filmId);
//         showFilmDetails(selectedFilm);
//     }
// });

// // Event listener for buying a ticket
// filmList.addEventListener("click", (event) => {
//     if (event.target.classList.contains("buy-ticket")) {
//         const filmId = event.target.id;
//         const selectedFilm = films.find((film) => film.id === filmId);
//         buyTicket(selectedFilm);
//     }
// });

// // Function to display film details
// function showFilmDetails(film) {
//     filmDetails.innerHTML = `
//         <h2>${film.title}</h2>
//         <img src="${film.poster}" alt="${film.title}">
//         <p>Runtime: ${film.runtime} minutes</p>
//         <p>Showtime: ${film.showtime}</p>
//         <p>Tickets Sold: ${film.tickets_sold} / Capacity: ${film.capacity}</p>
//         <p>Description: ${film.description}</p>
//     `;
    
//     if (film.tickets_sold >= film.capacity) {
//         filmDetails.innerHTML += '<p class="sold-out">Sold Out</p>';
//     }

//     filmDetails.style.display = "block";
//     filmList.style.display = "none";
// }

// // Function to buy a ticket
// function buyTicket(film) {
//     if (film.tickets_sold < film.capacity) {
//         film.tickets_sold++;
//         showFilmDetails(film); // Update film details
//     } else {
//         filmDetails.innerHTML += '<p class="sold-out">Sold Out</p>';
//     }
// }

// // Initialize the film list
// populateFilmList();


// const filmList = document.getElementById("film-list");
// const filmDetails = document.getElementById("film-details");

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
//     {
//         "id": "2",
//         "title": "Manos: The Hands Of Fate",
//         "runtime": "118",
//         "capacity": 50,
//         "showtime": "06:45PM",
//         "tickets_sold": 44,
//         "description": "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg"
//       },
//       {
//         "id": "3",
//         "title": "Time Chasers",
//         "runtime": "93",
//         "capacity": 50,
//         "showtime": "09:30PM",
//         "tickets_sold": 31,
//         "description": "An inventor comes up with a time machine, but must prevent its abuse at the hands of an evil C.E.O.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/23342/p23342_v_v8_ab.jpg"
//       },
//       {
//         "id": "4",
//         "title": "The Touch Of Satan",
//         "runtime": "101",
//         "capacity": 40,
//         "showtime": "09:00PM",
//         "tickets_sold": 31,
//         "description": "A young man meets a farm girl who is actually a witch.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/43468/p43468_v_v8_aa.jpg"
//       },
//       {
//         "id": "5",
//         "title": "Santa Claus Conquers The Martians",
//         "runtime": "96",
//         "capacity": 50,
//         "showtime": "03:30PM",
//         "tickets_sold": 45,
//         "description": "The Martians kidnap Santa Claus because there is nobody on Mars to give their children presents.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/4232/p4232_v_v8_aa.jpg"
//       },
//       {
//         "id": "6",
//         "title": "Track Of The Moon Beast",
//         "runtime": "112",
//         "capacity": 30,
//         "showtime": "10:30PM",
//         "tickets_sold": 16,
//         "description": "A young man is transformed into a hideous 'moon beast' due to a meteor fragment lodged in his body.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/39804/p39804_v_v8_ab.jpg"
//       },
//       {
//         "id": "7",
//         "title": "The Skydivers",
//         "runtime": "94",
//         "capacity": 30,
//         "showtime": "07:30PM",
//         "tickets_sold": 22,
//         "description": "A woman seeks revenge on her former lover, who owns a skydiving business.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/40518/p40518_v_v8_aa.jpg"
//       },
//       {
//         "id": "8",
//         "title": "The Killer Shrews",
//         "runtime": "115",
//         "capacity": 40,
//         "showtime": "08:30PM",
//         "tickets_sold": 32,
//         "description": "On an isolated island, a small group of people are terrorized by giant voracious shrews in the midst of a hurricane.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/1466/p1466_v_v8_ab.jpg"
//       },
//       {
//         "id": "9",
//         "title": "Project Moon Base",
//         "runtime": "99",
//         "capacity": 40,
//         "showtime": "07:30PM",
//         "tickets_sold": 22,
//         "description": "A saboteur posing as a scientist strives to destroy the world's first space station.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/46755/p46755_v_v8_aa.jpg"
//       },
//       {
//         "id": "10",
//         "title": "The Giant Spider Invasion",
//         "runtime": "122",
//         "capacity": 50,
//         "showtime": "10:00PM",
//         "tickets_sold": 44,
//         "description": "Giant spiders from another dimension invade Wisconsin.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/42171/p42171_v_v8_ab.jpg"
//       },
//       {
//         "id": "11",
//         "title": "Catalina Caper",
//         "runtime": "104",
//         "capacity": 30,
//         "showtime": "06:00PM",
//         "tickets_sold": 12,
//         "description": "A group of swingin' teens take time out from having fun in the sun to try to foil a group of crooks searching for a stolen scroll.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/58122/p58122_v_v8_aa.jpg"
//       },
//       {
//         "id": "12",
//         "title": "Secret Agent Super Dragon",
//         "runtime": "104",
//         "capacity": 30,
//         "showtime": "07:00PM",
//         "tickets_sold": 20,
//         "description": "A series of murders in Michigan lead an American secret agent to Amsterdam, where he uncovers a plot to imperil the world with a potent new drug.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/93417/p93417_v_v8_aa.jpg",
//         "showing_id": "12"
//       },
//       {
//         "id": "13",
//         "title": "Wild Rebels",
//         "runtime": "100",
//         "capacity": 40,
//         "showtime": "09:00PM",
//         "tickets_sold": 31,
//         "description": "A stock car driver goes undercover as the wheel man for a motorcycle gang.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/45367/p45367_v_v8_aa.jpg"
//       },
//       {
//         "id": "14",
//         "title": "Danger: Diabolik",
//         "runtime": "111",
//         "capacity": 50,
//         "showtime": "08:00PM",
//         "tickets_sold": 40,
//         "description": "International man of mystery Diabolik and his lover pull off heist after heist, all while European cops led by Inspector Ginko and envious mobsters led by Ralph Valmont are closing in on them.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/11850/p11850_v_v8_aa.jpg"
//       },
//       {
//         "id": "15",
//         "title": "Village Of The Giants",
//         "runtime": "98",
//         "capacity": 50,
//         "showtime": "04:45PM",
//         "tickets_sold": 33,
//         "description": "Delinquent teen-agers ingest a substance and grow thirty feet tall, then proceed to take over a small town.",
//         "poster": "https://www.gstatic.com/tv/thumb/v22vodart/37991/p37991_v_v8_aa.jpg"
//       }
//     ];

// // Function to populate the film list
// function populateFilmList() {
//     films.forEach((film) => {
//         const filmElement = document.createElement("div");
//         filmElement.className = "film";
//         filmElement.innerHTML = `
//             <h3>${film.title}</h3>
//             <img src="${film.poster}" alt="${film.title}">
//             <p>Showtime: ${film.showtime}</p>
//             <p>Description: ${film.description}</p>
//             <p>Tickets Sold: ${film.tickets_sold} / Capacity: ${film.capacity}</p>
//             <button id="${film.id}" class="view-details">View Details</button>
//             <button id="${film.id}" class="buy-ticket">Buy Ticket</button>
//         `;
//         filmList?.appendChild(filmElement);
//     });
// }

// // Event listener for viewing film details
// filmList?.addEventListener("click", (event) => {
//     if (event.target.classList.contains("view-details")) {
//         const filmId = event.target.id;
//         const selectedFilm = films.find((film) => film.id === filmId);
//         showFilmDetails(selectedFilm);
//     }
// });

// // Event listener for buying a ticket
// filmList?.addEventListener("click", (event) => {
//     if (event.target.classList.contains("buy-ticket")) {
//         const filmId = event.target.id;
//         const selectedFilm = films.find((film) => film.id === filmId);
//         buyTicket(selectedFilm);
//     }
// });

// // Function to display film details
// function showFilmDetails(film) {
//     filmDetails.innerHTML = `
//         <h2>${film.title}</h2>
//         <img src="${film.poster}" alt="${film.title}">
//         <p>Runtime: ${film.runtime} minutes</p>
//         <p>Showtime: ${film.showtime}</p>
//         <p>Tickets Sold: ${film.tickets_sold} / Capacity: ${film.capacity}</p>
//         <p>Description: ${film.description}</p>
//     `;
    
//     if (film.tickets_sold >= film.capacity) {
//         filmDetails.innerHTML += '<p class="sold-out">Sold Out</p>';
//     }

//     filmDetails.style.display = "block";
//     filmList.style.display = "none";
// }

// // Function to buy a ticket
// function buyTicket(film) {
//     if (film.tickets_sold < film.capacity) {
//         film.tickets_sold++;
//         showFilmDetails(film); // Update film details
//     } else {
//         filmDetails.innerHTML += '<p class="sold-out">Sold Out</p>';
//     }
// }

// // Initialize the film list
// populateFilmList();



let films = []
document.addEventListener("DOMContentLoaded",()=>{
    getflims ()
})
function getflims (){
    fetch("http://localhost:3000/films")
    .then (res =>res.json())
    
    .then (data=>{
        films = [...data]
        dispalyFlims (films)
        
    })
    
}


function dispalyFlims (films){
    const filmcontainer = document.querySelector("#film")
    


    for (films of films){
        filmcontainer.innerHTML += `
    <div class = "p-2 m-1 col-3">
    <div class="card">
        <img src="${films.poster}" class="card-img-top" alt="${films.description}">
         <div class="card-body">
         <h5 class="card-title">${films.title}</h5>
             <span>
             <ul>
                <li>Runtime:${films.runtime}</li>
                <li>Capacity:${films.capacity}</li>
                <li>Showtime:${films.showtime}</li>
                <li>Ticketsold:${films.tickets_sold}</li>
              <li>Available Ticket:${films.capacity-films.tickets_sold}</li>

                
                
             </ul>
             
             
             </span>

             <div>
            
            
            
        
            

         </div>
    </div>`
         
        }
    }