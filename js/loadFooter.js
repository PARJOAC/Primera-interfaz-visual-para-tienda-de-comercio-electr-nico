async function loadNavbar() {
  try {
    const response = await fetch("components/footer.html");
    const html = await response.text();
    document.getElementById("footer").innerHTML = html;
  } catch (error) {
    console.error("Error al cargar la barra de navegación:", error);
  }
}

loadNavbar();
