const realType = (val) => {
  if (val.length >= 0 && typeof val == "object") return "array";
  else if (val == null) return "null";
  return typeof val;
};
console.log(realType(1));
console.log(realType("a"));
console.log(realType([]));
