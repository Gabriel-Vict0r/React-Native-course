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

arr.sort((a, b) => {
  if (a.nome.toUpperCase() < b.nome.toUpperCase()) {
    return -1;
  }
  if (a.nome.toUpperCase() > b.nome.toUpperCase()) {
    return 1;
  }
  return 0;
});
console.log(arr);
