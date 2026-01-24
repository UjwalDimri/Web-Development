// Practice Question 
// check if all numbers in our array are multiples of 10 or not 
let arr = [10,20,30,40,50];

let ans = arr.every((el) => el%10==0);
console.log(ans);

//practice question
// create a function to find the min number in an array
let arr2 = [1,2,3,4,5];
function getmin(arr2){
    let min = arr2.reduce((res,el) => {
        if(res<el){
            return res;
        } else {
            return el;
        }
    });
console.log(min);
return min;
}
// Qs1.Square and sum the array elements using the arrow function and then find the average of the array
let nums = [1,2,3,4,5];
let square = nums.map((el) => {
   let el1= el*el;
   console.log(el1);
    return el1;
});
console.log(square);
let sum = square.reduce((res,el) => res+el);

console.log(sum);

let Avg = sum/nums.length;
console.log(Avg);

// Qs2 . Create a new array using the map function whose each element is equal to the original element plus 5.
let arr8 = [100,20,3,4,10,30];
let pulseFive = arr8.map((el) => {
    let x = el+5;
    return x ;
});
console.log(...pulseFive);

// Qs3. Create a new array whose elements are in upper case of words present in the original array
let arr3 = ["I","am","Ujwal"];
let arr ;


// Qs4.Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.The function should return a new array with the original array values and all of the additional arguments doubled.
// Qs5.Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.