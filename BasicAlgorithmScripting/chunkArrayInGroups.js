/*
Write a function that splits an array (first argument) into groups the length of size 
(second argument) and returns them as a two-dimensional array.
*/


function chunkArrayInGroups(arr, size) {
	var newArr = [];
	var i = 0;
	while (i < arr.length)
	{
		newArr.push(arr.slice(i, i+size));
		i = i + size;
	}

	return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
