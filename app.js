let count = 0;
document.getElementById('decrease').onclick = function(){
    count -= 1;
    document.getElementById('count1').innerHTML = count;
}
document.getElementById('reset').onclick = function(){
    count = 0;
    document.getElementById('count1').innerHTML = count;
}
document.getElementById('increase').onclick = function(){
    count += 1;
    document.getElementById('count1').innerHTML = count;
}