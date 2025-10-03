const defaultParamsExample = (() => {
function sum(a = 1, b = 2) {
return a + b;
}
return { sumNoArgs: sum(), sumWithArgs: sum(5, 6) };
})();