const should = require('should');
const algo = require('../index.js');

describe('Binary search', () => {
    it('should return searched index of search number', () => {
        const elementIndex = algo.binarySearch([1, 2, 3, 4, 5, 6, 7, 9], 4);
        should(elementIndex).be.eql(3);
    });
    it('should return searched index of search number', () => {
        const elementIndex = algo.binarySearch([1, 2, 3, 4], 4);
        should(elementIndex).be.eql(3);
    });
    it('should return searched index of search number', () => {
        const elementIndex = algo.binarySearch([4, 5, 8, 10], 4);
        should(elementIndex).be.eql(0);
    });
    it('should return -1', () => {
        const elementIndex = algo.binarySearch([1, 2, 5, 9], 4);
        should(elementIndex).be.eql(-1);
    });
    it('should return -1', () => {
        const elementIndex = algo.binarySearch([], 4);
        should(elementIndex).be.eql(-1);
    });
    it('should return index of searched number', () => {
        const elementIndex = algo.binarySearch([4], 4);
        should(elementIndex).be.eql(0);
    });
});
