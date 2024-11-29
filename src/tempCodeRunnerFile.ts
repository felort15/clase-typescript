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
