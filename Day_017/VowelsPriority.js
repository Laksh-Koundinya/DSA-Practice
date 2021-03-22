function runProgram(input) {
   
    input = input.trim().split("\n");

    for(let i = 1; i<input.length; i++){
        var str = input[i]
        var vowel = ""
        var constant = ""
        for(let k = 0; k<str.length; k++){
            if(str[k] === "a" || str[k] === "e"|| str[k] === "i" || str[k] === "o" || str[k] === "u" ){
                vowel += str[k]
            }else{
                constant += str[k]
            }
        }
       var fin = [...vowel.trim(),...constant.trim()]
       console.log(fin.join(""))
    }
    //console.log(input)

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
       
