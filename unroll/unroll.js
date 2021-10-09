function unroll(squareArray) {
    if(squareArray.length === 0){
        return []
     }
     let res = squareArray.shift()
     for(let i = 0; i < squareArray.length - 1; i++){
       res.push(squareArray[i].pop())  
     }
     let temp = squareArray.pop()
     if(temp === undefined){
         return res
     }
     for(let i = temp.length-1; i >= 0; i--){
         res.push(temp[i])
     }
     for(let i = (squareArray.length-1); i >= 0 ; i--){
       res.push(squareArray[i].shift())  
     }
     return res.concat(unroll(squareArray))
}

module.exports = unroll;
