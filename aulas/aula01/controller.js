const readline = require("readline-sync");
const Contato = require("./model");

const contatos = [];

const listar = () => {
  contatos.forEach((c) => console.log(c.nome, "-", c.telefone));
  readline.question("Pressione qualquer tecla para continuar");
};

const criar = () => {
  const nome = readline.question("Informe o nome do contato: ");
  const telefone = readline.question("Informe o telefone do contato: ");
  const novo = new Contato(nome, telefone);
  contatos.push(novo);
};

const buscar = () => {
  const nome = readline.question("Informe o nome do contato: ");
  const contato = contatos.find((c) => c.nome === nome);
  contato
    ? console.log("Contato localizado: ", contato)
    : console.log("Contato não encontrado");
};

const atualizar = () => {
  const nomeAntigo = readline.question("Informe o nome do contato: ");
  const contato = contatos.findIndex((c) => c.nome === nomeAntigo);
  if (contato === -1) {
    console.log("Contato não localizado");
    return;
  }

  const nome = readline.question("Informe o nome do contato: ");
  const telefone = readline.question("Informe o telefone do contato: ");
  const novo = new Contato(nome, telefone);

  contatos[contato] = novo;
};

const remover = () => {
  const nome = readline.question("Informe o nome do contato: ");
  const contato = contatos.findIndex((c) => c.nome === nome);
  contatos.splice(contato, 1);
};

module.exports = { listar, criar, buscar, atualizar, remover, readline };
