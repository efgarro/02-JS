function outside(x) {
    function inside(y) {
        console.log(`x is equal to ${x}`);
        return x + y;
    }
    return inside;
}

console.log(outside(3)(4));

addTogether = (a) => {
    function addAandB(n) {
        console.log(a, n);
        // console.log(arguments);
        console.log(a + n);
    }
    addAandB(b);
    // return addAandB;
};

addTogether(2)(3);

function addTogether(...arr) {
    console.log(arguments);
    console.log(arguments.length);
    console.log(typeof arguments[0]);
    console.log(arr);
    console.log(typeof arr);

    if (
        arr.length === 2 &&
        typeof arr[0] === "number" &&
        typeof arr[1] === "number"
    ) {
        let a = 0;
        let b = 0;
        [a, b] = [arr[0], arr[1]];
        console.log(a, b);
        return a + b;
    } else if (arr.length === 1 && typeof arr[0] === "number") {
        let a = arr[0];
        function addAandB(b) {
            console.log(b);
            if (typeof b === "number") {
                console.log("heren");
                return a + b;
            } else {
                return undefined;
            }
        }
        return addAandB;
    } else {
        return undefined;
    }
    // } else if (arguments.length === 2 && typeof(arguments[0]) === 'number' && typeof(arguments[1]) === 'number') {
    //   console.log('here')
    //   // a = arguments[0];
    //   // let b = arguments[1];
    //   return function addAandB (b) {
    //           console.log(a, b);
    //           console.log(a + b);
    //           return a + b;
    //       };
    // } else {
    //   return undefined;
    // }
}

addTogether(5)(7);

const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstAndLast;
    };
    this.getFirstName = () => {
      return firstAndLast.split(" ")[0];
    };
    this.getLastName = () => {
      return firstAndLast.split(" ")[1];
    }
    this.setFirstName = (first) => {
      firstAndLast = first + " " + firstAndLast.split(" ")[1]
    }
    this.setLastName = (last) => {
      firstAndLast = firstAndLast.split(" ")[0] + " " + last
    }
    this.setFullName = (newfirstAndLast) => {
      firstAndLast = newfirstAndLast;
    }
  
    return firstAndLast;
  };