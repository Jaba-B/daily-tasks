// Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Example 1:   Input: nums = [2,7,11,15], target = 9;      Output: [0,1]
// Example 2:   Input: nums = [3,2,4], target = 6;      Output: [1,2]   
// Example 3:   Input: nums = [3,3], target = 6;      Output: [0,1]

function twoSum(arr, target) {
    for (i = 0; i < arr.length; i++) {    //O(n)
      let searchNum = target - arr[i];
      if(arr.indexOf(searchNum, i+1) > 0) {    //O(n)
        return [i, arr.indexOf(searchNum, i+1)];
      }
    }
}
  
console.log(twoSum([2,7,11,15], 9)) // [0, 1]
console.log(twoSum([3,2,4], 6)) // [1,2]
console.log(twoSum([3,3], 6)) // [0,1]
  
// Time Complexity - O(n²);