function runProgram(input) {
   
    input = input.trim().split("\r\n");
   // console.log(input)
   for(var i = 1; i<input.length; i+=2){
       var arrLength = input[i];
       var arr = input[i+1].split(" ").map(Number)
      var ans = findIndex(arr)
      console.log(ans)

   }
   function findIndex(arr){
    let left = 0, right = arr.length-1, mid;
    
    while(left < right) {
        mid = Math.floor((right+left)/2);
        if(arr[mid] > arr[mid+1]){
            right = mid;
        } 
        else{
            left = mid+1;
        } 
    }
    return arr[left];
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
       
