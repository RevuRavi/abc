let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);

let num =0;

for (let i = 0; i < 9; i++) {
  num = num + i;
}

console.log(num);

let a=0;
let result='';
do{
 a++;
    result =result+a;
 
} while(a<5)
console.log(result)





let n = 0;

while (n < 3) {
  n++;
  console.log(n);
}

/*

let year = prompt(' Which year Qatar hosted Football Worlds Cup?');

if (year == 2022) {
    alert( 'You are right!!' );
}

else{
   alert("Its Wrong!!!Correct Answer is 2022 ");
}


const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges have rupees 200 per kg.');
    break;

  case 'Papayas':
    console.log('Papayas have rupees 100 per kg.');

    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
*/
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 0) {
    continue;
  }
  text = text + i;
  
}
console.log(text)




let i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
  console.log(i);
}

try {
 Code;
    
} catch (error) {
    console.log('Error:' +error)
}
finally{
    console.log("execute rest of the codes")
}


 /* 
try {
    Code;
       
   } catch (error) {
    throw "Wrong code";}

    
   {
       console.log('Error:' +error)
   }
   finally{
       console.log("execute rest of the codes")
   } */

  let x = 2 * 2 + 1;

//alert( x ); 

   
//Operators
let z= 6;
var y= 2*3;
var w= 2 ** 3 ;
console.log(w)
if (z==6 && w==9){
    console.log("its working")
}
else{
    console.log("example of operator And &&")
}

let mystring = "alpha";
mystring = mystring + "bet";
console.log(mystring)



function myFunction() {
    let age = document.getElementById("age").value;
    let voteable = (age < 18) ? "Too young":"Old enough";
    document.getElementById("demo").innerHTML = voteable + " to vote.";
  }

  const Employee = {
    firstname: 'Maria',
    lastname: 'Sanchez',
  };
  
  console.log(Employee.firstname);
  delete Employee.firstname;
  console.log(Employee.firstname);
  