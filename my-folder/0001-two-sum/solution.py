class Solution:
  def twoSum(self, nums: List[int], target: int) -> List[int]:
    seen = {}
    for i in range(0, len(nums)):
      x = target - nums[i]
      if x in seen:
        return seen.get(x),i
      else:
        seen.update({nums[i]:i})

