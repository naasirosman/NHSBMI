


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

let heightUnit = "feet";
let weightUnit = "kg"
console.log(heightUnit)
console.log(weightUnit)


function calculate() {
   console.log(heightUnit)

    var inches = parseInt(document.querySelector('.inchbox').value); 
    var feet = parseInt(document.querySelector('.feetbox').value);
    var kg = parseInt(document.querySelector('.kgbox').value)
    var age = parseInt(document.querySelector('.agebox').value)
    var cm = parseInt(document.querySelector('.cmBox').value)
    var lbs = parseInt(document.querySelector('.lbsBox').value)
    var day = parseInt(document.querySelector('.day').value)
    var month = parseInt(document.querySelector('.month').value)
    var year = parseInt(document.querySelector('.year').value)

    let result

    if (heightUnit === "feet" && weightUnit === "kg") {
      console.log(`height = ft, in =  ${feet} ' ${inches}... weight = kg = ${kg}`  )
      result = kg / (((((feet * 12) + inches) * 2.54) / 100) ** 2)
      console.log(result)
    } else if (heightUnit === "cm" && weightUnit === "kg") {
      console.log(`height = cm =  ${cm}... weight = kg = ${kg}`  )
        result = kg / ((cm / 100) ** 2)
        console.log(result)
    }
    else if (heightUnit === "feet" && weightUnit === "lbs") {
      console.log(`height = ft, in =  ${feet} ' ${inches}... weight = lbs = ${lbs}`  )
      result = ( lbs * 0.45 ) / (((((feet * 12) + inches) * 2.54) / 100) ** 2)
      console.log(result)
    } else {
      console.log(`height = cm =  ${cm}... weight = lbs = ${lbs}`  )
      result = ( lbs * 0.45 ) / ((cm / 100) ** 2)
      console.log(result)
    };

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
     if (kg >= 201 || kg <= 20) { 

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
        const ageError = "This age is invalid!"
        console.log(ageError);
        document.querySelector('.age-child-error').style.display = "block";
        return;        
     }
     if (day <= 0 || day >= 32) {
      const heightError = "This age is invalid!"
      console.log(heightError);
      document.querySelector('.age-child-error').style.display = "block";
      document.querySelector('.age-child-error').innerHTML = "Enter a valid date";
      return;  
     }
     if (month <= 0 || day >= 13) {
      const heightError = "This age is invalid!"
      console.log(heightError);
      document.querySelector('.age-child-error').style.display = "block";
      document.querySelector('.age-child-error').innerHTML = "Enter a valid date";
      return;  
     }
     if (year <= 2004) {
      const heightError = "This age is invalid!"
      console.log(heightError);
      document.querySelector('.age-child-error').style.display = "block";
      document.querySelector('.age-child-error').innerHTML = "This person is not a child";
      return;  
     }
     if (year > 2020) {
      const heightError = "This age is invalid!"
      console.log(heightError);
      document.querySelector('.age-child-error').style.display = "block";
      document.querySelector('.age-child-error').innerHTML = "This person is too young for BMI to be measured";
      return;  
     }
}
const feetAndCmToggle = document.querySelector(".cmlink")
feetAndCmToggle.addEventListener("click", function() {
   if (heightUnit === "feet") {
  document.querySelector(".centimetres").style.display = "block"
  document.querySelector(".inches").style.display = "none"
  document.querySelector(".feet").style.display = "none"
  document.querySelector(".cmlink").innerHTML = "Switch to ft, in"
   heightUnit = "cm"   
   } else if (heightUnit === "cm") {   
   document.querySelector(".centimetres").style.display = "none"
   document.querySelector(".inches").style.display = "block"
   document.querySelector(".feet").style.display = "block"
   document.querySelector(".cmlink").innerHTML = "Switch to cm"
    heightUnit = "feet"}
    else {
      document.querySelector(".centimetres").style.display = "none"
      document.querySelector(".inches").style.display = "none"
      document.querySelector(".feet").style.display = "none"
    }
});


const kgAndLbsToggle = document.querySelector(".lbslink")
kgAndLbsToggle.addEventListener("click", function() {
   if (weightUnit === "kg") {
  document.querySelector(".lbs").style.display = "block"
  document.querySelector(".kg").style.display = "none"
  document.querySelector(".lbslink").innerHTML = "Switch to kg" 
   weightUnit = "lbs"}
  else if (weightUnit === "lbs") {
   document.querySelector(".lbs").style.display = "block"
   document.querySelector(".kg").style.display = "none"
   document.querySelector(".lbslink").innerHTML = "Switch to lbs" }
   else {
      document.querySelector(".lbs").style.display = "none"
      document.querySelector(".kg").style.display = "none" 
   }
});


      const switchToChild = document.querySelector(".child")
      switchToChild.addEventListener("click", function() {
         document.querySelector(".adult").classList.remove("chosen")
        document.querySelector(".child").classList.add("chosen")
        document.querySelector(".adult").classList.add("unchosen")
        document.querySelector(".child").classList.remove("unchosen")
        document.querySelector(".childAge").style.display = "block"
        document.querySelector(".agebox").style.display = "none"
        ageGroup = "child"
   }); 
   const switchToAdult = document.querySelector(".adult");
   console.log(switchToAdult);
   switchToAdult.addEventListener("click", function() { 

      document.querySelector(".adult").classList.remove("unchosen");
      document.querySelector(".child").classList.add("unchosen");
      document.querySelector(".adult").classList.add("chosen");
      document.querySelector(".child").classList.remove("chosen");
      document.querySelector(".childAge").style.display = "none"
      document.querySelector(".agebox").style.display = "block"
     ageGroup = "adult"
});



// console.log(calculateBmi(12))

//   function toCm() {
//     const inchesToCm = getInches();
//     const feetToCm = getFeet();
//     return ((feetToCm * 12) + inchesToCm) * 2.54
// }

// var height = toCm()
// console.log(height)