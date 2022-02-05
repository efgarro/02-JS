let interAlgos = {
    sumAll(arr) {
        arr.sort((a, b) => a - b);
        let sum = 0;
        for (let i = arr[0]; i <= arr[1]; i++) {
            sum += i;
        }
        console.log(sum);
        return sum;
    },

    diffArray(arr1, arr2) {
        let newArr = [
            ...arr1.filter((value) => !arr2.includes(value)),
            ...arr2.filter((value) => !arr1.includes(value)),
        ];
        console.log(newArr);
        return newArr;
    },

    destroyer(arr, ...args) {
        let newArr = arr.reduce((tempArr, value) => {
            if (!args.includes(value)) {
                tempArr.push(value);
                return tempArr;
            } else {
                return tempArr;
            }
        }, []);
        console.log(newArr);
        return newArr;
    },
    whatIsInAName(collection, source) {
        let arr = [];
        arr = collection.filter((obj) => {
            for (let keySource in source) {
                if (
                    !obj.hasOwnProperty(keySource) ||
                    obj[keySource] !== source[keySource]
                ) {
                    console.log("Falso");
                    return false;
                }
            }
            console.log("Verdadero");
            return true;
        });

        console.log(arr);
        // Only change code above this line
        return arr;
    },
    spinalCase(str) {
        let spineStr = str
            .split(/(?=[A-Z])|-| |_/)
            .join("-")
            .toLowerCase();
        console.log(spineStr);
        return spineStr;
    },
    translatePigLatin(str) {
        if ("aeiou".indexOf(str[0]) > -1) {
            let newStr = str.concat("way");
            console.log(newStr);
            return newStr;
        } else {
            let myRegex = /^([b-df-hj-np-tv-z])+/g;
            let result = str.match(myRegex).toString();
            let newStr = str.slice(result.length).concat(result).concat("ay");
            console.log(newStr);
            return newStr;
        }
    },
    myReplace(str, before, after) {
        if (before.charCodeAt(0) >= 65 && before.charCodeAt(0) <= 90) {
            after = after.charAt(0).toUpperCase() + after.slice(1);
        } else {
            newAfter = after.charAt(0).toLowerCase() + after.slice(1);
        }
        console.log(str.replace(before, newAfter));
        return str.replace(before, newAfter);
    },
    pairElement(str) {
        const pairs = [
            ["A", "T"],
            ["T", "A"],
            ["C", "G"],
            ["G", "C"],
        ];
        const pairArr = str.split("").reduce((prevArr, letter) => {
            switch (letter) {
                case "A":
                    prevArr.push(pairs[0]);
                    return prevArr;
                case "T":
                    prevArr.push(pairs[1]);
                    return prevArr;
                case "C":
                    prevArr.push(pairs[2]);
                    return prevArr;
                case "G":
                    prevArr.push(pairs[3]);
                    return prevArr;
            }
        }, []);
        console.log(pairArr);
        return pairArr;
    },
    fearNotLetter(str) {
        let charArr = str.split("").map((letter) => letter.charCodeAt(0));
        let range = {
            start: str.charCodeAt(0),
            end: str.charCodeAt(str.length - 1),
        };
        if (str.length !== range.end + 1 - range.start) {
            for (let i = range.start; i <= range.end; i++) {
                if (!charArr.includes(i)) {
                    charMissing = String.fromCharCode(i);
                }
            }
            console.log(charMissing);
            return charMissing;
        } else {
            return undefined;
        }
    },
    uniteUnique(...arr) {
        arr = arr.flat();
        console.log(arr);
        const arrUnique = arr.reduce((prevArr, num) => {
            if (!prevArr.includes(num)) {
                prevArr.push(num);
                return prevArr;
            } else {
                return prevArr;
            }
        }, []);
        console.log(arrUnique);
        return arrUnique;
    },
    convertHTML(str) {
        let entPair = [
            ["&", "&amp"],
            ["<", "&lt;"],
            [">", "&gt;"],
            ['"', "&quot;"],
            ["'", "&apos;"],
        ];
        for (let i = 0; i < entPair.length; i++) {
            if (str.includes(entPair[i][0])) {
                str = str.replace(entPair[i][0], entPair[i][1]);
            }
        }
        console.log(str);
        return str;
    },
    convertHTML2(str) {
        // Use Object Lookup to declare as many HTML entities as needed.
        const htmlEntities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;",
        };
        // Using a regex, replace characters with it's corresponding html entity

        str = str.replace(/([&<>\"'])/g, (match) => htmlEntities[match]);
        console.log(str);
        return str;
    },
    sumFibs(num) {
        let fiboNumArr = [1, 1];
        if (num === 1) {
            return 1;
        } else {
            let prev1 = fiboNumArr[0];
            let prev2 = fiboNumArr[1];
            let currFiboNum = 0;
            while (currFiboNum <= num) {
                currFiboNum = prev1 + prev2;
                fiboNumArr.push(currFiboNum);
                [prev1, prev2] = [prev2, currFiboNum];
                currFiboNum = prev1 + prev2;
            }
        }
        const sumOddFibo = fiboNumArr.reduce((sum, fiboNum) => {
            if (fiboNum % 2 !== 0) {
                sum += fiboNum;
                return sum;
            } else {
                return sum;
            }
        }, 0);
        console.log(sumOddFibo);
        return sumOddFibo;
    },
    isPrime(num) {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    },
    sumPrimes(num) {
        let arrPrime = [];
        for (let i = 2; i <= num; i++) {
            if (interAlgos.isPrime(i)) {
                arrPrime.push(i);
            }
        }
        console.log(arrPrime.reduce((a, b) => a + b));
        return num;
    },
    smallestCommons(arr) {
        arr.sort((a, b) => a - b);
        console.log(arr);
        const gcd = (a, b) => (b == 0 ? a : gcd(b, a % b));
        const lcm = (a, b) => (a / gcd(a, b)) * b;
        const lcmAll = (ns) => ns.reduce(lcm, 1);
        const rng = (lo, hi) => [...Array(hi - lo + 1)].map((_, i) => lo + i);

        const lcmRng = (lo, hi) => lcmAll(rng(lo, hi));

        console.log(lcmRng(...arr));
    },
    dropElements(arr, func) {
        let i = 0;
        while (i < arr.length && func(arr[i]) === false) {
            arr.shift();
        }
        console.log(arr);
        return arr;
    },
    steamrollArray(arr, i = 0) {
        while (i > -1) {
            i = arr.findIndex((element) => Array.isArray(element));
            if (i > -1) {
                arr.splice(i, 1, ...arr[i]);
            }
        }
        console.log(arr);
        return arr;
    },
    binaryAgent(binary) {
        binary = binary.split(" ");
        //convert from binary to decimals, then to characters.
        return binary
            .map((elem) => String.fromCharCode(parseInt(elem, 2)))
            .join("");
    },
    truthCheck(collection, pre) {
        let isTrueOrFalse = true;
        collection.forEach((obj) => {
            for (let key in obj) {
                if (!obj.hasOwnProperty(pre) || !obj[key]) {
                    isTrueOrFalse = false;
                }
            }
        });
        return isTrueOrFalse;
    },
    // function truthCheck(collection, pre) {
    //     // Is everyone being true?
    //     return collection.every(obj => obj[pre]);
    //   }
    addTogether(a) {
        function addAandB(b) {
            console.log(a, b);
            // console.log(arguments);
            console.log(a + b);
        }
        return addAandB;
    },
    orbitalPeriod(arr) {
        const GM = 398600.4418;
        const earthRadius = 6367.4447;
        arr.forEach((obj) => {
            // for (let key in obj) {
            obj.orbitalPeriod = Math.round(
                2 *
                    Math.PI *
                    Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM)
            );
            delete obj.avgAlt;
            // }
        });
        console.log(arr);
        return arr;
    },
}; // end of interAlgos {}

module.exports = interAlgos;
