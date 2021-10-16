var findTheWinner = function(n, k) {
    let nums = Array.from({length: n}, (e,i) => i + 1)
    let index = 0

    while (nums.length != 1) {
        if (index > nums.length - 1) {
            index = 0
        } else if (index + k - 1 < nums.length) {
            index = index + k - 1
            nums.splice(index, 1)
        } else {
            index = index - nums.length
        }
    }

    return nums[0]
};

console.log(findTheWinner(5, 2))