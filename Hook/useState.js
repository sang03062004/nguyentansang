function Counter() {
const [count, setCount] = useState(0);


return (
<div>
<p>Bạn đã bấm {count} lần</p>
<button onClick={() => setCount(count + 1)}>Bấm</button>
</div>
);
}