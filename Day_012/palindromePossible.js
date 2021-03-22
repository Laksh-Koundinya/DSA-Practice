function runProgram(input) {
   
    input = input.trim().split("\n");
    //console.log(input)
    for(var i = 1; i<input.length; i+=2){
        var strLen = input[i];
        var str = input[i+1];
        //console.log(str,strLen)
        var obj = {}
        for(let j = 0; j<strLen; j++){
            if(!obj[str[j]]){
                obj[str[j]] = 1
            }
            else{
                obj[str[j]] += 1
            }
        }
        //console.log(obj)
        var count = 0;
        for (keys in obj){
            if(Number(obj[keys]) % 2 !== 0){
                count += 1
            }
        }
        if(count > 1){
            console.log("No")
        }
        else{
            console.log("Yes")
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
       
