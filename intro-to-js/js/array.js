// array data type
var arr1 = []; // empty array
var arr2 = [1,2]; // has two elements
console.log(arr2);
console.log(arr2[1]); // index= 1
console.log(arr2[2]); // no index = 2

var arr3 = ['hi' , 'hello' , 'there'];
//display/output arr3
console.log(arr3);
//display/output there
console.log(arr3[2]);
console.log(arr3.length);
console.log(arr3[arr3.length -1]);

arr3.push('welcome'); //adds welcome to end of array 3
console.log(arr3);
console.log(arr3[arr3.length -1]);

arr3.unshift('greeting'); // adds greeting to beginning of array 3
console.log(arr3);

arr3.splice(2,1, 'Dominique'); // (which index, how many to delete, what to put there)
console.log(arr3);

arr3.splice(2,0,'hola'); //use 0 to add values 
console.log(arr3);

var arr4 = [10,40,'abc', 'xyz', true];
console.log(arr4);

arr4.pop(); //removes last item of arr4
console.log(arr4);

arr4.shift(); // removes first item of arr4
console.log(arr4);

var arr5 = arr4.slice(); //makes a copy of arr4 into arr5
console.log(arr5);
var arr6 = arr4; // not a copy but exact value

arr4.push(false);
console.log(arr4);
console.log(arr5);
console.log(arr6);

var arr7 = arr4.slice(1, 3); // does not include second index so have to put the index after the end
console.log(arr7);
