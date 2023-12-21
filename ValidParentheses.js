const isValid = (str) => {
    if (str.length % 2 !== 0) {
        return false;
    }
    const stack = [];
    const map = new Map([
        ["(", ")"], ["[", "]"], ["{", "}"]
    ]);
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            stack.push(map.get(str[i]));
        } else if (str[i] !== stack.pop()) {
            return false;
        }
    }
    return  stack.length === 0;
}

console.log("----", isValid("()"));
console.log(isValid("()[]{]"));