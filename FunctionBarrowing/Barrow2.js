var apartment={
    houseNo:100,
    address:'basavanagudi',
    vacant:'vacant',
    rent:10000,
    adetails:function(){
console.log(`apartment details ${this.houseNo} ${this.address} ${this.vacant} ${this.rent}`);
console.log(arguments);
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
apartment.adetails.call(home,['kengeri','basavanagudi','bangalore',2000])

