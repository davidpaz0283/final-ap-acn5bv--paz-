// Simulación de módulo de reservas

function crearReserva(usuario, cancha, fecha) {
  console.log(`Reserva creada para ${usuario} en ${cancha} el ${fecha}`);
}

function cancelarReserva(idReserva) {
  console.log(`Reserva ${idReserva} cancelada.`);
}

// Exportar funciones
export { crearReserva, cancelarReserva };
