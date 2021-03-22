function runProgram(input) {
   
    input = input.trim().split("\n");
    //console.log(input)
    var len = input[0]
    var inpuarr = input[1].split(" ").map(Number)
    var flag = false
    var sortarr = input[1].split(" ").map(Number).sort((a,b)=>a-b)
   // console.log(sortarr ,inpuarr)

    for(let i = 0; i<len; i++){
        if(inpuarr.join("") === sortarr.join("")){
            flag = false;
            break;
        }
       
       
        sortarr.unshift(sortarr.pop())
       // console.log(sortarr)
        var ressort = sortarr.join("")
        if(ressort === inpuarr.join("")){
            flag = true;
            break
        }
    }
    flag ? console.log("YES") : console.log("NO")
  
    
        
   
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
      
      
      
    