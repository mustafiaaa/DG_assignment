/**
 * writing test for leap_year function to checking function errors in every phase of the development 
 * according TDD. 
 */
const leap_year = require('./leap_year'); //importing the leap_year.js file so that we can call and check the leap_year function.
//1st test for the function leap_year
test('testing 1st phase of development (devide by 4)', () => {
    //giving input and comparing with the expected output.
    expect(leap_year(2000)).toBe('2000 is not Leap Year.'); 
    expect(leap_year(2001)).toBe('2001 is not a Leap Year.');
});

//2nd test for the function leap_year
test('testing 2nd phase of development (devided by 4 but not devided by 100)', () => {
    expect(leap_year(2016)).toBe('2016 is a Leap Year.');
    expect(leap_year(1800)).toBe('1800 is not a Leap Year.');
});

//3rd test for the function leap_year
test('testing 3rd phase of development (devided by 400)', () => {
    expect(leap_year(2400)).toBe('2400 is a Leap Year.');
    expect(leap_year(2401)).toBe('2401 is not a Leap Year.');
});

//4th test for the function leap_year
test('testing 4th phase of development (devided by 100 but not devided by 400)', () => {
    expect(leap_year(1700)).toBe('1700 is not a Leap Year.');
    expect(leap_year(1800)).toBe('1800 is not a Leap Year.');
    expect(leap_year(2100)).toBe('2100 is not a Leap Year.');
});
