//* El método map(), crea un nuevo array, el array resultante tiene una modificación por cada elemento del array devuelvo.

const numeros = [10, 20, 30, 40];
// numeros.map( () => {
//   return 
// })
const resultadoMap = numeros.map( elNumber => elNumber * 2);
console.log(resultadoMap);
// (argumento, argumento2) => {};
// (argumento) => {};
// argumento => {};

const usuarios = [
  { id: 1, name: 'Pedro' },
  { id: 2, name: 'Juan' },
  { id: 3, name: 'Diego'}
];

//* JSX 
//* ``
//* alt + 96 

const resultadoJsx = usuarios.map( userElement => `<li> ${userElement.name} </li>`);
console.log(resultadoJsx);