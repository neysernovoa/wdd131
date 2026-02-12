document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`; lastModified;

document.addEventListener("DOMContentLoaded", function () {

  const params = new URLSearchParams(window.location.search);
  const hasSubmitted = params.has("product");

  if (hasSubmitted) {

    let count = Number(localStorage.getItem("reviewCount")) || 0;
    count++;
    localStorage.setItem("reviewCount", count);

    
    window.history.replaceState({}, document.title, "review.html");
  }

  const counter = document.getElementById("counter");
  if (counter) {
    counter.textContent = localStorage.getItem("reviewCount") || 0;
  }

});

