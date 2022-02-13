
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

  var Questions =[questionOne= prompt("Do you like pizza?"), questionTwo= prompt("Do you live in Jordan"), questionThree= prompt("Are you simgle")]


  function checKAnswer1(){
    if(Questions[0] !=="yes" && Questions[0] !=="no")[
      Questions[0] = "invalid"
    ]
}

    function checKAnswer2(){
        if(Questions[1] !=="yes" && Questions[1] !=="no")[
          Questions[1] = "invalid"
        ]
    }
        
        function checKAnswer3(){
            if(Questions[2] !=="yes" && Questions[2] !=="no")[
              Questions[2] = "invalid"
            ]
            


}
  
  
  checKAnswer1();  
  checKAnswer2();
  checKAnswer3();
  console.log(Questions);

  for(var i=0; i<Questions.length; i++ ){
    console.log(Questions[i]);
  }