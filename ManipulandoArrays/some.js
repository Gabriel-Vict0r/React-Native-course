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

const resultado = arr.some((object) => object.idade > 10); //OU
const resultadoEvery = arr.every((object) => object.idade > 26); //E
console.log(resultado);
console.log(resultadoEvery);
