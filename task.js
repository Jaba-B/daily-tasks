// Valid Palindrome - My solution

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
// and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

function palindrome(str) {
  let result = '';  // 1
      for (let i = 0; i < str.length; i++) {   // O(n)
        if (str[i] >= 'A' && str[i] <= 'z') result += str[i].toLowerCase();
    }
  for (let i = 0; i < result.length / 2; i++) {    // O(n/2)
    if(result[i] !== result[result.length - 1 - i]) {
	return false
    }
  } 
   return true  // 1
}

console.log(palindrome("A man, a plan, a canal: Panama"))
console.log(palindrome("race a car"))
console.log(palindrome(""))

// Timpe Complexity = 2 + O(n) + O(n/2) = O(n)

// Exapmle 1: Input: s = "A man, a plan, a canal: Panama";  Output: true;  Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2: Input: s = "race a car"; Output: false; Explanation: "raceacar" is not a palindrome.
// Example 3: Input: s = " "; Output: true; Explanation: Since an empty string reads the same forward and backward, it is a palindrome.



// Valid Palindrome II - My solution

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

function palindrome(str) {
  for (let i =0; i < str.length; i++) {  // O(n)
    let newStr = str.slice(0, i) + str.slice(i+1, str.length);
    let mistake = 0; 
    for (let j = 0; j < newStr.length / 2; j++) { // O(n/2)
      if(newStr[j] !== newStr[newStr.length - 1 - j]) {
        mistake += 1
      }
    }
    if(mistake === 0) {  // 1
      return true
    }
  }
  return false  // 1
}

console.log(palindrome('aba'))
console.log(palindrome('abca'))
console.log(palindrome('abc'))

// Time copmlexity = O(n) x O(n/2) + 2 = O(n²)

// Example 1: Input: s = "aba"; Output: true;
// Example 2: Input: s = "abca"; Output: true; Explanation: You could delete the character 'c';
// Example 3: Input: s = "abc"; Output: false;