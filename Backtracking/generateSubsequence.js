function generateSequence(arr,res,index){
    console.log(res)
    if(arr.length === index){
        output.push(res)
        return output
    }
   
    generateSequence(arr,res,index+1)
    generateSequence(arr,res.push(arr[index]),index+1)
}

var output = []
var arr = [1,2,24,4]
generateSequence(arr,[],0)
console.log(output)