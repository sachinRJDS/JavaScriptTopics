async function execute(){
console.log('welcome');
let p=new Promise((resolve,reject)=>{
 setTimeout(()=>{
resolve("login")
reject("error occur")
 },2000)
})

await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);}).finally(()=>{console.log('ThankYou');})
// console.log('logout');
}
execute()