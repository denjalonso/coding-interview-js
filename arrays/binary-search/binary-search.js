function binarySearch (sortedNumbers, searchKey) {
    if (sortedNumbers.length === 0) {
        return -1;
    }
    if (sortedNumbers.length === 1 && sortedNumbers[0] === searchKey) {
        return 0;
    } else {
        return -1;
    }
}

module.exports = binarySearch;