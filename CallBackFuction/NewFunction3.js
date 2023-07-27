function homeRegister(cname,houseno,rent,deposit,methodaddress){
    console.log(`Registered home details : ${cname} ${houseno} ${rent} ${deposit}`);
    methodaddress(cname,houseno,rent,deposit,'basavanagudi')
}

function apartmentRegister(cname,houseno,rent,deposit,address){
    console.log(`Registered apartmenet details : ${cname} ${houseno} ${rent} ${deposit} ${address}`);
}

function register(cname,houseno,rent,deposit,address,method){
    method(cname,houseno,rent,deposit,address)
}


register('jack',111,10000,50000,apartmentRegister,homeRegister)

