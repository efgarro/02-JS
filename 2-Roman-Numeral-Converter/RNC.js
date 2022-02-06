function convertToRoman(num) {
    const RM = {
        3000: "MMM",
        400: "CD",
        40: "XL",
        8: "VIII",
    };
    let RNStr = "";
    if (num >=1000 && num < 10000) {
        
    }
    const numForM = num;
    const numM = Math.floor(numForM / 1000) * 1000;
    const numForC = numForM - numM;
    console.log(RM[numM]);
    RNStr = RNStr.concat(RM[numM]);
    const numC = Math.floor(numForC / 100) * 100;
    const numForX = numForC - numC;
    console.log(RM[numC]);
    RNStr = RNStr.concat(RM[numC]);
    const numX = Math.floor(numForX / 10) * 10;
    const numForI = numForX - numX;
    console.log(numX);
    console.log(RM[numX]);
    RNStr = RNStr.concat(RM[numX]);
    const numI = Math.floor(numForI / 1) * 1;
    console.log(RM[numI]);
    RNStr = RNStr.concat(RM[numI]);
    console.log(RNStr);
    return num;
}

convertToRoman(48);
