

let lenceria = {
    tallas: ["XS", "S", "M", "L", "XL"],
    descripcion: "Lencería de encaje",
    color: "Negro",
    seleccionadas: [],
    cantidadCompradas: {},

    mostrarCompras() {
        const otrasComprasDiv = document.querySelector("#otrasCompras");
        otrasComprasDiv.innerHTML = '';
        const ul = document.createElement("ul");
        for (let talla in lenceria.cantidadCompradas) {
            const li = document.createElement("li");
            li.textContent = `Talla ${talla}: ${lenceria.cantidadCompradas[talla]}`;
            ul.appendChild(li);
        }
        otrasComprasDiv.appendChild(ul);
    },

    guardarSeleccion() {
        // Convertir la selección de lencería a JSON y guardarla en localStorage
        const seleccionJSON = JSON.stringify(lenceria.seleccionadas);
        localStorage.setItem("seleccionLenceria", seleccionJSON);
    },

    cargarSeleccion() {
        // Recuperar la selección de lencería desde localStorage y convertirla de nuevo a un arreglo
        const seleccionGuardada = localStorage.getItem("seleccionLenceria");
        if (seleccionGuardada) {
            lenceria.seleccionadas = JSON.parse(seleccionGuardada);
        }
    }
};

function simuladorLenceria() {
    const tallaSeleccionada = document.querySelector("#tallaSeleccionada");
    const tallaBuscada = document.querySelector("#tallaBuscada");
    const restablecerSeleccion = document.querySelector("#restablecerSeleccion");
    const mostrarComprasButton = document.querySelector("#mostrarCompras");

    // Cargar la selección de lencería almacenada al cargar la página
    lenceria.cargarSeleccion();

    // Evento de cambio para el select de talla de lencería
    tallaSeleccionada.addEventListener("change", function () {
        const selectedTalla = tallaSeleccionada.value;
        if (lenceria.tallas.includes(selectedTalla)) {
            lenceria.seleccionadas.push(selectedTalla);
            if (lenceria.cantidadCompradas[selectedTalla]) {
                lenceria.cantidadCompradas[selectedTalla]++;
            } else {
                lenceria.cantidadCompradas[selectedTalla] = 1;
            }
            // Guardar la selección de lencería
            lenceria.guardarSeleccion();
        } else {
            alert("Lo sentimos, la talla de lencería seleccionada no está disponible en este momento.");
        }
    });

    // Evento de entrada de teclado para buscar una talla de lencería
    tallaBuscada.addEventListener("keyup", function (event) {
        const searchedTalla = tallaBuscada.value;
        if (event.key === "Enter") {
            const foundTalla = lenceria.tallas.find(talla => talla === searchedTalla);
            if (foundTalla) {
                alert(`¡Buena noticia! Tenemos la talla de lencería ${foundTalla} en stock.`);
            } else {
                alert(`Lo sentimos, no tenemos la talla de lencería ${searchedTalla} en stock.`);
            }
        }
    });

    // Evento de clic para restablecer selecciones de lencería
    restablecerSeleccion.addEventListener("click"), function () {
        lenceria
    }
}    