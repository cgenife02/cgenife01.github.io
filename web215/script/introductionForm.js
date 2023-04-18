
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
    var Question7 = document.getElementById("qNum7").value;
    document.getElementById("display").innerHTML = fName+" "+mName+" "+lName;
    document.getElementById("showAnswers1").innerHTML = "Personal Background:"+ Question1; 
    document.getElementById("showAnswers2").innerHTML = "Professional Background:"+ Question2;
    document.getElementById("showAnswers3").innerHTML = "Academic Background:"+ Question3;
    document.getElementById("showAnswers4").innerHTML = "Information/Technology background:"+ Question4;
    document.getElementById("showAnswers5").innerHTML = "Primary Computer Platform:"+ Question5;
    document.getElementById("showAnswers6").innerHTML = "Courses I'm Taking & Why:"+ Question6;
    document.getElementById("showAnswers7").innerHTML = "I'd also like to share:"+ Question7 ;


}  


