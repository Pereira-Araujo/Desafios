export const useFilter = (search, arr) => {
  if (!!search) {
    return arr.filter((prod) => {
      return (
        prod.product_code.toLowerCase().includes(search.toLowerCase()) ||
        prod.product_category.toLowerCase().includes(search.toLowerCase()) ||
        prod.product_name.toLowerCase().includes(search.toLowerCase()) ||
        prod.product_provider.toLowerCase().includes(search.toLowerCase()) ||
        prod.product_cost.toLowerCase().includes(search.toLowerCase())
      );
    });
  } else {
    return arr;
  }
};
