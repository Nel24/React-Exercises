const sampleArr = [2, 4, 6, 8, 10];

const newArr = sampleArr.map((element) => {
  return element === 6 ? element * 2 : element;
});

console.log(newArr);
