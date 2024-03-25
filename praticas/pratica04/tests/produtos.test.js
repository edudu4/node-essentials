const supertest = require("supertest");

const app = require("../app");

const request = supertest(app);

test("POST /produtos deve retornar 201 e um JSON com Objeto", async () => {
  const produto = { nome: "Uva", preco: 20.0 };
  const response = await request.post("/produtos").send(produto);

  expect(response.statusCode).toBe(201);
  expect(response.type).toEqual("application/json");

  expect(response.body).toHaveProperty("id");
  expect(response.body).toHaveProperty("nome", produto.nome);
  expect(response.body).toHaveProperty("preco", produto.preco);
});

test("GET /produtos deve retornar 200 e um JSON com array", async () => {
  const response = await request.get("/produtos");

  expect(response.statusCode).toBe(200);
  expect(response.type).toEqual("application/json");
  expect(response.body instanceof Array);
});

test("GET /produtos/1 deve retornar 200 e um JSON com Objeto", async () => {
  const response = await request.get("/produtos/1");

  expect(response.statusCode).toBe(200);
  expect(response.type).toEqual("application/json");
  expect(response.body).toHaveProperty("id");
  expect(response.body).toHaveProperty("nome");
  expect(response.body).toHaveProperty("preco");
});

test("GET /produtos/100 deve retornar 404 e um JSON com Objeto", async () => {
  const response = await request.get("/produtos/100");

  expect(response.statusCode).toBe(404);
  expect(response.type).toEqual("application/json");
  expect(response.body).toHaveProperty("msg", "Produto não encontrado");
});

test("POST /produtos deve retornar 422 e um JSON com Objeto", async () => {
  const response = await request.post("/produtos");

  expect(response.status).toBe(422);
  expect(response.type).toEqual("application/json");
  expect(response.body).toHaveProperty(
    "msg",
    "Nome e/ou preço do produto não informados"
  );
});

test("PUT /produtos/1 deve retornar 200 e um JSON com Objeto", async () => {
  const produto = { nome: "Uva verde", preco: 18.0 };
  const response = await request.put("/produtos/1").send(produto);

  expect(response.status).toBe(200);
  expect(response.type).toEqual("application/json");
  expect(response.body).toHaveProperty("id");
  expect(response.body).toHaveProperty("nome", produto.nome);
  expect(response.body).toHaveProperty("preco", produto.preco);
});

test("PUT /produtos/100 deve retornar 404 e um JSON com Objeto", async () => {
  const response = await request.put("/produtos/100");

  expect(response.status).toBe(404);
  expect(response.type).toEqual("application/json");
  expect(response.body).toHaveProperty("msg", "Produto não encontrado");
});

test("DELETE /produtos/1 deve retornar 204 sem corpo", async () => {
  const response = await request.delete("/produtos/1");

  expect(response.status).toBe(204);
  expect(response.type).toEqual("");
  expect(response.body).toEqual({});
});

test("DELETE /produtos/100 deve retornar 404 e um JSON com Objeto", async () => {
  const response = await request.delete("/produtos/100");

  expect(response.status).toBe(404);
  expect(response.type).toEqual("application/json");
  expect(response.body).toHaveProperty("msg", "Produto não encontrado");
});
