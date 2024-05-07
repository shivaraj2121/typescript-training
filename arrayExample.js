// let arr4:Array<number> =[1, 2, 3, 4, 5];  
// for(let i=5;i>=0;i--){
//    console.log(i)
// }
//     let digit:number[]=[1,2,3,4,5];
//     let tampDigit:number[]=[];
// for(let i=digit.length;i>0;i--)
// {
//     tampDigit.push(digit[1])
//     tampDigit.push(digit[4])
//     tampDigit.push(digit[2])
//     tampDigit.push(digit[0])
//     tampDigit.push(digit[3])
//     break;
// }
// console.log(tampDigit)
var digit1 = [1, 2, 3, 4, 5];
var tampDigit1 = [];
for (var i = digit1.length - 1; i >= 0; i--) {
    tampDigit1.push(digit1[i]);
}
console.log(tampDigit1);
