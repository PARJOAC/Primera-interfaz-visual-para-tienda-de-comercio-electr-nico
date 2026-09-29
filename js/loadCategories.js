const categories = document.getElementById("categories");

const categoriesArray = [
  "Camisetas",
  "Pantalones Largos",
  "Pantalones Cortos",
  "Tops",
  "Bañadores",
  "Bikinis",
  "Vestidos",
  "Complementos",
];

categoriesArray.forEach((name) => {
  // Creamos un contenedor por cada categoría
  const fileName = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Limpia tildes (ej: Bañadores -> banadores)
    .replace(/\s+/g, "_"); // Reemplaza espacios por guiones bajos

  categories.innerHTML += `
    <div class="category-card">
        <img class="cat-redondo" src="img/categories/${fileName}.png" alt="${name}">
        <p class="cat-titulo">${name}</p>
    </div>
    `;
});
