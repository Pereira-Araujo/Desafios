import difference from "./difference";

test("Para uma entrada de 100,50 o valor retornado deve ser 50", () => {
  const result = difference(100, 50);
  
  expect(result).toBe(50);
});
