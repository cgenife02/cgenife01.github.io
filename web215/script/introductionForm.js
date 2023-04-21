
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*1000*60*60*24));
    let expires = "expires="+ d.toGMTString();
    window.document.cookie = cname+ "=" +cvalue+ ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    var user = getCookie("user");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("user", user, 365);
      }
    }
  }

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
    var Question8 = document.getElementById("qNum8").value;
    var Question9 = document.getElementById("qNum9").value;
    var Question10 = document.getElementById("qNum10").value;
   
    document.getElementById("display").innerHTML = fName+" "+mName+" "+lName;
    document.getElementById("showAnswers1").innerHTML = "Personal Background: "+ Question1; 
    document.getElementById("showAnswers2").innerHTML = "Professional Background: "+ Question2;
    document.getElementById("showAnswers3").innerHTML = "Academic Background: "+ Question3;
    document.getElementById("showAnswers4").innerHTML = "Information/Technology background: "+ Question4;
    document.getElementById("showAnswers5").innerHTML = "Primary Computer Platform: "+ Question5;
    document.getElementById("showAnswers6").innerHTML = "Courses I'm Taking & Why:" + Question6;
    document.getElementById("showAnswers7").innerHTML = " &nbsp;&nbsp;&nbsp;&nbsp; * " + Question7;
    document.getElementById("showAnswers8").innerHTML = " &nbsp;&nbsp;&nbsp;&nbsp; * " + Question8;
    document.getElementById("showAnswers9").innerHTML = " &nbsp;&nbsp;&nbsp;&nbsp; * " + Question9;
    document.getElementById("showAnswers10").innerHTML = "I'd also like to share: "+ Question10 ;
       
}
   




