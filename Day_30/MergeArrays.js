function runProgram(input) {
   
    input = input.trim().split("\r\n");
    let arrOne = input[1].split(" ").map(Number)
    let arrTwo = input[2].split(" ").map(Number)
    let i = 0, j= 0
    let res = []

    while(i < arrOne.length && j <arrTwo.length){
        if(arrOne[i] < arrTwo[j]){
            res.push(arrOne[i])
            i++
        }
        else{
            res.push(arrTwo[j])
            j++
        }
    }
  
    while(j < arrTwo.length){
        res.push(arrTwo[j])
        j++
    }
    while(i < arrOne.length){
        res.push(arrOne[i])
        i++
    }
    console.log(res.join(" "))
    
        
   
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
      
      
      
    