arr.push()
arr.pop()
arr.shift()
arr.unshift()
delete arr[1]
alert( arr.lenght)
arr.splice(start[, deleteCount, elem1, ..., elemN])
arr.splice(1,1)
arr.splice(0,3, "Let's","dance")
alert(arr.splice(-2))
arr.concat(arg1, arg2)
let arr= [1,2]
let arrayLike = {
0: "something", 
1: "else"
[Symbol.isConcatSpreadable]: true,
lenght: 2
};

alert( arr.concat(arrayLike));
arr.forEach(function(item, index, array) {


});  