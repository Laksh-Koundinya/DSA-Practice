function runProgram(input) {
   
    input = input.trim().split("\n");
   // console.log(input)
   let ans = -1
   let [len,key] = input[0].split(" ").map(Number)
   let arr = input[1].split(" ").map(Number)
   let lo = 0;
   let hi = len - 1;
   while(lo <= hi){
       var mid = Math.floor( (lo+hi) / 2)
       if(arr[mid] === key){
           ans = mid
           break;
       }
       else if((arr[lo] <= key && key < arr[mid]) ||
       (arr[lo] > arr[mid] && (arr[lo] <= key || key < arr[mid]))){
           hi = mid - 1
       }
       else{
           lo = mid + 1
       }
   }
   console.log(ans)
  
    
        
   
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
       
