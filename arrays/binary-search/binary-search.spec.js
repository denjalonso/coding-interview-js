var expect = require('chai').expect;
var binarySearch = require('./binary-search');

describe("binary-search", function () {
    it("should return -1 given an empty array", function () {
        expect(binarySearch([], 0)).to.equal(-1);
    });
});