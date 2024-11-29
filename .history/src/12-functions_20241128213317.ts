(()=>{
  type Sizes ='S' | 'M' | 'L' | 'XL';

function createProdcutToJason (
  title: string,
  createAt :Date,
  stock: number,
  size: Sizes

){
  return{
    title,
    createAt,
    stock,
    size
  }
}
const product1 = createProdcutToJason('p1', new Date());

})();
