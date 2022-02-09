function checkCashRegister(price, cash, cid) {
    const numMult = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
    const price100 = price * 100;
    const cash100 = cash * 100;
    const cid100 = cid.reduce((arrPrev, arrCurr) => {
        arrCurr[1] = Math.round(arrCurr[1] * 100);
        arrPrev.push(arrCurr);
        return arrPrev;
    }, []);
    let numPennies = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let changeArr100 = [
        ["PENNY", 0],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
    ];
    numPennies = numPennies.map((arrCorB, i) => {
        return cid100[i][1] / numMult[i];
    });
    let changeOwed = cash100 - price100;
    let sumOwed = cash100 - price100;

    let registerCash = cid100.reduce((sum, arrSub) => {
        sum += arrSub[1];
        return sum;
    }, 0);

    for (let i = 8; i >= 0; i--) {
        let numPar = Math.floor(changeOwed / numMult[i]);
        if (numPar !== 0) {
            changeArr100[i][1] = Math.min(numPar * numMult[i], cid100[i][1]);
            changeOwed -= changeArr100[i][1];
        } else {
            changeArr100[i][1] = 0;
        }
    }

    let changeArrSum = changeArr100.reduce((sum, arrSub) => {
        sum += arrSub[1];
        return sum;
    }, 0);
    let changeArr = changeArr100.reduce((arrPrev, arrCurr) => {
        arrCurr[1] = arrCurr[1] / 100;
        arrPrev.push(arrCurr);
        return arrPrev;
    }, []);

    // if ()
    // console.log(numPennies);
    console.log(cid100);
    console.log(changeArr100);
    console.log(changeArrSum);
    console.log(changeArr);
    // console.log(`Register Cash ${registerCash}`);
    console.log(`Change Owed ${sumOwed}`);
    if (registerCash > sumOwed && changeArrSum === sumOwed) {
        changeArr = changeArr
            .reduce((arr, arrSub) => {
                if (arrSub[1] !== 0) {
                    arr.push(arrSub);
                    return arr;
                } else {
                    return arr;
                }
            }, [])
            .reverse();
        return { status: "OPEN", change: changeArr };
    } else if (registerCash === sumOwed) {
        changeArr = changeArr.reduce((arr, arrSub) => {
            arr.push(arrSub);
            return arr;
        }, []);
        return { status: "CLOSED", change: changeArr };
    } else if (registerCash < sumOwed || changeArrSum !== sumOwed) {
        console.log("Inso");
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
} // end of checkCashRegister()

// console.log(
//     checkCashRegister(10.0, 345.41, [
//         ["PENNY", 1.01],
//         ["NICKEL", 2.05],
//         ["DIME", 3.1],
//         ["QUARTER", 4.25],
//         ["ONE", 90],
//         ["FIVE", 55],
//         ["TEN", 20],
//         ["TWENTY", 60],
//         ["ONE HUNDRED", 100],
//     ])
// );

// console.log(
//     checkCashRegister(3.26, 100, [
//         ["PENNY", 1.01],
//         ["NICKEL", 2.05],
//         ["DIME", 3.1],
//         ["QUARTER", 4.25],
//         ["ONE", 90],
//         ["FIVE", 55],
//         ["TEN", 20],
//         ["TWENTY", 60],
//         ["ONE HUNDRED", 100],
//     ])
// );

console.log(
    checkCashRegister(19.5, 20, [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 1],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
    ])
);
