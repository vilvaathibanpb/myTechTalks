const calculatFactorial = (number) => {
    const numbers = []; 
  
    for (let i = 1n; i <= number; i++) {
      numbers.push(i);
    }
    const result = numbers.reduce((acc, val) => acc * val, 1n);
    console.log(result);
    return result
}

module.exports = calculatFactorial;