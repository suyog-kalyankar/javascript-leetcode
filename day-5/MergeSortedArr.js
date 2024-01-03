const mergeSortedArr = (nums1, m, nums2, n) => {
    nums1 = nums2.concat(nums1);
    nums1.sort((a, b) => a - b);
    nums1 = nums1.splice(m+n - n);
    return nums1;
}

console.log(mergeSortedArr([1,2,3,0,0,0], 3, [2,5,6], 3 ))