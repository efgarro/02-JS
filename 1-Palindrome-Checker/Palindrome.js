function palindrome(str) {
    let strArr = escapeRegExp(str);
    let numIter = Math.floor(strArr.length / 2);
    let strArrLen = strArr.length;
    for (let i = 0; i < numIter; i++) {
        if (strArr[i] !== strArr[strArrLen - 1 - i]) {
            console.log("false");
            return false;
        }
    }
    console.log("true");
    return true;
}

palindrome("eye");

function escapeRegExp(text) {
    return text
        .replace(/[-[\]{}_:\/()*+?.,\\^$|#\s]/g, "")
        .toLowerCase()
        .split("");
}

// palindrome("0_0 (: /- :) 0-0");
// palindrome("My age is 0, 0 si ega ym.");
// palindrome("A man, a plan, a canal. Panama");
palindrome("five|_/|four");
palindrome("not a palindrom");
