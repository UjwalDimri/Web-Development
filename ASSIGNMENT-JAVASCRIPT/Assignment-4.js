// PART -4
console.log("PART - 4 ");

// practice question
//print odd numbers from 1 to 15 

for(let i = 1;i<=15;i++){
    if (i%2!=0){
        console.log(i);
    }
}

// practice question
// print even numbers 2 to 10
for(let i = 1;i<=15;i++){
    if (i%2==0){
        console.log(i);
    }
}

// print multiplication table of 5 
console.log("multiplication table of 5 ");

for(let i = 1;i<=10;i++){
    console.log(`5 X ${i} = ${5*i}`);
}

// ASSINGMENT-4 
// QUESTION-1
// Write a JS program to delete all occurrences of element ‘num’ in a given array . 
// Example: if arr=[1,2,3,4,5,6,2,3] & num = 2 Result should be arr=[1,3,4,5,6,3]
let arr4 = [1,2,3,4,5,6,2,3];
let del = prompt("Enter element you want to delete");
for(let i = 0;i<arr4.length;i++){
    if(arr4[i] == del){
        arr4.splice(i, 1);
    }
}
for(let j= 0;j<arr4.length;j++){
console.log(j);
}

// question -2
// Qs2.Write a JS program to find the no of digits in a number. Example: if number = 287152,count = 6
let n = parseInt(prompt("Enter any number:"));
let count = 0;
while(n!=0){
    n = Math.floor(n/10);
    count++;
}
console.log(count);
alert(count);

// question-3
// Qs3.Write a JS program to find the sum of digits in a number.
// Example:if number =287152, sum=25
let num = parseInt(prompt("Enter a number:"));
let x = 0;
while(num!=0){
    x = num%10 + x;
    num = Math.floor(num/10);
}
console.log(`The Sum is ${x}`);

//question - 4 
// Qs4.Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted  by that integer .]
// Example:7!(factorialof7)=1x2x3x4x5x6x7=50405!
    // (factorialof5)=1x2x3x4x5=1203!
    // (factorialof3)=1x2x3=6
    // 0!Isalways1
let num2 = parseInt(prompt("Enter a number to find its factorial:"));
let fact = 1;
for(let i=num2;i>0;i--){
    fact = fact*i;
}
console.log(`The factorial of ${num2} is ${fact}`);

// question - 5
// Qs5. Find the largest number in an array with only positive numbers.
let arr = [1,2,3,4,5];
let max = 0;
for(let i=0;i<arr.length;i++){
    if (arr[i]>max){
        max=arr[i];
    }
}
console.log(`The max number in the array is ${max}`);