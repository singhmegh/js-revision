//1 for print
console.log("Hello");
//alert("hello js");
document.write("hello js");
//by using tag in document.wrrite
document.write("<h1>Hello<h1>");
//-----------------------------------------------------------------------------------------------------------

//2 add number for static no.
//let a = 6;
//let b = 8;
//var c = a+b;
//the sum of 6 and 8 is 14
//+ is used as a concatination in string ""
//console.log("The sum of "+a+" and "+b+" is: "+c);

//-----------------------------------------------------------------------------------------------------------
//3 for dynamic no.
//use prompt for taking no. from user and it consider as a string
//let x = prompt("Please enter your first number" , "");
//let y = prompt("please enter your secound number" , "");
//var z= parseInt(x) + parseInt(y) ;
//parseInt is a function i.e. used to change a string into interger
//console.log("The sum of "+x+" and "+y+" is: " +z);

//-----------------------------------------------------------------------------------------------------------
//4 find sq. root of a no.
//math.sqrt is a in-built library
//var m = prompt('please enter a no.' , '');
//var n =  Math.sqrt (m);
//console.log(n);

//-----------------------------------------------------------------------------------------------------------

//5 to find area of right angle triangle
//var base = prompt('please enter the base value' , '');
//var height = prompt('please enter the height ', '');
//var area = (base*height)/2;
//console.log(area);
//console.log('base:' +base+ 'height:' +height+ 'area' +area);

//-----------------------------------------------------------------------------------------------------------

//6 regular triangle
//let a = 4;
//let b = 4 ;
//let c = 4;
//let s = ( a+b+c)/2;
//var temp = s*(s-a)*(s-b)*(s-c);
//var area = Math.sqrt(temp);
//console.log(area);
//console.log(s);
//console.log(temp);

//-----------------------------------------------------------------------------------------------------------

//swapping is done by temprory variable or without
//temporory variable
//var a = prompt('please enter the a value') ;
//var  b = prompt('please enter the b value');
//console.log(`The  value of a is: ${a} ,\n The value of b is : ${b}`); //shorthand property
//after swaping
//var temp;
//temp = a ;
//a=b;
//b=temp;
//console.log(`After swapping \n The  valie of a is: ${a} ,\n The value of b is : ${b}`);
//-----------------------------------------------------------------------------------------------------------

//without temprory variable
/*var a = parseInt(prompt('please enter the a value') );
var  b = parseInt(prompt('please enter the b value'));
console.log(`The  value of a is: ${a} ,\n The value of b is : ${b}`); //shorthand property
a=a+b;
b=a-b;
a=a-b;
console.log(`After swapping \n The  valie of a is: ${a} ,\n The value of b is : ${b}`);*/
//-----------------------------------------------------------------------------------------------------------

//maping
/*let arr = [2 ,5, 8, 45 ,76]
let b =  arr.map((value) => {
  return value*2 ;
});
console.log(b);*/

//-----------------------------------------------------------------------------------------------------------
//sq. of number

/*const input = [ 1,2,3,4,5];
const a = input.map((num) => {
    return Math.pow(num,2);
});
console.log(a);*/

//-----------------------------------------------------------------------------------------------------------
//Sum of positive no.

/*const arr= [ 1 , 2 , -7 , -4 , 5 , -9 , 4];
const a = arr.filter((value)=>{
return value>0;
});

const sum = a.reduce(( acc , add)=>{
    return acc+ add;
})
console.log(a);
console.log(sum); //12 */

//-------------------------------------------------------------------------------------------------------------
/*const function_name = (FullName,age,phoneNumber)=>{
console.log (`hi! My FullName is ${FullName}. my age is ${age}.my phone no. ${phoneNumber}`) ;
};
function_name("megha" , 21 , 67487687);*/

//-------------------------------------------------------------------------------------------------------------
/*const sum = (arr)=>{
let sum = 0 ;   //sum kha se intialized hoga
for(let i = 0 ; i<arr.length ; i++ ){
   sum += arr[i];
}
return sum;
}
const array = [ 76,3, 9, 4]
console.log(sum(array));*/
//-------------------------------------------------------------------------------------------------------------
//get name initialized on

/*const input = "My Name Is Megha Singh";

const chars = input.split(" ");

const a = chars.map((value)=>{
    return value[0];
})
const b = a.join(" ");
console.log(b);*/

//-------------------------------------------------------------------------------------------------------------
//calculate age difference from youngest to oldest
/*const input = [13,78,43,4,9,100,57]
console.log([Math.min(...input),Math.max(...input)]);*/

//-------------------------------------------------------------------------------------------------------------
//Write a function which return a "Hello world" string
function a() {
  return "Hello world";
}

console.log(a());

//--------------------------------------------------------------------------------------------------------------
//Write a function which take ytwo no.and perform all operations
let m = 2;
let n = 7;
const operations = (m,n) => {
    //return operations;
console.log (m+n);
console.log (m-n);
console.log (m*n);
console.log (m%n);
}
//operations(m,n);

//---------------------------------------------------------------------------------------------------------------
//Write a funtion which take array as input
let k =[1,2,3,4,8,6,9]
const arr = (k) => {
console.log(k);
}
//arr(k);
//----------------------------------------------------------------------------------------------------------------
//Write a function which take a string from the u
const details =(FullName,college,course,branch,year) => {
    console.log(
  `Hello Myself ${FullName}.I am currently studying in ${college} pursuing a${course} in ${branch}.I am currently in ${year}.`
);
};
 //details ("Megha","Gautam buddha university","B.tech","IT" ,"fourth");
 //--------------------------------------------------------------------------------------------------------------
 //Write a fun which take the input as a parameter and return thestring in lowercase format
 const myName =(string) => {
  return string.toLowerCase();
 };
 //console.log(myName("MEgha"));
//------------------------------------------------------------------------------------------------------------------
 //write a fun which take input as a parameter and check input is even or not
 const number = (input) => {
  return input %2 === 0 ;
 };
 console.log(number(90));
 //-----------------------------------------------------------------------------------------------------------------
 //Write a fun which take input as parameter and return the total length of string ,count white space too
 const naam = (input) => {
  return input.length ;    //.length is used to count the lengt of a string
 };
 console.log(naam("megha"));
 console.log(naam("Megha singh"));
 //-------------------------------------------------------------------------------------------------------------------
 //Write a fun which take input as parameter and return the total length of string ,and not to count white space
 const meraNaam =(input)=> {
  return input.replace().length
 };
 console.log(meraNaam("Megha"));
 console.log(meraNaam("pasandida aurat"));
