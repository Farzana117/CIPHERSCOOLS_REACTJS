const ar1 = ["@", "@", "@", "@"];
const ar2 = ["SS", "SS", "SS", "Ss"];
const identical = function ([a, b, c, d]) {
  if (a == b && b == c && c == d && d == a) return true;
  else return false;
};
console.log(identical(ar1));
console.log(identical(ar2));
