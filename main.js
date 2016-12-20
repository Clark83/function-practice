
var triplefive = function() {
  for (var i = 0; i < 3; i++) {
    console.log('five!');
  }
}
triplefive();

//second
var lastletter = function(words) {
  var lastChar = words.charAt(words.length() -1)

};
console.log('last letter is' +lastletter ('hello'))


//third
console.log('square')
var square = function(number) {
    return number * number;
    console.log('the square of 2 is ' +square (2));
}
//fourth
console.log('negate')
function negate(number) {
  return Number *-1;

}
console.log("negate 2 becomes " +negate(2));

//toArray
va toArray = function (a,b,c) {
  return [a,b,c];

}
console.log('to array'+toArray (1,4,5));

//startsWithA
var firstA = function(string) {
  first = string [0]
  if (first ==='A') {
    return true
  } else {
    return flase
  }
}


//excite
var excite = function(exclaim) {
  console.log(exclaim+'!!!');

}
excite('yes');

//sun
var sun function (str) {
  var result = str.indexof('sun');
  if(result !== -1) {
    return true
  } else {
    return false
  }
}
console.log(sun('sundries'))

//tiny
var tiny = function(number) {
  if number >= 0 && number <= 1;
}
console.log(tiny(0,3))

//getSeconds
var getSeconds = function (string) {
  var splitted = string.split(':');
  var result = splitted[0] ++splitted[1]
  return result;
}
 console.log('22:33' + getSeconds(22:33))
