function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

module.exports = (arr) => {
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < arr[i - 1]) {
            let k = i;
            while (arr[k] < arr[k - 1]) {
                swap(arr, k, k - 1);
                k -= 1;
            }
        }
    }

    return arr;
};
