/**
 * 
 * @param { array } dataArray - some array of data
 * @returns { number | string } - the first element of the array
 */
const returnTheFirstElementTony = (dataArray) => {
    if (!dataArray || !Array.isArray(dataArray) || dataArray.length === 0) {
        return 'Please enter a valid input'
    }
    return dataArray[0];
}

export {
    returnTheFirstElementTony
}