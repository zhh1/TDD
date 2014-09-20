describe("Guess",function() {
    var guess;

    it("should return '4A0B' when given 1234",function() {
        var answer_generator = new AnswerGenerator();
        spyOn(answer_generator,"get_four_digits").and.returnValue("1234");

        var compare_number = new CompareNumber();
        spyOn(compare_number,"compare").and.returnValue("4A0B");

        guess = new Guess(answer_generator,compare_number);
        expect(guess.guess_number("1234")).toBe("4A0B");
        expect(compare_number.compare).toHaveBeenCalledWith("1234","1234");
    });
    it("should return 2A2B when Answer_generator generate 1234 and input is 1243", function() {
        var fake_numbers = [ 0.1, 0.2, 0.3, 0.4];
        spyOn(Math, 'random').and.callFake(function() {
            return fake_numbers.shift();
        });

        guess = new Guess(new AnswerGenerator(), new CompareNumber());

        expect(guess.guess_number("1243")).toBe("2A2B");
    });
});
