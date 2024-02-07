const arrObjs=[
    {firstName:"Jim",lastName:"Jake",age:31,Id:1},
    {firstName:"Ram",lastName:"Raja",age:25,Id:2},
    {firstName:"Pooja",lastName:"Rani",age:61,Id:3},
    {firstName:"Roopa",lastName:"Revathi",age:32,Id:4},
    {firstName:"Poorni",lastName:"Chandra",age:27,Id:5},
]

const arrobjsCopy=[{...arrObjs}]/*
console.log("arrObjs:", arrObjs)
console.log("arrobjsCopy:" ,arrobjsCopy)

////////////////////////////////////////
//////////mapArray examples////////////
///////////////////////////////////////
mapArray1()
mapArray2()
mapArray3()
mapArray4()
mapArray5()

//function mapArray1()
function mapArray1()
{
    const map1=arrObjs.map(item=>{                  //mapArray1-showing name and age
       const age1={};
       age1[item.firstName]=item.age;
       return age1;})
    console.log("map1:",map1)
    console.log("arrObjs:" ,arrObjs)
}

//function mapArray2()
function mapArray2(){
   
    console.log("map2:") 
    const map2=arrObjs.map(item=>{
        if(item.age >=30)
            {      
                console.log(item.age, "above 30")              //checking age above 30
             }
    }) 
    console.log("arrObjs:", arrObjs)
    }


//function mapArray3()
function mapArray3(){
    console.log("map3:")
    arrObjs.map(fullName)
   console.log("arrObjs:", arrObjs)
    }                                                      //joining firstName and LastName
function fullName(item)
{
console.log([item.firstName,item.lastName].join(" "));
} 

//function mapArray4()
function mapArray4(){
const map4=arrObjs.map(item=> {
    const newage={}
    newage[item.age]=item.age*2                           //multilpying age*2
    return newage 
})
console.log("map4:",map4)
console.log("arrObjs:", arrObjs)
}
//function mapArray5()
function mapArray5(){
    
    const map5=arrObjs.map(item=>{
        const newSet={}
        newSet[item.Id]=item.firstName;
        return newSet 
    }) 
    console.log("map5:",map5)
    console.log("arrObjs:", arrObjs)
}



//////////////////////////////////////////////////////
///////////filterArray()/////////////////////////////
/////////////////////////////////////////////////////
console.log("arrObjs:", arrObjs)
filterArray1()
filterArray2()
filterArray3()
filterArray4()
function filterArray1(){                                        //filtering Id greater than 4
    const result1 = arrObjs.filter(word => {
       return  word.Id>4                                   
    } )
    console.log("filterArray1:",result1)
    console.log("arrObjs:", arrObjs)
} 
function filterArray2(){                                     //filtering name="jim"
 const result2=arrObjs.filter(function(value){
   return value.firstName=="Jim"            
 })
 console.log("filterArray2",result2)
 console.log("arrObjs:", arrObjs)
}


function filterArray3(){
    const result3=arrObjs.filter(function(index){                   //filtering Id ==3
        return index.Id ==[3]
    })
    console.log("filterArray3",result3)
    console.log("arrObjs:", arrObjs)

}
function filterArray4(){                                         //filtering age>60 -senior citizen
    console.log("filterArray4:")
const result4=arrObjs.filter(function(value){   
    if(value.age > 60){
        console.log(value.firstName," - You are a senior citizen")
    }//else
    //console.log("You are not a senior citizen")
})
console.log("arrObjs:", arrObjs)
}

*/
//////////////////////////////////////////////////////
///////////scliceArray()//////////////////////////////
/////////////////////////////////////////////////////
sliceArray1()
sliceArray2()
sliceArray3()
sliceArray4()
function sliceArray1(){
    const slice1=arrObjs.slice(1,3)
    console.log("slice1",slice1)
    console.log("arrObjs",arrObjs)
    console.log("arrobjsCopy:" ,arrobjsCopy)
}
function sliceArray2(){
    const slice2=arrObjs.slice(-2)
    console.log("slice2",slice2)
    console.log("arrObjs",arrObjs)
    console.log("arrobjsCopy:" ,arrobjsCopy)
}
function sliceArray3(){
    const slice3=arrObjs.slice(-3,-1)
    console.log("slice3",slice3)
    console.log("arrObjs",arrObjs)
    console.log("arrobjsCopy:" ,arrobjsCopy)
}
function sliceArray4(){
    const slice4=arrObjs.slice()
    console.log("slice4",slice4)
    console.log("arrObjs",arrObjs)
    console.log("arrobjsCopy:" ,arrobjsCopy)
}
/*
//////////////////////////////////////////////////////
///////////spliceArray()//////////////////////////////
/////////////////////////////////////////////////////
spliceArray1()
spliceArray2()
spliceArray3()
spliceArray4()
function spliceArray1(){
    const splice1=arrObjs.splice(0,1)
console.log("splice1",splice1)
console.log("arrObjs",arrObjs)
console.log("arrobjsCopy:" ,arrobjsCopy)
}

function spliceArray2(){
    const splice2=arrObjs.splice(1,1,{ firstName: 'vani', lastName: 'vidya', age: 26, Id: 6 })
    console.log("splice2",splice2)
    console.log("arrObjs",arrObjs)
    console.log("arrobjsCopy:" ,arrobjsCopy)
}
function spliceArray3(){
    const splice3=arrObjs.splice(-2)
    console.log("splice3",splice3)
    console.log("arrObjs",arrObjs)
    console.log("arrobjsCopy:" ,arrobjsCopy) 

}
function spliceArray4(){
    const splice4=arrObjs.splice(0,1,{ firstName: 'Meenu', lastName: 'Medha', age: 32, Id: 8 })
    console.log("splice4",splice4)
    console.log("arrObjs",arrObjs)
    console.log("arrobjsCopy:" ,arrobjsCopy)
}

//////////////////////////////////////////////////////
///////////reduceArray()//////////////////////////////
/////////////////////////////////////////////////////
reduceArray1()
reduceArray2()
reduceArray3()
reduceArray4()
function reduceArray1(){}
function reduceArray2(){}
function reduceArray3(){}
function reduceArray4(){}
*/