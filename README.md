# NHSBMI

How the BMI calculator works (JavaScript):

- once the "calculate" is clicked, it fetches what is in the feet, inches, weight fields and applies the BMI equation to it
- there are if statements to ensure that the user inputs a valid height, weight, and age (as well as ensuring adult tab is not used for u18s and child tab not used for under 2s and over 18s)

Improvements to be made:
<<<<<<< HEAD
- regardless if there is a problem of user input, it will go to the result page
- does not accept 29th february as a date
- all fields are not madatory
- doesn't show ".riskRace" when Bangladeshi, Indian, Black African or Black Caribbean is selected
=======
- the adult/child toggle doesn't work: the solution to this is to add and remove style classes but theres a bug with this
- date input accepts invalid dates on months with less than 31 days e.g. April 31st, June 31st, February 30th
- age is not used in the BMI calculation
- all fields are not mandatory
- there needs to be a result page that uses "result" variable and displays to the user
>>>>>>> 046e4797bdcc98edadbddf7e59a7ccf31f85239b
