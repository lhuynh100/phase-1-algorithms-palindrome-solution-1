

function reverse(word){
 // 'abc' => 'cba"
 // create an array from the input string

// reverse the array
// const wordArray = word.split("")

// create a string from the reversed array
// const reverseWordArray = wordArray.reverse()

// return the reversed string
// const reverseWord = reverseWordArray.join("")

// return reverseWord; same as below

return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here

  // reverse the input string
const reversedWord = reverse(word);
return  word === reversedWord

}


/* 
  Add your pseudocode here
  that means if the word is teh same as teh word in reverse, I should return true.
  
  reverse the input string

  if the input is the same as teh reversed input 
    return true
    else return false
*/

/*
  add written explantion of your solution here
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
