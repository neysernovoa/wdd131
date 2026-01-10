// 1️⃣ Obtener el año actual
let currentYear = new Date().getFullYear();

// 2️⃣ Mostrar el año actual en el span con id="currentyear"
document.getElementById("currentyear").innerHTML = currentYear;

// 3️⃣ Mostrar la fecha de última modificación en el segundo párrafo
document.getElementById("lastModified").innerHTML = document.lastModified;
