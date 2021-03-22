function runProgram(input) {
   
   
    
var input = input.trim().split('\n')
var len = Number(input[0])
var arr = input[1].split(' ').map(Number)
var start = 0
var end = len-1
function merge(arr,start,end){
    var mid = Math.floor((start+end)/2)
    var i = start
    var j = mid+1
    var k = start
    var temp = []
    while(i<=mid && j<=end){
        if(arr[i]<arr[j]){
            temp[k++] = arr[i++]
        }
        else{
            temp[k++] = arr[j++]
        }
    }
    while(i<=mid){
        temp[k++] = arr[i++]
    }
    while(j<=end){
        temp[k++] = arr[j++]
    }
    for(var l=start; l<=end; l++){
        arr[l]=temp[l]
    }
    return arr
}

function mergeSort(arr,start,end){
    if(start<end){
        var mid = Math.floor((start+end)/2)
        mergeSort(arr,start,mid)
        mergeSort(arr,mid+1,end)
        merge(arr,start,end)
    }
    return arr
}
var merge = mergeSort(arr,start,end)
console.log(merge.join(' '))

  
    
        
   
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
       
