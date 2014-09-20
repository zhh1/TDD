function Game(my_console, guess){
    this.console = my_console;
    this.status = null;
    this.guess = guess;
    this.count = 5;
}

Game.prototype.start_game = function() {
    this.status = "started";
    this.guess.start();
    this.console.log('Welcome!\n\nPlease input your number(6):');
};

Game.prototype.get_input = function(input) {
    for(var i = 0;i < 4;i++) {
        if(input[i] != input[i+1 || 0] && input[i] != input[i+2 || 0]) {
            if(this.guess.guess_number(input) != "4A0B") {
                this.count == 0 ? this.console.log("Game Over"):this.console.log(this.guess.guess_number(input) + '\n\nPlease input your number(' + (this.count--) +'):');
            }
            else {
                this.console.log("Congratulations!");
            }
        }
        else {
            this.console.log("Cannot input duplicate numbers!");
        }
    }
};
