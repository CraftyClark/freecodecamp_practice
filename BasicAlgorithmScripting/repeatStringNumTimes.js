/*
Repeat a given string (first argument) num times (second argument). 
Return an empty string if num is not a positive number.

Strings can also be created using the String global object directly:
String(thing)
Parameters
thing
Anything to be converted to a string.
*/


function repeatStringNumTimes(str, num) {
	
  var result = '';
  while(num > 0)
  {
  	result += str;
  	num--;
  }

  return result;
}

console.log(repeatStringNumTimes("abc", 3));
