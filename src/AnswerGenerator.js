function AnswerGenerator() {
}
AnswerGenerator.prototype.get_four_digits = function () {
    var a = parseInt(Math.random()*9+1);
    var flag = 1;
    while(flag) {
        var b = parseInt(Math.random()*10);
        var c = parseInt(Math.random()*10);
        var d = parseInt(Math.random()*10);
        if(a != b && a!=c && a!=d && b!=c && b!=d && c!=d) {
            flag = 0;
        }
    }
    return a*1000 + b*100 +c*10 +d;
};

