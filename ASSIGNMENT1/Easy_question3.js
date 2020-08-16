const replaceVowel = (str) => {
  var final = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "a" || str[i] == "A") final = final + 1;
    else if (str[i] == "e" || str[i] == "E") final = final + 2;
    else if (str[i] == "i" || str[i] == "I") final = final + 3;
    else if (str[i] == "o" || str[i] == "O") final = final + 4;
    else if (str[i] == "u" || str[i] == "U") final = final + 5;
    else final = final + str[i];
  }
  return final;
};
var str1 = "karachi";
str1 = str1.toLowerCase();
console.log(replaceVowel(str1));

var str2 = "chembur";
str2 = str2.toLowerCase();
console.log(replaceVowel(str2));
