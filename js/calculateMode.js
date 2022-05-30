exports.calculateMode = (arr) => {
    let obj = {}
    for(let i of arr){
        if(!obj[i]){
            obj[i] = 1
        }else{obj[i] += 1}
    }
    let sortedArr = [], answer = []
    for (let j in obj) {
        sortedArr.push([j, obj[j]]);
    }
    
    sortedArr.sort(function(b, a) {
        return a[1] - b[1];
    })
    for(let k of sortedArr){
        if(k[1] == sortedArr[0][1]){
            if(isNaN(k[0])){
            answer.push(k[0])}
            else answer.push(+k[0])
        }
    }
    return answer
}
