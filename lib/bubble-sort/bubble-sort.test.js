const should = require('should');
const algo = require('../index.js');

describe('bubble-sort', () => {
    it('should return sorted array', () => {
        const arr = algo.bubbleSort([2, 5, 1, 6, 0, 9]);
        should(arr).be.eql([0, 1, 2, 5, 6, 9]);
    });
    it('should return sorted array', () => {
        const arr = algo.bubbleSort([9, 6, 5, 2, 1, 0]);
        should(arr).be.eql([0, 1, 2, 5, 6, 9]);
    });
    it('should return sorted array', () => {
        const arr = algo.bubbleSort([0, 1, 2, 5, 6, 9]);
        should(arr).be.eql([0, 1, 2, 5, 6, 9]);
    });
    it('should return sorted array', () => {
        const arr = algo.bubbleSort([0, 1, 5, 2, 6, 9]);
        should(arr).be.eql([0, 1, 2, 5, 6, 9]);
    });
});
