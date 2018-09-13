module.exports = function getZerosCount(number, base) {
  var fact = (factorial(number))
  console.log(fact);
};

function factorial(value) {
  if(value === 1) {
    return 1;
  } else {
    return value * factorial(value - 1);
  }
}