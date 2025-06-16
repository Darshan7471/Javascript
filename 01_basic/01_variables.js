const accountID = 123456
let accounEmail = "darshan@gmail.com"
var accountPass = "pass@123"
accounCity = "Nashik"
let accountState;

// accountID = 2 // not allowd 
accounEmail = "darsh@gmail.com"
accountPass= "pass@12"
accounCity = "Abu Dhabi"


/*
prefer not to use var, because of issue in bock scope and functional scope
/*/

console.log(accountID);
console.table([accounEmail, accountID, accountPass, accounCity,accountState])
