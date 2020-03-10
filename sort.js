const numbers = [10, 12, 5, 7, 15];
const len = numbers.length;
const result = [];

for (let i = 0; i < len; i++) {
  console.log(`第${i + 1}轮数组`, numbers);
  let max = { value: numbers[0], index: 0 };
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max.value) {
      max = { value: numbers[i], index: i };
    }
  }
  console.log(`最大值为${max.value}`);
  numbers.splice(max.index, 1);
  result.push(max.value);
}

console.log("结果", result);
