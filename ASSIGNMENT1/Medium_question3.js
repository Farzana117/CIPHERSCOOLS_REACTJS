const ar = [1, 0, 1, 0];
const removeDuplicates = (ar) => {
  const ar2 = [...new Set(ar)];
  return ar2;
};
console.log(removeDuplicates(ar));
