var s="sheela is a imaginary girl"
var a=""
for(let i=0;i<s.length;i++){
    if(i==0&&s[i]!=' '||s[i-1]==' '&&s[i]!=' '){
        a=a+s[i].toUpperCase()
    }else{
        a=a+s[i]
    }
}
console.log(a);