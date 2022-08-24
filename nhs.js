


// function getFeet(event) {
//     const value = event.target.value;
//     const feet = document.querySelector('.feetbox').value;
//     return feet;
//   }

//  function getInches() {
//     var inches = document.querySelector('.inchbox').value;
//     return inches;
// }

// const calculate = BMI() {
//     var inches = document.querySelector('.inchbox').value;
//     const feet = document.querySelector('.feetbox').value;
//     return inches
//     console.log(feet);
//     console.log(inches)
// }




function calculate() {

    var inches = parseInt(document.querySelector('.inchbox').value); 
    var feet = parseInt(document.querySelector('.feetbox').value);
    var weight = parseInt(document.querySelector('.kgbox').value)
     var age = parseInt(document.querySelector('.agebox').value)

    const result = weight / (((((feet * 12) + inches) * 2.54) / 100) ** 2)
    console.log(result)

    if (feet >= 8 || feet <= 3) { 
        const heightError = "This height is invalid!"
        console.log(heightError);
        document.querySelector('.heighterror').style.display = "block";
        return; //makes sure that the inch height error is not displayed  
     }
     if (inches >= 12 || inches < 0) { 
        const heightError = "This height is invalid!"
        console.log(heightError);
        document.querySelector('.heighterror').style.display = "block";
        return;        
     }
     if (weight >= 201 || weight <= 20) { 
        const heightError = "This weight is invalid!"
        console.log(heightError);
        document.querySelector('.weighterror').style.display = "block";
        return;        
     }
     if (age >= 100) { 
        const heightError = "This age is invalid!"
        console.log(heightError);
        document.querySelector('.ageerror').style.display = "block";
        return;        
     }
     if (age <= 18) { 
        const heightError = "This age is invalid!"
        console.log(heightError);
        document.querySelector('.age-child-error').style.display = "block";
        return;        
     }
}
const switchToCm = document.querySelector(".cmlink")
switchToCm.addEventListener("click", function() {
  document.querySelector(".centimetres").style.display = "block"
  document.querySelector(".inches").style.display = "none"
  document.querySelector(".feet").style.display = "none"});


const switchToLbs = document.querySelector(".lbs-link-div")
    switchToLbs.addEventListener("click", function() {
      document.querySelector(".lbs").style.display = "block"
      document.querySelector(".kg").style.display = "none"});



      const switchToChild = document.querySelector(".child")
      switchToChild.addEventListener("click", function() {
        document.querySelector(".child").style.backgroundColor = "#215eb8"
      //   document.querySelector(".child").style:hover. = "#215eb8"
        document.querySelector(".adult").className = "adultWhenChildIsSelected"
      //   document.querySelector(".adult").classList.remove = ("hoverchild")
      //   document.querySelector(".adult").style.di = "none"
   });

// console.log(calculateBmi(12))

//   function toCm() {
//     const inchesToCm = getInches();
//     const feetToCm = getFeet();
//     return ((feetToCm * 12) + inchesToCm) * 2.54
// }

// var height = toCm()
// console.log(height)