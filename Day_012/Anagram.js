function runProgram(input) {
   
    input = input.trim().split("\n");
    //console.log(input)
    var stringone = input[0].split(" ").join("")
    var stringtwo = input[1].split(" ").join("")
    //console.log(stringtwo)
    var obj = {} 
    for(var i = 0; i<stringone.length; i++ ){
        if(!obj [stringone[i]]){
            obj[stringone[i]] = 1
        }
        else{
            obj[stringone[i]] += 1
        }
    }
    for(let i = 0; i<stringtwo.length; i++ ){
        if(!obj [stringtwo[i]]){
            obj[stringtwo[i]] = 1
        }
        else{
            obj[stringtwo[i]] -= 1
        }
    }
    //console.log(obj)
   var max = Math.max( ...Object.values(obj))
   //console.log(max)
   if(max === 0){
       console.log("True")
   }
   else{
       console.log("False")
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
       
