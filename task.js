// Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

function lengthOfTheLastWord(str) {
  const arrWithoutWSpaces = str.replace(/^\s+|\s+$/gm,'').split(' ');
  return arrWithoutWSpaces[arrWithoutWSpaces.length - 1].length
}


// Time complexity - O(n)

// console.log(lengthOfTheLastWord("Hello World"))
// console.log(lengthOfTheLastWord("   fly me   to   the moon  "))
// console.log(lengthOfTheLastWord("luffy is still joyboy"));

// Example 1: Input: s = "Hello World"; Output: 5; Explanation: The last word is "World" with length 5.
// Example 2: Input: s = "   fly me   to   the moon  ";  Output: 4; Explanation: The last word is "moon" with length 4.
// Example 3: Input: s = "luffy is still joyboy";   Output: 6;  Explanation: The last word is "joyboy" with length 6.


// Unique Email Addresses

// Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.
// For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
// If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in
// the local name. Note that this rule does not apply to domain names.
// For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
// If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does
// not apply to domain names. For example, "m.y+name@email.com" will be forwarded to "my@email.com". It is possible to use both of these rules at the same time.
// Given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.

function UniqueEmailAddresses(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let localName;
    let domainName;
    if(arr[i].indexOf('+') >= 0) { 
      localName = arr[i].slice(0, arr[i].indexOf('+')).replaceAll('.', '');
      domainName = arr[i].slice(arr[i].indexOf('@'), arr[i].length);
    } else {
      localName = arr[i].slice(0, arr[i].indexOf('@')).replaceAll('.', '');
      domainName = arr[i].slice(arr[i].indexOf('@'), arr[i].length);
    }
    if(newArr.indexOf(localName + domainName) === -1) {
      newArr.push(localName + domainName)
    }
  }
  return newArr.length
}

// Time complexity = O(n)
  
console.log(UniqueEmailAddresses(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))
console.log(UniqueEmailAddresses(["a@leetcode.com","b@leetcode.com","c@leetcode.com"]));

// Exapmle 1: Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]; Output: 2
// "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.

// Example 2: Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]; Output: 3;
