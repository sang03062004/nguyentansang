const varLetConstExample = (() => {
var a = 'var a (function-scoped)';
let b = 'let b (block-scoped)';
const c = 'const c (immutable reference)';


if (true) {
// 'var a' được hoisting / function-scoped nên bị ghi đè trong cùng hàm
var a = 'var a (đã bị đổi trong block)';
// 'let b' là block-scoped -> khác với outer 'b'
let b = 'let b (block)';
// c = '...' // -> sẽ lỗi nếu bỏ comment (const không thể gán lại)
}


return { a, b, c };
})();