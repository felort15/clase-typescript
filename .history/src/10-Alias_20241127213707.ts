(()=>{
  let userId: string | number;
});
function greeting(myText: string | number) {
  if (typeof myText === 'string') {
    console.log(`string ${myText.toLowerCase()}`);
  } else {
    console.log(`number ${myText.toFixed(1)}`);
  }
 }
