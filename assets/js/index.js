function startTimer() {
    var time = 5;
    setInterval(function(){
        document.getElementById("codeTimer").innerHTML=time;
        time--;
        if(time < 0) {
            time = 0;
        }
    }, 1000);
}