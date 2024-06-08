function startTimer() {
    var time = 30;
    var startTimer = setInterval(function(){
        document.getElementById("codeTimer").innerHTML=time;
        time--;
        
    }, 1000);
}