let student={
    sid:101,
    sname:'dinga',
    sal:function(){
        return 50000
    },
deptDetals:{
    deptname:function(){
        return 'IT'
    },
    deptno:20
}

};
console.log(student.sid);
console.log(student.sal());
console.log(student.deptDetals.deptname());
delete student.sid
console.log(student.sid);//we can delete the states in object by using standard function 
student.add='kengeri'
console.log(student.add);//we can add the states in object by using standard function 
