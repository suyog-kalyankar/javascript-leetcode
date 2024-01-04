let zigzagConversion = (inputString, targetRows) => {
    if (targetRows == 1) {
        return inputString;
    }

    let currentRow = 1;
    let headingDown = true;
    let zigzagArr = [];
    for (let i = 0; i < targetRows; i++){
        zigzagArr[i] = [];
    }

    for (let i = 0; i < inputString.length; i++){
        zigzagArr[currentRow-1].push(inputString[i]);
        if (headingDown) {
            currentRow++;
            if (currentRow > targetRows) {
                currentRow = targetRows - 1;
                headingDown = false;
            }
        } else {
            currentRow--;
            if (currentRow < 1) {
                currentRow = 2;
                headingDown = true;
            }
        }
    }

    let totalString = "";
    for (let i = 0; i < targetRows; i++) {
        totalString += zigzagArr[i].join("");
    }
    return totalString;
}

console.log(zigzagConversion("PAYPALISHIRING", 3));