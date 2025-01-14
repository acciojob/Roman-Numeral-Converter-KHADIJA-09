function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here

  let result = '';

  // Loop through each roman numeral and value
  for (let i = 0; i < obj.length; i++) {
    const [symbol, value] = obj[i];
    
    // Determine how many times the symbol fits into the number
    while (num >= value) {
      result += symbol;  // Add the symbol to the result
      num -= value;      // Subtract the value from num
    }
  }

  return result;


}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
