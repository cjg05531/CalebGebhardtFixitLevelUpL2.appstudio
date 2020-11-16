
let userName1 = prompt("Enter your name")
let userNameCapital1 = userName1.charAt(0).toUpperCase() + userName.slice(1)

let userState1 = prompt("Enter the two letter code for your state (ex. NE for Nebraska)")
let userStateCapital1 = userState.charAt(0).toUpperCase() + userState.charAt(1).toUpperCase()

let userTemp1 = prompt("Enter the temperature:")

let message1 = ["wear a warm coat, hat, scarf and gloves." , "wear a warm coat but you won't need a hat, scarf or gloves.", "wear a less heavy coat." , "wear a light jacket and smile!"]


if (userStateCapital1 == "NE" && userTemp1 < 32)
    NSB.MsgBox(`${userNameCapital1}, ${message1[0]}`);
    
else if (userStateCapital1 == "NE" && userTemp1 >= 32 && userTemp1 <= 50)
    NSB.MsgBox(`${userNameCapital}, ${message[1]}`);
    
else if (userStateCapital1 == "FL" && userTemp1 >= 32 && userTemp1 <= 50)
    NSB.MsgBox(`${userNameCapital1}, ${message1[2]}`);
    
else if (userStateCapital1 == "FL" && userTemp1 > 50 && userTemp1 <= 70)
    NSB.MsgBox(`${userNameCapital1}, ${message1[3]}`);
  
else
    NSB.MsgBox(`Sorry ${userNameCapital1}, we do not have data for that scenario.`)    
