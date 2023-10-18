function isIsogram(str) {
  const strObj = {};
  for (let letters of str) {
    strObj[letters] = (strObj[letters] || 0) + 1;
  }
  const values = Object.values(strObj);
  const isIsogram = values.filter((element) => {
    if (element > 1) {
      return true;
    } else {
      return false;
    }
  });
  console.log(isIsogram);
}

isIsogram(`demographic
`);
