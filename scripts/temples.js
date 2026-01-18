let currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("header nav");
const hamburgerSymbol = "☰";
const closeSymbol = "✖"; 

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    hamburger.textContent = closeSymbol;
  } else {
    hamburger.textContent = hamburgerSymbol;
  }
});
