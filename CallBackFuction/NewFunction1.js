function apartmentRegister(flatNo,address){
    console.log("user registered apartment successfully");
    console.log(arguments);
    var a=arguments[5]
    a(100,'BTM Layout',arguments[2],arguments[3],arguments[4])

}

function homeRegister(houseNo,address,owername,vacant,rent){
    console.log("user registered home successfully");
    console.log(houseNo);
    console.log(address);
    console.log(owername);
    console.log(vacant);
    console.log(rent);
}

function register(houseNo,address,ownerName,vacant,rent,methods,method){
    method(houseNo,address,ownerName,vacant,rent,methods)
}
var register1=(houseNo,address,ownerName,vacant,rent)=>{
console.log("registered");
}

register(11,'basavanagudi','jack','vacant',12000,homeRegister,apartmentRegister)