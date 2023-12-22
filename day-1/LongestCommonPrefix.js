const longestCommonPrefix = (strs) => {
    let lcp = "";
    if (strs.length === 0 || strs === null) {
        return lcp;
    } 
    let minLength = strs[0].length;
    for (let i = 0; i < strs.length; i++) {
        minLength = Math.min(strs[i].length, minLength);
    }
    for (let i = 0; i < minLength; i++) {
        let current = strs[0][i];
        for (let j = 0; j < strs.length; j++) {
            if (current !== strs[j][i]) {
                return lcp;
            }
        }
        lcp = lcp + current; 
    }
    return lcp;
}

const strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));