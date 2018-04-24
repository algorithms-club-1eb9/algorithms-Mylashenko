const should = require('should');
const algo = require('../index.js');

describe('binary-heap', () => {
    it('should return correct heap', () => {
        const heap = new algo.BinaryHeap();
        heap.add(5);
        heap.add(3);
        heap.add(2);
        heap.add(1);
        should(heap.arr).be.eql([5, 3, 2, 1]);
    });
    it('should return correct heap', () => {
        const heap = new algo.BinaryHeap();
        heap.add(5);
        heap.add(3);
        heap.add(2);
        heap.add(1);
        heap.add(9);
        should(heap.arr).be.eql([9, 5, 2, 1, 3]);
    });
    it('should return correct heap', () => {
        const heap = new algo.BinaryHeap();
        heap.add(5);
        heap.add(3);
        heap.add(2);
        heap.add(1);
        heap.add(9);
        heap.add(6);
        should(heap.arr).be.eql([9, 5, 6, 1, 3, 2]);
    });
    it('should return removed element', () => {
        const heap = new algo.BinaryHeap();
        heap.add(5);
        heap.add(3);
        heap.add(2);
        heap.add(1);
        heap.add(9);
        heap.add(6);
        should(heap.remove()).be.eql(9);
    });
    it('should return correct heap', () => {
        const heap = new algo.BinaryHeap();
        heap.add(5);
        heap.add(3);
        heap.add(2);
        heap.add(1);
        heap.add(9);
        heap.add(6);
        heap.remove();
        should(heap.arr).be.eql([6, 5, 2, 1, 3]);
    });
});
