// let array=new Array("sachi",10)
// console.log(array);
// o/p ['sachi',10]

// let array=new Array(10)
// console.log(array);
// o/p[ <10 empty items> ]

let array=new Array('j')
array[0]='d'
array[1]=10
array[5]='s'
array[10]=20
console.log(array);
// o/p [ 'd', 10, <3 empty items>, 's', <4 empty items>, 20 ]

//we can also create array object by using new keyword
//whenever we create the array by using new keyword no need to specify the size 
//Here we can also modify the size of the array in runtime
//If we pass the number in the first index it will take that as  size of the array 