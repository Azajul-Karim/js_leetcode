function containsDuplicate(nums) {
 const visitesNums = {}

  for (let i = 0; i < nums.length; i++) {
   const num = nums[i]
    if (visitesNums[num]) {
      return true
    } else {
      visitesNums[num] = true
    }
  }
  return false
}

module.exports = containsDuplicate;