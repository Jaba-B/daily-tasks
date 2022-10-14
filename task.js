// Duplicate Zeros

let arr = [1,0,2,3,0,4,5,0]

function duplicateZeros(arr) {
  let addedZeros = 0;  // 1
  let copyedArray = [...arr];  // 1
  for (let i = 0; i < copyedArray.length; i++) {  // O(n)
    if (copyedArray[i] === 0 ) {
      arr.splice(i + addedZeros, 0, 0);
      arr.pop();
      addedZeros += 1;
    }
  }
}

duplicateZeros(arr);
console.log(arr)

// Time complexity = O(n) + 2 = O(n)

//Example 1:  Input: arr = [1,0,2,3,0,4,5,0];  Output: [1,0,0,2,3,0,0,4];  

//Example 2: Input: arr = [1,2,3];  Output: [1,2,3];