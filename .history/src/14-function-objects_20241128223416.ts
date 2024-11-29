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
 const addProduct = (data:{
  title: string,
  createAt : Date,
  stock: number,
  size?: Sizes,
 }
 ) => {

 }

})();
