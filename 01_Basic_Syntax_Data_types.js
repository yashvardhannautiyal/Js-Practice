// 1. Write a JavaScript program to print "Hello, World!" to the console.
// console.log("hello world")


// 2. Declare a variable and assign it a string value.
// let a = "this is string";
// console.log(typeof(a));


// 3. Write a program to swap two variables without using a third variable.
/* let num1 = 1
let num2 =2

//using third variable
// let num3 = num1
// num1 = num2
// num2 = num3
// console.log("num1 : " + num1);
// console.log("num2 : " + num2);
// console.log("num3 : " + num3);

//without using third variable
console.log("before swapping \n num1 : "+num1 + " num2 : " + num2);

num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;
console.log("after swapping \n num1 : "+num1 + " num2 : " + num2)
*/


/*
// 4. Convert a string to a number and vice versa
let str = "7685"
let num = 87;

//string to number
let str2 = parseInt(str);
console.log(typeof(str2));

let num2 = num.toString()
console.log(typeof(num2))

*/


/*
// 5. Check if a given number is even or odd.
const num1 = 44;
const num2 = 65;

const func = (num) =>{
if(num % 2 === 0){
    return (num+" is even")
}
else if(num % 2 !== 0){
    return (num+" is odd")
}
}
console.log(func(num1))
console.log(func(num2))

*/


/*
// 6. Find the largest of three numbers.
const num1 = 45;
const num2 = 89; 
const num3 = 4;

const func = () =>{
    if(num1 > num2 && num1 > num3){
        return num1 + " is the greatest."
    }
    else if(num2 > num1 && num2 > num3){
        return num2 + " is the greatest."
    }
    else{
        return num3 + " is the greatest."
    }
}

console.log(func(num1))
console.log(func(num2))
console.log(func(num3))

*/


/*
// 7. Write a function to check if a number is positive, negative, or zero.
const num1 = 7;
const num2 = 0;
const num3 = -67;

const func = (num) =>{
    if(num > 0){
        return num + " is positive"
    }
    else if(num === 0){
        return num + " is not negative not positive"
    }
    else if(num < 0){
        return num + " is negative"
    }
}

console.log(func(num1))
console.log(func(num2))
console.log(func(num3))

*/


/*
// 8. Convert Celsius to Fahrenheit.
let cel = 32;

function func(c){
    let Fahrenheit = ((c * 9)/5) + 32;
    return Fahrenheit;
}
console.log(cel + " celsius = "+ func(cel) + " Farhenhiet")

*/

// 9. Check if a year is a leap year.
// leap year = divisible by 4 + !divisible by 100
// or
// leap year = divisible by 400
let year = 2025;
let year2 = 2024;

const func = (y) =>{
    if((y%4 ===0 && y%100 !== 0) ||  y%400 == 0){
        return y + " is a leap year"
    }
    else{
        return y+ " is not a leap year"
    }
}

console.log(func(year)) 
console.log(func(year2)) 

