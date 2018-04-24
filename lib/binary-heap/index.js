function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

module.exports = class {
    constructor() {
        this.arr = [];
    }
    add(element) {
        this.arr.push(element);
        if (this.arr.length > 1) {
            let index = this.arr.length - 1;
            while (this.arr[index] > this.arr[this.getParent(index)]) {
                swap(this.arr, index, this.getParent(index));
                index = this.getParent(index);
            }
        }
    }

    remove() {
        let index = 0;
        swap(this.arr, index, this.arr.length - 1);
        const el = this.arr.pop();
        while (this.arr[index] < this.arr[this.getMaxChild(this.arr, index)]) {
            swap(this.arr, index, this.getMaxChild(this.arr, index));
            index = this.getMaxChild(this.arr, index);
        }
        return el;
    }

    getParent(index) {
        if (index % 2 === 0) {
            return (index / 2) - 1;
        }
            return Math.floor(index / 2);
    }

    getMaxChild(arr, index) {
        if (arr[(index * 2) + 1] > arr[(index * 2) + 2]) {
            return (index * 2) + 1;
        }
            return (index * 2) + 2;
    }
};
