const container = document.getElementById("tour-container");

const data = localStorage.getItem("tourPlaces");

if (data) {
  const places = JSON.parse(data);

  places.forEach(place => {
    const div = document.createElement("div");

    div.innerHTML = `
      <img src="${place.image}" alt="${place.name}" width="250" loading="lazy">
      <p>${place.name}</p>
    `;

    container.appendChild(div);
  });
}
