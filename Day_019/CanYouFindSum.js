function runProgram(input) {
   
    input = input.trim().split("\r\n");
    var arrLen = input[0]
    var arr = input[1].split(" ").map(Number)
    let x = []
    let y = []
    let ans = []
    let xstack = []
    let xindex = []
    let ystack = []
    let yindex = []

    for(let i = 0; i< arrLen; i++){
       // console.log(xstack,xindex)
      if(i === 0){
          x.push(-1)
          
      }else{
         // console.log(xstack[xstack.length - 1], arr[i],xindex)
        while(xstack.length && xstack[xstack.length - 1] <= arr[i]){

            xstack.pop()
            xindex.pop()
        }
        if(xstack.length !== 0){
            x.push(xindex[xindex.length -  1])
        }
        else{
            x.push(-1)
        }
      }
      xstack.push(arr[i])
      xindex.push(i+1)
    }
    //console.log(x)
    
    for(let i = arrLen - 1; i>= 0; i--){
        // console.log(xstack,xindex)
     //   console.log(y)
       if(i === arrLen -1){
           y.push(-1)
           
       }else{
          // console.log(xstack[xstack.length - 1], arr[i],xindex)
         while(ystack.length && ystack[ystack.length - 1] <= arr[i]){
 
             ystack.pop()
             yindex.pop()
         }
         if(ystack.length !== 0){
             y.push(yindex[yindex.length -  1])
         }
         else{
             y.push(-1)
         }
       }
       ystack.push(arr[i])
       yindex.push(i+1)
     }
   y = y.reverse()
     
   // console.log(x)
    for(let i = 0; i<arrLen; i++){
        let res = Number(x[i]) + Number(y[i])
        ans.push(res)
    }
    console.log(ans.join(" "))
        
   
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
       
