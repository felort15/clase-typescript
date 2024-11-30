(()=>{

type Sizes ='S' | 'M' | 'L' | 'XL';
type Product ={
    title: string,
    createAt : Date,
    stock: number,
    size?: Sizes,
};

  const prodct: any[] = [];

 const addProduct = (data: Product) =>{
  prodct.push(data);
 }

 // => {
  //prodct.push(data);
  //console.log(`Se agrego el producto ${data.title} a la lista`);


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
})();
