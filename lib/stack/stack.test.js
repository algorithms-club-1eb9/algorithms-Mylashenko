const should = require('should');
const algo = require('../index.js');

describe('stack', () => {
    it('should return length of stack', () => {
        const elementIndex = algo.stack(['first', 'second', 'third']).list.length;
        should(elementIndex).be.eql(3);
    });
    it('should remove and return last element of stack', () => {
        const elementIndex = algo.stack(['first', 'second', 'third']).pop();
        should(elementIndex).be.eql('third');
    });
});
