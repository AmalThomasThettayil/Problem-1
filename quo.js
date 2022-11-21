let limit = prompt("enter number of testcases")

for (let i = 0; i < limit; i++) {
    let string = prompt("enter a number")
    function checkPali(string) {

        let stringRev = string.split("").reverse().join("")
        console.log(stringRev);

        if (string === stringRev) {
            console.log("wins");
        } else {
            console.log("loses");
        }
    }
    checkPali(string);
}

