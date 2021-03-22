function runProgram(input) {
input = input.split("\r\n")
let arrLen = input[0]
let arr = input[1].split(" ").map(Number)
var res = findMinimum()
console.log(res)


function findMinimum(){
    var lo = 0
    var hi = arr.length - 1
    while(lo < hi){
        var mid = Math.floor( (lo+hi)/2)
        if(arr[mid] > arr[hi]){
            lo = mid + 1
        }else{
            hi = mid - 1 
        }

    }
    return arr[lo]
}
    
        

    }
    if (process.env.USERNAME === "wjioi") {
        runProgram(`
        8
        39 27 11 4 24 32 32 1`);
    } else {
        process.stdin.resume();
        process.stdin.setEncoding("ascii");
        let read = "";
        process.stdin.on("data", function (input) {
            read += input;
        });
        process.stdin.on("end", function () {
            read = read.replace(/\n$/, "");
            read = read.replace(/\n$/, "");
            runProgram(read);
        });
        process.on("SIGINT", function () {
            read = read.replace(/\n$/, "");
            runProgram(read);
            process.exit(0);
        });
    }
    
    
    
    