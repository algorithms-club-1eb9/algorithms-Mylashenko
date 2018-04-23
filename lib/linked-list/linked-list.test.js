const should = require('should');
const algo = require('../index.js');

describe('linked-list', () => {
    it('should return length of list', () => {
        const list = new algo.LinkedList();
        list.push('first element');
        list.push('second element');
        list.push('third element');
        should(list.size).be.eql(3);
    });
    it('should return head element value', () => {
        const list = new algo.LinkedList();
        list.push('first element');
        list.push('second element');
        list.push('third element');
        should(list.head.element).be.eql('first element');
    });
    it('should return tail element value', () => {
        const list = new algo.LinkedList();
        list.push('first element');
        list.push('second element');
        list.push('third element');
        should(list.tail.element).be.eql('third element');
    });
    it('should remove and return last element value', () => {
        const list = new algo.LinkedList();
        list.push('first element');
        list.push('second element');
        list.push('third element');
        should(list.pop().element).be.eql('third element');
    });
    it('should add new node to head of list', () => {
        const list = new algo.LinkedList();
        list.push('first element');
        list.push('second element');
        list.push('third element');
        list.unshift('new element');
        should(list.head.element).be.eql('new element');
    });
    it('should remove and return first element from list', () => {
        const list = new algo.LinkedList();
        list.push('first element');
        list.push('second element');
        list.push('third element');
        should(list.shift().element).be.eql('first element');
    });
    it('should remove first element', () => {
        const list = new algo.LinkedList();
        list.push('first element');
        list.push('second element');
        list.push('third element');
        list.shift();
        should(list.head.element).be.eql('second element');
    });
    it('should element by index', () => {
        const list = new algo.LinkedList();
        list.push('first element');
        list.push('second element');
        list.push('third element');
        should(list.get(1).element).be.eql('second element');
    });
});
