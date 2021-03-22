function runProgram(input) {
   
    input = input.trim().split("\r\n");
   // console.log(input)
   for(let j = 1; j < input.length ; j+=2){
    
       let nums = input[j+1].split(" ").map(Number)

       let left = Array(nums.length);
    let right = Array(nums.length);
    let result = Array(nums.length);
    
    let product = 1;
    left[0] = 1;
    for(let i = 1; i < nums.length; i++) {
        product *= nums[i-1];
        left[i] = product;
    }
    
    product = 1;    
    right[nums.length - 1] = 1;
    result[nums.length - 1] = left[nums.length - 1];
    for(let i = nums.length - 2; i >= 0; i--) {
        product *= nums[i+1];
        right[i] = product;
        result[i] = left[i] * right[i];
    }
    
    console.log(result.join(" "))
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
       
