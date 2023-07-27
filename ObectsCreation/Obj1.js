let CoustomerDetails={
    cname:"sachin",
    cid:101,
    salary:25000,
    address:function add(address){ 
        console.log(this.cname);
        return address              
    }
}

CoustomerDetails.cid=function(cid1){
    return 8888
}
//console.log(CoustomerDetails.cid);
//console.log(CoustomerDetails.address); [Function (anonymous)]
// let a=CoustomerDetails.address('kengeri')
// console.log(a);

let b=CoustomerDetails.cid(100)
console.log(b);
// we can also add new state to an object by using the function 
//if i want to access the value which is returned by the function, we should pass the value to an state why bcz it is in the form form of function for that we need stored in the variable then use it