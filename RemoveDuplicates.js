const removeDuplicates = (nums) => {
    let len = nums.length;
   if (len <= 1) {
    return len;
   }
   let cnt = 0;
   let duplicateCnt = 0;
   for (let i = 1; i < len; i++) {
        if (nums[cnt] !== nums[i]) {
            ++cnt;
            nums[cnt] = nums[i];
        } else {
            duplicateCnt++;
        }
   }
   nums.length = nums.length - duplicateCnt;
   return nums.length;
}


const nums = [1,1,2];
const nums1 = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));
console.log(removeDuplicates(nums1));