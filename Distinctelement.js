

function runProgram(input) {
   
    input = input.trim().split("\n");
  
    var testCases = input[0]
    var pos = 1;
    for(var i = 0; i<testCases;i++){
        var arrlen = input[pos++].split(" ")[0]
        var arr = []
        for(let k = 0;k< arrlen;k++){
           arr.push((input[pos].trim().split(" ")))
            pos++

        }
      
        findDistinctElement(arr)
        //console.log(arr)
    }
    function findDistinctElement(arr){
        var obj = {}
        for(let i = 0; i<arr.length; i++){
            for(let j = 0; j<arr[0].length; j++){
                if(!obj[arr[j][i]]){
                    obj[arr[j][i]] = 1
                }
                else{
                    obj[arr[j][i]] += 1
                }
            }
        }
      
      console.log( Math.min(...Object.values(obj)))
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
       
