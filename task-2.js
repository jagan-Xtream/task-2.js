//palindrome
let CheckPal = (arr) => {

  
    arr.forEach((i) => {

        if (i.split('').reverse().join('') === i) {
           console.log(i)
        }
    
    })
}


let array = ["aba", "qwe", "ree", "121", "tattarrattat"]

CheckPal(array)

//remove duplicates

let array=[1,2,3,4,5,4,2,1]
function removeDuplicates(array) {
  return array.filter((a, b) => array.indexOf(a) === b)
};
console.log(removeDuplicates(array))

//median
const findmedian = (num1,num2) => {
    let compare = (i,j) => {

    }
    let arr = num1.concat(num2).sort(compare);
    if(arr.length % 2 == 0){
        return (arr[arr.length/2-1]+arr[arr.length/2])/2;

    }
    return arr[Math.floor(arr.length/2)]
}
//prime
let n=9;
let x;
let y;
let prime=function (){

    for(var x = 2; x < n; x++){
      if(n % x === 0){
        y=1;
        return "notprime";
        break;
      }
    }if(y === 0){
    return "prime";  
    }
  }
  //console.log(prime(37));

console.log(prime(n));
// sum of all 
var arr = [0,1,2,3,4,5,6,7,8,9,10];
(() => {
	var out = arr.filter(n => n%2===1); 
	console.log("Arrow Function ==> "+ out);
})();
// return
var a=[2,4,5,6,7,8,9,11,12,13,14]
(() =>{var b= a.reduce((acc,item)=>
    if(item === 2)
    acc.push(item);
    if(item%2===0)
    return acc;
    else{
        for(let i=3;i*i<=item;i+=2){
            if(item%i===0)
            return acc;
        }
        acc.push(item);

    }
    return acc;
    console.log(b);
    )})
    //upper case
   
function myFunction() {
  var str = "Hello World!";
  var res = str.toUpperCase();
  document.getElementById("demo").innerHTML = res;
}
