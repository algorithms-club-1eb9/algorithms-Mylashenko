function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

module.exports = (arr) => {
    for (let k = Math.floor(arr.length / 2); k > 0; k = Math.floor(k / 2)) {
        for (let i = 0; i + k < arr.length; i += 1) {
            if (arr[i] > arr[i + k]) {
                swap(arr, i, i + k);
                const j = i;
                while (arr[j] < arr[j - k]) {
                    swap(arr, j, j - k);
                }
            }
        }
    }

    return arr;
};
