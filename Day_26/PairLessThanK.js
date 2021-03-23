function runProgram(input) {
   
    input = input.trim().split("\r\n");
    for(let i = 1; i<input.length; i+=3){
        let N = input[i]
        let arr = input[i+1].split(" ").map(Number)
        let K = input[i+2]
        //console.log(N,K)
        let count = 0

        for(let k = 0; k<N; k++){
            for(let j = i+1; j<N; j++){
                let sum = Number(arr[k] + arr[j])
                if(sum < K){
                    count ++
                }

            }
        }
        count === 0? console.log(-1): console.log(count)
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
      
      
      
    