function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

module.exports = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr.length - i; j += 1) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }

    return arr;
};
