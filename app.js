// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // el array para que podamos guardar los nombres
function limpiarCaja() {
    document.querySelector("#amigo").value = "";
}

// Función para agregr los nombres de los amigos
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    limpiarCaja();       
    mostrarLista();     
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// con esto hacemos el sorteo para que aparezca el amigo secreto
function sortearAmigo() {
    let lista = document.getElementById("listaAmigos");
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado previo

    if (amigos.length === 0) {
        let li = document.createElement("li");
        li.textContent = "No hay amigos para sortear.";
        resultado.appendChild(li);
        return;
    }

    // Generar índice aleatorio y seleccionar amigo
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // ocultamos la lista de amigos
    lista.innerHTML = "";

    // resultado
    let li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(li);

    // con esto se muestra el botón de reinicio
    mostrarBotonReinicio();
}

//aqui reiniciamos el juego
function reiniciarJuego() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    limpiarCaja();

    // Ocultar el reinicio
    ocultarBotonReinicio();
}

//con esto se muestra el boton de reinicio después de mostrar el amigo
function mostrarBotonReinicio() {
    let contenedor = document.querySelector(".button-container");
    if (!document.getElementById("btnReiniciar")) {
        let boton = document.createElement("button");
        boton.id = "btnReiniciar";
        boton.className = "button-draw";
        boton.textContent = "Reiniciar";
        boton.onclick = reiniciarJuego;
        contenedor.appendChild(boton);
    }
}

// Ocultamos el boton de reinicio después de reiniciar el juego
function ocultarBotonReinicio() {
    let boton = document.getElementById("btnReiniciar");
    if (boton) {
        boton.remove();
    }
}

