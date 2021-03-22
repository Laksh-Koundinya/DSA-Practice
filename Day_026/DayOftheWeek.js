function runProgram(input) {
    
    input = input.trim().split("\n");
    var day = input[0].trim()
    var nextdays =Number( input[1]) % 7
    console.log(nextdays)
let weekdays = {
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday",
    4:"Thursday",
    5:"Friday",
    6:"Saturday",
    7:"Sunday"
}
let point

for(keys in weekdays){
    if(weekdays[keys] === day){
        //console.log(keys)
        point = Number(keys)
    }
}
point += Number(nextdays)
console.log(weekdays[point])
    
        

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
    
    
    
    