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
const product1 = createProdcutToJason('p1', new Date(),12, "XL");
console.log(product1);
console.log(product1.title);
console.log(product1.stock);

const createProdcutToJasonV2 =(
  title: string,
  createAt :Date,
  stock: number,
  size: Sizes | undefined ,

)=>
  {
  return{
    title,
    createAt,
    stock,
    size
  }
}


})();
