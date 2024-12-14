let turno: number = 0;

// Función mostrar número
const mostrarTurno = () => {
    const numero_turno_element = document.getElementById("numero_turno_element");
    
    if (numero_turno_element) {
        numero_turno_element.innerHTML = turno.toString().padStart(2, '0');
    } 
};

const eventos = () => {
    // Botón número anterior
    const botonAnterior = document.getElementById("anterior");
    botonAnterior?.addEventListener("click", () => {anteriorTurno(turno)});
    
    // Botón número siguiente
    const botonSiguiente = document.getElementById("siguiente");
    botonSiguiente?.addEventListener("click", () => siguienteTurno(turno));
    
    // Botón personalizado
    const botonPersonalizado = document.getElementById("personalizado");
    botonPersonalizado?.addEventListener("click", () => turnoPersonalizado());
    
    // Botón reset
    const botonReset = document.getElementById("reset");
    botonReset?.addEventListener("click", () => turnoPorDefecto());
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarTurno(), 
    eventos()
});


const siguienteTurno = (turno: number) => {
    if (turno < 99) {
        turno++;
        mostrarTurno();
    } else {
        console.log("Máximo de turnos alcanzado. Pulsa el botón de reset para reiniciar el contador.");
    }
}

const anteriorTurno = (turno: number) => {
    if (turno > 0) {
        turno --;
        mostrarTurno();
    } else {
        console.log("El turno no puede ser menor que 0.");
    }
}


// Resetea turno
const turnoPorDefecto = () => {
    turno = 0
    mostrarTurno();
}


// Personaliza turno
const personalizarTurno = (turno: number) => {    
    if (turno > 0 && turno <= 99) {
        turno = turno;
        mostrarTurno();
    } else {
        console.log("Número de turno no válido. Introduce un número entre 0 y 99 ambos inclusive.");
    }
}

const turnoPersonalizado = () => {
    const turnoInput = document.getElementById("turno_personalizado_element") as HTMLInputElement;

    if (turnoInput != undefined && turnoInput != null && turnoInput) {
        turno = parseInt(turnoInput.value);

        personalizarTurno(turno);
    } else {
        console.log("Ha ocurrido un problema al procesar el turno introducido.")
    }
}