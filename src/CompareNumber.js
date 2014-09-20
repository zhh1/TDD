function CompareNumber() {
}
CompareNumber.prototype.compare = function(answer,input) {
    var A_count = 0;
    var B_count = 0;
    for(var i=0;i<4;i++) {
        for(var j=0;j<4;j++) {
            if(answer[i] == input[j]) {
                if(i == j){
                    A_count++;
                }
                else {
                    B_count++;
                }
            }
        }
    }
    return A_count+"A"+B_count+"B";
};

