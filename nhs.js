


function getFeet() {
    const myFeet = document.querySelector('.feetbox').value;
    console.log(myFeet);
  }

 function getInches() {
    var inches = document.querySelector('.inchbox').value;
    console.log(inches); }

  function toCm(feetToCm, inchesToCm) {
    return ((feetToCm * 12) + inchesToCm) * 2.54
}

var height = toCm(6, 2)
console.log(height)