const arr = [
  {
    nome: "Gabriel",
    idade: 26,
  },
  {
    nome: "dija",
    idade: 30,
    exibir: true,
  },
  {
    nome: "weliton",
    idade: 21,
  },
];
const filtrar = (object) => object.idade >= 30;

const listaFiltrada = arr.filter(filtrar);
console.log(arr);
console.log(listaFiltrada);
