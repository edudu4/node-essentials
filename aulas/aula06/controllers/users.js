const mongoose = require("mongoose");
const Usuario = require("../models/users");

const criar = async (req, res) => {
  const novoUsuario = await Usuario.create(req.body);
  res
    .status(201)
    .json({ id: novoUsuario._id.toString(), email: novoUsuario.email });
};

const entrar = async (req, res) => {
  const usuario = await Usuario.findOne({ email: req.body.email });
  if (usuario.senha === req.body.senha) {
    res.json({ token: "123421415" });
  }
  res.status(401).status({ msg: "Acesso negado" });
};

module.exports = { criar, entrar };
