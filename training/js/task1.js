// GET SUM, AVG, MIN, MAX of numbers using recurse

// getSum
var getSum = function(numbers, index){
    if(index === 0 ){
        return numbers[0];
    }
    else{
        return numbers[index] + getSum(numbers, index - 1);
    }
}

//getMax
var getMax = function(numbers, index, max){
    if(index === 0){
        return numbers[0] > max ? numbers[0] : max;
    }
    else{
        if(numbers[index] > max){
            return getMax(numbers, index - 1, numbers[index]);
        }
        else{
            return getMax(numbers, index - 1, max);
        }

    }
}

// getMin
var getMin = function(numbers, index, min){
    if(index === 0){
        return numbers[0] < min ? numbers[0] : min;
    }
    else{
        if(numbers[index] < min){
            return getMin(numbers, index - 1, numbers[index]);
        }
        else{
            return getMin(numbers, index - 1, min);
        }

    }
}

var evaluate = function(numbers){
    var count = numbers.length - 1;

    console.log(arguments);
    console.log('SUM: ', getSum(numbers, count) );
    console.log('AVG: ', getSum(numbers, count	) / (count + 1));
    console.log('MAX:', getMax(numbers, count,  Number.MIN_VALUE));
    console.log('MIN:', getMin(numbers, count,  Number.MAX_VALUE));
}

evaluate([1,2,3,4,5]);
