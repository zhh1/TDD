describe("Game",function() {
    var game;
    var my_console;
    var guess;
    var compare_number;
    var answer_generator;
    beforeEach(function(){
        my_console = {
            log:function(object){

            }
        };
        answer_generator = new AnswerGenerator();
        compare_number = new CompareNumber();

        guess= new Guess(answer_generator,compare_number);
        game = new Game(my_console,guess);

        spyOn(my_console,"log");
    });

    it('should return "Welcome!\n\nPlease input your number(6):"when game started',function(){
        game.start_game();
        expect(my_console.log).toHaveBeenCalledWith('Welcome!\n\nPlease input your number(6):')
    });

    it('should return "Cannot input duplicate numbers!" when input numbers is repeat',function(){
        var input = "1123";
        var Game = {
            get_input:function() {

            }
        };
        spyOn(Game,"get_input").and.returnValue(["1123"]);
        game.get_input(input);
        expect(my_console.log).toHaveBeenCalledWith('Cannot input duplicate numbers!');

    });

    //集成测试
    it("should return '0A0B\n\nPlease input your number(5):' when input a regular number",function() {
        var input = "1234";
        var answer = "5678";

        spyOn(answer_generator,'get_four_digits').and.returnValue(answer);

        game.start_game();
        game.get_input(input);
        expect(my_console.log).toHaveBeenCalledWith('0A0B\n\nPlease input your number(5):');
    });

    //单元测试
    it("should return what guess.guess_number returned", function(){
        var input = "1234";
        var guess = new Guess();
        spyOn(guess, "guess_number").and.returnValue("0A0B");

        game = new Game(my_console,guess);
        game.get_input(input);

        expect(guess.guess_number).toHaveBeenCalledWith(input);
        expect(my_console.log).toHaveBeenCalledWith('0A0B\n\nPlease input your number(5):');
    });

    it("should return 'Congratulations!' when input 1234 and the answer is 1234",function () {
        var input = "1234";
        var guess = new Guess();
        spyOn(guess,"guess_number").and.returnValue("4A0B");
        game = new Game(my_console,guess);
        game.get_input(input);

        expect(guess.guess_number).toHaveBeenCalledWith(input);
        expect(my_console.log).toHaveBeenCalledWith('Congratulations!');
    });

    it("should return 'Game Over' when the user guess 6 times but did not guess right",function() {
        var input = "1234";
        var guess = new Guess();
        spyOn(guess,"guess_number").and.returnValue("3A0B");
        game = new Game(my_console,guess);
        for(var i = 0 ; i < 6;i++) {
            game.get_input(input);
        }
        expect(guess.guess_number).toHaveBeenCalledWith(input);
        expect(my_console.log).toHaveBeenCalledWith('Game Over');
    });

    it("should return '0A0B\n\nPlease input your number(3):' when input a regular number",function() {
        var input = "1234";
        var answer = "5678";

        spyOn(answer_generator,'get_four_digits').and.returnValue(answer);

        game.start_game();
        for(var i = 0 ; i < 3 ; i++) {
            game.get_input(input);
        }

        expect(my_console.log).toHaveBeenCalledWith('0A0B\n\nPlease input your number(3):');
    });

});

