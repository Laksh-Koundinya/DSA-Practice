
  function runProgram(input) {
   
    input = input.trim().split("\r\n");

    let matrix = []
    for(let i = 1; i< input.length; i++){
        matrix[i-1] = input[i].split(" ").map(Number)
    }
  //  console.log(matrix)
    let startRow = 0;
    let startCol = 0;
  
    let ans = [];
    let endCol = matrix[0].length - 1;
    let endRow = matrix.length - 1;
  
    while (startRow <= endRow && startCol <= endCol) {
      for (let i = startCol; i <= endCol; i++) {
        ans.push(matrix[startRow][i]);
      }
  
      startRow++;
  
      for (let i = startRow; i <= endRow; i++) {
        ans.push(matrix[i][endCol]);
      }
      endCol--;
  
      if (startRow <= endRow) {
        for (let i = endCol; i >= startCol; i--) {
          ans.push(matrix[endRow][i]);
        }
        endRow--;
      }
  
      if (startCol <= endCol) {
        for (let i = endRow; i >= startRow; i--) {
          ans.push(matrix[i][startCol]);
        }
        startCol++;
      }
    }
    console.log(ans.join(" "))
  
    
        
   
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
       
