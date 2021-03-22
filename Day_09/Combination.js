function runProgram(input) {
   
    input = input.trim().split("\r\n")

    for(let i = 1; i<input.length; i+=2){
        var len = input[i]
        var arr = input[i+1].split(" ").map(Number)
        var count = {}
        var start = {}
        var end = {}
        for(let k = 0; k<len;k++){
            if(!count[arr[k]]){
                count[arr[k]] = 1
            }
            else{
                count[arr[k]] 
                += 1
            }
            if(!start[arr[k]]){
                start[arr[k]] = k
            }
            if(!end[arr[k]]){
                end[arr[k]] = k
            }
            else{
                end[arr[k]] = k
            }
        }
        var max = Math.max(...Object.values(count))
       // console.log(max)
       var res = []

       for(key in count){
           if(count[key] === max){
               var diff = end[key] - start[key] + 1;
               res.push(diff)
           }
       }
       console.log(Math.min(...res))
        
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
       
