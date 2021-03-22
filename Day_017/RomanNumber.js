function runProgram(input) {
   
    input = input.trim()
    PrintRoman(Number(input))
    //console.log(input)

    function PrintRoman(number){
    var nums = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
    var symbols= ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"]
    var i=12;   
    var res = "" 
    while(number>0)
    {
      var div = Math.floor(number/nums[i])
      number = number%nums[i]
     while(div ){
       res += symbols[i]
         div -= 1
     }
      i--;
    }
    console.log(res)
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
       

    