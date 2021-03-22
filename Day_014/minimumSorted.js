function runProgram(input) {
   
    input = input.trim().split("\r\n");
    var len = input[0]
    var arr = input[1].split(" ").map(Number)
    var ans = checkMininimum(arr)
console.log(ans)
    function checkMininimum(arr){
    var lo = 0
    var hi = arr.length - 1
        while(lo < hi){
            var mid = Math.floor( (lo+hi)/2)
            if(arr[mid] > arr[hi]){
                lo = mid +1
            }else{
                hi = mid
            }

        }
       
        return arr[lo]
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
       
