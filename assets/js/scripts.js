// Variables de rondas y contador, comienzan de 1 para que de el numero exacto y no uno más
var rondas = 0
var contadorRondas = 0;

// Esta función determina el número de rondas establecido por el usuario al iniciar el juego, la info se recoge desde html mediante la función y la info se trae a JavaScript 
function comenzar() {
    document.getElementById("contenedorJuego").style.display = "block";
    document.getElementById("contenedorInicial").style.display = "none";
    rondas = document.getElementById("rondas").value;
    console.log(rondas);
}

// Esta función es la que compara los resulados de acuerdo a la elección del usuario y los compara con los resultados randómicos del pc entregando un ganador, un perdedor y los empates
function jugar(obj) {
    var res;
    // esta var es un arreglo 
    var objetos = ["piedra", "papel", "tijera"];

    // La lógica de jugadas comparará las variable del contador con las jugadas seleccionadas por el usuario y permitirá que la función juego se ejecute si el contador es menor o igual a las jugadas seleccionadas por el usuario
    if (contadorRondas <= rondas) {

        var pc = Math.floor(Math.random() * 3);

        var movjugador = objetos[obj];
        var movpc = objetos[pc]


        // estos console.log son para determinar si efectivamente cuando el usuario presiona sobre la imagen, efectivamente es reconocida de acuerdo al arreglo y en el caso del pc de forma randómica
        console.log(movjugador);
        console.log(movpc);

        // Esta función cambia el contenido del elemento con el id usuario y pc, y lo reemplaza por lo contenido en las variables
        document.getElementById("jugador").innerHTML = objetos[obj];
        document.getElementById("pc").innerHTML = objetos[pc];

        if (movjugador == 'piedra') {
            switch (movpc) {
                case 'papel':
                    res = "Ganaste jugador";
                    break;
                case 'tijera':
                    res = "Ganaste jugador";
                    break;
                default:
                    res = "Empate";
                    break;
            }
        } else if (movjugador == 'tijera') {
            switch (movpc) {
                case 'papel':
                    res = "Ganaste jugador";
                    break;
                case 'tijera':
                    res = "Empate";
                    break;
                default:
                    res = "Perdiste contra el Pc";
                    break;
            }
        } else {
            switch (movpc) {
                case 'papel':
                    res = "Empate";
                    break;
                case 'tijera':
                    res = "Perdiste contra el Pc";
                    break;
                default:
                    res = "Perdiste contra el Pc";
                    break;
            }
        }


        // Esta función cambia el contenido del elemento con el id resuktado y jugadasrestantes, y lo reemplaza por lo contenido en innerHTML
        document.getElementById("resultado").innerHTML = res;
        document.getElementById("jugadasrestantes").innerHTML = rondas - contadorRondas;
        contadorRondas++;

    } else {
        alert("El juego ha finalizado.");
        // Se despliega botón para jugar otra vez
        document.getElementById("btnNuevo").style.display = "block";
    }

}

// Función que despliega el contenedor inicial del juego estableciendo el contador y las rondas con 1 por defecto para establecer el numero exacto al mostrarlo al usuario
function nuevoJuego() {
    contadorRondas = 1;
    rondas = 1;
    document.getElementById("btnNuevo").style.display = "none";
    document.getElementById("contenedorJuego").style.display = "none";
    document.getElementById("contenedorInicial").style.display = "block";
}