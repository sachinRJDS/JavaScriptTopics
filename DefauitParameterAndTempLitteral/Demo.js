function apartmentRegister(flatNo,address='bengalore',rent){
    console.log("Details "+flatNo+" "+address+" "+rent);
}

apartmentRegister(100,undefined,25000)

//Here we are using the default parameters as an address, since we are using default paremater we should declare the undefind in th place of address while calling the function
// if it is any index is there after the default parameter it will display the undefined ,why bcz it will always go to index by index ,if we pass two parameter while invoking the function it will go to assign the value to an first two index 
//if we are using the default parameter in second index we should pass the undefined while invoking the function else third index will display the undefined
