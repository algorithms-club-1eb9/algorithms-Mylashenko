function Node(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
}

module.exports = class {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(element) {
        const node = new Node(element);
        node.prev = this.tail;

        if (this.tail) this.tail.next = node;
        else this.head = node;

        this.tail = node;
        this.size += 1;
    }

    pop() {
        if (!this.tail) return null;
        const value = this.tail;
        this.tail = this.tail.prev;

        if (this.tail) this.tail.next = null;
        else this.head = null;

        this.size -= 1;
        return value;
    }

    unshift(element) {
        const node = new Node(element);
        node.next = this.head;

        if (this.head) this.head.prev = node;
        else this.tail = node;

        this.head = node;
        this.size += 1;
    }


    shift() {
        if (!this.head) return null;
        const value = this.head;
        this.head = this.head.next;

        if (this.head) this.head.prev = null;
        else this.tail = null;

        this.size -= 1;
        return value;
    }

    get(index) {
        let currentNode = this.head;
        const length = this.size;
        let count = 0;

        if (length === 0 || index < 0 || index > length - 1) {
            return -1;
        }

        while (count < index) {
            currentNode = currentNode.next;
            count += 1;
        }

        return currentNode;
    }
};

