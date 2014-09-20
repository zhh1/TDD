describe("CompareNumber", function() {

    it("should return nAmB when given two four digits", function () {
        expect(new CompareNumber().compare("1234","5678")).toBe("0A0B");
        expect(new CompareNumber().compare("1234","1234")).toBe("4A0B");
        expect(new CompareNumber().compare("1234","4321")).toBe("0A4B");
        expect(new CompareNumber().compare("1234","1243")).toBe("2A2B");
        expect(new CompareNumber().compare("1234","0543")).toBe("0A2B");
    });
});
