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
    it("should return 0 when looking for 10 in the array [10, 20, 30, 40]", function () {
        expect(binarySearch([10, 20, 30, 40], 10)).to.equal(0);
    });
    it("should return 2 when looking for 30 in the array [10, 20, 30, 40]", function () {
        expect(binarySearch([10, 20, 30, 40], 30)).to.equal(2);
    });
    it("should return 2 when looking for 30 in the array [10, 20, 30, 40, 50]", function () {
        expect(binarySearch([10, 20, 30, 40, 50], 30)).to.equal(2);
    });
    it("should return 4 (last element) when looking for 50 in the array [10, 20, 30, 40, 50]", function () {
        expect(binarySearch([10, 20, 30, 40, 50], 50)).to.equal(4);
    });
    it("should return -1 when looking for 55 in the array [10, 20, 30, 40, 50]", function () {
        expect(binarySearch([10, 20, 30, 40, 50], 55)).to.equal(-1);
    });
    it("should return 5 when looking for 60 in the long array below", function () {
        expect(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130], 60)).to.equal(5);
    });
});