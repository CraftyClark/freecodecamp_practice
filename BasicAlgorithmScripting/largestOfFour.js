/*
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, 
and access each member with array syntax arr[i].
*/

/*
Math.max() reference -> 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
*/

function largestOfFour(arr) {
  
  for(var i = 0; i < arr.length; i++)
  {
  	arr[i] = Math.max(...arr[i]);
  	
  }											

  return arr;
}

largestOfFour = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//test
/*
for(var i = 0; i < largestOfFour.length; i++)
{
	console.log(largestOfFour[i]);
}
*/