var inputArray = process.argv;
var sum = inputArray.slice(2).reduce(function( num, total ){
    return Number(num) + Number(total);
}, 0);
console.log(sum);
