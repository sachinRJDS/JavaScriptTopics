let s="sachinraj"
let s1=""
for(let i=0;i<s.length;i++){
   if(s1.includes(s[i])){

   }else{
    s1=s1+s[i]
   }
}
console.log(s1);
for (let a of s1) {
    let count=0
    for (const a1 of s) {
        if(a1==a){
            count++
        }else{

        }
    }
    console.log(a+":"+count);
}