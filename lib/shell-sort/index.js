module.exports = (arr) => {
    for (let k = Math.floor(arr.length / 2); k > 0; k = Math.floor(k / 2)) {
        for (let i = 0; i + k < arr.length; i += 1) {
            if (arr[i] > arr[i + k]) {
                let temp = arr[i];
                arr[i] = arr[i + k];
                arr[i + k] = temp;
                const j = i;
                while (arr[j] < arr[j - k]) {
                    temp = arr[j];
                    arr[j] = arr[j - k];
                    arr[j - k] = temp;
                }
            }
        }
    }

    return arr;
};
