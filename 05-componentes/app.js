const boton = document.querySelector("#boton");
const menu = document.querySelector("#menu");

boton.addEventListener("click", () => {
  // .toggle() quita o agrega la clase "hidden", es decir la intercambia, osea que muestra u oculta los enlaces de la barra de navegación
  menu.classList.toggle("hidden");
});
