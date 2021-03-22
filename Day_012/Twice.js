function runProgram(input) {
   
    input = input.trim().split("\n");
    for(let i = 1; i<input.length; i+=2){
        var len = input[i]
        var arr = input[i+1].split(" ").map(Number)
        var obj = {}
        for(let k = 0; k<len; k++){
            if(!obj[arr[k]]){
                obj[arr[k]] = 1
            }
            else{
                obj[arr[k]] -= 1
            }
        }
      for(key in obj){
        if(  obj[key] === 1){
            console.log(key)
        }
      }
    }
    //console.log(input)
   

  
    
        
   
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
       
