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
  let shirtSize = 'small' || 'medium' || 'large' || 'extraLarge';
  shirtSize = 'medium';
  shirtSize = 'large';
  shirtSize = 'extra-large';
});
