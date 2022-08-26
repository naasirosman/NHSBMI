

let heightUnit = "feet";
let weightUnit = "kg"
let genderUnit =  "undefined"
let raceUnit = "undefined"
let activityUnit = "undefined"


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
    const calculatePage = document.querySelector('.calculatePage')
    const resultPage = document.querySelector('.resultPage')
    calculatePage.style.display = "none"
    resultPage.style.display = "block"
      
    if(document.getElementById('maleradio').checked) {
      genderUnit = "male"
    }else if(document.getElementById('femaleradio').checked) {
      genderUnit = "female"
    } else {
      return
    }

    if(document.getElementById('bangladeshi').checked) {
      raceUnit = "bangladeshi"
    }else if(document.getElementById('blackafrican').checked) {
      raceUnit = "blackafrican"
   }else if(document.getElementById('blackcaribbean').checked) {
      raceUnit = "blackcaribbean"
   }else if(document.getElementById('chinese').checked) {
      raceUnit = "chinese"
   }else if(document.getElementById('white').checked) {
      raceUnit = "white"
   }else if(document.getElementById('other').checked) {
      raceUnit = "other"
   }else if(document.getElementById('indian').checked) {
      raceUnit = "indian"
   }else if(document.getElementById('middleeastern').checked) {
      raceUnit = "middleeastern"
   }else if(document.getElementById('mixed').checked) {
      raceUnit = "mixed"
   }else if(document.getElementById('pakistani').checked) {
      raceUnit = "pakistani"
    } else  {
      return
    }

    if(document.getElementById('inactive').checked) {
      activityUnit = "inactive"
    }else if(document.getElementById('moderate').checked) {
      activityUnit = "moderate"
    } else if(document.getElementById('active').checked) {
      activityUnit = "active" 
    }  else {
      return
    }
    
    let result

    if (heightUnit === "feet" && weightUnit === "kg") {

      result = kg / (((((feet * 12) + inches) * 2.54) / 100) ** 2)
      console.log(`gender=${genderUnit} height=${feet}ft${inches}inches weight=${kg}kg race=${raceUnit} activity=${activityUnit} BMI=${result}` )
    } else if (heightUnit === "cm" && weightUnit === "kg") {
        result = kg / ((cm / 100) ** 2)
        console.log(`height = ${cm} cm and weight = ${kg}kg therefore BMI = ${result}` )
    }
    else if (heightUnit === "feet" && weightUnit === "lbs") {
      result = ( lbs * 0.45 ) / (((((feet * 12) + inches) * 2.54) / 100) ** 2)
      console.log(`height = ${feet} feet and ${inches} inches and weight = ${lbs}lbs therefore BMI = ${result}` )
    } else {
      result = ( lbs * 0.45 ) / ((cm / 100) ** 2)
      console.log(`height = ${cm} cm, weight = ${lbs}lbs therefore BMI = ${result}` )
    };

    if (feet >= 8 || feet <= 3) { 
        const heightError = "This height is invalid!"
        console.log(heightError);
        document.querySelector('.heighterror').style.display = "block";
        return; //makes sure that the inch height error is not displayed  
     } else {
      document.querySelector('.heighterror').style.display = "none";
     }
     if (inches >= 12 || inches < 0) { 
        const heightError = "This height is invalid!"
        console.log(heightError);
        document.querySelector('.heighterror').style.display = "block";
        return;        
     } else {
      document.querySelector('.heighterror').style.display = "none";
     }

     if (cm >= 210 || cm < 100) { 
      const heightError = "This height is invalid!"
      console.log(heightError);
      document.querySelector('.heighterror').style.display = "block";
      return;        
   } else {
    document.querySelector('.heighterror').style.display = "none";
   }

     if (kg >= 201 || kg <= 20) { 

        const weighterror = "This weight is invalid!"
        console.log(weighterror);
        document.querySelector('.weighterror').style.display = "block";
        return;        
     } else {
      document.querySelector('.weighterror').style.display = "none";
     }

     if (lbs >= 500 || kg <= 40) { 

      const weighterror = "This weight is invalid!"
      console.log(weighterror);
      document.querySelector('.weighterror').style.display = "block";
      return;        
     } else {
       document.querySelector('.weighterror').style.display = "none";
       }
      
     if (age >= 100) { 
        const heightError = "This age is invalid!"
        console.log(heightError);
        document.querySelector('.ageerror').style.display = "block";
        return;        
     } else {
      document.querySelector('.age-child-error').style.display = "none";
     }
     if (age <= 18) { 
        const ageError = "This age is invalid!"
        console.log(ageError);
        document.querySelector('.age-child-error').style.display = "block";
        return;        
     } else {
      document.querySelector('.age-child-error').style.display = "none";
     }
     if (day <= 0 || day >= 32) {
      const ageError = "This age is invalid!"
      console.log(ageError);
      document.querySelector('.age-child-error').style.display = "block";
      document.querySelector('.age-child-error').innerHTML = "Enter a valid date";
      return;  
     } else {
      document.querySelector('.age-child-error').style.display = "none";
     }
     if (month <= 0 || day >= 32) {
      const ageError = "This age is invalid!"
      console.log(ageError);
      document.querySelector('.age-child-error').style.display = "block";
      document.querySelector('.age-child-error').innerHTML = "Enter a valid date";
      return;  
     } else {
      document.querySelector('.age-child-error').style.display = "none";
     }
     if (year <= 2004) {
      const ageError = "This age is invalid!"
      console.log(ageError);
      document.querySelector('.age-child-error').style.display = "block";
      document.querySelector('.age-child-error').innerHTML = "This person is not a child";
      return;  
     } else {
      document.querySelector('.age-child-error').style.display = "none";
     }
     if (year > 2020) {
      const ageError = "This age is invalid!"
      console.log(ageError);
      document.querySelector('.age-child-error').style.display = "block";
      document.querySelector('.age-child-error').innerHTML = "This person is too young for BMI to be measured";
      return;  
     } else {
      document.querySelector('.age-child-error').style.display = "none";
     }
     if ((year === 2005 || year === 2006 || year === 2007 || year === 2009 || year === 2010 || year === 2011 || year === 2013 || year === 2014 || year === 2015 || year === 2017|| year === 2018 || year === 2019) && month === 2 && day === 29 ) {
      const ageError = "This age is invalid!"
      console.log(ageError);
      document.querySelector('.age-child-error').style.display = "block";
      document.querySelector('.age-child-error').innerHTML = "Enter a valid date";
      return;  
     } else {
      document.querySelector('.age-child-error').style.display = "none";
     }
     if (( month === 2 || month === 4 || month === 6 || month === 9 || month === 11 ) && day === 31 || day === 30){
      const ageError = "This age is invalid!"
      console.log(ageError);
      document.querySelector('.age-child-error').style.display = "block";
      document.querySelector('.age-child-error').innerHTML = "Enter a valid date";
      console.log(ageError);
      return
     } else {
      document.querySelector('.age-child-error').style.display = "none";
     }
     if (genderUnit === "undefined") { 
      console.log(genderUnit)
      const genderError = "Please select a gender"
      console.log(genderError);
      document.querySelector('.genderError').style.display = "block";
      return;
   } else {
      document.querySelector('.genderError').style.display = "none";
    console.log(genderUnit)

   }

     readyResult = (Math.round(result * 10) / 10)
     console.log(readyResult)
     document.querySelector('.resultNumber').innerHTML = readyResult

     if (readyResult < 18.5) {
      document.querySelector('.weightClass').innerHTML = "underweight";
      document.querySelector('.weightSuggestion').innerHTML = "gain weight";
      console.log("underweight")
     }
     if (readyResult > 18.5 && readyResult <= 24.9) {
      document.querySelector('.weightClass').innerHTML = "a healthy weight";
      document.querySelector('.weightSuggestion').innerHTML = "maintain your weight";
      console.log("healthy weight")
     }
     if (readyResult > 24.9 && readyResult <= 29.9) {
      document.querySelector('.weightClass').innerHTML = "overweight";
      document.querySelector('.weightSuggestion').innerHTML = "lose weight";
      console.log("overweight")
     }
     if (readyResult > 29.9 && readyResult <= 34.9) {
      document.querySelector('.weightClass').innerHTML = "obese";
      document.querySelector('.weightSuggestion').innerHTML = "lose weight";
      console.log("obese")
     }
     if (readyResult > 34.9 && readyResult <= 39.9) {
      document.querySelector('.weightClass').innerHTML = "severely obese";
      document.querySelector('.weightSuggestion').innerHTML = "lose weight";
      console.log("severely obese")
     }
     if (readyResult > 39.9) {
      document.querySelector('.weightClass').innerHTML = "morbidly obese";
      document.querySelector('.weightSuggestion').innerHTML = "lose weight";
      console.log("morbidly obese")
     }
     if(document.getElementById('bangladeshi').checked || document.getElementById('blackafrican').checked || document.getElementById('blackcaribbean').checked || document.getElementById('indian').checked) {
      document.querySelector('.riskRace').style.display = "block"
    } else {
      return
    }

}


