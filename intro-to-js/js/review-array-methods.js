var arr1 = [ 'orange', 'apple', 'banana' ];
console.log(arr1);

console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);

arr1.push('blueberry');
console.log(arr1);

arr1.unshift('pear');
console.log(arr1);

arr1.splice(2, 1, 'strawberry');
console.log(arr1);

arr1.splice(1, 1);
console.log(arr1);

var copyOfArr1 = arr1.slice();
console.log(copyOfArr1);

console.log(arr1.length);
