// vinculacion con los elementos del archivo html con js por su id
const cronometro = document.getElementById(`cronometro`);
const botonInicioPausa = document.getElementById(`boton-inicio-pausa`);
const botonReiniciar = document.getElementById(`boton-reiniciar`);


/*se pueden definir varias variables y definirlas, si son colocadas dentro de un arreglo array []*/

let [horas, minutos, segundos] = [0, 0, 0];



let intervaloDeTiempo;
let estadoCronometro = `pausado`;

function actualizarCronometro() {
    segundos++;

if(segundos / 60 === 1){
    segundos = 0;
    minutos++;
    }

if(minutos / 60 === 1){
    minutos = 0;
    horas++;
    }



const segundosConFormato = asignarFormato(segundos);
const minutosConFormato = asignarFormato(minutos);
const horasConFormato = asignarFormato(horas);

cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}


// la siguiente funcion lo que hace es, poner un cero a la izquierda cuando el numero no supera los dos digitos
// unidadDeTiempo < 10 ? esto es un condicional por el ? si la unidad de tiempo (sean horas,minutos,segundos) es menor a 10
// pone 0 a la izq sino(:) da la unidad de tiempo que corresconde ej 14 lo que sea de unidad de tiempo.

function asignarFormato(unidadDeTiempo) {
    return unidadDeTiempo < 10 ? "0" + unidadDeTiempo : unidadDeTiempo;

}

// los siguientes event = eventos, hacen que al apretar el los botones le digan al cronometro como actuar
 

botonInicioPausa.addEventListener(`click`, function(){
    if(estadoCronometro === `pausado`){
        intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
         botonInicioPausa.innerHTML = `<i class="bi bi-pause-fill"></i>`;
         botonInicioPausa.classList.remove("iniciar");
         botonInicioPausa.classList.add("pausar");
         estadoCronometro = "andando";
    }else{
        window.clearInterval(intervaloDeTiempo);
        botonInicioPausa.innerHTML = `<i class="bi bi-play-fill"></i>`;
        botonInicioPausa.classList.remove("pausar");
        botonInicioPausa.classList.add("iniciar");
        estadoCronometro = "pausado";
    }
})



botonReiniciar.addEventListener(`click`, function(){
    window.clearInterval(intervaloDeTiempo);

    horas = 0;
    minutos = 0;
    segundos = 0;

    cronometro.innerText = `00:00:00`;
    
    botonInicioPausa.innerHTML = `<i class="bi bi-play-fill"></i>`;
    botonInicioPausa.classList.remove("pausar");
    botonInicioPausa.classList.add("iniciar");
    estadoCronometro = "pausado";
 })
