// var capitalize = function(fir,las) { return
// fir.toUpperCase ;
// };
var usersentence = prompt("enter a sentence")

var sentenceintoarray = usersentence.split("");

// var result = function functionName(fir) {
//   return  firstLetter


console.log(sentenceintoarray[0])
sentenceintoarray[0] = sentenceintoarray[0].toUpperCase() ;
console.log(sentenceintoarray[0])

var lastLetter = firstLetter.charAt(sentenceintoarray.length -1).toUpperCase;
var arraytosentence = lastLetter.join ("");

alert(arraytosentence)
