(()=>{
 // let myNumber:number= undefined;
 // let mySring:string = null;

  let myNull :null = null;
  let myUndefined:undefined = undefined;


  let myNumber : number | null = null;//
  myNumber = 12 ;

  let myString :string | undefined = undefined;
  myString = 'Hola';

  function hi(name:string | null) {
   let hello ='hola';
   if(name){
     hello += 'name';
   }else{
     hello += 'noboy';
   }

   console.log(hello);
  };

hi('nicolas');
hi (null);


})();
