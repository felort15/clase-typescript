(() =>{

const calcTotal=(prices: number[]): string => {
  let total = 0;
  prices.forEach((item) => {
    total += item;
  });
  return total.toString();
}

const printTotal = (prices: number[]) => {
  const rat= calcTotal(prices);
  console.log(`El total es: ${rat}`);
}

const rta=calcTotal([1,2,3,4,5,5,6,6,6])

})();
