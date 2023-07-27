function apartmentRegister(flatNo,address='bengalore',rent){
    console.log("Details "+flatNo+" "+address+" "+rent);
    //Template Litteral
    console.log(`Detals added ${flatNo} 
    ${address}                         
    ${rent}`);
}

apartmentRegister(100,undefined,25000)

//Here we are using the bactic spl (`)operator to avoid the concatinating
 //"${} " this is we called as place holder