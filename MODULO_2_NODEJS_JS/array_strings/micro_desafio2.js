let peliculas = ['turno de dia','30 noches','bestia','El monte','Top gun maverick','Elvis','Thor:amor y tureno'];

const mejor = pelicula => {
    let aux = pelicula.pop();
    pelicula.unShift(aux.toUperCase());
    pelicula
}