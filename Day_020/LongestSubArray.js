function runProgram(input) {
   
    input = input.trim().split("\r\n");
   // console.log(input)
    let tcases = input[0]
    for(let k = 1; k<input.length; k+=2){
        let arrLen = input[k]
        let arr = input[k+1].split(" ").map(Number)
        let min = 1;
      
        for (var i = 0; i < arr.length; i++) {
            for (var j = i; j < arr.length; j++) {
                var subArray = (arr.slice(i, j + 1));
              var len = countLength(subArray)
              if(len > min){
                  min = len
              }
            
            }
        }
        console.log(min)
  //   console.log(subArrays)
      
    
    }

    function countLength(arr){
        //console.log(arr,"INSIDe")
        // /console.log(arr)
        let count = 1;
        for(let i = 0; i<arr.length  -1;i++){
      //  console.log(arr, arr[i],arr[i+1],"INSIDE")
            if(arr[i] > arr[i+1]){
                count+=1
            }
            else{
              break;
            }
        }
        if(arr[arr.length - 1] < arr[arr.length - 2]){
            count ++
        }
        return count
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
       
