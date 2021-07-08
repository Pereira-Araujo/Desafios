
import totalWithPlan from "./totalWithPlan";

test("Para uma entrada de 1.90,200,120 o valor retornado deve ser 100", () => {
  const result = totalWithPlan(1.90,200,120);
  
  expect(result).toBe(167.2);
});

