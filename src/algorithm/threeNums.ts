function threeSum(nums: number[]): number[][] {
  const sortedNums = nums.sort((a, b) => (a - b > 0 ? 1 : -1))
  let i = 0,
    index = 0,
    j = sortedNums.length - 1,
    res = [],
    num,
    expect
  for (index = 0; index < sortedNums.length; index++) {
    num = sortedNums[index]
    if (num === sortedNums[index - 1]) {
      continue
    }
    i = index + 1
    j = sortedNums.length - 1
    expect = 0 - num
    while (i < j) {
      if (j === index) {
        j--
        continue
      }
      if (i - 1 > index && sortedNums[i] === sortedNums[i - 1]) {
        i++
        continue
      }
      if (sortedNums[i] + sortedNums[j] > expect) {
        j--
      } else if (sortedNums[i] + sortedNums[j] === expect) {
        res.push([num, sortedNums[i], sortedNums[j]])
        i++
      } else if (sortedNums[i] + sortedNums[j] < expect) {
        i++
      }
    }
  }
  return res
}
