let arry:number[]=[150,20,10,4]
console.log(arry);
arry.push(50)
console.log(arry);
arry.pop()
console.log(arry);
arry.shift()
arry.unshift(10)
arry.reverse()
console.log(arry);
for(let list of arry)
    {
        console.log(list)
    }

let mArray:number[][]=[[2,3,4],[1,2,3]]

console.log(mArray[1][1]) 
for(let list of mArray)
    {
        console.log(list)
    }