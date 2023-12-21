const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        const remainder = target - nums[i];
        for (let j = i+1; j < nums.length; j++) {
            if (remainder === nums[j]) {
                return [i, j];
            }
        }
    }
}

const nums = [2, 7, 8, 11];
const target = 9;

const nums_1 = [3,2,4];
const target_1 = 6;
console.log(twoSum(nums, target));
console.log(twoSum(nums_1, target_1));