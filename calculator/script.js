function clea(){
    let x=document.getElementById("result");
    x.value="";
}
function display(v){
    let d=document.getElementById("result");
    d.value+=v;
}
function evl(){
    let x=document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value=y;
}
function del() {
    let de = document.getElementById("result"); 
    de.value = de.value.substring(0, de.value.length - 1); 
}