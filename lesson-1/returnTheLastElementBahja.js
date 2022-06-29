/**
 * @param { array } dataArray - some array of data
 * @returns { number | string } - the last element of the array
 */
function returnTheLastElementBahja(dataArray) {
    if (!Array.isArray(dataArray) || dataArray.length === 0) {
        return 'Please enter a valid input'
    }
    return dataArray[dataArray.length-1];
}

console.log(returnTheLastElementBahja([1, 2, 3]))