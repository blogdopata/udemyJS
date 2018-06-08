

var arr = [2,3,4,5];

console.log(arr)




arr =  arr.map(function(elem){

		elem *= 3;
		return elem;
});

console.log(arr);

arr = arr.join("-")

console.log(arr);

arr = arr.split("");
console.log(arr);