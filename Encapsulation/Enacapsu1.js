class Demo{
    constructor(){
        let a
    }
    getValue(){
        return this.a
    }
    setValue(a){
        this.a=a
    }
}
let en=new Demo()
en.setValue(100)
console.log(en.getValue());
console.log(this.a);