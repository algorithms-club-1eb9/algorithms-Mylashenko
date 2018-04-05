module.exports = (sequance, el) => {
    let start = 0;
    let end = sequance.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (start <= end) {
        if (el === sequance[mid]) {
            return mid;
        } else if (el < sequance[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }

        mid = Math.floor((start + end) / 2);
    }

    return -1;
};

