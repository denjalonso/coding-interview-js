var expect = require('chai').expect;
var CustomList = require('./reverse-linked-list');

describe("List class -", function() {
    describe("List creation -", function() {
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
        it("Should create a custom list with three elements", function() {
            var customList = new CustomList([5, 10, 15]);
            expect(customList.head.value).to.equal(5);
            expect(customList.head.next.value).to.equal(10);
            expect(customList.head.next.next.value).to.equal(15);
            expect(customList.head.next.next.next).to.be.null;
        });
        it("Should have the expected length", function() {
            var customList = new CustomList([5,10,15,20]);
            expect(customList.length()).to.equal(4);
        });
    });
    describe("List usage", function() {
        it("Should transform the linked list to a JS array", function() {
            var customList = new CustomList([5,10,15,20]);
            expect(customList.toArray()).to.eql([5,10,15,20]);
        });
        it("Should append 90 to the existing array", function() {
            var customList = new CustomList([5,10,15]);
            customList.append(90);
            expect(customList.toArray()).to.eql([5,10,15,90]);
        });
        it("Should prepend 90 to the existing array", function() {
            var customList = new CustomList([5,10,15]);
            customList.prepend(90);
            expect(customList.toArray()).to.eql([90,5,10,15]);
        });
        it("Should get the element with index 0", function() {
            var customList = new CustomList([5,10,15]);
            expect(customList.get(0)).to.equal(5);
        });
        it("Should get the element with index 1", function() {
            var customList = new CustomList([5,10,15]);
            expect(customList.get(1)).to.equal(10);
        });
        it("Should get the element with index 2", function() {
            var customList = new CustomList([5,10,15]);
            expect(customList.get(2)).to.equal(15);
        });
        it("Should remove the last element (by index)", function() {
            var customList = new CustomList([5,10,15]);
            customList.remove(2);
            expect(customList.toArray()).to.eql([5,10]);
        });
        it("Should remove the first element (by index)", function() {
            var customList = new CustomList([5,10,15]);
            customList.remove(0);
            expect(customList.toArray()).to.eql([10,15]);
        });
        it("Should remove an element in the middle (by index)", function() {
            var customList = new CustomList([5,10,15]);
            customList.remove(1);
            expect(customList.toArray()).to.eql([5,15]);
        });
    });
    describe("List revert", function() {
        it("Should revert [5,10,15,20] to [20,15,10,5]", function() {
            var customList = new CustomList([5,10,15,20]);
            customList.revert();
            expect(customList.toArray()).to.eql([20,15,10,5]);
        });
    });
});