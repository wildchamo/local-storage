const valor = document.getElementById("inputtext");
const fechaActualMil = new Date().getTime();
const fechaGuardadaMil = new Date(localStorage.getItem("fecha")).getTime();

let fechaActual = new Date();
const fechaGuardada = new Date(localStorage.getItem("fecha"));

function mostrarValor() {
  console.log(valor.value);
  console.log(fechaActual);

  localStorage.setItem("valor", valor.value);
  localStorage.setItem("fecha", fechaActual);
}

function mostrarFechas() {
  console.log("fecha guardada: " + fechaGuardada);
  console.log("fecha actual: " + fechaActual);
  let diff = fechaActualMil - fechaGuardadaMil;
  console.log("hay: " + diff / (1000 * 60) + " minutos de diferencia");
}
