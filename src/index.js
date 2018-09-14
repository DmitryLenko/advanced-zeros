module.exports = function getZerosCount(number, base) {
  var zero = Number.MAX_VALUE;
  var basecopy = base;
  for (var prime = 2; prime <= base; prime++) {
    if (basecopy % prime === 0) {
      var power = 0;
      while (basecopy % prime === 0) {
        basecopy = basecopy / prime;  
        power++;
      }
      var counter = countPrimes(prime, number);
      if(zero > Math.floor(counter / power)) {
        zero = Math.floor(counter / power);
      } else {
      }
    }
  }
  return zero;
 
};


function countPrimes(prime, number) {
  var count = 0;
  var numberofprimes = Math.floor(number / prime);
  while (numberofprimes > 0) {
    count += numberofprimes;
    numberofprimes = Math.floor(numberofprimes /prime);
  }
  return count;
}