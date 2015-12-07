var NOT_FOUND = -1;

function _isArrayEmpty(sortedNumbers) {
    return sortedNumbers.length === 0;
}

function _isTheLastElementAndMatches(sortedNumbers, searchKey) {
    return sortedNumbers.length === 1 && sortedNumbers[0] === searchKey;
}

function _isTheLastElementAndDoesNotMatch(sortedNumbers, searchKey) {
    return sortedNumbers.length === 1 && sortedNumbers[0] !== searchKey;
}

function _isNotTheLastElement(sortedNumbers, searchKey) {
    return sortedNumbers.length > 1;
}

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
    if (_isArrayEmpty(sortedNumbers)) {
        return NOT_FOUND;
    }
    if (_isTheLastElementAndMatches(sortedNumbers, searchKey)) {
        return 0;
    } else if (_isTheLastElementAndDoesNotMatch(sortedNumbers, searchKey)) {
        return NOT_FOUND;
    } else if (_isNotTheLastElement(sortedNumbers, searchKey)){
        var indexInTheMiddle = parseInt(sortedNumbers.length / 2);
        if(_isSearchKeyInTheLeftHalf(sortedNumbers, searchKey, indexInTheMiddle)) {
            return _leftHalfProcessing(sortedNumbers, searchKey, indexInTheMiddle);
        }
        else {
            return _rightHalfProcessing(sortedNumbers, searchKey, indexInTheMiddle);
        }
    }
}

module.exports = binarySearch;