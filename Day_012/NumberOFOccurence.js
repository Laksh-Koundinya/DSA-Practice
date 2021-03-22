function runProgram(input) {
   
    input = input.trim().split("\n");
    var [len,target] = input[0].split(" ").map(Number)
    console.log(input)
    var arr = input[1].split(" ").map(Number)
    var count = 0;
   var res =  findOccurence(0,len -1)
   console.log(res)

    function findOccurence(lo,hi){
       if(lo > hi){
           return 0
       }
       else{
        var mid = Math.floor((lo+hi)/2);
        if(arr[mid] === target){
           
            return findOccurence(mid+1,hi) + findOccurence(lo,mid-1) + 1
            
        }
        else if(arr[mid] < target){
            return findOccurence(mid+1,hi)
        }
        else{
          return findOccurence(lo,mid-1)

        }
       }
          
        
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
       
