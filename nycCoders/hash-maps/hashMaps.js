//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]


// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.


// function that groups anagrams from an array of strings, strs.The function uses a Map to store the anagrams.For each string in the input array, it sorts the characters in the string and uses the sorted characters as a key in the Map.If the key doesn't already exist, a new empty array is added to the Map with that key. The original string is then added to the array stored in the Map under that key. Finally, the function returns an array of values from the Map, which are arrays of anagrams.

var groupAnagrams = function (strs) {
  let map = {};
  for (let s of strs) {
    let key = [...s].sort().join('');
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(s);
  }
  return Object.values(map);
};

/////////////////////////////////////////////////////////////////////////////////

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.



//   Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true


// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.



// The implementation uses two for loops.The first loop iterates through the characters in magazine and stores the frequency of each character in an object called magCount.The second loop iterates through the characters in ransomNote and checks if each character can be constructed from magazine by checking if the character exists in magCount and if its frequency is greater than 0. If either condition is not met, the function returns false.If all characters in ransomNote can be constructed from magazine, the function returns true.
var canConstruct = function (ransomNote, magazine) {
  let magCount = {};

  for (let char of magazine) {
    if (!(char in magCount)) {
      magCount[char] = 1;
    } else {
      magCount[char] += 1;
    }
  }

  for (let char of ransomNote) {
    if (!(char in magCount) || magCount[char] <= 0) {
      return false;
    }
    magCount[char] -= 1;
  }

  return true;
};