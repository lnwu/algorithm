const moneyList = [1, 5, 10];

const getCountOfMoney = total => {
  let left = total;
  let count = 0;

  for (const money of moneyList.reverse()) {
    count += Math.floor(left / money);
    left = left % money;

    if (left === 0) {
      return count;
    }
  }
};

console.log("getCountOfMoney", getCountOfMoney(15));
