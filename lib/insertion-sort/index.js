module.exports = (arr) => {
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < arr[i - 1]) {
            let k = i;
            while (arr[k] < arr[k - 1]) {
                const temp = arr[k];
                arr[k] = arr[k - 1];
                arr[k - 1] = temp;
                k -= 1;
            }
        }
    }

    return arr;
};
