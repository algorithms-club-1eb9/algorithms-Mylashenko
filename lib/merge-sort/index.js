module.exports = function mergeSort(arr) {

    function merge(leftArr, rightArr) {
        const result = [];

        while (leftArr.length && rightArr.length) {
            if (leftArr[0] <= rightArr[0]) {
                result.push(leftArr.shift());
            } else {
                result.push(rightArr.shift());
            }
        }

        while (leftArr.length) {
            result.push(leftArr.shift());
        }

        while (rightArr.length) {
            result.push(rightArr.shift());
        }

        return result;
    }

    if (arr.length < 2) return arr;

    const mid = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, mid);
    const rightArray = arr.slice(mid);

    return merge(mergeSort(leftArray), mergeSort(rightArray));

};

