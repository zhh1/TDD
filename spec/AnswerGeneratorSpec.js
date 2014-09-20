describe("AnswerGenerator", function() {
    var answer = new AnswerGenerator().get_four_digits();
    var answer_string = answer.toString();
    it("should the number be four digits",function() {
        expect(typeof(answer)).toBe("number");
        expect(answer_string.length).toBe(4);
    });
    it("is the number repeat",function() {
        var is_repeat = function() {
            for (var i = 0; i < 4; i++) {
                if (answer_string[i] != answer_string[i + 1 || 0] && answer_string[i] != answer_string[i + 2 || 0]) {
                    return true;
                }
            }
        };

        expect(is_repeat()).toBe(true);
    })
});
