(()=>{

type Sizes ='S' | 'M' | 'L' | 'XL';
type Product ={
    title: string,
    createAt : Date,
    stock: number,
    size?: Sizes,
};

  const prodct: Product[] = [];

 const addProduct = (data: Product) =>{
  prodct.push(data);
 }

 addProduct({
  title: 'Producto 1',
  createAt: new Date(12/1/2014),
  stock: 10,
  size: 'M',
 });
addProduct({
  title: 'Producto 1',
  createAt: new Date(12/1/2014),
  stock: 10,
 });
console.log(product);


})();
