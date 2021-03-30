function runProgram(input) {
    input = input.trim().split('\n')
    let [n,key] = input[0].split(" ").map(a=>parseInt(a))
    let arr = input[1].split(' ').map(a=>parseInt(a))
    arr.sort((a,b)=>(a-b))
    let lo = 0
    let hi = n-1
    let ans = -1
    let count = 0
    
    let res = lowerBound(key,lo,hi,ans,arr)
    console.log(res)
    function lowerBound(key,lo,hi,ans,arr){
       while( lo <= hi){
           mid = lo+Math.floor((hi-lo)/2)
           if(arr[mid]> key){
               ans=mid
               hi=mid-1
           }
           else if(arr[mid]< key){
               lo=mid+1
           }
           else{
              ans=mid
              hi = mid-1
             
           }
       }
       while( arr[ans] === key){
            count++
            if( arr[ans] > key){
             break
            }
            ans++
        }
       return ans
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
       
