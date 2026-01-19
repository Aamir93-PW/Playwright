let array = [90,100,"200",300,true,null] // [index:value] [0:90, 1:100, 2:200, 3:300]

// Index in array starts with 0
// Accessing array values using index
// Syntax: arrayName[index]

console.log(array[0])
console.log(array[2])

// Declaration of array

// 1. Using square bracket [] - Array Literal - mostly we used this 
// 2. Using new keyword - Array Constructor

// 1. Array Literal
let arr1 = [90,100,200,300,400,500]  // Type inference - TS

let arr2 : number[] = [34,45,56,67,78]  // Type annotation - TS

let arr3 : string[] = ['Hi', 'world', 'this', 'is', 'Typescript']

let array1 =[10,20,"TS",true,null]

console.log(array1[0]);

console.log("***********************************")

// Length property - to get the total number of element in an array
// Syntax:
// arrayName.length

console.log(array1.length)

for(let i=0 ; i<array.length; i++){
    console.log(array1[i])
}

console.log("***********************************")

// for of loop
// Syntax:

/*
// for(variable declaration of array){
       code

}

*/

// let array1 =[10,20,"TS",true,null]

for(let element of array1)
{
    console.log(element)
}


// Different types of array methods

console.log("*************Methods of an array***************")

let array2 : any = [10,20,30,40,50]

// 1. push(element1, element2,.....) - To add the elememts at the end of the array
// Syntax:
// arrayName.push(element1, element2,......)
array2.push(60,70,80,90,100)

console.log("push", array2)

// 2. pop() - To remove the last element fom the array
// Syntax:
// arrayName.pop()
array2.pop()
console.log("pop", array2)

// 3. unshift(element1, element2,....) - To add the elements at the beginning of the array
// Syntax:
// arrayName.unshift(element1, element,.....)
array2.unshift("TS", 1, 5)
console.log("unshift", array2)

// 4. shift() - To remove the first element from the array
// Syntax;
// arrayName.shift()

array2.shift()
console.log("shift", array2)

// 5. splice(index, number of element to be removed, element1, element2,...) - To add/remove elements from the form the array at the specified index

//Syntax:

// index - position from where the elements to be add/removed
// number of elements to be removed - number of elements to be removed from the array
// element1, element2,...... - element to be added at the specified index

array2.splice(2,3, "TS", "JS", 100)
console.log("Splice()", array2)

// 6. Slice(startIndex, endIndex) - To extract a portion of the array and return a new array
// Syntax: 
// arrayName.slice(startIndex, endIndex)
// startIndex - starting index from where the extraction begins (inclusive)
// endIndex - ending index where the extraction end (exlclusive)

const slice = array2.slice(1,10)
console.log(slice)

// 7. indexOf(element, startIndex) - To get the index of the first occurance of the specified element in the array
// Syntax:
// arrayName.indexOf(element, startIndex(optional))

let array3 = [10,20,30,40,50,10,20,30]
const indexOf = array3.indexOf(10) 
console.log(indexOf) // 0
const indexOf1 = array3.indexOf(10,2)
console.log(indexOf1)// 5

// 8. lastIndexOf(element, startIndex) - To get the index of the last occurance of the specified element in the array
// Syntax:
// arrayName.lastIndexOf(element, startIndex(optional))
