const express = require("express");

const produtosController = require("../controllers/controller_produtos");

const router = express.Router();

router.get("/", produtosController.listarTodos);

router.get("/:produtoId", produtosController.buscarPeloId, produtosController.buscar);

router.post("/", produtosController.criar);

router.put("/:produtoId", produtosController.buscarPeloId, produtosController.atualizar);

router.delete("/:produtoId", produtos.Controller.buscarPeloId, produtosController.remover);

module.exports = router;