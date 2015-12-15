// Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

function letterChanges(str) {

  var letters = "abcdefghijklmnopqrstuvwxyz";
  var newStr = "";
  var loc;
  var lcStr = str.toLowerCase()

  for (var i = 0; i < lcStr.length; i++) {
    loc = letters.indexOf(lcStr[i]);
    console.log(loc, "loc")
    if (loc === 25) {
      newStr = newStr + "a";
    } else if (loc === -1) {
      newStr = newStr + lcStr[i];
    } else {
      newStr = newStr + letters[loc + 1];
    }
  }

//find the vowels, capitalize them.
  return newStr.replace(/[aeiou]/g, function(vowel) { return vowel.toUpperCase(); });

}
