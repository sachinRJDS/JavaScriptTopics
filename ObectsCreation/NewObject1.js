let CoustomerDetails={
    cname:"sachin",
    cid:101,
    salary:25000,
    address:function add(address){ //we can also create the function inside the object
        return address              //we can the give the method name or we can skip  
    },
     detiails:{
        dept:20,
        deptname:'IT'        
    }
    
}

// CoustomerDetails.sid=10  //here we can also add the new states to an object while compilling
// console.log(CoustomerDetails); 

// delete CoustomerDetails.sid  //here we are deleting/removeing the state present in the object
// console.log(CoustomerDetails);

// console.log(CoustomerDetails);
let fun=CoustomerDetails.address("kashmir")
 console.log(fun)

//console.log(CoustomerDetails.detiails.deptname);// we can also create the block inside the object
