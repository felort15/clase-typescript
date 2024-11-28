(()=>{
  type UserID = string | number | boolean;
  let userId: string | number;


  // Literal types
  type shirtSize = Sizes;
  let Sizes :'S' | 'M' | 'L' | 'XL';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'EL';
  //shirtSize = 'S';

function greeting(userId: userId, size: Sizes) {
  if (typeof userId === 'string') {
    console.log(`string ${userId.toLowerCase()}`);
  }
  //else {
    //console.log(`number ${userId.toFixed(1)}`);
  }


});
