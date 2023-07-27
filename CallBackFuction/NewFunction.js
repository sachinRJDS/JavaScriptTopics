function userLogin(username,password){
    console.log("user login successfully to the application");
}
function adminLogin(username,password){
    console.log("admin login successfully to the application");
}

function login(username,password,method){
    method(username,password)
}

login('sachin','Rjds123',adminLogin)

//The function calling another function inside the function that is we called as callback funtion