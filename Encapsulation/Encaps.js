class Emp{
    #eid=101
  getEid(){  //or we can also use ==> get getEid(),if we use like this we invoke like a.getEid  
    return this.#eid
  }
  setEid(value){   //or we can also use ==>set setEid(value),we invoke like this a.setEid=200
    this.#eid=value
  }
}

let a=new Emp()
//console.log(a.eid);//undefined
console.log(a.getEid());//101
a.setEid(200)
console.log(a.getEid());//200

module.export=a
