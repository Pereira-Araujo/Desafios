
import totalNoPlan from "./totalNoPlan";

test("Para uma entrada de 50,2 o valor retornado deve ser 100", () => {
  const result = totalNoPlan(50,2);
  
  expect(result).toBe(100);
});

