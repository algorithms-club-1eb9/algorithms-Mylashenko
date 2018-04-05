module.exports = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr.length - i; j += 1) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
};
