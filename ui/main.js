//counter code
var button = document.getElementById('counter');
var count = 0;
var span = document.getElementById('count');
button.onClick = function(){

    count++;
    span.innerHTML= count.toString();
};