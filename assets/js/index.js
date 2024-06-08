function startTimer() {
    var time = 75;
    var startTimer = setInterval(function(){
        document.getElementById("codeTimer").innerHTML=time;
        time--;
        if(time < 0) {
            clearInterval(time);
        }
    }, 1000);
}