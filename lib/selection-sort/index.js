module.exports = (arr) => {
    for (let i = 0; i < arr.length - 1; i += 1) {
        let min = i;
        for (let j = i; j < arr.length; j += 1) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (arr[i] > arr[min]) {
            const temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    return arr;
};
