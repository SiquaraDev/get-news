test("GET para /api/v1/status deveria retornar 200", async () => {
  // garante que o endpoint é encontrado
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  // garante que updated_at possui valor
  const responseBody = await response.json();
  console.log(responseBody);

  // garante que o valor de updated_at não é null
  const parseUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parseUpdatedAt);

  expect(responseBody.dependencies.database.version).toEqual("16.11");
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
