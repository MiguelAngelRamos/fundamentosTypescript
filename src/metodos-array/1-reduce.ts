//* Reduce, es método de array que es un acumulador, es decir toma una cantidad de datos y nos retorna el resultado
//* acumulado.

interface IProducto {
  nombre: string;
  precio: number;
}

const carrito: IProducto []  = [
  { nombre: 'Notebook MSI', precio: 1600000 },
  { nombre: 'Mouse Razer', precio: 50000 },
  { nombre: 'Audifinos Razer', precio: 30000 },
  { nombre: 'Monitor Asus', precio: 300000 },
  // shift + alt + flecha hacia abajo
];
// callback esta funcion que se pasa por parametro a otra función

//* Con función tradicional
//* const resultadoReduce = carrito.reduce(function(total: number, product: IProducto) {
//*   return total + product.precio
//* }, 0);

//* arrow function
const resultadoReduce = carrito.reduce( (total: number, product: IProducto) => total + product.precio, 0);

console.log(resultadoReduce);

// function(total: number, product: IProducto) {
//   return total + product.precio
// }
//* function myFunction() {
    // const mivariable = "hola";
    // let numero = 14;
    // // no operaciones
    //return "retornando algo";
//* }
//* arrow function 
//* 
// (parametro, 2parametro) => {
//   const resultado = parametro + 2parametro;
//   // enviamos esta info a un api
//   return resultado;
// }