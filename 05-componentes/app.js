const boton = document.querySelector("#boton");
const menu = document.querySelector("#menu");

boton.addEventListener("click", () => {
  // .toggle() quita o agrega la clase "hidden", es decir la intercambia.
  menu.classList.toggle("hidden");
});
