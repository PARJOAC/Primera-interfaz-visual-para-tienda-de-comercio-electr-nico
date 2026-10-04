const categories = document.getElementById("categories");

const categoriasArray = [
  "Camisetas",
  "Pantalones Largos",
  "Pantalones Cortos",
  "Tops",
  "Bañadores",
  "Bikinis",
  "Vestidos",
];

categoriasArray.forEach((name) => {
  const nombreArchivo = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Limpia tildes
    .replace(/\s+/g, "_"); // Reemplaza espacios por guiones bajos

  categories.innerHTML += `
    <div class="tarjeta-categoria">
        <img class="imagen-categoria" src="img/categories/${nombreArchivo}.png" alt="${name}">
        <p class="titulo-categoria">${name}</p>
    </div>
    `;
});
