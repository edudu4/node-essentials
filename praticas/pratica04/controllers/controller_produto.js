const produtos = [];

const listarTodos = (req, res) => {
  res.json(produtos);
};

const buscar = (req, res, next) => {
  const { produtoId } = req.params;
  const produto = produtos.find((produto) => produto.id == produtoId);

  if (produto) {
    req.produto = produto;
    next();
  } else {
    res.status(404).json({ msg: "Produto não encontrado" });
  }
};

const buscarPeloId = (req, res) => {
  const { produtoId } = req.params;
  const produto = produtos.find((produto) => produto.id == produtoId);
  res.json(produto);
};

const criar = (req, res) => {
  const { nome, preco } = req.body;
  if (!nome || !preco) {
    res.status(422).json({ msg: "Nome e/ou preço do produto não informados" });
  }
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
  remover,
};
