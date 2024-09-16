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
    botonAnterior?.addEventListener("click", () => anteriorTurno(turno));
    
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



// Aumenta turno
const aumentarTurno = (turno: number) => {
    turno++;
}

const siguienteTurno = (turno: number) => {
    aumentarTurno(turno);
    mostrarTurno();
}


// Disminuye turno
const disminuirTurno = (turno: number) => {
    turno--;
}

const anteriorTurno = (turno: number) => {
    disminuirTurno(turno);
    mostrarTurno();
}


// Resetea turno
const turnoPorDefecto = () => {
    turno = 0
    mostrarTurno();
}



// Personaliza turno
const personalizarTurno = () => {
    const turnoInput = document.getElementById("turno_personalizado_element") as HTMLInputElement;
    
    if (turnoInput) {
        turno = parseInt(turnoInput.value);
    }
}

const turnoPersonalizado = () => {
    // Recibe número personalizado
    personalizarTurno();
    mostrarTurno();
}