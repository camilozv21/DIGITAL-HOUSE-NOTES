let perfil = "invitado";

if (perfil === "administrador" || perfil === "Administrador" || perfil === "ADMINISTRADOR") {
    console.log("Usted tiene todos los privilegios de uso del sistema");
}
else if (perfil === "asistente" || perfil === "Asistente" || perfil === "ASISTENTE") {
    console.log("Usted sólo tiene permisos de regustrar, modificar y consultar datos");
}
else if (perfil === "invitado" || perfil === "Invitado" || perfil === "INVITADO") {
    console.log("Usted sólo tiene permisos de consultar datos");
}
else if (perfil === ' ') {
    console.log("Debe especificar el perfil del usuario");
}
else {
    console.log("Debe especificar un perfil v+alido");
}