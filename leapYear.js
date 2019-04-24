/**
 * function to check whether the input is a leap year or not.
 * input : a year as integer.
 * output : boolean (true if the year is leap year false otherwise). 
 */
function leapYear(year){
    //(checking whether the agument is integer or not).
    if(!Number.isInteger(year))
        throw 'Wrong No Of Args';
    //(checking is only one agrument is passing or not).
    if(arguments.length !== 1)
       throw 'Wrong number of arguments: expected: 1; actually passed : ' + arguments.length;
    //check leap year(checking devided by 400 or not ).    
    if(year % 400 == 0)
        return true;
    else if((year % 4 == 0) && (year % 100 != 0))//check leap year(checking devided by 4 and not devided by 100).
        return true;
    else    
        return false;
}
module.exports = leapYear;//exporting the leapYear function