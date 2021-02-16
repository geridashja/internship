function turk_id_gen() {
    let a = "" + Math.floor(900000001 * Math.random() + 1e8),
    b = a.split("").map(function (t) {
    return parseInt(t, 10)
    }),
    c = b[0] + b[2] + b[4] + b[6] + b[8],
    d = b[1] + b[3] + b[5] + b[7],
    e = (7 * c - d) % 10;

    return a + ("" + e) + ("" + (d + c + e) % 10);
}

module.exports = turk_id_gen;