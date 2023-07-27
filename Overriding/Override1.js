let register={
    houseno:100,
    address:'kengeri',
    vacant:'vacant',
    rent:10000,
    registerDetails:function(){
        console.log(`Details of the house : HouseNo ${this.houseno} add ${this.address} vacant ${this.vacant} rent ${this.rent}`);
    }
}

let newObject=Object.create(register)
console.log(newObject);
newObject.houseno=77
newObject.address='basavanagudi'
newObject.vacant='occupied'
newObject.rent=25000
console.log(newObject);
newObject.registerDetails()

// console.log(register);
// register.registerDetails()

newObject.registerDetails=function(){
    console.log(`Registration is failed, the specified homeNo ${this.houseno} is already exist ,enter the correct address`);
}
newObject.registerDetails()