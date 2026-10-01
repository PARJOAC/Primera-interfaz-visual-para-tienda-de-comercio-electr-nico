const catalogo = [
  {
    id: 1,
    nombre: "Camiseta Oversize Negra",
    precio: 19.99,
    img: "https://martinvalen.com/cdn/shop/files/36712_asymmetrical-oversized-black-t-shirt.jpg?v=1777457521",
  },
  {
    id: 2,
    nombre: "Pantalón Cargo Beige",
    precio: 34.5,
    img: "https://img01.ztat.net/article/spp-media-p1/bd2942efd3fb414881f4903e9c433f9c/33df56edabc243f3ab7cb294e1045ba0.jpg?imwidth=800",
  },
  {
    id: 3,
    nombre: "Sudadera",
    precio: 39.99,
    img: "https://www.tuskamisetas.com/resources/images/276_54_322_m-2025_01.jpg",
  },
  {
    id: 4,
    nombre: "Zapatillas",
    precio: 59.9,
    img: "https://media.glamour.es/photos/670a1870a882d8ad6e74d16c/3:4/w_748%2Cc_limit/zapatillas%2520iconicas%2520all%2520star%2520converse.png",
  },
  {
    id: 5,
    nombre: "Gorra",
    precio: 15.0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4x6w2ZECoqzVW88GeW5lTWtKelUyEXwVnio6B-NVfhdIKlmnCvGN5zl1U&s=10",
  },
  {
    id: 6,
    nombre: "Chaqueta",
    precio: 49.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvB21mLwzUxgsn_rRBodPsKoj6TVL7PKERDOmI8OIkUtzxdEMN4-WZWvM&s=10",
  },
];

// Cargar la cesta de localStorage para que no se pierda al cambiar de página
let cesta = JSON.parse(localStorage.getItem("shain_cesta")) || [];

function mostrarCatalogo() {
  const contenedor = document.getElementById("lista-productos");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  catalogo.forEach((prod) => {
    const div = document.createElement("div");
    div.className = "product-card";

    div.innerHTML = `
      <img src="${prod.img}" alt="${prod.nombre}" class="product-image">
      <div class="product-info">
        <h3 class="product-title">${prod.nombre}</h3>
        <p class="product-price">${prod.precio.toFixed(2)} €</p>
        <button class="add-to-cart-btn" onclick="añadirACesta(${prod.id})">Añadir a la cesta</button>
      </div>
    `;

    contenedor.appendChild(div);
  });
}

function añadirACesta(id) {
  const producto = catalogo.find((p) => p.id === id);
  if (producto) {
    cesta.push(producto);
    localStorage.setItem("shain_cesta", JSON.stringify(cesta)); // Guardar en el navegador
    actualizarContadorCesta();
  }
}

function actualizarContadorCesta() {
  const contador = document.getElementById("cart-count");
  if (contador) {
    contador.innerText = cesta.length;
  }
}

function mostrarCesta() {
  const contenedorCesta = document.getElementById("items-cesta");
  if (!contenedorCesta) return; // Si no estamos en cesta.html, no hace nada

  contenedorCesta.innerHTML = "";

  let total = 0;

  if (cesta.length === 0) {
    contenedorCesta.innerHTML =
      "<p class='cart-empty-msg'>La cesta está vacía</p>";
  } else {
    cesta.forEach((prod, index) => {
      const div = document.createElement("div");
      div.className = "cart-item-page";

      div.innerHTML = `
        <div class="cart-item-details">
          <img src="${prod.img}" class="cart-item-img">
          <div class="cart-item-info">
            <strong class="cart-item-title">${prod.nombre}</strong><br>
            <span class="cart-item-price">${prod.precio.toFixed(2)}€</span>
          </div>
        </div>
        <button class="remove-btn" onclick="eliminarDeCesta(${index})">Eliminar</button>
      `;

      contenedorCesta.appendChild(div);
      total += prod.precio;
    });
  }

  document.getElementById("total-cesta").innerText =
    `Total: ${total.toFixed(2)}€`;
}

function eliminarDeCesta(indice) {
  cesta.splice(indice, 1);
  localStorage.setItem("shain_cesta", JSON.stringify(cesta)); // Actualizar datos en navegador
  mostrarCesta();
}

// Inicializar cuando el DOM esté listo
window.addEventListener("DOMContentLoaded", () => {
  mostrarCatalogo();
  mostrarCesta();
  actualizarContadorCesta();
});
