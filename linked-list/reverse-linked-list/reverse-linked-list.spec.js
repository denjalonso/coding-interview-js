var expect = require('chai').expect;
var CustomList = require('./reverse-linked-list');

describe("List class -", function() {
    describe("List creation and usage -", function() {
        it("Should create a custom list with only one element", function() {
            var customList = new CustomList([5]);
            expect(customList.head.value).to.equal(5);
            expect(customList.head.next).to.be.null;
        });
        it("Should create a custom list with two elements", function() {
            var customList = new CustomList([5, 10]);
            expect(customList.head.value).to.equal(5);
            expect(customList.head.next.value).to.equal(10);
            expect(customList.head.next.next).to.be.null;
        });
        it("Should have the expected length", function() {
            var customList = new CustomList([5,10,15,20]);
            expect(customList.length()).to.equal(4);
        });
    });
    describe("List revert", function() {

    });
});