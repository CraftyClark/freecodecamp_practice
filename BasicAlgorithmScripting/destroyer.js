/*
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of 
the same value as these arguments.

*/

function destroyer(arr) {
	//Slice off first argument. Save the rest to var args.
	//can't use regular slice because it isn't a real array. Need to use prototype.slice
	var args = Array.prototype.slice.call(arguments, 1);
	//filter array, using arguments (2,3)
	//indexOf returns -1 if not found.
	return arr.filter(function(item)
	{
		return args.indexOf(item) < 0;
	});
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
