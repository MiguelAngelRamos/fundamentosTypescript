"use strict";
;
//* Creamos el objeto
const sitioWeb = {
    nombre: 'Google',
    link: {
        enlace: 'www.google.cl'
    },
    redesSociales: {
        youtube: {
            enlace: 'youtube.com/google',
            nombre: 'Google'
        }
    }
};
// console.log(sitioWeb.nombre); //* Google
// console.log(`el enlace de la pagina es: ${sitioWeb.link.enlace}`); //* www.google.cl
// console.log(sitioWeb.redesSociales.youtube.enlace); //* youtube.com/google
// const enlaceYoutube = sitioWeb.redesSociales.youtube.enlace;
// console.log(enlaceYoutube); //* youtube.com/google
//* Destructuring (Desmenuzar el objeto)
const { enlace, nombre: nombreYoutube } = sitioWeb.redesSociales.youtube;
console.log(enlace);
console.log(nombreYoutube);
//* Pequeña introduccion al  Destructuring de Array
const valores = [10, 20, 30];
// const [primero, segundo, tercero] = valores;
const [, , tercero] = valores;
// console.log(primero); //* 10
// console.log(segundo); //* 20
console.log(tercero); //* 30
