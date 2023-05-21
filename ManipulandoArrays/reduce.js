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

// const pessoa = {
//   jose: {
//     idade: 54,
//   },
//   gabriel: {
//     idade: 20,
//   },
//   joana: {
//     idade: 15,
//   },
// };
const converter = (acc, object) => {
  return {
    ...acc,
    [object.nome]: object.idade,
  };
};

const pessoas = arr.reduce(converter, []);
console.log(pessoas);
