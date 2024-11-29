(()=>{
const login= (data:{email : string, password : string}) =>{
 console.log(data.email, data.password);
}

//login('user@example.com', '123456');
 login({
  email: 'user@example.com',
  password: '123456',
 })

 type Sizes ='S' | 'M' | 'L' | 'XL';

 const prodct: any[] = [];

 const addProduct = (data:{
  title: string,
  createAt : Date,
  stock: number,
  size?: Sizes,
 }
 ) => {
  prodct.push(data);
  console.log(`Se agrego el producto ${data.title} a la lista`);
 }

 addProduct({
  title: 'Producto 1',
  createAt: new Date(12/1/2014),
  stock: 10,
  size: 'M',
 });

})();
