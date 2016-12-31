/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, 
then the addition of the three dots does not add to the string length in determining the truncated string.
var str1 = 'The morning is upon us.', // the length of str1 is 23.
    str2 = str1.slice(1, 8),
*/


function truncateString(str, num) {

	if(num<=3)
	{
		str = str.slice(0, num) + "...";
		return str;
	}
	else if(str.length>num)
	{
		str = str.slice(0, num - 3) + "...";
		return str;
	}
	else
	{
		str = str + "...";
		str = str.slice(0, str.length - 3);
		return str;
	}

}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));