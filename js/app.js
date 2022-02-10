var promptName= prompt("Type your name");
var promptGender= prompt("Type your gender");

var promptAge= Number( prompt("Type your age"));
if (promptAge<= 0)[
    alert("your age can not be 0 or less")
]
var userChoice= confirm("Do you want to skip welcoming message?");
if (userChoice== false)
     if (promptGender==="Male")[
        alert("Welcome Mr "+promptName)
    ]
    else if(promptGender==="Female")[
        alert("Welcome Ms "+ promptName)
    ]
    else[
        alert("Welcome "+ promptName)
    ]
