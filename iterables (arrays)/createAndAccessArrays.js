// Array can store multiple values in single variable - values of any datatype
let numArr = [1,2,3,4];
let empArr = ["roy", "john"]; //Literal notation
console.log(empArr[0])
console.log(empArr[1])


let colors = new Array(2); //assign length and values
console.log(colors.length); //2
//Assign values to an empty array using indexes
colors[0] = "Red";
colors[1] = "Green";
console.log(colors); //['Red','Green']


let colors = new Array("Red", "Orange", "Green");


//Spread operator - arrays can be merged  OR use concat
let arr1 = [1,2];
let arr2 = [3,4];
let spreadArr = [...arr1, ...arr2];
console.log(spreadArr);

//combine with values, add beechme
let arr3 = [1,2];
let arr4 = [3,4];
let spreadArr1 = [0,...arr3, 100, ...arr4];
console.log(spreadArr1);
// [ 0, 1, 2, 100, 3, 4 ]

//create copy of array 
let arr = [3,4,5];
let copyArr = [...arr];
copyArr.push(4);
arr.push(100);
console.log(copyArr) //copy array
console.log(arr) //original array [ 3, 4, 5, 4 ]
// [ 3, 4, 5, 100 ]



//Accessing arrays using index
//Loop over array

let colors = ["red", "blue", "green"];
for (let i=0; i<colors.length;i++) {
    console.log(colors[i])
}

for(let color of colors ) {
    console.log(color)
}


//Array methods  - push pop splice slice forEach join

let myArray = ["Android", "iOS", "Windows"];
let ans = myArray.join(',')
console.log(ans) //Android,iOS,Windows
console.log(typeof ans) //string




