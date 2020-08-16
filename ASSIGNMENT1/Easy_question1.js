const findChar = (letter, str) => {
  var value = 0;
  for (var pos = 0; pos <= str.length; pos++) {
    if (str[pos] == letter) value = value + 1;
  }
  return value;
};
console.log(findChar("a", "edabit"));
