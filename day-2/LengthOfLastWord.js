const lengthOfLastWord = (str) => {
    const strArr = str.trim(" ");
    const trimArr = strArr.split(" ")
    return trimArr[trimArr.length - 1].length;
}

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));