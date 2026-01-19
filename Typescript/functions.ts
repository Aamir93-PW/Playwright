// Functions - Is a set of instruction that performs a specific task

function login(){
    //username
    //password
    //click on the button
}

login()

//Advantage

// EX. 100 TCs - 
// Duplication of code - 300 lines of code - 105
// Maintainability - difficult to maintain the code - 100 Tcs - 1 step to update at function level
// Reusability - 

// Types
// 1. Named Fuction - Function Declaration
// 2. Anonymous Function - Function Expression
// 3. Arrow Function - ES6 - 2015
// 4. Constructor Function - Class - Not used frequently

// 1. Named Fuction - Function Declaration - A function which will be declared 
// with a name is known as Function Declaration or Named Fuction
// Syntax:

/*
function functionName(parameter:datatype(Optional), parameter1,....): return datatype(Optional){
   //code
}

*/

// Addition of 2 numbers

// Parameterized and non-returning function

function add1(a:number,b:number) // a,b - parameters
{
    console.log(a+b)
}

const sum1 = add1(10,90) // 10,90 - arguments


// Parameterized and returning function

function addition(x,y,z)
{
    return x+y+z
}

const sum = addition(10,20,30)
console.log(sum);



// Non-parameterized and non-returning function

function greet()
{
    console.log("Hi, Welcome to Typscript");
}

greet()

// Non-parameterized and returning function

function message()
{
    return "Hi,Welcome to TS"
}

const msg = message()
console.log(msg);

// 2. Anonymous Function - Function Expression - A function which is declared without any name is known as Anonymous Function or Function Expression. That function we store it inside a variable.

// Syntax:
/*

let variable = function(parameter:datatype(Optional)): return datatype(Optional)
{
   // code
}

variable(arguments)

*/

// Anonymous function and Arrow function - call back function

// Callback function - A function is passed as an argument to another function is known as Callback function