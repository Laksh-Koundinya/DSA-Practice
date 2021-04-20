function runProgram(input) {
   
    input = input.trim()
var originalStr = [...input].join("")
//console.log(input,"UOO")
var ans = ""

let res = Reverse(0,input.split(""))
console.log(res)

if(res === originalStr){
    console.log("Yes")
}
else {
    console.log("No")
}
function Reverse(i,str){
    console.log(str,i)
    if(i === str.length){
        return str
    }
    else{
        var ele = str.pop()
       str.push( ele )
       //console.log(ans)
        return Reverse(i+1,str)
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
      
      
      
    