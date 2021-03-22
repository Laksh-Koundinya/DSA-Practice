function runProgram(input) {
   
    input = input.trim().split("\r\n");
    //console.log(input)

    for(var i = 1; i<input.length; i+=2){
        var len = input[i];
        var students = input[i+1].split(" ").map(Number)
        
        var candies = Number(len);
       // console.log(len, candies)

        for(let i = 1; i<len-1; i++){
           // console.log("STUDENTS",students[i],students[len])
            if(students[i] > students[i+1]){
                candies += 1;
            }
            if(students[i-1] <students[i]){
                candies += 1;
            }
            if(students[0] > students[1]){
                candies += 1;
            }
            if(students[len-1] > students[len -2]){
                candies += 1;
            }
        }
        console.log(candies)

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
       
