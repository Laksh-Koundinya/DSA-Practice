function runProgram(input) {
   
    input = input.trim().split("\r\n");
    var arr = input[1].split(" ").map(Number);
    var ans = PeakFinder(arr)
    console.log(ans)
   
    function PeakFinder(arr){

    
    let left = 0
    let right = arr.length-1
    let  mid
    
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
       
