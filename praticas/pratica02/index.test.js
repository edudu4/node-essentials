const supertest = require('supertest');
const app = require('./index');

const request = supertest(app);

test('GET / retorna o status 200', async function() {
  const response = await request.get('/');
  expect(response.status).toBe(200);
  
});

