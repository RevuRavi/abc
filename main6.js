/*function strLgh() {
    const str = "Javascript";
 
    console.log("String Length: " + str.length);
    console.log(str.charAt(2))
    console.log(str.concat(" is"," a"," language"))
    console.log(str.indexOf("a"))
}                                                     ///String examples
 
strLgh();

let date=new Date()
let currentDate=date.toString()
console.log(date)                                   //Date examples



let student = {                                   //object examples
    name: "Martin", 
    class: "12th", 
    section: "A",

  }
  function studentDetails(){  
 return this.name ;            
 return this.class;
 return this.section;
}; 

console.log("STUDENT: " + student.name,student.class, student.section)
function pow(x, n) {
    if (n == 1) {                                                         //buitin fuction pow()
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  alert( pow(2, 3) ); 
  console.log( pow(2, 3)); 

                                                                //Immediately-Invoked Function Expression 

(function add(){
    var x = 20;
    var y = 20;
    var answer = x + y;
 
    })();
    console.log(answer);

 
 let y;                   
 var x;
 const z=222;
   
    function sample(){
       var x=100;                         //Hoisting
       var x=1000;
       let y=20;
       const z=30;
       console.log(x);
       console.log(y);
       console.log(z);
    }
    sample();
    console.log(x);
    console.log(y);
    console.log(z);  
    let array=[1,2,3,4,5]
array.push(6)
console.log(array)                                
array.pop(5)
console.log(array)                    //push,pop,join,sclice,splice.shift,unshift
console.log(array.join('|'))
let newarray=array.slice(1,4)
console.log(newarray)
console.log(array)
//let newarray1=array.splice(2,2)
//console.log(newarray1)
//console.log(array)
let newarray2=array.unshift(7)
console.log(array)
console.log(newarray2)
let newarray3=array.shift()
console.log(newarray3)
console.log(array)  


console.log(temp)
var temp = "Scaler"
console.log(temp)

console.log(result)                                  //hoisting
var result;
add(2,3);

function add(a,b){
  var a;
  var b;
  let result=a+b;
  console.log(result)
}                         



let addition = (a,b)=>{                //arrow function
  console.log(addition)
  return (a+b); 
} 

console.log(addition(3,5));

const vehicles = ['Swift', 'Blackhawk', 'Fortuner']; 
  

////Method1:

var obj = {key1: "value1", key2: "value2"};
Object.assign(obj, {key3: "value3"});
var val1,val2

addobj()
deleteObj()

function addobj(){
Object.assign(obj, {key4: "value4"});
val1 = JSON.stringify(obj);
val2=JSON.parse(val1);
console.log(val2)
}

function deleteObj(){
delete val2.key3
console.log(val2)
}
*/

//Method2:

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits)
addobj();
deleteobj()
changePropertykey()

function addobj(){
fruits.set("mangoes", 100);
console.log(fruits.size)
console.log(fruits)
}

function deleteobj(){
fruits.delete("apples")
console.log(fruits.size)
console.log(fruits)
}
 function changePropertykey(){
     const keyss = fruits.keys();
     console.log(keyss)
     const key1=keyss.next().value;
     console.log(key1)
//changing property have to do
 }




//Method 3

let obj={}
obj={name:"parrot",color:"green"}
console.log(obj)

addObj("age","2months")
addObj("size","small")

deleteObj()

var x;
var y;
var z;
var w;
function addObj(x,y){
obj[x]=y;
console.log(obj)
}
function deleteObj(){
 delete obj.size;
 console.log(obj)
    
}

