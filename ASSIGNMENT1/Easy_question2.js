const addUp = (number) => {
  var sum = 0;
  for (var i = 1; i <= number; i++) sum = sum + i;
  return sum;
};
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));
