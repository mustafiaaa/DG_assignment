/**
 * writing test for leapYear function to checking function errors in every phase of the development 
 * according TDD. 
 */
const leapYear = require('./leapYear'); //importing the leapYear.js file so that we can call and check the leapYear function.
//describing one test suit
describe('test', () => {
    /** 
     * writing test cases for checking every senario of the leap year logic
    */
    it('should return true', () => {
        expect(leapYear(2004)).toBe(true);
    });
    it('should return true', () => {
        expect(leapYear(2000)).toBe(true);
    });
    it('should return false', () => {
        expect(leapYear(1900)).toBe(false);
    });
    it('should through error', () => {
        expect(() => {
            leapYear(45,45,78)}).toThrow();
    });
    it('should through one more error', () => {
        expect(() => {
            leapYear('5004')}).toThrow();
    });
});