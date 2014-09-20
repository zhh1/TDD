function Guess(answer_generator,compare_number) {
    this.answer_generator = answer_generator;
    this.compare_number = compare_number;
}

Guess.prototype.guess_number = function(input) {
    return this.compare_number.compare(this.answer_generator.get_four_digits().toString(),input);
};

Guess.prototype.start = function(){
    return this.answer_generator.get_four_digits();
};