//The length property returns the length of a string:
var s="sachin"
var a=s.length
console.log(a);//6

//concat() joins two or more strings:
var s="sachin"
var a=s.concat('raj')
console.log(a);//sachinraj

//This method is used to convert given string into uppercase
var s="sachin"
var a=s.toUpperCase()
console.log(a);//SACHIN

//This method is used to convert given string into lowercase
var s='SACHIN'
var a=s.toLowerCase()
console.log(a);//sachin

//slice() extracts a part of a string and returns the extracted part in a new string.
//The method takes 2 parameters: start position, and end position (end not included).
var s="apple,mango,butter"
var a=s.slice(0,5)
console.log(a);//apple

//If you omit the second parameter, the method will slice out the rest of the string:
var s="apple,mango,butter"
var a=s.slice(6)
console.log(a);//mango,butter

//If a parameter is negative, the position is counted from the end of the string
var s="apple,mango,butter"
var a=s.slice(-10)
console.log(a);//mango,butter

//If we pass the -ve parameter for both it will take the count from the last,below example(-1)is the last index from there to (-10) character it will fetch 
var s="apple,mango,butter"
var a=s.slice( -10,-1)
console.log(a);//ngo,butter

//substr() is similar to slice().
var s="apple,mango,butter"
var a=s.substring(0,5)
console.log(a);

//The replace() method replaces a specified value with another value in a string:
var s="apple,mango,butter"
var a=s.replace('apple','APPLE')
console.log(a);//APPLE,mango,butter

//To replace case insensitive, use a regular expression with an /i flag (insensitive):
var s="apple,mango,butter"
var a=s.replace(/APpLe/i,'APPLE')
console.log(a);//APPLE,mango,butter

//To replace all matches, use a regular expression with a /g flag (global match)
var s="apple,mango,butter,apple"
var a=s.replace(/apple/g,'APPLE')
console.log(a);//APPLE,mango,butter,APPLE

//Here it will convert where ever 'a' is present with in the string it will convert to uppercase 
var s="apple,mango,butter,apple"
var a=s.replace(/a/g,'A')
console.log(a);//Apple,mAngo,butter,Apple

//The trim() method removes whitespace from both sides of a string:
var s="      apple"
var a=s.trim()
console.log(a);//apple
console.log(s);//      apple

//The trimStart() method works like trim(), but removes whitespace only from the start of a string.
var s="      apple"
var a=s.trimStart()
console.log(a);//apple

//The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
var s="      apple    "
var a=s.trimEnd()
console.log(a);//      apple

//padStart() and padEnd() to support padding at the beginning and at the end of a string.
//The padStart() method pads a string from the start.
//It pads a string with another string (multiple times) until it reaches a given length.
var s='s'
var a=s.padStart(4,0)
console.log(a);//000s

//The padEnd() method pads a string from the end.
//It pads a string with another string (multiple times) until it reaches a given length.
var s='s'
var a=s.padEnd(4,'#')
console.log(a);//s###

//The charAt() method returns the character at a specified index (position) in a string:
var s="sachin"
var a=s.charAt(0)
console.log(a);//s

//The charCodeAt() method returns the unicode of the character at a specified index in a string:
//The method returns a UTF-16 code (an integer between 0 and 65535).
var s="sachin"
var a=s.charCodeAt(1)
console.log(a);//97

//A string can be converted to an array with the split() method:
//If the separator is omitted, the returned array will contain the whole string in index [0].
//If the separator is "", the returned array will be an array of single characters:
var s="welcome to testyantra"
var a=s.split(" ")
console.log(a[0]);//welcome
console.log(a[1]);//to
console.log(a[2]);//testyantra

//The indexOf() method returns the index (position) the first occurrence of a string in a string:
var s="sachin"
var a=s.indexOf('s')
console.log(a);//0

//Both methods accept a second parameter as the starting position for the search:
var s="welcome to testyantra"
var a=s.indexOf('to',5)
console.log(a);//8

//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
var s="welcome to testyantra"
var a=s.lastIndexOf('to')
console.log(a);//8

//The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
var s="welcome to testyantra"
var a=s.lastIndexOf('to',10)
console.log(a);//8

//The search() method searches a string for a string (or a regular expression) and returns the position of the match:
var s="welcome to testyantra software solution"
var a=s.search("software")
console.log(a);//22

//The match() method returns an array containing the results of matching a string against a string (or a regular expression).
var s="welcome to testyantra software solution"
var a=s.match('to')
console.log(a);
/*
[
  'to',
  index: 8,
  input: 'welcome to testyantra software solution',
  groups: undefined
]
 */
//Perform a global search for "to":
//here we are checking the 'to' contains  in the given string or not
var s="welcome to testyantra software solution"
var a=s.match(/to/)
console.log(a);

//Perform a global, case-insensitive search for "to":
var s="welcome to testyantra software solution"
var a=s.match(/to/gi)
console.log(a);//[ 'to' ]

//The startsWith() method returns true if a string begins with a specified value.
var s="sachin is a goob boy"
var a=s.startsWith('sachin')
console.log(a);//true

var s="sachin raj"
var a=s.endsWith("raj")
console.log(a);//true

