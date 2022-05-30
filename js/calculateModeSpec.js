var mode = require("./calculateMode");
var shallowEqualArrays = require("./node_modules/shallow-equal/arrays/index.js")

console.log(shallowEqualArrays(mode.calculateMode([1,2,3,3]),[3]))
console.log(shallowEqualArrays(mode.calculateMode([4.5, 0, 0]),[0]))
console.log(shallowEqualArrays(mode.calculateMode([1.5, -1, 1, 1.5]),[1.5]))
console.log(shallowEqualArrays(mode.calculateMode([1,1,2,2]),[1,2]))
console.log(shallowEqualArrays(mode.calculateMode([1,2,3]),[1,2,3]))
console.log(shallowEqualArrays(mode.calculateMode(["what", "who", "where", "who"]),['who']))
