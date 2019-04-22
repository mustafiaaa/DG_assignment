/**
 * function to check whether the input is a leap year or not.
 * input : a year as integer.
 * output : string (tells whether the input is a leap year or not). 
 */
function leap_year(year){
    var remainder4 = year % 4; //1st phase to check leap year(checking only devided by 4 ).
    var remainder100 = year % 100; //2nd phase to check leap year(checking with devided by 4 & 100 both).
    var remainder400 = year % 400; //3rd phase to check leap year(checking with devided by 400).
    if(remainder100 == 0 && remainder400 != 0) //4th phase to check leap year (checking devided by 100 but not devided by 400)
        return year + ' is not a Leap Year.';
    else if(remainder400 == 0)
        return year + ' is a Leap Year.';

    else if(remainder4 == 0 && remainder100 != 0)
        return year + ' is a Leap Year.';
    
    else
        return year + ' is not a Leap Year.';
}
module.exports = leap_year; 