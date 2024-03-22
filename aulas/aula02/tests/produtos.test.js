const supertest = require("supertest");

const app = require("../app");

const request = supertest(app);

describe("Teste dos Endpoints /produtos", () => {
  test("POST / deve retornar 201 um JSON com Objeto", async () => {
    const produto = { nome: "Uva", preco: 15.0 };
    const response = await request.post("/produtos").send(produto);
    expect(response.status).toBe(201);
    expect(response.type).toEqual("application/json");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("nome", produto.nome);
    expect(response.body).toHaveProperty("preco", produto.preco);
  });

  test("GET / deve retornar 200 um JSON com Array", async () => {
    const response = await request.get("/produtos");
    expect(response.status).toBe(200);
    expect(response.type).toEqual("application/json");
    expect(response.body instanceof Array);
  });

  test("GET /id deve retornar 200 um JSON com Objeto", async () => {
    const response = await request.get("/produtos/1");
    expect(response.status).toBe(200);
    expect(response.type).toEqual("application/json");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("nome");
    expect(response.body).toHaveProperty("preco");
  });

  test("GET /id deve retornar 404 um JSON com Objeto", async () => {
    const response = await request.get("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.type).toEqual("application/json");
    expect(response.body).toHaveProperty("msg", "Produto não encontrado");
  });

  test("POST / deve retornar 422 um JSON com Objeto", async () => {
    const response = await request.post("/produtos");
    expect(response.status).toBe(422);
    expect(response.type).toEqual("application/json");
    expect(response.body).toHaveProperty(
      "msg",
      "Nome e preço são obrigatórios."
    );
  });

  test("PUT /id deve retornar 200 um JSON com Objeto", async () => {
    const produto = { nome: "Uva", preco: 20.0 };
    const response = await request.put("/produtos/1").send(produto);
    expect(response.status).toBe(200);
    expect(response.type).toEqual("application/json");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("nome", produto.nome);
    expect(response.body).toHaveProperty("preco", produto.preco);
  });

  test("PUT /id deve retornar 422 um JSON com Objeto", async () => {
    const response = await request.put("/produtos/1");
    expect(response.status).toBe(422);
    expect(response.type).toEqual("application/json");
    expect(response.body).toHaveProperty(
      "msg",
      "Nome e preço são obrigatórios."
    );
  });

  test("PUT /id deve retornar 404 um JSON com Objeto", async () => {
    const response = await request.put("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.type).toEqual("application/json");
    expect(response.body).toHaveProperty("msg", "Produto não encontrado");
  });

  test("DELETE /id deve retornar 204 sem corpo", async () => {
    const response = await request.delete("/produtos/1");
    expect(response.status).toBe(204);
    expect(response.type).toEqual("");
    expect(response.body).toEqual({});
  });

  test("DELETE /id deve retornar 404 um JSON com Objeto", async () => {
    const response = await request.delete("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.type).toEqual("application/json");
    expect(response.body).toHaveProperty("msg", "Produto não encontrado");
  });
});
