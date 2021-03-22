function runProgram(input) {
   
    input = input.trim().split("\r\n");
    //console.log(input)
    for(let i = 1; i<input.length ; i++){
        var res = smallest(input[i])
        console.log(res)
    }


    function smallest(num){
        var zero= 0;
        var rest = ""
        for(let i = 0; i<num.length; i++){
            if(Number(num[i]) !== 0){
                rest+= num[i] +""
            }else{
                zero ++
            }
        }
    
        rest = rest.split("")
        if(rest[0] !== "-"){
            rest.sort((a,b) => a-b)
        }
        else{
            rest.sort((a,b) =>b-a)
        }
      rest=   (rest.join(""))
      if(zero !== 0){
          while(zero){
              rest+=0
              zero--
          }
      }
      //rest = rest.split(",")
      return rest
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
       
