function telephoneCheck(str) {
    let condition1 = /^\061*\s*\d{3}([-\/\.\s])*\d{3}\1\d{4}$/;
    let condition2 = /^\061*\s*(\(\d{3}\))\s*\d{3}[-\/\.]\d{4}$/;
    if (condition1.test(str) === true) {
        // console.log("C1");
        return true;
    } else if (condition2.test(str) === true) {
        // console.log("C2");
        return true;
    } else {
        // console.log("F");
        return false;
    }

    //return true;
}

telephoneCheck("555-555-5555");
telephoneCheck("1(234) 555-4545");
