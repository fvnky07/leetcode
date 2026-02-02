/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const seen = new Map();
  for (let i = 0; i !== nums.length; i++) {
    const x = target - nums[i]
    if (seen.has(x)) {
      return [seen.get(x), i]
    } else {
      seen.set(nums[i], i)
    }
  }
};
