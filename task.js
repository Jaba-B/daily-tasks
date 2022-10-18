// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes 
// the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

function reverseInt(num) {
  if(num < (-(Math.pow(2, 31)) || num > (Math.pow(2, 31) - 1))) {  // 1
    return 0
  }
  const splittedNum = num.toString().split('');  // 1
  let positiveResult = ''; // 1
  let negativeResult = '-'; // 1
  if(num >= 0) {  // 1 + 1 + 1 O(n)
      for (let i = splittedNum.length - 1; i >= 0; i--) {
    if(splittedNum[i] !== 0) {
      positiveResult += splittedNum[i];
      }
    }
        return +positiveResult
  } else {                                                
    for (let i = splittedNum.length - 1; i > 0; i--) {
    if(splittedNum[i] !== 0) {
      negativeResult += splittedNum[i];
      }
    }
      return +negativeResult
  }
}

console.log(reverseInt(120))
console.log(reverseInt(-123))
console.log(reverseInt(123))

// Time complexity = 7 + O(n) = O(n)

//Example 1:  Input: x = 123;  Output: 321;

//Example 2: Input: x = -123; Output: -321;

//Example 3: Input: x = 120; Output: 21;