module.exports = function getZerosCount(number, base) {
  var basecopy = base;
  for (var prime = 2; prime <= base; prime++) {
    if (basecopy % prime === 0) {
      var power = 0;
      while (basecopy % prime === 0) {
        basecopy = basecopy / prime;  
        power++;
      }
      console.log(prime, power);
    }
  } 
};