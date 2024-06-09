/*
Find First and Last Position of Element in Sorted Array
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]
*/

function firstAndLastPosition(nums, target){
    let ans = [-1, -1];

    ans[0] = search(nums, target, true);
    ans[1] = search(nums, target, false);

    return ans;
}

function search(nums, target, isFindingStartIndex) {
    let ans = -1;

    let start = 0;
    let end = nums.length - 1;

    while(start <= end){
        let mid = Math.floor(start + (end - start)/2);

        if(target < nums[mid]){
            end = mid - 1;
        }
        else if(target > nums[mid]){
            start = mid + 1;
        }
        else {
            ans = mid;  // potential ans

            // can pointers be moved further left or right to find other potential ans at ends
            if(isFindingStartIndex){
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
    }

    return ans;
}

console.log("firstAndLastPosition:", firstAndLastPosition([5,7,7,8,8,10], 8));
console.log("firstAndLastPosition:", firstAndLastPosition([5,7,7,8,8,10], 6));
console.log("firstAndLastPosition:", firstAndLastPosition([], 0));
