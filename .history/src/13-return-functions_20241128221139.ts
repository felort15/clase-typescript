(() =>{

const calcTotal=(prices: number[]) => {
  let total = 0;
  prices.forEach((item) => {
    total += item;
  });
  return total;
}

const rta=calcTotal([1,2,3,4,5,5,6,6,6])

})();
