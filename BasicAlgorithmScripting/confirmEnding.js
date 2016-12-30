/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the 
purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
Consider these methods.
String.prototype.substr()
String.prototype.substring()

substr() calculates the index of first matching character from the string's 
end if the specified location is negative.
We use the method substr() with the negative value of target's length to extract the ending segment of 
str of the same size as target, compare it to target, and then return the value of this boolean expression.
*/


function confirmEnding(str, target) 
{
	return str.substr(-target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));
