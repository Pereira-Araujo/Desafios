
const nextElement = (values, id) => {
    
  if (id >= values.length - 1) {
    id = 0
  } else {
    id++;
  }
 
  

  return values[id];
};
export default nextElement;
