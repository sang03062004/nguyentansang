const restSpreadExample = (() => {
const sumAll = (...nums) => nums.reduce((s, n) => s + n, 0); // rest
const arr = [1, 2, 3];
const arr2 = [...arr, 4]; // spread
const obj = { a: 1, b: 2 };
const obj2 = { ...obj, c: 3 };
return { sumAllResult: sumAll(1, 2, 3, 4), arr2, obj2 };
})();