function runProgram(input) {
    input = input.split("\n")
    var inputarray = input[1].split(" ").map(Number);
    var result = inputarray
   // console.log(inputarray)
    quickSort(result,0,inputarray.length - 1)
    console.log(inputarray.join(" "))
    //console.log(quickSort(input,0,input.length-1))
    function Partarray(arr,start,end){
        var pivalue = arr[end]
        let index = start;
        for(var i = start; i<end; i++){
            if(arr[i] >= pivalue){
                var temp = arr[i];
                arr[i] = arr[index];
                arr[index] = temp;
                 index++
            }
        }
        var swapi = arr[index];
        arr[index] = arr[end];
        arr[end] = swapi;
        return index
    }
function quickSort(arr, start, end){
    if(start >= end){
        return arr
    }else{
        let pindex = Partarray(arr,start,end)
        quickSort(arr,start,pindex-1)
        quickSort(arr,pindex+1,end)
    }
}
  }
  if (process.env.USERNAME === "user") {
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

