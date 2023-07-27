
console.log(' WELCOME TO HOUSERENTAL ');
async function execute(){
console.log('Login To Application');
let p=new Promise((reslove,reject)=>{
  setTimeout(()=>{
    reslove('Your Successfully Login To Application')
    reject('Enter valid UserName And Password')
  },2000)
})
//await p.then((msg)=>{console.log(msg),console.log('Logout Successfully');;}).catch((msg)=>{console.log(msg);}).finally(()=>{console.log('THANK YOU');})
await p.catch((msg)=>{console.log(msg);}).then((msg)=>{console.log(msg),console.log('Logout Successfully');;}).finally(()=>{console.log("THANK YOU");})
//console.log('Logout Successfully');
// console.log(" THANK YOU ");
}
execute()