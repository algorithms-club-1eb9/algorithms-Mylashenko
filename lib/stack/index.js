module.exports = (arr) => {
    function Stack() {
        this.list = [];
        this.push = (item) => {
            this.list.push(item);
        };
        this.pop = () => this.list.pop();
    }

    const stack = new Stack();

    for (let i = 0; i < arr.length; i += 1) {
        stack.push(arr[i]);
    }

    return stack;
};
