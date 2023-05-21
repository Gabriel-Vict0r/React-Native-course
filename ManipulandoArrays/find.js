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

const buscarPessoa = (pessoa) => pessoa.nome === "Gabriel";
const novaPessoa = arr.find(buscarPessoa);
console.log(novaPessoa);
