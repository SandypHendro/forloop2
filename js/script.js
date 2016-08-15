'use strict'

var p = document.getElementsByTagName('p')[0];

var count = 5;
var ast = "*";
p.innerHTML = "";

for(var i=0; i<count; i++){
  for(var k=0; k<count -(i+1); k++){
    p.innerHTML = p.innerHTML + " &nbsp;";
  }
  for(var j=0; j<=i; j++){
  p.innerHTML = p.innerHTML + ast;
  }
  // line for pyramid
  for(var m=0; m<i; m++){
  p.innerHTML = p.innerHTML + ast;
  }
  p.innerHTML = p.innerHTML + "<br>";
}
