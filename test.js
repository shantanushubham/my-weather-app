function testFunction(a, b) {
  let sum = a + b;
  let diff = a - b;
  return [sum, diff];
}

let [sum, diff] = testFunction(5, 6);
console.log(sum)
console.log(diff)


let arr = [2, 4, 6];
let mArr = arr.map((el, index) => {
  return el * el;
})

console.log(mArr)
