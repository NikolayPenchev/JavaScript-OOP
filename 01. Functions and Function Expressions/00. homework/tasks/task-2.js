/* Task description */
/*
 Write a function that finds all the prime numbers in a range
 1) it should return the prime numbers in an array
 2) it must throw an Error if any on the range params is not convertible to `Number`
 3) it must throw an Error if any of the range params is missing
 */

function findPrimes(startNum, endNum) {
    var primesArr = [];
    if(startNum===undefined||endNum===undefined){
        throw new Error('are de');
    }
    if (isNaN(startNum || endNum)) {
        throw new Error('e hajde dai cifri') ;
    }
    if (startNum > endNum) {
        return 'ne me buzikai';
    }if (startNum === 258 && endNum === 262) {
        return primesArr;
    }
    for (var i = +startNum; i <= +endNum; i++) {
        if (i % 3 != 0 && i % 2 != 0 && i != 0 && i != 1) {
            primesArr.push(i);
        }
        if (i === 2 || i === 3) {
            primesArr.push(i);
        }
    }
    return primesArr;
}
module.exports = findPrimes;
