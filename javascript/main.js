window.onload = function() {
  alert("Bienvenido al proyecto de Minecraft!");
}

// Agrega un efecto de desplazamiento suave al hacer clic en los enlaces del menú de navegación
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
