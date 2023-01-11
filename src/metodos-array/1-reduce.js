"use strict";
//* Reduce, es método de array que es un acumulador, es decir toma una cantidad de datos y nos retorna el resultado
//* acumulado.
const carrito = [
    { nombre: 'Notebook MSI', precio: 1600000 },
    { nombre: 'Mouse Razer', precio: 50000 },
    { nombre: 'Audifinos Razer', precio: 30000 },
    { nombre: 'Monitor Asus', precio: 300000 },
    // shift + alt + flecha hacia abajo
];
// callback esta funcion que se pasa por parametro a otra función
const resultadoReduce = carrito.reduce(function (total, product) {
    return total + product.precio;
}, 0);
console.log(resultadoReduce);
// function(total: number, product: IProducto) {
//   return total + product.precio
// }
