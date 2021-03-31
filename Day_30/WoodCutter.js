function runProgram(input) {
    input = input.trim().split('\n')
    let [len, key] = input[0].trim().split(' ')
    let arr = input[1].trim().split(' ').map(Number).sort((a,b)=>a-b)
    let lo = 0, hi = arr[arr.length - 1]
 
    function checkPossibility(num) {
        let sum = 0
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > num) sum += arr[i] - num
            
        }
        if(sum >= key) {
            return true
        }
        else{
            return false
        }
      
    }
    while(lo < hi) {
        let mid = Math.floor(lo + (hi-lo)/2)+1
        if(checkPossibility(mid)) {
            lo = mid
        }
        else {
            hi = mid - 1
        }
    }
    if(arr.reduce((a,c)=>a+c,0) < key) {
        console.log(-1)
    }
    else {
        console.log(lo)
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
       
