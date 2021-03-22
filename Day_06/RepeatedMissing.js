function runProgram(input) {
   
    input = input.trim().split("\r\n");
    //console.log(input)
    for(let i = 1; i<input.length; i+= 2){
        var n = input[i]
        var arr = input[i+1].split(" ").map(Number)
       // console.log(n,arr)
     //  console.log("Loop Number",i,obj)
       var obj = {}
       for(let k = 1; k<=n;k++){
           if(!obj[k]){
               obj[k] = 1
           }}
         //  console.log(obj)
    for(let j = 0; j<n;j++){
        if(obj[arr[j]]){
            obj[arr[j]] += 1
        }
    }
  //  console.log(obj)
   // obj = {}
   var missing
   var repeated 
   for(var key in obj){
      // console.log(key)
       if(obj[key] === 3){
            repeated = key
       }
       if(obj[key]=== 1){
           missing = key
       }
   }
   console.log(missing,repeated)


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
       
