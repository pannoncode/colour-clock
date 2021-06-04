function colorClock() {
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hours <= 9) {
        hours = "0" + hours;
    }
    if (minutes <= 9) {
        minutes = "0" + minutes;
    }
    if (seconds <= 9) {
        seconds = "0" + seconds;
    }
    if (seconds >= 10) {
        var alphab = 'f';
        var alphac = 'f';
    }
    if (seconds >= 20) {
        var alphab = 'c';
        var alphac = 'b';
    }
    if (seconds >= 30) {
        var alphab = 'd';
        var alphac = 'e';
    }
    if (seconds >= 40) {
        var alphab = 'f';
        var alphac = 'e';
    }
    if (seconds >= 50) {
        var alphab = 'c';
        var alphac = 'd';
    }


    var clockFace = hours + ':' + minutes + ':' + seconds;
    var hexColor = '#' + alphab + minutes + seconds + hours + alphac;


    document.getElementById('clock').innerHTML = clockFace;
    document.body.style.background = hexColor;

    setTimeout(function() {
        colorClock();
    }, 1000);
}

colorClock();