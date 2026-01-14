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