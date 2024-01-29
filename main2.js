//Hoisting

var a=10;
var b=20;
var c;
console.log("value of c is",c)
console.log("value of a is",a)
Sum();
console.log("value of c is",c)
function Sum()
{ 
    return c = a+b;
 
}


const first = 'wes';
let second = 'bos';
var age = 100;
console.log( first)
console.log( second)
console.log( age)

{
    let p = 110;
    const q = 111;
 }
 //console.log(p); // Uncaught ReferenceError: p is not defined
 //console.log(q); // Uncaught ReferenceError: q is not defined
scope();
var text= "Hello";
 function scope(text)
 {
    if(text=="Hello")
    {
        var msg="Verified";
        console.log(msg)
    }
    else{
        console.log("not verified")
    }
 }
 /*let name= " Trial";
 function Trial()
  Trial()
  {
    console.log(name)
  }*/

//Data Types

  let length = 16;
  let clr = "Yellow";
  let x = true;
  const person = {firstName:"Revathy", lastName:"Ravi"};
  const clrs = ["Red", "Violet", "Brown"];
  const date = new Date("2024-01-21");
  let g;
  let h=null;
  console.log(g);
  console.log(h);
  console.log(length);
  console.log(clr);
  console.log(x); 
   console.log(person);
   console.log(clrs);
   console.log(date);
   console.log(typeof g)
   console.log(typeof clrs)

// Built in objects
   let m=9;
   var r= Math.sqrt(m);
   console.log(r)
   let today=new Date;
   console.log(today)
 var name1="helloworld"
 console.log(name1.charAt(5))

document.getElementById("demo1").innerHTML=Boolean(10>11)

//Type Casting
