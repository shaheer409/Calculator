var a=prompt("Enter Any First Number");
a=parseInt(a);
var b=prompt("Enter Any Second Number");
b=parseInt(b);

var choice=prompt("CHOOSE OPERATOR?","+ , - , * , /");

var add=a+b;
var sub=a-b;
var mul=a*b;
var div=a/b;

if(choice==="+"){
    alert(add);
}
else if(choice==="-"){
    alert(sub);
}
else if(choice==="*"){
    alert(mul);
}
else if(choice==="/"){
    alert(div);
}
else{
    alert("INVALID OPERATOR");
}