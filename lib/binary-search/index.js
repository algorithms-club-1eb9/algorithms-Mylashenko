module.exports = (sequance, el) => {
    let start = 0;
    let end = sequance.length;
    let mid = Math.round(sequance.length / 2);
    console.log('mid', mid);

    while (mid !== el && mid !== 0) {
        if (sequance[mid] === el) {
            return mid;
        }
        if (sequance[mid] < el) {
            start = mid;
        }
        if (sequance[mid] > el) {
            end = mid;
        }
        console.log('mid', mid);
        console.log('start', start);

        mid = Math.round(end + start) / 2;
    }

    for (let i = 0; i < sequance.length; i += 1) {
      if (sequance[i] === el) {
          return i;
      }
    }
    return -1;
};
