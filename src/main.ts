let turno = 0;


// Función mostrar número
const mostrar_numero = () => {
    const numero_turno_element = document.getElementById("numero_turno_element");
    
    if (numero_turno_element) {
            numero_turno_element.innerHTML = turno.toString().padStart(2, '0');
    } 
};

document.addEventListener("DOMContentLoaded", mostrar_numero);


const handle_click = (boton: string) => {

    switch (boton) {
        case "siguiente": {
            if (turno != 99) {
                turno++, mostrar_numero;
                break;
            } else {
                    console.log("Máximo turnos alcanzado. Pulsa el botón de reset si quieres reiniciar el contador.");
                    break;
            }
        }
        case "anterior": {
            if (turno === 0) {
                console.log("El turno no puede ser menor que 0.");
            } else {
                turno--, mostrar_numero;
                break;
            }
        }
        case "reset": {
                turno = 0, mostrar_numero;
                break;
            }
        }
    mostrar_numero();
};

// Botón número anterior
const boton_anterior = document.getElementById("anterior");
boton_anterior?.addEventListener("click", () => handle_click("anterior"));

// Botón número siguiente
const boton_siguiente = document.getElementById("siguiente");
boton_siguiente?.addEventListener("click", () => handle_click("siguiente"));

// Botón reset
const boton_reset = document.getElementById("reset");
boton_reset?.addEventListener("click", () => handle_click("reset"));