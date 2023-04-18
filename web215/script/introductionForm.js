
function displayEntry(){
    var fName = document.getElementById("fName").value;
    var mName = document.getElementById("mName").value;
    var lName = document.getElementById("lName").value;
    var Question1 = document.getElementById("qNum1").value;
    var Question2 = document.getElementById("qNum2").value;
    var Question3 = document.getElementById("qNum3").value;
    
    var Question4 = document.getElementById("qNum4").value;
    var Question5 = document.getElementById("qNum5").value;
    var Question6 = document.getElementById("qNum6").value;
    document.getElementById("display").innerHTML = fName+" "+mName+" "+lName;
    document.getElementById("showAnswers1").innerHTML = "Personal background:"+ Question1; 
    document.getElementById("showAnswers2").innerHTML = "professional background:"+ Question2;
    document.getElementById("showAnswers3").innerHTML = "Academic background:"+ Question3;
    document.getElementById("showAnswers4").innerHTML = "Information/technology background:"+ Question4;
    document.getElementById("showAnswers5").innerHTML = "primary computer platform:"+ Question5;
    document.getElementById("showAnswers6").innerHTML = "Anything else you would like to share:"+ Question6 ;
}  


