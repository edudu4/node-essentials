const express = require("express");

const controllerProdutos = require("../controllers/controller_produto");

const router = express.Router();

router.get("/", controllerProdutos.listarTodos);

router.get("/:produtoId", controllerProdutos.buscar, controllerProdutos.buscarPeloId);

router.post("/", controllerProdutos.criar);

router.put("/:produtoId", controllerProdutos.buscar, controllerProdutos.atualizar);

router.delete("/:produtoId", controllerProdutos.buscar, controllerProdutos.remover);

module.exports = router;
