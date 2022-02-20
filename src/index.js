module.exports = function reverse(n) {
    let arr = [...("" + Math.abs(n))].reverse().join("");
    return arr;
};
