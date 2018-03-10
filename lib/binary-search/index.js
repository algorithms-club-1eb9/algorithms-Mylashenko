module.exports = (sequance, el) => {
    let start = 0;
    let end = sequance.length;
    let mid = Math.floor(sequance.length / 2);

    while (start < end && end > 0) {
        if (end === start + 1 && sequance[end] !== el && sequance[start] !== el) {
            return -1;
        }
        if (sequance[mid] === el) {
            return mid;
        }
        if (sequance[mid] < el) {
            start = mid;
        } else {
            end = mid;
        }

        mid = Math.floor((end + start) / 2);
    }

    return -1;
};
