let s="https://generalassemb.ly/blog/what-is-a-javascript-library/"
for (let i = 0; i <s.length; i++) {
   let ch=s.charAt(i)
    if(ch>='A'&&ch<='Z'||ch>='a'&&ch<'z'){
        console.log(ch);
    }
}