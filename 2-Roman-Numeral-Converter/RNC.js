function convertToRoman(num) {
    const RM = {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        10: "X",
        20: "XX",
        30: "XXX",
        40: "XL",
        60: "LX",
        80: "LXXX",
        90: "XC",
        400: "CD",
        500: "D",
        600: "DC",
        700: "DCC",
        800: "DCCC",
        900: "CM",
        1000: "M",
        2000: "MM",
        3000: "MMM",
    };
    const numWhole = [0, 0, 0, 0];
    const numMult = [1000, 100, 10, 1];

    let RNStr = "";
    for (let i = 0; i <= 3; i++) {
        let numPar = Math.floor(num / numMult[i]);
        if (numPar !== 0) {
            numWhole[i] = numPar * numMult[i];
            num -= numWhole[i];
        } else {
            numWhole[i] = 0;
        }
    }
    console.log(numWhole);
    RNStr = numWhole.reduce((rnStr, numKey) => {
        if (numKey !== 0) {
            rnStr = rnStr.concat(RM[numKey]);
            return rnStr;
        } else {
            return rnStr;
        }
    }, "");

    console.log(RNStr);
    return RNStr;

    // if (num >= 1000 && num < 10000) {
    //     const numForM = num;
    //     const numM = Math.floor(numForM / 1000) * 1000;
    //     RNStr = RNStr.concat(RM[numM]);

    //     const numForC = numForM - numM;
    //     console.log(RM[numM]);
    // }
    // const numForM = num;
    // const numM = Math.floor(numForM / 1000) * 1000;
    // const numForC = numForM - numM;
    // console.log(RM[numM]);
    // RNStr = RNStr.concat(RM[numM]);
    // const numC = Math.floor(numForC / 100) * 100;
    // const numForX = numForC - numC;
    // console.log(RM[numC]);
    // RNStr = RNStr.concat(RM[numC]);
    // const numX = Math.floor(numForX / 10) * 10;
    // const numForI = numForX - numX;
    // console.log(numX);
    // console.log(RM[numX]);
    // RNStr = RNStr.concat(RM[numX]);
    // const numI = Math.floor(numForI / 1) * 1;
    // console.log(RM[numI]);
    // RNStr = RNStr.concat(RM[numI]);
    // console.log(RNStr);
    // return num;
}

convertToRoman(1006); // should return the string DCXLIX
// convertToRoman(3448);
