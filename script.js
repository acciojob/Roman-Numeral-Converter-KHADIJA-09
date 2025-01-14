function convertToRoman(num) {
  	const obj = {
    0:['M', 1000],
    1:['CM', 900],
    2:['D', 500],
    3:['CD', 400],
    4:['C', 100],
    5:['XC', 90],
    6:['L', 50],
    7:['XL', 40],
    8:['X', 10],
    9:['IX', 9],
    10:['V', 5],
    11:['IV', 4],
    12:['I', 1]
    };


  let result = '';
const length = Object.keys(obj).length;
  // Loop through each roman numeral and value
  for ( i = 0; i < length; i++) {
    const [symbol, value] = obj[i];
 
    
    // Determine how many times the symbol fits into the number
    while (num >= value) {
      result += symbol;  // Add the symbol to the result
      num -= value; 
      // Subtract the value from num
    }
  }

  return  result ; 

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line






// do not edit below this line
module.exports = convertToRoman
