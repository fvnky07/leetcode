/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    }
    seen.add(nums[i]);
  }
  return false;
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] === nums[j]) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
};
