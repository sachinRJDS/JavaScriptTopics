document.getElementById('one1').innerHTML='welcome'
document.getElementById('two2').innerHTML='sachinraj'
document.getElementById('bb1').onclick=demo
document.getElementById('bb2').onclick=demo1
function demo(){
    let d=new Date()

    document.getElementById('three3').innerHTML=d.toDateString()
}
function demo1(){
    let d=new Date()
    document.getElementById('three3').innerHTML=d.getDate()
}