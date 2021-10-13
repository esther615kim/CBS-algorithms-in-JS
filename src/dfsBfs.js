//stack in JS 2021.10.13

let stack = [];
stack.push(3);
stack.push(5);
stack.pop();
//console.log(stack);

//get greatest common divisor

export function gcd(a, b) {
  //if (!a % b ) {
  if (a % b === 0) {
    return b;
  } else {
    return gcd(b, a % b);
  }
}
