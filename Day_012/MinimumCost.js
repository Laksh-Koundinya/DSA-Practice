function runProgram(input) {
   
    input = input.trim().split("\n");
    //console.log(input)
    for(let i = 1; i<input.length; i+=2){
        var [len,elements] = input[i].split(" ").map(Number)
        var arr = input[i+1].split(" ").map(Number).sort((a,b)=>a-b)
        var maxlimit = arr[arr.length - 1]
        // console.log(limit)
           
        for(let i = 0; i<= maxlimit; i++){
             let diff_arr = []
             for(var j = 0; j< arr.length; j++){
               //  console.log(i,arr[j])
                 if(Number(i) > Number(arr[j]) ){
                     var diff = Number(i) - Number(arr[j])
                     var res = Number(diff) * Number(3) 
                     diff_arr.push(res)
                 }
                 else if(Number(i) < Number(arr[j]) ){
                     var diff = Number(arr[j]) - Number(i);
                     var res = Number(diff) * 5
                     diff_arr.push(res)
                 }
                 else{
                     var diff = Number(i) - Number(arr[j])
                     diff_arr.push(diff)
                 }
             }
            // console.log(diff_arr)
    diff_arr = diff_arr.sort((a,b)=>a-b)
    var cost = 0
    for(let i = 0; i<elements;i++){
        cost +=Number(diff_arr[i])
    } 
    }
  
    console.log(cost)
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
       
