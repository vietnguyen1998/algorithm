let QuickSort = function(arr){
    if(arr.length < 2) return arr
    let index = Math.floor(arr.length/2)

    let left = []
    let right = []
    for(let i=0;i<arr.length;i++){
        if(i==index) continue
        if(arr[i] > arr[index]){
            right.push(arr[i])
        } else{
            left.push(arr[i])
        }
    }
    return [...QuickSort(left),arr[index],...QuickSort(right)]
}

let arr = [1,4,3,2]
console.log(QuickSort(arr))