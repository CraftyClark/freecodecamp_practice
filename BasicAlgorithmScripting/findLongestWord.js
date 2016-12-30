/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function findLongestWord(str) {
	var splitWords = str.split([' ']); //outputs an array of separated words. i.e.=["The", "quick", "brown", "fox", etc];
	var lengthOfLongestWord = 0;
	for(var i = 0; i < splitWords.length; i++)
	{
		if(splitWords[i].length > lengthOfLongestWord)
		{
			lengthOfLongestWord = splitWords[i].length;
		}
	}
  return lengthOfLongestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));