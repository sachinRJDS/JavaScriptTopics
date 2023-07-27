class Register{
    constructor(cname,houseno,rent,address){
        this.cname=cname
        this.houseno=houseno
        this.rent=rent
        this.address=address
    }
    dispalyDetails(){
        console.log(`Customername ${this.cname}`);
        console.log(`Houseno ${this.houseno}`);
        console.log(`HouseRent ${this.rent}`);
        console.log(`Address ${this.address}`);
    }
}

class HomeRegister extends Register{
    constructor(cname,houseno,rent,address,deposit,mobileno){
        super(cname,houseno,rent,address)
        this.deposit=deposit
        this.mobileno=mobileno
    }
    detailsOfHome(){
        console.log(`Customername :${this.cname}`);
        console.log(`Houseno :${this.houseno}`);
        console.log(`HouseRent :${this.rent}`);
        console.log(`Address :${this.address}`);
        console.log(`Deposit :${this.deposit}`);
        console.log(`Mobileno :${this.mobileno}`);
    }
}
 let obj=new HomeRegister('jack',111,10000,'Bangalore',50000,9148891488)
// obj.dispalyDetails()
// // obj.detailsOfHome()

// module.exports= obj
export default obj 


