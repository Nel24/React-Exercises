const x = 2;
let y = 4;
function Update(arg) {
  return Math.random() + y * arg;
}
y = 2;
y = 3;
const result = Update(2);
console.log(result);
