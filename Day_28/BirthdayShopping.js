function runProgram(input) {
   
    input = input.trim()
    let [n,c] = input.split(" ").map(Number)
    let arr = []
    for(let i = 1; i<= n; i++){
        arr.push(i)
    }
    const res = []
    res.length = c 
    generateCombinations(0,c)
    
    function generateCombinations(start,comb){
        if(comb === 0){
            console.log(res.join(" "))
        }
        else{
            for(let i = start; i<=arr.length - comb; i++){
                res[res.length - comb] = arr[i];
                generateCombinations(i+1,comb-1)
            }
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
      
      
      
    