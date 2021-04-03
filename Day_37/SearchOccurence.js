function runProgram(input) {
   
    input = input.trim().split("\r\n");
    let [len, key] = input[0].split(" ").map(Number);
    let arr = input[1].split(" ").map(Number)
    let ans = -1;
    let lo = 0;
    let hi = len - 1
   let startIndex = returnPoint()
   console.log(startIndex)


    function returnPoint(){
        while(lo <= hi){
            let mid = Math.floor( (lo+hi) / 2)


            if(arr[mid] === key){
               ans = mid;
               hi = mid 
            }
            else if(arr[mid] > key){
                hi = mid - 1
            }
            else{
                lo = mid + 1
            }
        }
        return ans
        
    }
    let count = 0
    while(arr[startIndex] === key){
        count += 1
    startIndex += 1 
    }
    console.log(count)
  
    
        
   
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
      
      
      
    