function ExampleEffect() {
const [count, setCount] = useState(0);


useEffect(() => {
document.title = `Bạn bấm ${count} lần`;
}, [count]);


return (
<div>
<p>Bạn đã bấm {count} lần</p>
<button onClick={() => setCount(count + 1)}>Bấm</button>
</div>
);
}