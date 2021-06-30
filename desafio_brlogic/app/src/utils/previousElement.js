
const previousElement = (values, id) => {
  if (id <= 0) {
    id = values.length - 1;
  } else {
    id--;
  }

  return values[id];
};
export default previousElement;
