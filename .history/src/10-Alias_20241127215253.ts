(()=>{
  type UserID = string | number | boolean;
  let userId: string | number;

function greeting(userId: string | number |boolean) {
  if (typeof userId === 'string') {
    console.log(`string ${userId.toLowerCase()}`);
  }
  //else {
    //console.log(`number ${userId.toFixed(1)}`);
  }

  // Literal types
  type shirtSize = Sizes;
  let Sizes :'sm' | 'M' | 'L' | 'XL';
  shirtSize = 'sm';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'EL';
});
