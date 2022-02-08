function checkCashRegister(price, cash, cid) {
    const numMult = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    let numCoinsOrBills = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let changeArr = [
        ["PENNY", 0.0],
        ["NICKEL", 0.0],
        ["DIME", 0.0],
        ["QUARTER", 0.0],
        ["ONE", 0.0],
        ["FIVE", 0.0],
        ["TEN", 0.0],
        ["TWENTY", 0.0],
        ["ONE HUNDRED", 0.0],
    ];
    numCoinsOrBills = numCoinsOrBills.map((arrCorB, i) => {
        return Math.round(cid[i][1] / numMult[i]);
    });
    let changeOwed = (cash - price).toFixed(2);
    let temp = changeOwed;

    let sumCash = cid
        .reduce((sum, arrSub) => {
            sum += arrSub[1];
            return sum;
        }, 0)
        .toFixed(2);

    for (let i = 8; i >= 0; i--) {
        let numPar = Math.floor(changeOwed / numMult[i]);
        if (numPar !== 0) {
            changeArr[i][1] = Math.min(numPar * numMult[i], cid[i][1]);
            changeOwed -= changeArr[i][1];
        } else {
            changeArr[i][1] = 0;
        }
    }
    changeArr = changeArr.reduce((arr, arrSub) => {
        if (arrSub[1] !== 0) {
            arr.push(arrSub);
            return arr;
        } else {
            return arr;
        }
    }, []);

    // if ()
    console.log(numCoinsOrBills);
    console.log(cid);
    console.log(changeArr);
    console.log(`Cid sumCash ${sumCash}`);
    console.log(`Change Owed ${temp}`);
    console.log((cash - price).toFixed(2));
    if (sumCash > temp) {
        console.log("first");
        return { status: "OPEN", change: changeArr };
    } else if (sumCash === temp) {
        return { status: "CLOSED", change: changeArr };
    } else if (sumCash < temp) {
        console.log("inso");
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

console.log(
    checkCashRegister(3.26, 100, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
    ])
);

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

console.log(
    checkCashRegister(19.5, 20, [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
    ])
);
