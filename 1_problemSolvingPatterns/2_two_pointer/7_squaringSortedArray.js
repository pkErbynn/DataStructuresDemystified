/*
Problem Statement #
Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [4, 2, 0, 4, 9] => [0, 1, 4, 4, 9]

Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0 1 1 4 9]
*/


function createSquaredSortedArray(numbers) {
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;

    let result = []; // Initialize result as an empty array and stack

    while (leftPointer <= rightPointer) {
        let leftValueSquared = numbers[leftPointer] * numbers[leftPointer];
        let rightValueSquared = numbers[rightPointer] * numbers[rightPointer];

        if (leftValueSquared <= rightValueSquared) {
            result.unshift(rightValueSquared); // Add to the beginning of the result array
            rightPointer--;
        } else {
            result.unshift(leftValueSquared); // Add to the beginning of the result array
            leftPointer++;
        }
    }

    return result;
}

console.log("createSquaredSortedArray:", createSquaredSortedArray([-2, -1, 0, 2, 3]));



const createSquaredSortedArray_Alt = (numbers) => {
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;

    let result = new Array(numbers.length);
    let resultPointer = numbers.length - 1; // without using stack
    
    while (leftPointer <= rightPointer) {
        let leftValueSquare = numbers[leftPointer] * numbers[leftPointer];
        let rightValueSquare = numbers[rightPointer] * numbers[rightPointer];

        if(leftValueSquare > rightValueSquare){
            result[resultPointer] = leftValueSquare;
            leftPointer++;
        }
        else {
            result[resultPointer] = rightValueSquare;
            rightPointer --;
        }

        resultPointer--;    // change storage, left to right
    }
    return result;
}

console.log("createSquaredSortedArray:", createSquaredSortedArray([-2, -1, 0, 2, 3]));

/*
- why pointers didn't move together from left to right
    - cus since array is sorted, and contains +ve and -ve values, largest squared number can only come from the start/end elements
- why initialize pre-allocated size memory
    - so that largest element can be inserted to the end, thus sorting from smallest to largest

Since the numbers at both the ends can give us the largest square, could use two pointers starting at both the ends of the input array. 
At any step, whichever pointer gives us the bigger square we add it to the result array and move to the next number according to the pointer. 


Time complexity #
O(N) as we are iterating the input array only once.

Space complexity #
O(N) space used for the output array.
*/
