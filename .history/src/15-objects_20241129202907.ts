(()=>{

type Sizes ='S' | 'M' | 'L' | 'XL';
type Product ={
    title: string,
    createAt : Date,
    stock: number,
    size?: Sizes,
};

  const product: Product[] = [];

 const addProduct = (data: Product) =>{
  product.push(data);
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
product.push({

  title: 'Producto 2',
  createAt: new Date(12/2/2014),
  stock: 5,
  size: 'L',
})


})();
