let names=['sachin','madhu','kashif','ranjith','sachin','madhu']
for(let i=0;i<names.length;i++){
    for(let j=1+i;j<names.length;j++){
        if(names[j]==names[i]){
            console.log(names[j]);
        }
    }
}
