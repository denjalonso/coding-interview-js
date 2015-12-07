var NOT_FOUND = -1;

function _isSearchKeyInTheLeftHalf(sortedNumbers, searchKey, indexInTheMiddle) {
    return sortedNumbers[indexInTheMiddle] > searchKey;
}

function _leftHalfProcessing(sortedNumbers, searchKey, indexInTheMiddle) {
    return binarySearch(sortedNumbers.slice(0, indexInTheMiddle), searchKey)
}

function _rightHalfProcessing(sortedNumbers, searchKey, indexInTheMiddle) {
    var returnedIndex = binarySearch(sortedNumbers.slice(indexInTheMiddle, sortedNumbers.length), searchKey);
    if (returnedIndex !== NOT_FOUND)
        return indexInTheMiddle + returnedIndex;
    else
        return NOT_FOUND;
}

function binarySearch (sortedNumbers, searchKey) {
    if (sortedNumbers.length === 0) {
        return NOT_FOUND;
    }
    if (sortedNumbers.length === 1 && sortedNumbers[0] === searchKey) {
        return 0;
    } else if(sortedNumbers.length !== 1) {
        var indexInTheMiddle = parseInt(sortedNumbers.length / 2);
        if(_isSearchKeyInTheLeftHalf(sortedNumbers, searchKey, indexInTheMiddle)) {
            return _leftHalfProcessing(sortedNumbers, searchKey, indexInTheMiddle);
        }
        else {
            return _rightHalfProcessing(sortedNumbers, searchKey, indexInTheMiddle);
        }
    } else {
        return NOT_FOUND;
    }
}

module.exports = binarySearch;