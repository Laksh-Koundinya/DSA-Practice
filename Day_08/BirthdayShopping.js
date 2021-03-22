function runProgram(input) {
   
    input = input.trim()
    var [n,k] = input.split(" ")
    var arr = []
   // console.log(input)
   for(var i = 1; i<=n;i++){
       arr.push(i)
   }
   const res = []
   res.length = k

   function generateCombinations(arr,len,index){
    if(len === 0){
       console.log(res.join(" "))
    }
    else{
        for(var i = index ; i<=arr.length - len; i++){
            res[res.length - len] = arr[i];
            generateCombinations(arr,len-1,i+1)
        }
    }
}
generateCombinations(arr,k,0)
  
   
        
   
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
       
