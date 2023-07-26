//funtion declaration
function formValidation() {
    // variable declarations
    var email = document.getElementById("email").value;
 
    // To validate email and specify email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === ""){
        alert("Email field can not be empty");
      
    } else if (!emailRegex.test(email)) {
        document.getElementById("emaillb").style.visibility = "visible";
       
    } else{
        document.getElementById("emaillb").style.visibility = "hidden";
        
    }
  
    // when all fields are valid
    return true;
  }
  