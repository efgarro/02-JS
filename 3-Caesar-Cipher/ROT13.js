function rot13(str) {
    let alphaUC = [];
    for (let a = 65; a <= 90; a++) {
        alphaUC.push(String.fromCharCode(a));
    }
    const newArr = str.split("").reduce((prevArr, char) => {
        let indexOfChar = alphaUC.indexOf(char);
        if (indexOfChar !== -1) {
            if (indexOfChar - 13 >= 0) {
                prevArr.push(alphaUC[indexOfChar - 13]);
                return prevArr;
            } else {
                prevArr.push(alphaUC[indexOfChar - 13 + 26]);
                return prevArr;
            }
        } else {
            prevArr.push(char);
            return prevArr;
        }
    }, []);
    str = newArr.join("");
    console.log(str);
    return str;
}

rot13("SERR PBQR PNZC");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
