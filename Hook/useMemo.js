function ExpensiveCalculation({ num }) {
const result = useMemo(() => {
console.log("Tính toán lại...");
let total = 0;
for (let i = 0; i < 1000000; i++) {
total += i;
}
return total + num;
}, [num]);


return <p>Kết quả tính toán: {result}</p>;
}