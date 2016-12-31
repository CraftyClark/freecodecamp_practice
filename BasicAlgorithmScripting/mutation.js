/*
Return true if the string in the first element of the array contains all of the letters of the string in the 
second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are 
present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
----------------------------------------------------------------
The indexOf() method returns the index within the calling String object of the first occurrence of the specified 
value, starting the search at fromIndex. Returns -1 if the value is not found.
Syntax: str.indexOf(searchValue[, fromIndex])
Parameters: 
	-searchValue- A string representing the value to search for.
	-fromIndex Optional- The index at which to start the searching forwards in the string. It can be any integer. 
	The default value is 0. If fromIndex <= 0 the entire string is searched. If fromIndex >= str.length, 
	the string is not searched and -1 is returned. Unless searchValue is an empty string, 
	then str.length is returned.
Return value:
The index of the first occurrence of the specified value; -1 if not found.
*/

function mutation(arr) {

	var fromIndex = arr[0].toLowerCase(); // hello
	var searchValue = arr[1].toLowerCase(); //hey
	for(var i = 0; i<searchValue.length; i++)
	{
		if (fromIndex.indexOf(searchValue[i])=== -1)
		{
			return false;
		}
	}
	return true;
}

console.log(mutation(["hello", "hey"]));
