function runProgram(input) {
   
    input = input.trim().split("\r\n").map(Number)
    for(let i = 1; i<input.length; i+=1){
        let res = checkHack(Number(1),input[i])
        res ? console.log("Yes" ) : console.log("No")
    }

    function checkHack(balance,n){
       
        if(balance === n){
            return true
        }
        if(balance>n){
            return false
        }
        else{
            return checkHack(balance*10,n) || checkHack(balance*20,n)
    }
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
      
      
      
    