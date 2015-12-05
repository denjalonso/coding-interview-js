var expect = require('chai').expect;
var binarySearch = require('./binary-search');

describe("binary-search", function () {
    it("should return -1 given an empty array", function () {
        expect(binarySearch([], 0)).to.equal(-1);
    });
    it("should return 0 if the array length is 1 and the search key matches", function () {
        expect(binarySearch([1], 1)).to.equal(0);
    });
    it("should return -1 if the array length is 1 and the search key doesn't match", function () {
        expect(binarySearch([2], 1)).to.equal(-1);
    });
});