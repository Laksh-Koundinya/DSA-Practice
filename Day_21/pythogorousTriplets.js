function runProgram(input) {
   
    input = input.trim().split("\n");
    let arr = input[1].split(" ").map(Number)
    var flag = false
    checkTriplets(arr)
   


    function checkTriplets(arr){
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                for (let k = j + 1; k < arr.length; k++) {
                    // Calculate square of array elements
                    let x = arr[i] * arr[i];
                    let y = arr[j] * arr[j];
                    let z = arr[k] * arr[k];
     
                    if (x == y + z || y == x + z || z == x + y){
                        flag = true
                        let res = []
                      res.push(x,y,z)
                      res.sort((a,b)=>a-b)
                      console.log(res.join(" "))

                    }
                   
                       
                }
            }
        }
        if(flag === false){
            console.log(-1)
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
      
      
      
    