function welcome(){
    var d = new Date();
    var time = d.getHours();

    if (time < 12) {
        return "Good morning";
    }
    if (time < 19) {
        return"Good afternoon.";
    }
    if (time >= 19) {
        return "Good night";
    }
}

function bienvenido(){
    var d = new Date();
    var time = d.getHours();

    if (time < 12) {
        return "Buenos dias";
    }
    if (time < 19) {
        return"Buenas tardes";
    }
    if (time >= 19) {
        return "Buenas noches";
    }
}
