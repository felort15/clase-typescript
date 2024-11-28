(()=>{
  let userId: string | number;
});
function greeting(userId: string | number |boolean) {
  if (typeof userId === 'string') {
    console.log(`string ${userId.toLowerCase()}`);
  } else {
    console.log(`number ${userId.toFixed(1)}`);
  }
 }
