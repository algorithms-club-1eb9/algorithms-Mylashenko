function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

module.exports = (arr) => {
    for (let i = 0; i < arr.length - 1; i += 1) {
        let min = i;
        for (let j = i; j < arr.length; j += 1) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (arr[i] > arr[min]) {
            swap(arr, i, min);
        }
    }

    return arr;
};
