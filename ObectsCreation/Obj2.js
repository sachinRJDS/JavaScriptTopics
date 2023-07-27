let Emp={
    sid:100,
    sname:'Dinga',
    salary:function(){
        return 5000
    }
}
Emp.dept=function (){
   return function add(){
        return 40
    }
    
}
a=Emp.dept()
console.log(a());