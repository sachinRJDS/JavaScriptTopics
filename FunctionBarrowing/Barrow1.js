var apartment={
    houseNo:100,
    address:'basavanagudi',
    vacant:'vacant',
    rent:10000,
    adetails:function(){
console.log(`apartment details ${this.houseNo} ${this.address} ${this.vacant} ${this.rent}`);
    }
    
}

var home={
    houseNo:100,
    address:'Kengeri',
    vacant:'occupied',
    rent:25000,
    hdetails:function(){
console.log(`apartment details ${this.houseNo} ${this.address} ${this.vacant} ${this.rent}`);
    }
   
}

function register1(cname){
    console.log(`Details of registered ${cname} ${this.houseNo} ${this.address} ${this.vacant} ${this.rent}`);
    console.log(arguments);
}

// apartment.adetails.call(home)
// var data=apartment.adetails.bind(home)
// data()


// //home.hdetails.call(apartment)
// var data=home.hdetails.bind(apartment)
// data()


register1.apply(home,['jack','kengeri',2000])
