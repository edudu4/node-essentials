const Contato = require("./Model");

const contatos = [];

const adicionarContato = (nome, email, telefone) => {
  const novoContato = new Contato(nome, email, telefone);
  contatos.push(novoContato);
};

const listarContatos = () => {
  return contatos;
};

const buscarContato = (nome) => {
  const contato = contatos.find((c) => c.nome === nome);
  return contato ? contato : "Não encontrado";
};

const atualizarContato = (nome, email, telefone) => {
  const contato = buscarContato(nome);

  contato.email = email;
  contato.telefone = telefone;
};

const removerContato = (nome) => {
  contatos.splice(
    contatos.findIndex((c) => c.nome === nome),
    1
  );
};

module.exports = {
  adicionarContato,
  listarContatos,
  buscarContato,
  atualizarContato,
  removerContato,
};
