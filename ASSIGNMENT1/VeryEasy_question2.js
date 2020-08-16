const EvenDivide = (dividend, divisor) => {
  if (dividend >= divisor) {
    if (dividend % divisor == 0) return true;
    else return false;
  } else {
    return false;
  }
};
console.log(EvenDivide(98, 7));
console.log(EvenDivide(85, 4));
