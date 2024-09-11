function lengthOfLIS(nums){
  if (nums.length === 0) return 0;

  let dp = new Array(nums.length).fill(1);
  let max = 1;

  for(let j = 1; j < nums.length; j++){
    for(let i = 0; i < j; i++){
      if(nums[j] > nums[i]){
        dp[j] = Math.max(dp[j], dp[i] + 1);
      }
    }
    max = Math.max(max, dp[j]);
  }
  return max;
}

module.exports = lengthOfLIS;