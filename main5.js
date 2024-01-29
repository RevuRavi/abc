function text()
{
    var a=10;
    var b=20
return result= a+b;

}
text()
console.log(result)

function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(mycar.make); 
  myFunc(mycar);
  console.log(mycar.make); 
  
  function multiply(a, b) {
    b = typeof b !== "undefined" ? b : 5;
    return a * b;
  }
  console.log(multiply(5)); 
  console.log(multiply(5,6)); 

  function multiply(a, b = 2) {
    return a * b;
  }
  
  console.log(multiply(9)); 
  //////////////////////////
  
  function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }
  
  console.log(sum(2,4,6));
  
  
  console.log(sum(1, 2, 3, 4));



  const materials = ['Angular', 'React', 'Vue', 'Javascript'];

console.log(materials.map((material) => material.length));

console.log('Javascript is great'.slice("10"))

  function a()
  {
    b();
    function b(){
        console.log(x)
    }
  }
  var x=10;
  a();