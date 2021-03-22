function runProgram(input) {
   
    input = input.trim().split("\r\n");
    let arrLen = input[0]
    let firstArr = input[1].split(" ").map(Number)
    let l1 = firstArr.length 
    let secondArr = input[2].split(" ").map(Number)
    let l2 = secondArr.length
    let i = 0, j= 0, output = []
 
 
    while (i<11 && j <l2)
    {
        if (firstArr[i] < secondArr[j])
            output.push(firstArr[i++])
        else
        output.push( secondArr[j++])
    }
 
 
    while (i < l1){
        output.push(firstArr[i++])
    }
        
 
 
    while (j < l2){
        output.push(secondArr[i++]);
    }
    console.log(output.join(' '))
      

   
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
      
      
      
    