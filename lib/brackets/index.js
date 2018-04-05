const fs = require('fs');

function Stack() {
    this.list = [];
    this.push = (item) => {
        this.list.push(item);
    };
    this.pop = () => this.list.pop();
}

function isBracket(ch) {
    return ch === ')' || ch === '(' || ch === '[' || ch === ']' || ch === '{' || ch === '}';
}

module.exports = (path) => {
    let res = 'file is correct';
    const stack = new Stack();
    let text = '';
    if (fs.stat(path)) {
        text = fs.readFileSync(path).toString();
    }

    function checkBracket(index, bracket) {
        while (true) {
            const tmp = stack.pop();
            if (tmp !== bracket && isBracket(tmp)) {
                res = 'file is incorrect';
                index = text.length;
                break;
            } else if (tmp === undefined) {
                res = 'file is incorrect';
                index = text.length;
                break;
            } else if (tmp === bracket) {
                break;
            }
        }
    }

    for (let i = 0; i < text.length; i += 1) {
        if (text[i] === ')') {
            checkBracket(i, '(');
        } else if (text[i] === ']') {
            checkBracket(i, '[');
        } else if (text[i] === '}') {
            checkBracket(i, '{');
        } else {
            stack.push(text[i]);
        }
    }

    return res;
};

