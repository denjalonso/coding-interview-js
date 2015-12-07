function binarySearch (sortedNumbers, searchKey) {
    if (sortedNumbers.length === 0) {
        return -1;
    }
    if (sortedNumbers.length === 1 && sortedNumbers[0] === searchKey) {
        return 0;
    } else if(sortedNumbers.length !== 1) {
        var indexInTheMiddle = parseInt(sortedNumbers.length / 2);
        if(sortedNumbers[indexInTheMiddle] > searchKey) {
            return binarySearch(sortedNumbers.slice(0, indexInTheMiddle), searchKey);
        }
        else {
            var returnedIndex = binarySearch(sortedNumbers.slice(indexInTheMiddle, sortedNumbers.length), searchKey);
            if (returnedIndex !== -1)
                return indexInTheMiddle + returnedIndex;
            else
                return -1;
        }
    } else {
        return -1;
    }
}

module.exports = binarySearch;