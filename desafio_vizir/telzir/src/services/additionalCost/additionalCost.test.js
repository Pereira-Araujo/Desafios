

import additionalCost from "./additionalCost";

test("Para uma entrada de 100 o valor retornado deve ser 110", () => {
  const result = additionalCost(100);
  
  expect(result).toBe(110);
});

