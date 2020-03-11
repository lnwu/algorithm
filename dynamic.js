const getCountOfMoney = total => {
  const fn = [0];

  for (let i = 1; i < total; i++) {
    if (i < 5) {
      fn[i] = i;
    }

    if (i >= 5 && i < 11) {
      fn[i] = Math.min(fn[i - 5], fn[i - 1]) + 1;
    }

    if (i >= 11) {
      fn[i] = Math.min(fn[i - 11], fn[i - 5], fn[i - 1]) + 1;
    }

    console.log(`fn[${i}]:`, fn[i]);
  }
};

console.log("getCountOfMoney", getCountOfMoney(24));
