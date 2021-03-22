function runProgram(input) {
   
    input = input.trim()
    var n = input
    const arr = []
    //console.log(input)
    const obj = {}
    for(let i = 1; i<=n;i++){
        arr.push(i)
    }
   
   
    function generatecombinations(comb, start) {
        let key = comb.sort((a,b)=>a-b)
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
       
