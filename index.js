const valor = document.getElementById("inputtext");
const fechaActualMil = new Date().getTime();
const fechaGuardadaMil = new Date(localStorage.getItem("fecha")).getTime();

let fechaActual = new Date();
const fechaGuardada = new Date(localStorage.getItem("fecha"));
const info= document.getElementById("info");

let diff = fechaActualMil - fechaGuardadaMil;

function mostrarValor() {
 fechaActual = new Date();
  console.log(valor.value);
  console.log(fechaActual);

  localStorage.setItem("valor", valor.value);
  localStorage.setItem("fecha", fechaActual);
}

function mostrarFechas() {
  fechaActual = new Date();
  console.log("fecha guardada: " + fechaGuardada);
  console.log("fecha actual: " + fechaActual);
  console.log("hay: " + diff / (1000 * 60) + " minutos de diferencia");
  mostrarInfo()
}

function mostrarInfo(){
    if(diff>30){
        info.innerHTML="El valor ha caducado";
    }else{
        info.innerHTML="hola";
    }
}