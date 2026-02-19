const placesCards = [
  {
    name: "Pomac Forest Historical Sanctuary",
    image: "images/pomac.webp",
    location: "Ferreñafe, Lambayeque",
    description: "A protected dry forest with archaeological sites and diverse wildlife.",
  },
  {
    name: "Jagüeyes de Mayascón",
    image: "images/mayascon.webp",
    location: "Lambayeque",
    description: "Ancient water reservoirs used for irrigation and agriculture by pre-Columbian cultures."
  },
  {
    name: "Pimentel Beach",
    image: "images/pimentel.webp",
    location: "Pimentel, Lambayeque",
    description: "A popular coastal beach famous for its pier and surfing spots."
  },
  {
    name: "Paseo Yortuque",
    image: "images/yortuque.webp",
    location: "Lambayeque",
    description: "A scenic recreational area perfect for walking and enjoying local views."
  },
  {
    name: "Royal Tombs Museum of Sipán",
    image: "images/tumbas-reales.webp",
    location: "Sipán, Lambayeque",
    description: "Museum showcasing the treasures of the Lord of Sipán and the Moche culture."
  },
  {
    name: "Brüning National Archaeological Museum",
    image: "images/bruning.webp",
    location: "Lambayeque city, Lambayeque",
    description: "Houses artifacts from the Lambayeque, Moche, and Chimu civilizations."
  },

]

let selectPlaces = []

const container = document.getElementById("places-container");
placesCards.forEach(place => {
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  const caption = document.createElement("figcaption");
  const location = document.createElement("p");
  const paragraph = document.createElement("p");


  img.src = place.image;
  img.alt = place.name;
  img.loading = "lazy";
  caption.textContent = place.name;
  paragraph.textContent = place.description;
  location.textContent = place.location;
  
  
  
  figure.addEventListener("click", () => {
    const index = selectPlaces.findIndex(p => p.name === place.name);
    if (index === -1 && selectPlaces.length < 4) {
      selectPlaces.push(place);
      figure.classList.add("selected");
    } else if (index >= 0) {
      selectPlaces.splice(index, 1);
      figure.classList.remove("selected");
    } else if (index === -1 && selectPlaces.length >= 4) {
      alert("You can select up to 4 places only!");
    }

    console.log(selectPlaces);
  });


  figure.appendChild(img);
  figure.appendChild(caption);
  figure.appendChild(paragraph);
  figure.appendChild(location);
  

  container.appendChild(figure);
});

const generateButton = document.getElementById("generate-button");
const tourResult = document.getElementById("tour-result");

generateButton.addEventListener("click", () => {
  if (selectPlaces.length === 0) {
    alert("Please select at least one place");
    return;
  }

  localStorage.setItem("tourPlaces", JSON.stringify(selectPlaces));

  document.querySelectorAll(".selected").forEach(img => {
    img.classList.remove("selected");
  });

  window.open("tour.html", "_blank");
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const messageBox = document.createElement("p");
  messageBox.textContent = "¡Form sended! Thank you, " + name + ".";
  messageBox.style.color = "#274c77"; 
  contactForm.appendChild(messageBox);

  contactForm.reset();
});



