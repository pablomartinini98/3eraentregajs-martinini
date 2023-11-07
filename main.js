

// Obtén referencias a los botones en el documento HTML
const botonMostrarLenceria1 = document.getElementById("botonMostrarLenceria1");
const botonMostrarLenceria2 = document.getElementById("botonMostrarLenceria2");

// Funciones para mostrar mensajes relacionados con la lencería
function mostrarLenceria1() {
    alert("¡Hermosa lencería de encaje para ocasiones especiales!");
}

function mostrarLenceria2() {
    alert("Descubre nuestra colección de lencería sexy y elegante.");
}

// Agregar manejadores de eventos a los botones
botonMostrarLenceria1.addEventListener("click", mostrarLenceria1);
botonMostrarLenceria2.addEventListener("click", mostrarLenceria2);
// Obtén una referencia al elemento select en el documento HTML
const selectTalla = document.getElementById("tallaSeleccionada");

// Agregar un manejador de eventos al select para mostrar un mensaje
selectTalla.addEventListener("change", function () {
    const seleccion = selectTalla.value;
    let mensaje = "";

    switch (seleccion) {
        case "XS":
            mensaje = "Has seleccionado talla XS, perfecta para la comodidad.";
            break;
        case "S":
            mensaje = "Has seleccionado talla S, ideal para un ajuste cómodo.";
            break;
        case "M":
            mensaje = "Has seleccionado talla M, para un ajuste regular.";
            break;
        case "L":
            mensaje = "Has seleccionado talla L, para un ajuste más holgado.";
            break;
        case "XL":
            mensaje = "Has seleccionado talla XL, para un ajuste amplio y cómodo.";
            break;
        default:
            mensaje = "Selecciona una talla de lencería";
    }

    alert(mensaje);
});
// Obtén una referencia a elementos en el documento HTML
const inputTallaComprada = document.getElementById("tallaComprada");
const registroComprasDiv = document.getElementById("registroCompras");
const restablecerCompraButton = document.getElementById("restablecerCompra");

// Almacena las compras realizadas
const comprasRealizadas = [];

// Agregar un manejador de eventos para comprar la talla cuando se presiona "Enter"
inputTallaComprada.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        const tallaComprada = inputTallaComprada.value.trim();

        if (tallaComprada === "") {
            alert("Por favor, ingresa una talla para comprar.");
        } else {
            comprasRealizadas.push(tallaComprada);
            mostrarComprasEnRegistro();
            inputTallaComprada.value = ""; // Limpiar el campo de entrada
        }
    }
});

// Agregar un manejador de eventos para restablecer las compras
restablecerCompraButton.addEventListener("click", function() {
    comprasRealizadas.length = 0; // Vaciar el arreglo de compras
    mostrarComprasEnRegistro();
});

function mostrarComprasEnRegistro() {
    registroComprasDiv.innerHTML = "Tallas Compradas:<br>";
    for (const compra of comprasRealizadas) {
        registroComprasDiv.innerHTML += compra + "<br>";
    }
}
