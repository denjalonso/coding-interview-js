var expect = require('chai').expect;
var CustomList = require('./reverse-linked-list');

describe("List class", function() {
    describe("List creation and usage", function() {
        it("Should create a custom list with only one element", function() {
            var customList = new CustomList([5]);
            expect(customList.head.value).to.equal(5);
        });
        it("Should have the expected length", function() {
            var customList = new CustomList([5,10,15,20]);
            expect(customList.length()).to.equal(4);
        });
    });
    describe("List revert", function() {

    });
});