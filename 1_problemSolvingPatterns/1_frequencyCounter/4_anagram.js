// Givem two strings, write a function to determine if the second string is an anagram of the first.
// Eg: 'cinema', formed from 'iceman'


// using Brute-Force approach

function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    for(let value of str1){
        if(!str2.includes(value)){
            return false;
        }

        // let valueIndex = str2.indexOf(value); // or this
        // if(valueIndex < 0){
        //     return false;
        // }

        str2 = str2.replace(value, '');
        // console.log(str2);
    }

    return true;
}

console.log(validAnagram('see', 'ees'));
console.log(validAnagram('seee', 'eess'));
console.log(validAnagram('cinema', 'iceman'));
// console.log(validAnagram('', ''));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));


// Time Complexity = O(n^2)