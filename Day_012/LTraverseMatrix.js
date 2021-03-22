function runProgram(input) {
   
    input = input.trim().split("\n");
    var testcases = input[0]
    var pos = 1
    for(let i = 0; i<testcases; i++){
        var [row,col] = input[pos++].split(" ").map(Number)
        var limit = pos+ row
        var matrix = []
        for(let k = pos; k < limit ; k++){
            matrix.push(input[k].split(" ").map(Number))
            pos++
        }
     //pos++
        //console.log(matrix)
        traverseArray(matrix)
        matrix = []
    }
    function traverseArray(matrix){
      var r = matrix.length;
      var c = matrix[0].length;
      var ans = ""
      for (let j = 0; j<c; j++){
        for(let i = 0; i<r-j;i++){
           ans += (matrix[i][j]  +" ")
        }
            
        for(let k = j+1; k < c; k++){
        ans += (matrix[r - 1 - j][k] + " ")
        }
      }
      console.log(ans.trim())
  
     
        
  
    
    }
    //console.log(input)
   

  
    
        
   
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
       
