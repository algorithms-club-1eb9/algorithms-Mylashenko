const should = require('should');
const algo = require('../index.js');

describe('brackets', () => {
    it('should return correct info text', () => {
        const correct = algo.brackets('brackets.test.js');
        should(correct).be.eql('file is correct');
    });
});

