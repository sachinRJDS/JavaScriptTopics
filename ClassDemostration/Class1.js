class Register{
    static a=100
    b=200
constructor(cname,address){
    this.cname=cname
    this.address=address
}

static apartment(){
    console.log(this.a);
    var a1=new Register()
    console.log(a1.b);
}
home(){
    console.log(this.b);

    console.log(Register.a);
}

}
var s=new Register('jack','Basavanagudi')
console.log(s.cname);
console.log(s.address);
Register.apartment()
s.home()
var s1=new Register('sparrow','England')
console.log(s1.cname);
console.log(s1.address);

