class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set()  # Create a set to track seen numbers
        for num in nums:  # Iterate through each number in the list
            if num in seen:  # If the number is already in the set, we found a duplicate
                return True
            seen.add(num)  # Add the number to the set
        return False
