const _ = require("lodash");

/**
 * @param {NumberContainer} a
 */
function square(a) {
  return a.num ** 2;
}

console.log(_.repeat("foo", square({ num: 3 })));
