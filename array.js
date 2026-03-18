const array = [5, 10, 12, 15, 11];

function iteration(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

iteration(array);


const doubled = array.map(num => num * 2);

const even = array.filter(num => num % 2 === 0);

console.log("Doubled:", doubled);
console.log("Even:", even);

const sort = [...array].sort((a, b) => a - b);

const sorted = [...array].sort((a, b) => b - a);

console.log("Sorted (Descending):", sorted);
console.log("Sort (Ascending):", sort);