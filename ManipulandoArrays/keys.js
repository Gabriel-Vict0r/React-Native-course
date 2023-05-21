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
const converter = (acc, object) => {
  return {
    ...acc,
    [object.nome]: object.idade,
  };
};

const pessoas = arr.reduce(converter, {});

const chaves = Object.key(pessoas);
//console.log(pessoas);
console.log(chaves);

const listaDeVolta = chaves.map((key) => ({
  nome: key,
  idade: pessoas[key].idade,
}));
console.log(listaDeVolta);
