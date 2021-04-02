function runProgram(input) {
    input = input.trim().split("\r\n")


    for(let i = 1; i<input.length; i+=2){
        let len = input[i]
        let str = input[i+1].split("").map(Number)
        let num = false;
        let char = false

        for(let j = 0; j<len; j++){
           if(str[j] === 1 || str[j] === 2 || str[j] === 3 ||
            str[j] === 4 || str[j] === 5 || str[j] === 6 ||
            str[j] === 7 || str[j] === 8|| str[j] === 9
            || str[j] === 0
            ){
                num = true
            }else{
                char = true
            }

        }
        if(char && num){
            console.log("alphanumeric")
        }
        else if(char){
            console.log("chars")
        }
        else if(num){
            console.log("numbers")

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
      
      
      
    