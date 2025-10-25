const number = [10,4,8,11,50,20,34];

function printNumbers(number){
    for(let i = 0; i < number.length; i++){
        console.log((() => number[i])())  
    }
}
printNumbers(number);