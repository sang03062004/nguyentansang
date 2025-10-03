const enhancedObjExample = (() => {
const name = 'Sang';
const age = 24;
const person = {
name, // shorthand property
age,
greet() {
return `Hi ${name}`; // shorthand method
},
};
return person;
})();


return (
<section className="p-4 rounded shadow-md mb-6">
<h2 className="text-lg font-semibold mb-2">Task 1 — ES6+ (ví dụ)</h2>
<div className="text-sm">
<strong>1 var / let / const</strong>
<pre>{JSON.stringify(varLetConstExample, null, 2)}</pre>


<strong>2 Arrow functions</strong>
<pre>{JSON.stringify(arrowExample, null, 2)}</pre>


<strong>3 Template literals</strong>
<pre>{templateExample}</pre>


<strong>4 Destructuring</strong>
<pre>{JSON.stringify(destructuringExample, null, 2)}</pre>


<strong>5 Default parameters</strong>
<pre>{JSON.stringify(defaultParamsExample, null, 2)}</pre>


<strong>6 Rest & Spread</strong>
<pre>{JSON.stringify(restSpreadExample, null, 2)}</pre>


<strong> Enhanced object literals</strong>
<pre>{JSON.stringify(enhancedObjExample, null, 2)}</pre>


<p className="mt-2 text-xs text-gray-600">Ghi chú: copy các block code tương ứng ra file riêng nếu muốn thử từng phần.</p>
</div>
</section>
);
