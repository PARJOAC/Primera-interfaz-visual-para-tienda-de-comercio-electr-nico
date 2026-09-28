async function loadNavbar() {
  try {
    const response = await fetch("components/nav.html");
    const html = await response.text();
    document.getElementById("navbar").innerHTML = html;
  } catch (error) {
    console.error("Error al cargar la barra de navegación:", error);
  }
}

loadNavbar();
