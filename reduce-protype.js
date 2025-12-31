Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;
  let startIndex = 0;

  // If initial value is NOT provided
  if (acc === undefined) {
    acc = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }

  return acc;
};
const nums = [1, 2, 3, 4, 5];

const sum = nums.myReduce(function (acc, curr) {
  return acc + curr;
}, 0);

console.log(sum); // 15

const items = [
  { category: 'fruit', name: 'apple' },
  { category: 'vegetable', name: 'carrot' },
  { category: 'fruit', name: 'banana' }
];

const grouped = items.myReduce(function (acc, item) {
  if (!acc[item.category]) {
    acc[item.category] = [];
  }
  acc[item.category].push(item.name);
  return acc;
}, {});

console.log(grouped);
// { fruit: ['apple', 'banana'], vegetable: ['carrot'] }
