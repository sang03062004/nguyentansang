const arrowExample = (() => {
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2); // arrow fn ngắn gọn


// Arrow function không có `this` riêng—thường dùng cho callbacks
const greeter = {
name: 'Tấn Sang',
// dùng function thông thường nếu cần `this`; arrow sẽ lấy `this` từ scope bên ngoài
greet: function () {
return `Xin chào, ${this.name}`;
},
};


return { doubled, greet: greeter.greet() };
})();