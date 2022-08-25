# NHSBMI

How the BMI calculator works (JavaScript):

- once the "calculate" is clicked, it fetches what is in the feet, inches, weight fields and applies the BMI equation to it
- there are if statements to ensure that the user inputs a valid height, weight, and age (as well as ensuring adult tab is not used for u18s and child tab not used for under 2s and over 18s)

Improvements to be made:
- the adult/child toggle doesn't work: the solution to this is to add and remove style classes but theres a bug with this
- date input accepts invalid dates on months with less than 31 days e.g. April 31st, June 31st, February 30th
- age is not used in the BMI calculation
- all fields are not mandatory
- there needs to be a result page that uses "result" variable and displays to the user
