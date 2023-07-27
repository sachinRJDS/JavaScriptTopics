let CoustomerDetails={
    cname:"sachin",
    cid:101,
    salary:25000,
    address:'kengeri',
    displayDetails:['sachin',101,25000,'kengeri']
}
//console.log(CoustomerDetails);
//console.log(CoustomerDetails.address);
//console.log(CoustomerDetails.displayDetails);
CoustomerDetails.address='basavanagudi'
console.log(CoustomerDetails.address);
CoustomerDetails.displayDetails[0]='darshan'
console.log(CoustomerDetails.displayDetails);

//This is the statndars object used in JS
//here we create the object in { open corly braceses}
//here we can modify the object (CoustomerDetails.address='basavanagudi')
//Inorder to use the data present in the object ,inside the object function we use the (this) keyword