function CallbackExample() {
const [count, setCount] = useState(0);


const increment = useCallback(() => {
setCount((c) => c + 1);
}, []);


return (
<div>
<p>Giá trị: {count}</p>
<button onClick={increment}>Tăng</button>
</div>
);
}