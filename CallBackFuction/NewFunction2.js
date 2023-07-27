function homeRegister(houseNo,address,rent){
    this.houseNo=houseNo
    this.address=address
    this.rent=rent
    console.log('added');
    console.log(arguments);
    apartmentRegister(arguments[0],arguments[1],arguments[2])

}
function apartmentRegister(houseNo,address,rent){
    console.log(houseNo);
    console.log(address);
    console.log(rent);
}

function register(houseNo,address,rent,method){
    method(houseNo,address,rent)
}
var a=new homeRegister(100,'beng',20000)
register(70,'kengeri',10000,homeRegister)
console.log(a.houseNo);

