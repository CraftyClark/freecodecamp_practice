/*
Return the provided string with the first letter of each word capitalized. Make sure the 
rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {

	//convert string to lowercase
	str = str.toLowerCase();

	//split string into array of strings using str.split
	str = str.split(' ');

	//Loop through array of strings. Make first charcter of each string upper case
	//str[i].charAt(0), accesses the first character in the string
	//str[i].slice(1), extracts section of string, from index 1 til the end of string, and 
	// returns as a new string.
	for (var i = 0; i < str.length; i++)
	{
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
	}

	//Joins together the array of strings, into one single string, seperated with a space (' ').
	str = str.join(' ');


	return str;
}

console.log(titleCase("I'm a little tea pot"));
