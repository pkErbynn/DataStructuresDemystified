/*
Problem Statement #
Given a string, find the length of the longest substring which has no repeating characters.

Example 1:

Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".
Example 2:

Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".
Example 3:

Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".


HINT #
This problem follows the Sliding Window pattern and we can use a similar dynamic sliding window strategy as discussed in Longest Substring with K Distinct Characters. 
We can use a HashMap to remember the last index of each character we have processed. 
Whenever we get a repeating character we will shrink our sliding window to ensure that we always have distinct characters in the sliding window

*/


function lengthOfLongestSubstringWithNoCharRepeat(str){
    let windowStartIndex = 0;
    let maxLength = 0;
    let charIndexMap = {};  // keeps track of the last index of each char

    for (let windowEndIndex = 0; windowEndIndex < str.length; windowEndIndex++) {
        const windowEndChar = str[windowEndIndex];

        // reset startIndex pointer to current duplicate char found, if next char is duplicate
        if(windowEndChar in charIndexMap){
            windowStartIndex = Math.max(windowStartIndex, charIndexMap[windowEndChar]  + 1); 
            // windowStartIndex = windowEndIndex;
        }

        // doesn't move/update 'windowStartIndex' since value becomes 0 at first
        // if(charIndexMap[endwindowEndChar]){
        //     windowStartIndex = Math.max(windowStartIndex, charIndexMap[endwindowEndChar]  + 1)
        // }

        charIndexMap[windowEndChar] = windowEndIndex;

        let currentWindowLength = (windowEndIndex - windowStartIndex) + 1;
        maxLength = Math.max(maxLength, currentWindowLength);
    }

    return {maxLength};
}

console.log(lengthOfLongestSubstringWithNoCharRepeat("aabccbb"));
console.log(lengthOfLongestSubstringWithNoCharRepeat("abbbb"));
console.log(lengthOfLongestSubstringWithNoCharRepeat("abccde"));
console.log(lengthOfLongestSubstringWithNoCharRepeat("aaaaaaaa"));
console.log(lengthOfLongestSubstringWithNoCharRepeat("abccdefhg"));
console.log(lengthOfLongestSubstringWithNoCharRepeat("uvwxyz"));
console.log(lengthOfLongestSubstringWithNoCharRepeat("z"));



/*

Time Complexity = o(n)
    where ‘n’ = number of characters in the input string.

Space Comp = o(k) = o(1)
    where 'k' = number of distinct chars stored in hashmap

    the whole string might not have any repeating character so the entire string will be added to the HashMap. 
    Having said that, since we can expect a fixed set of characters in the input string (e.g., 26 for English letters), 
    we can say that the algorithm runs in fixed space = O(1); 

*/