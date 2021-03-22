function runProgram(input) {
   
    input = input.trim().split("\n");
    let [len,x,y] = input[0].split(" ").map(Number)
    let arr = input[1].split(' ').map(Number)
    let count = 0


    for(let i = 0; i<len; i++){
        if(arr[i]>= x && arr[i] <= y){
            count++
        }
    }
    console.log(count)
  
   
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
       
     
       