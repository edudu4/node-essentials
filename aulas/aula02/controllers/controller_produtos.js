const produtos = [];

const listarTodos = (req, res) => {
  res.json(produtos);
};

const buscar = (req, res) => {
  const { produto } = req;
  res.json(produto);
};

const buscarPeloId = (req, res, next) => {
  const { produtoId } = req.params;
  const produto = produtos.find((produto) => produto.id == produtoId);

  if (produto) {
    req.produto = produto;
    next();
  } else {
    res.status(404).json({ msg: "Produto não encontrado" });
  }
};

const criar = (req, res) => {
  const { nome, preco } = req.body;
  const novo = { id: produtos.length + 1, nome, preco };
  produtos.push(novo);
  res.status(201).json(novo);
};

const atualizar = (req, res) => {
  const { produto } = req;
  const { nome, preco } = req.body;
  produto.nome = nome;
  produto.preco = preco;
  res.json(produto);
};

const validarDados = (req, res, next) => {
  const { nome, preco } = req.body;
  if ((nome, preco)) {
    next();
  } else {
    res.status(422).json({ msg: "Nome e preço são obrigatórios." });
  }
};

const remover = (req, res) => {
  const { produtoId } = req.params;
  const posicao = produtos.findIndex((produto) => produto.id == produtoId);
  produtos.splice(posicao, 1);
  res.status(204).end();
};

module.exports = {
  listarTodos,
  buscar,
  buscarPeloId,
  criar,
  atualizar,
  validarDados,
  remover,
};
