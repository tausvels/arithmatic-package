const arithmatic = function (option, a, b){
    let result = 0;
    if(option === 'add'){
        result = a + b
    }else if(option === 'sub'){
        result = a - b
    }else if(option === 'multiply'){
        result = a * b
    }else if(option === 'divide'){
        result = b / a
    }
    return result
}
module.exports = simpleArithmatic;