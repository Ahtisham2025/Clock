// 1. ways to print in java script
// // console.log("This is Ahtisham");
// // // alert("This is Ahtisham");
// // // document.write("This is Ahtisham");
// 2. java script console API
// console.log("Hello world");
// console.warn("This is warning");
// console.error("This is an error");
// // 3. javascript variables
// // what are variables? - Containers to store data values
// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);
// // 4. Data types in java script
// // Numbers
// var number1 = 34; 
// var number2 = 56.76
// // Strings;
// var str1 = "This is a string";
// var str2 = "This is also a string";
// // Objects
// var marks = {
//     Ahtisham: 34,
//     Salman: 78,
//     John: 99.977
// }
//     console.log(marks);
//     // Booleans
//     var a = true;
//     var b = false;  
//     console.log(a);
// // undefined    
// var und = undefined;
// console.log(und);
// // var und=undefined
// var and;
// console.log(and);
// var n = null;
// console.log(n);
// at a very high level there are two types of data types in javascript
// 1. Primitive data types: undefined, null, number, string, boolean, symbol
// var arr =`[1,2,"Ahtisham",4,5]`;// this is an array
// Operators in JavaScript
// Arthmetic Operators
// var a = 34; 
// var b = 56;
// console.log("The value of a + b is", a + b);
// console.log("The value of a - b is", a - b);
// console.log("The value of a * b is", a * b);        
// console.log("The value of a / b is", a / b);
// // Assignment Operators
// var c = b;
// c += 2; // c = c + 2
// c -= 2; // c = c - 2
// c *= 2; // c = c * 2
// c /= 2; // c = c / 2
// console.log(c);

// comaparison operators
// var x = 34;
// var y = 56;
// console.log(x == y);
// // console.log(x >= y);    
// // console.log(x <= y);
// // console.log(x > y);     
// // console.log(x < y);
// // console.log(x != y);    
// logical operators
// // logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);
// logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);
// logical not means such ko jhoot or jhoot ko such banata hai
// console.log(!false);
// console.log(!true); 
// fucntion in javascript
// function avg(a, b) {
//     return (a + b) / 2;
// }
// c1=avg(34, 56);
// c2=avg(30, 70);
// console.log(c1, c2);
// function avg(a, b) {
//     c= (a + b) / 2;
//     return c;
// }
// c1=avg(34, 56);
// c2=avg(30, 70);
// console.log(c1, c2);
// var age = 15;
// // if (age >= 18) {
// //     console.log("You are adult.");
// // } else {
// //     console.log("You are not adult.");
// }
// if (age >= 55) {
//     console.log("You are not adult.");
// } else if (age < 18) {
//     console.log("You are adult.");
// }
// else if(age<10){
//     console.log("You are kid.");
// }
// else if (age < 5) {
//     console.log("You are baby.");
// }
// else if (age < 2) {
//     console.log("You are infant.");
// }   
// else {
//     console.log("You are free right now.");
// // }
// var arr = [1, 2, 3, 4, 5];
// let a=0;
// while(a<arr.length){
//     console.log(arr[a]);
//     a++;
// }
// do{
//  console.log(arr[a]);
//     a++;
// }while(a<arr.length);
// let myarr = ["fan", "light", "bulb", 45, null , undefined ];
// console.log(myarr.length);
// // myarr.push("Ahti");   
// // myarr.shift(); 
// myarr.unshift("Ahti");
// console.log(myarr);
// d.sort
// let mylovlystr = "Ahti is a good boy";
// console.log(mylovlystr.length);
// let mylovlystr = "Ahti is a good boy";
// console.log(mylovlystr.slice(0, 4));
// console.log(mylovlystr.replace("Ahti", "Ahtisham"));
// let myDate = new Date();
// console.log(myDate);
// tn = document.getElementsByTagName('div');
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a newly created paragraph.";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is another newly created paragraph.";
// tn[0].appendChild(createdElement2, createdElement);
// removeChild(element); 
// Sel = document.querySelector('.container');
// console.log(Sel);
// Sel = document.querySelectorAll('.container');
// console.log(Sel);
// function clicked() {
//     console.log("The button was clicked");
// // }
// firstcontainer.addEventListener('click', function() {
// //     console.log("Container clicked!");
// // });
// // Arrow functions
// const Sum = (a, b) => {
//     return a + b;
// }
// Summ = (a, b) => {
//     return a + b;
// }
// logkaro = () => {
//     console.log("Ahti");
// }
// setTimeout(logkaro, 2000);
// // setTimeout and setInterval
