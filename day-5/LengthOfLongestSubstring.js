const lengthOfLongestSubstring = (string) => {
   let current_string = "", max = 0, char, pos;
   for(let i = 0; i < string.length; i++) {
    char = string.charAt(i);
    pos = current_string.indexOf(char);
    if (pos !== -1) {
        current_string = current_string.substring(pos+1);
    }
    current_string += char;
    max = Math.max(current_string.length, max);
   }
   return max;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring("c"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("dvdf"));