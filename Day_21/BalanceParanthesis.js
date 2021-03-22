
function runProgram(input){ 
    input = input.trim().split("\r\n")
    for(let i = 1; i<input.length;i++){
        input[i] = input[i].split("")
        var flag = true;
        var stack = []
        //console.log(input[i].length)
        if(input[i].length % 2 !== 0){
            flag = false;
           
        }
        else {
        for(let k = 0; k<input[i].length; k++){
           
            if(input[i][k] === "{" || input[i][k] === "[" || input[i][k] === "("){
                stack.push(input[i][k])
            }
            if(input[i][k] === "}"){
                if(stack[stack.length - 1] === "{"){
                    stack.pop()
                }
                else{
                    flag = false;
                    break;
                }
            }
            if(input[i][k] === "]"){
                if(stack[stack.length - 1] === "["){
                    stack.pop()
                }
                else{
                    flag = false;
                    break;
                }
            }
            if(input[i][k] === ")"){
                if(stack[stack.length - 1] === "("){
                    stack.pop()
                }
                else{
                    flag = false;
                    break;
                }
            }
        }
    }
        if(flag === true && stack.length === 0){
            console.log("balanced")
        }
        else if(flag === false){
            console.log("not balanced")
        }
    }
   
  
     

}    
      

   
      

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});



