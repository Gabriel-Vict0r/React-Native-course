const arr = [
  {
    nome: "Gabriel",
    idade: 26,
  },
  {
    nome: "dija",
    idade: 30,
  },
  {
    nome: "weliton",
    idade: 21,
  },
];
let soma = 0;
arr.forEach((object) => {
  soma += object.idade;
});
console.log(soma)