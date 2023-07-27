let s="madhusudhan"
for(let i=0;i<s.length;i++){
    let count
    for(let j=1+i;j<s.length;j++){
        if(s[j]==s[i]){
            console.log(s[i]+" : is repeated : ");
            break
         } 
        }
}