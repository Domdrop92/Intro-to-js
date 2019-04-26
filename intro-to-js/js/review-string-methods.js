var str1 = "Hello World!";
console.log(str1);

var str2 = str1.split(' ');
console.log(str2);
console.log(str2[0]);
console.log(str2[1].split('!')[0]);

console.log(str1.slice(6 , str1.length  - 1));
