console.log('Hello');
async function execute()
{
console.log("login to application");
let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Home page is displayed')
        reject("NoSuchElement")
    },2000)
})
p.then((msg)=>{console.log(msg)}).catch((msg)=>{console.log(msg);})
console.log("logout");
}
execute()