/* 
👉 Write your kata here!
*   
*   // The first challenge was a little easy for my liking, however I felt it would be better to keep it, rather than delete it.
*
*   // Challenge 1 - Easy
*   
*   Leap Years!
*
*   A leap year occurs every 4 years. Or do they? According to the Gregorian calendar, they occur ALMOST every 4 years.
*
*   // The conditions include //
*
*   - That the year MUST be a multiple of 4
*   - It is NOT a multiple of 100
*   - UNLESS it is a multiple of 400
*
*   Given a number of days as an input, please return true if the year provided is a leap year, or false if it is not.
*   Remember to factor in the above criteria 
*
*
*   // Challenge 2 - Medium
*
*   Incorrect Product Codes!
*   
*   Due to some sloppy keyboard typing, some of our product codes have been entered incorrectly. Some are the wrong size, and some even contain letters!
*   Product ID's should only be numeric.
*   Product codes should be in the format of XXX-XXXX
*
*   Given this criteria, please write a function that will check if a product code is valid or not.
*   Clean the given product code of non-numeric characters.
*
*   If the product code is the correct size, and only contains numbers, return the code in the correct format as a string.
*   If the product code is the wrong size and does not contain enough numbers, return "Invalid Product Code"
*   e.g 1234567890 should return "Invalid Product Code"
*   e.g 123abcd4567 should return "123-4567"
*   e.g 8ehsisn832794792826363hshs should return "Invalid Product Code"
*
*   The initial code provided will be an alphanumeric string, and will not include special characters.
*
*
*/

//👉 Write the function your CodeWarriors will start with below here:

export function leapYearChecker(year) {
  //Write your solution here
  return isLeapYear;
}

export function productCodeChecker(productCode){
    
    return code;
}
