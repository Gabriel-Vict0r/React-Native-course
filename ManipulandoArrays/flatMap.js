const arr = [
  {
    nome: "Gabriel",
    idade: 26,
    cartoes: ["3222", "5666"],
  },
  {
    nome: "dija",
    idade: 30,
    cartoes: ["9983", "1522"],
  },
  {
    nome: "weliton",
    idade: 21,
    cartoes: ["5671", "1234"],
  },
];

const cartoes = arr.flatMap((cartao) => cartao.cartoes);
console.log(cartoes);
