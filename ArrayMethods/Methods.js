/* This length() method is used to check the no of elemenys/values present inside the array */
// var s=[10,20,30,40]
// console.log(s.length);

/*This concat() method is used to  merge the two arrays */
//The concat() method does not change the existing arrays. It always returns a new array.
// var s1=[10,20,30,40]
// var a=[50,60,70]
// console.log(s1.concat(a));




/* This filter() method is used to filter the condition like i have a array in there   i want to a  number which is greater than the 20 ,in that it will filter then create new array*/
/*It will take call back function as a input*/
/*Here declared function will call the each and every value from the array and check the condition, based on that condition it will create the new array*/
/*Here in first iteration it will fetch first element and check the condtion, same thing will happen to untill array became a empty */
/*Here we should use the return statement else we will not get the output*/
/*If we pass character in between the array it will not consider that character */
/*By using this filter method we can avoid the for loops*/
// var s1=[10,20,30,40]
// let a1=s1.filter((num)=>{return num>20})
// console.log(a1);

/*Whenever we want to perform same action the all the elements we use this method*/
/*Here it will not create a new array instead of it will modify the array based on the condition*/
/*If we are passing the character in between the numbers it through the NAN(not a number)*/
// var s1=[10,20,30,40]
// var a=s1.map((num)=>{return num*2})
// console.log(a);

//The JavaScript method toString() converts an array to a string of (comma separated) array values.
var s1=['apple','mango','orange'] 
var a=s1.toString()
console.log(a.length); //apple,mango,orange ,the length of the string is 18 including ,comma

//The join() method also joins all array elements into a string.
//It behaves just like toString(), but in addition you can specify the separator:
//Here we can add the new value insted of , 10*20*30*40
var s1=[10,20,30,40]
var a=s1.join("#")
console.log(a); //10*20*30*40
console.log(a.length);//the length of thestring is 11 including ,comma

//The pop() method removes the last element from an array:
var s1=[10,20,30,40]
var a=s1.pop()
console.log(a);//40
console.log(s1);//[ 10, 20, 30 ]
var a=s1.pop()
console.log(s1);//[ 10, 20 ]

//The push() method adds a new element to an array (at the end):
var s1=[10,20,30,40]
var a=s1.push(100)
console.log(s1);

//The shift() method removes the first array element and "shifts" all other elements to a lower index
//The shift() method returns the value that was "shifted out":
var s1=[10,20,30,40]
var a=s1.shift()
console.log(a);
console.log(s1);

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
//The unshift() method returns the new array length:
var s1=[10,20,30,40]
var a=s1.unshift(200)
console.log(a);
console.log(s1);

//Array elements can be deleted using the JavaScript operator delete
//Using delete leaves undefined holes in the array.
//Use pop() or shift() instead.
//Here the specified index element will be removed, but the index will not be remove 
var s1=[10,20,30,40]
delete s1[0]
console.log(s1);
console.log(s1.length);//[ <1 empty item>, 20, 30, 40 ]

//Flattening an array is the process of reducing the dimensionality of an array.
//The flat() method creates a new array with sub-array elements concatenated to a specified depth.
//The flat () method it will merge the all the secondary array and make it as a single array and float method is return a new array
var s1=[[10,20],[30,40],[50,60]]
var a=s1.flat()
console.log(a);//[ 10, 20, 30, 40, 50, 60 ]
console.log(s1);//[ [ 10, 20 ], [ 30, 40 ], [ 50, 60 ] ]
console.log(s1.length);//length 3
console.log(a.length);//length 6

//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
//The splice() method returns an array with the deleted items:
var s1=[10,20,30,40,50,60]
// var a=s1.splice(0,2,)
// console.log(a);  //[ 10, 20 ]
// console.log(s1);//[ 30, 40, 50, 60 ]
var a=s1.splice(0,2,'sachin','darshan')
console.log(a);//[ 10, 20 ]
console.log(s1);//[ 'sachin', 'darshan', 30, 40, 50, 60 ]

//The slice() method creates a new array.
//The slice() method does not remove any elements from the source array.
//The slice() method can take two arguments like slice(1, 3).
//The method then selects elements from the start argument, and up to (but not including) the end argument.
var s1=[10,20,30,40]
var a=s1.slice(1,3)
console.log(s1);//[ 10, 20, 30, 40 ]
console.log(a);//[ 20, 30 ]
console.log(s1);

//The sort() method sorts an array in assending order
//If we are using string it will sort an array in aplhabetical order
var s1=[20,10,40,30]
var a=s1.sort()
console.log(a);
console.log(s1);

//If we are using both string and numeric value , first it will sort the number ,then string 
var s1=['sheela',"leela",10,20,"dinga"]
var a=s1.sort()
console.log(s1);//[ 10, 20, 'dinga', 'leela', 'sheela' ]
console.log(a);

//The reverse() method reverses the elements in an array.
//You can use it to sort an array in descending order
var s1=[10,20,30,40]
var a=s1.reverse()
console.log(s1);

//This include method is used to check wheather given character is present inside the array or not
var s1=[10,20,30,40]
var a=s1.includes(20)
console.log(a);//true

//The every() method checks if all array values pass a test.
//This example checks if all array values are larger than 5:
var s1=[10,20,30,40]
var a=s1.every((num)=>{return num>5})
console.log(a);

//The some() method checks if some array values pass a test.
//This example checks if some array values are larger than 18:
var s1=[10,20,30,40]
var a=s1.some((num)=>{return num>5})
console.log(a);

//The indexOf() method searches an array for an element value and returns its position.
var s1=[10,20,30,40]
var a=s1.indexOf(10)
console.log(a);//1

//Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
var s1=[10,20,30,40]
var a=s1.lastIndexOf(40)
console.log(a);//3

var s1=[10,20,30,40]
var a=s1.find((num)=>{return num>18})
console.log(a);

//The entries() method returns an Array Iterator object with key/value pairs:
var s1=[10,20,30,40]
var a=s1.entries()
for (const i of a) {{
    console.log(i);
}
//[ 0, 10 ]
//[ 1, 20 ]
//[ 2, 30 ]
//[ 3, 40 ]
    
}

