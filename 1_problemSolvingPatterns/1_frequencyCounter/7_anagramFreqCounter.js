// using Frequency Counter Pattern
// Improve solution with reduced sibling loops...from 3 loops to 2
// ...creating object for just one string, instead of two, reducing space complexity


function anagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    let frequencyCounterStr1 = {};

    for(let value of str1){
        frequencyCounterStr1[value] ? 
            frequencyCounterStr1[value] += 1 :  // frequencyCounterStr1[value] = frequencyCounterStr1[value] + 1 : 
            frequencyCounterStr1[value] = 1; 
    }

    // loop through second array and search for keys in first array's object, frequencyCounterStr1
    for(let letter of str2){
        if(!frequencyCounterStr1[letter]){
            return false;
        } 
        else{
            frequencyCounterStr1[letter] -= 1;
        }
    }

    console.log(frequencyCounterStr1);
    
    // since there are many checks to fail, I go through the failure checks, if passes then it's true
    return true;
}

console.log(anagram('anagram', 'nagaram'));
console.log(anagram('rat', 'car'));
console.log(anagram('see', 'ees'));
console.log(anagram('seee', 'eess'));
// console.log(anagram('awesome', 'awesom'));
// console.log(anagram('qwerty', 'qeywrt'));
// console.log(anagram('seee', 'eess'));
// console.log(anagram('cinema', 'iceman'));


// Time Complexity = O(n)


// NB: 
// - Frequency Counter has a lot of instances where the arrays/strings are not same/equivalent (based on condition)
// - That's why the inner loops checks for falsy statement
// - And the outer loop checks for truthy return