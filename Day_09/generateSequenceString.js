function runProgram(input) {
   
    input = input.trim().split("\r\n")
    var n = input[0]
    const arr =input[1]
    //console.log(input)
    const obj = {}
    
   
   
    function generatecombinations(comb, start) {
        let key = comb.sort().toString()
        if(!obj[key]) {
            console.log( comb.join(" "))
           
            obj[key] = true
        }
        for(let i=start;i<arr.length;i++) {
            generatecombinations([...comb, arr[i]], i+1);

        }
    }
    
    generatecombinations([], 0);
  
    
        
   
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
       