const feetAndCmToggle = document.querySelector(".cmToggleLink")
feetAndCmToggle.addEventListener("click", function() {
   if (heightUnit === "feet") {
  document.querySelector(".centimetres").style.display = "block"
  document.querySelector(".inches").style.display = "none"
  document.querySelector(".feet").style.display = "none"
  document.querySelector(".cmToggleLink").innerHTML = "Switch to ft, in"
   heightUnit = "cm"   
   } else if (heightUnit === "cm") {   
   document.querySelector(".centimetres").style.display = "none"
   document.querySelector(".inches").style.display = "block"
   document.querySelector(".feet").style.display = "block"
   document.querySelector(".cmToggleLink").innerHTML = "Switch to cm"
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
  document.querySelector(".lbslink").innerHTML = "Switch to lbs" 
   weightUnit = "lbs"}
  else if (weightUnit === "lbs") {
   document.querySelector(".lbs").style.display = "none"
   document.querySelector(".kg").style.display = "block"
   document.querySelector(".lbslink").innerHTML = "Switch to kg" 
   weightUnit = "kg"}
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

function goBack() {
   const calculatePage = document.querySelector('.calculatePage')
   const resultPage = document.querySelector('.resultPage')
   calculatePage.style.display = "block"
   resultPage.style.display = "none"
}



