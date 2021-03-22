function runProgram(input) {
   
    input = input.trim().split("\r\n");
   // console.log(input)

   for(var i = 1; i<input.length; i+= 4){
        var obj = {}
     
       var firstArr = input[i+1].split(" ").map(Number)
       var secondArr = input[i+3].split(" ").map(Number)
       for(let k = 0; k<firstArr.length; k++){
           if(!obj[firstArr[k]]){
            obj[firstArr[k]] = 1
           }
           else{
            obj[firstArr[k]] +=1
           }
       }
       for(let k = 0; k<secondArr.length; k++){
        if(!obj[secondArr[k]]){
         obj[secondArr[k]] = 1
        }
        else{
         obj[secondArr[k]] +=1
        }
    }
  let res = Object.keys(obj).map(Number).sort((a, b) => a-b)
  console.log(res.join(" "))

    
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
     
