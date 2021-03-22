function runProgram(input) {
   
    input = input.trim().split("\r\n");
   // console.log(input)
   var len = input[0]
   var unsorted = input[1].split(" ").map(Number)
   var arr = input[1].split(" ").map(Number).sort((a,b)=>a-b)


  // console.log(unsorted,arr)
  var firstUnmatch = -1;
  var lastUnmatch = -1;
  
    for(let i = 0 ; i<len; i++ ){
        if(arr[i] !== unsorted[i]){
            firstUnmatch = i;
            break;
        }
    }
    for(let i = len - 1 ; i >= 0; i-- ){
        if(arr[i] !== unsorted[i]){
           lastUnmatch = i;
            break;
        }
    }  
  // console.log(lastUnmatch,firstUnmatch)
  var possible = true;
    for(var i = firstUnmatch; i<lastUnmatch - 1; i++){
        if(unsorted[i] < unsorted[i+1]){
            possible = false;
            break;
        }
    }
    //console.log(possible)
    possible ? console.log("YES" ): console.log("NO")

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
       
