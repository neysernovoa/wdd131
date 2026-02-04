let currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("header nav");
const hamburgerSymbol = "☰";
const closeSymbol = "✖"; 

const container = document.querySelector("#temples-container");
function displayTemples(templesList) {
  container.innerHTML = "";
  templesList.forEach(createTempleCard);
}
displayTemples(temples);
hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    hamburger.textContent = closeSymbol;
  } else {
    hamburger.textContent = hamburgerSymbol;
  }
})
function filterOld() {
  const oldTemples = temples.filter(temple => {
    const year = Number(temple.dedicated.split(",")[0]);
    return year < 1900;
  });

  displayTemples(oldTemples);
}
function filterNew() {
  const newTemples = temples.filter(temple => {
    const year = Number(temple.dedicated.split(",")[0]);
    return year > 2000;
  });

  displayTemples(newTemples);
}
function filterLarge() {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
}
function filterSmall() {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
}
document.querySelector("#home").addEventListener("click", () => {
  displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", filterOld);
document.querySelector("#new").addEventListener("click", filterNew);
document.querySelector("#large").addEventListener("click", filterLarge);
document.querySelector("#small").addEventListener("click", filterSmall);

function createTempleCard(temple) {
  const card = document.createElement("figure");

  const name = document.createElement("h3");
  name.textContent = temple.templeName;

  const location = document.createElement("p");
  location.textContent = `Location: ${temple.location}`;

  const dedicated = document.createElement("p");
  dedicated.textContent = `Dedicated: ${temple.dedicated}`;

  const area = document.createElement("p");
  area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

  const image = document.createElement("img");
  image.src = temple.imageUrl;
  image.alt = temple.templeName;
  image.loading = "lazy";

  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(dedicated);
  card.appendChild(area);
  card.appendChild(image);

  container.appendChild(card);
}
