let a=new Array(20)
for(let i=0;i<a.length;i++){
    a[i]=i+1
     if(a[i]%2==0&&a[i]%3==0){
        console.log(a[i]+" : webdriver");
    }else if(a[i]%2==0){
        console.log(a[i]+" : java");
    }else if(a[i]%3==0){
        console.log(a[i]+" : javascript");
    }else{
        console.log(a[i]+" : this no is not divisible by 2 & 3");
        }

}








 // let i=a1+1   
    // if(i%2&&i%3){
    //     console.log(i+" : webdriver");
    // }else if(i%2){
    //     console.log(i+" : java");
    // }else if(i%3){
    //     console.log(i+" : javascript");
    // }else{
    //     console.log(i+" : this no is not divisible by 2 & 3");
    // }