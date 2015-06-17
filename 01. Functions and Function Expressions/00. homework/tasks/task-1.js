/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/

function sum(arr) {
	if(arr.length===0){
		return null;
	}
	var i,
		len=arr.length,
		number = 0,
		sum = 0;
	for (var i = 0; i < len; i++) {
		if (isNaN(arr[i])) { // check if not a number trow ERROR
			throw 'Number must be of type Number';
		}else {
			sum += +arr[i];
		}
	}
	return sum;
}

module.exports = sum;
