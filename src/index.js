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
        break;
      }
    }
  }
  return zero;
 
};


function countPrimes(prime, number) {
  var count = 0;
  for(var i = prime; i <= number; i+=prime) {
    var j = i;
    while(true) {
      if(j%prime != 0) {
        break;
      } else {
        count++;
        j = j/prime;
      }
    }     
  }
  return count;
}