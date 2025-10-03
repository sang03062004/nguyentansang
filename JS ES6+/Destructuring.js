const destructuringExample = (() => {
const user = { id: 1, name: 'Sang', address: { city: 'HCM', country: 'VN' } };
const { name, address: { city } } = user; // destructuring object


const arr = [10, 20, 30];
const [first, second] = arr; // destructuring array


return { name, city, first, second };
})();