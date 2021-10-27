function lengthOfLIS(nums: number[]) {
  if (!Array.isArray(nums)) return 0
  const len = nums.length
  const countArr = Array(len).fill(1)
  let i = 0,
    j = 0,
    max = 1
  for (i = 0; i < len; i++) {
    for (j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        countArr[i] = Math.max(countArr[j] + 1, countArr[i])
        if (countArr[i] > max) {
          max = countArr[i]
        }
      }
    }
  }
  return max
}
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]))
